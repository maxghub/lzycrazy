// src/components/Button.jsx
import React from 'react';
import { FaPlus } from 'react-icons/fa';

const Button = ({ text, onClick }) => (
  <button
    onClick={onClick}
    className="flex items-center gap-2 bg-gradient-to-r from-pink-500 to-pink-700 text-white px-5 py-2 rounded-full shadow-lg hover:from-pink-600 hover:to-pink-800 transition-all duration-300"
  >
    <FaPlus /> {text}
  </button>
);

export default Button;