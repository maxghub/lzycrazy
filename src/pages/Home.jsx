// src/pages/Home.jsx
import React, { useState } from 'react';
import { FaPlusCircle, FaHeading, FaAlignLeft, FaCameraRetro } from 'react-icons/fa';
import Sidebar from '../layout/Sidebar';
import TopIcons from '../layout/TopIcons';
import Button from '../components/Button';
import './Home.css';

function Home() {
  const [previewSrc, setPreviewSrc] = useState('https://img.icons8.com/ios/50/image--v1.png');
  const [toastVisible, setToastVisible] = useState(false);
  const [formData, setFormData] = useState({
    heading: '',
    description: '',
    image: null,
  });
  const [errors, setErrors] = useState({});

  const handlePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        setPreviewSrc(reader.result);
        setFormData({ ...formData, image: file });
      };
      reader.readAsDataURL(file);
    }
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.heading.trim()) {
      newErrors.heading = 'Heading is required';
    } else if (formData.heading.trim().split(' ').length > 20) {
      newErrors.heading = 'Heading should not exceed 20 words';
    }

    if (!formData.description.trim()) {
      newErrors.description = 'Description is required';
    } else if (formData.description.trim().split(' ').length > 1000) {
      newErrors.description = 'Description should not exceed 1000 words';
    }

    if (!formData.image) {
      newErrors.image = 'Image is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleAddClick = async () => {
    if (!validate()) return;
    try {
      console.log('Submitted form data:', formData);
      setToastVisible(true);
      setTimeout(() => setToastVisible(false), 3000);
    } catch (error) {
      console.error('Submission failed', error);
    }
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-[#e0f2f1] via-[#b2dfdb] to-[#80cbc4] container mx-auto max-w-4xl ">
      <Sidebar />

      <main className="flex-1 p-6 overflow-y-auto relative main-widht">
        {/* <TopIcons /> */}
        <div className="bg-white rounded-xl shadow-xl p-10 container mx-auto w-full mt-4 border-l-4 border-teal-500 relative">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-2xl font-bold text-gray-800 uppercase flex items-center gap-2">
              <FaPlusCircle className="text-teal-600" /> Create New Service
            </h2>
            <div>
              <Button onClick={handleAddClick} text="Add" />
            </div>
          </div>

          <div className="flex gap-6 flex-wrap">
            <div className="flex flex-col items-center justify-center w-32 h-32 rounded-lg bg-gray-100 border relative overflow-hidden shadow-md">
              <label htmlFor="cameraInput" className="cursor-pointer flex flex-col items-center justify-center w-full h-full">
                {previewSrc ? <img src={previewSrc} alt="Preview" className="w-full h-full object-cover" /> : <FaCameraRetro className="text-3xl text-teal-500" />}
              </label>
              <input type="file" accept="image/*" capture="environment" id="cameraInput" className="hidden" onChange={handlePreview} />
              {errors.image && <p className="text-red-600 text-xs mt-1 font-semibold">{errors.image}</p>}
            </div>
            <div className="flex-1 min-w-[250px] space-y-6">
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1 flex items-center gap-1"><FaHeading /> Heading</label>
                <input
                  type="text"
                  value={formData.heading}
                  onChange={(e) => setFormData({ ...formData, heading: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-50 text-gray-800 focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Enter service heading (max 20 words)"
                />
                {errors.heading && <p className="text-red-600 text-xs mt-1 font-semibold">{errors.heading}</p>}
              </div>
              <div>
                <label className="block text-sm font-bold text-gray-800 mb-1 flex items-center gap-1"><FaAlignLeft /> Description</label>
                <textarea
                  rows="4"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  className="w-full border border-gray-300 rounded px-4 py-2 bg-gray-50 text-gray-800 resize-none focus:outline-none focus:ring-2 focus:ring-teal-400"
                  placeholder="Enter service description (max 1000 words)"
                ></textarea>
                {errors.description && <p className="text-red-600 text-xs mt-1 font-semibold">{errors.description}</p>}
              </div>
            </div>
          </div>
        </div>

        {toastVisible && (
          <div className="fixed top-6 right-6 bg-green-600 text-white px-6 py-3 rounded-lg shadow-lg flex items-center space-x-2 transition-all">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            <span>Service added successfully!</span>
          </div>
        )}
      </main>
    </div>
  );
}

export default Home;
