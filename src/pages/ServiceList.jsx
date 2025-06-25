import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrash, FaThList } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../layout/Sidebar';
import TopIcons from '../layout/TopIcons';
import serviceData from '../data/serviceData'; // 👉 local static data

const ServiceList = () => {
  const navigate = useNavigate();
  const [services, setServices] = useState([]);

  useEffect(() => {
    // ✅ Use local data (mock)
    setServices(serviceData);

    /*
    ✅ Replace with API call when backend is ready:

    fetch('https://your-api-endpoint.com/api/services')
      .then((res) => res.json())
      .then((data) => setServices(data))
      .catch((err) => console.error('API fetch error:', err));
    */
  }, []);

  const handleEdit = (id) => {
    navigate('/'); // Redirect to service creation page (Home)
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#e0f2f1] via-[#b2dfdb] to-[#80cbc4]">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto">
        {/* <TopIcons /> */}
        <div className="bg-white shadow-xl rounded-xl overflow-hidden p-6 border-l-4 border-teal-500 w-full">
          <div className="border-b border-gray-200 pb-4 mb-4 flex justify-between items-center">
            <h2 className="text-2xl font-bold text-gray-700 flex items-center gap-2">
              <FaThList className="text-teal-600" /> Services
            </h2>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full table-auto">
              <thead className="bg-gray-800 text-white">
                <tr>
                  <th className="px-4 py-2 text-left">Icon</th>
                  <th className="px-4 py-2 text-left">Heading</th>
                  <th className="px-4 py-2 text-left">Description</th>
                  <th className="px-4 py-2 text-left">Action</th>
                </tr>
              </thead>
              <tbody>
                {services.map((service) => (
                  <tr key={service.id} className="border-b border-gray-200 hover:bg-gray-50">
                    <td className="px-4 py-3">
                      <img src={service.image} alt="icon" className="w-10 h-10 rounded" />
                    </td>
                    <td className="px-4 py-3 text-gray-800 font-semibold">{service.heading}</td>
                    <td className="px-4 py-3 text-gray-600">{service.description}</td>
                    <td className="px-4 py-3 space-x-2">
                      <button onClick={() => handleEdit(service.id)} className="text-blue-500 hover:text-blue-700">
                        <FaEdit />
                      </button>
                      <button className="text-red-500 hover:text-red-700">
                        <FaTrash />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ServiceList;
