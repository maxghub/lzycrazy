
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
// src/layout/Sidebar.jsx



function Sidebar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <div className="w-64 flex flex-col bg-gradient-to-b from-[#00695c] via-[#00796b] to-[#00897b] shadow-md">
      <div className="p-6 border-b border-teal-300">
        <h1 className="text-xl font-bold text-white">LzyCrazy</h1>
      </div>
      <nav className="flex-1 px-4 py-4 space-y-1 text-sm">
        <p className="text-white text-xs uppercase px-2">Dashboard</p>
        <div>
          <div onClick={() => setShowMenu(!showMenu)} className="flex justify-between items-center px-2 cursor-pointer select-none text-white font-semibold">
            <p>LzyCrazy Services</p>
            <span className="transform transition-transform duration-300">▶</span>
          </div>
          {showMenu && (
            <ul className="space-y-1 mt-1 pl-4">
              <li className="bg-white text-[#00695c] rounded">
                <Link to="/" className="block px-4 py-2 font-semibold">Services Create</Link>
              </li>
              <li className="text-white hover:bg-[#004d40] rounded">
                <Link to="/service-list" className="block px-4 py-2">Services List</Link>
              </li>
            </ul>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Sidebar;
