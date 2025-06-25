
// // import Home from './pages/Home';

// import "./App.css";
// import "./index.css";
// // src/App.jsx
// // import React from "react";
// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import ServiceList from "./pages/ServiceList";

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/service-list" element={<ServiceList />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;





import { useState } from "react";
import CircleServices from "./components/CircleServices";
import ContactModal from "./components/ContactModal";
import SuccessModal from "./components/SuccessModal";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSuccessOpen, setIsSuccessOpen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
    setIsDisabled(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setIsDisabled(false);
  };

  const handleSubmit = (formData) => {
    console.log("Form submitted:", formData);
    setIsModalOpen(false);
    setIsSuccessOpen(true);
  };

  const closeSuccess = () => {
    setIsSuccessOpen(false);
    setIsDisabled(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 flex flex-col items-center justify-start pt-12 pb-20 px-4 overflow-x-hidden">
      <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
        Service Page
      </h1>
      
      <div className={`relative transition-opacity duration-300 ${isDisabled ? 'opacity-20 pointer-events-none' : ''}`}>
        <CircleServices openModal={openModal} />
      </div>
      
      <ContactModal 
        isOpen={isModalOpen} 
        onClose={closeModal} 
        onSubmit={handleSubmit}
      />
      
      <SuccessModal 
        isOpen={isSuccessOpen} 
        onClose={closeSuccess}
      />
    </div>
  );
}

export default App;


// import React from 'react';
// import ClientEnquiry from './components/ClientEnquiry'; // adjust the path if your file is elsewhere

// function App() {
//   return (
//     <div className="App">
//       <ClientEnquiry />
//     </div>
//   );
// }

// export default App;
