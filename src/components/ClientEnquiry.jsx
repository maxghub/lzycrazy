// Dependencies to install:
// npm install react-icons axios date-fns clsx @tailwindcss/forms

import { useState } from "react";
import {
  FiDownload,
  FiEye,
  FiChevronDown,
  FiBell,
  FiUser,
  FiSettings,
  FiChevronRight,
  FiSearch,
  FiHome,
  FiPieChart,
  FiShoppingBag,
  FiFileText,
  FiUsers,
  FiMail,
  FiCalendar,
  FiGrid,
  FiLogOut,
  FiPhone // Added this import
} from "react-icons/fi";
import { FaRegBuilding, FaRegNewspaper } from "react-icons/fa";
import { HiOutlineUserGroup } from "react-icons/hi";
import logo from "../images/lzy-logo.png";
import data from "../data/clientquery"; // Make sure this path is correct

export default function ClientEnquiry() {
  const [filters, setFilters] = useState({ name: '', email: '', phone: '', date: '' });
  const [showRecruitmentSubmenu, setShowRecruitmentSubmenu] = useState(false);
  const [activeRow, setActiveRow] = useState(null);

  const handleSearch = () => {
    // Filter data based on search criteria
    return data.filter(item => {
      return (
        item.name.toLowerCase().includes(filters.name.toLowerCase()) &&
        item.email.toLowerCase().includes(filters.email.toLowerCase()) &&
        item.phone.includes(filters.phone) &&
        item.date.includes(filters.date)
      );
    });
  };

  const filteredData = filters.name || filters.email || filters.phone || filters.date 
    ? handleSearch() 
    : data;

  const handleRowHover = (index) => {
    setActiveRow(index);
  };

  const handleRowLeave = () => {
    setActiveRow(null);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <aside className="w-64 bg-white border-r shadow-sm hidden md:flex flex-col">
        <div className="p-5 border-b">
          <img src={logo} alt="Logo" className="h-10" />
        </div>
        <nav className="flex-1 px-3 py-6 space-y-1 text-sm text-gray-600">
          <div className="space-y-1">
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">
              <FiHome className="text-lg opacity-75" />
              <span>Dashboard</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">
              <FiPieChart className="text-lg opacity-75" />
              <span>Analytics</span>
            </a>
          </div>

          <div className="pt-4">
            <p className="px-4 py-2 text-gray-400 text-xs font-medium tracking-wider uppercase">Marketplace</p>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">
              <FiShoppingBag className="text-lg opacity-75" />
              <span>Market Place</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">
              <FiGrid className="text-lg opacity-75" />
              <span>Products</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">
              <FiFileText className="text-lg opacity-75" />
              <span>Post</span>
            </a>
          </div>

          <div className="pt-4">
            <p className="px-4 py-2 text-gray-400 text-xs font-medium tracking-wider uppercase">Recruitment</p>
            <button
              onClick={() => setShowRecruitmentSubmenu(!showRecruitmentSubmenu)}
              className="w-full flex justify-between items-center px-4 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600"
            >
              <div className="flex items-center gap-3">
                <HiOutlineUserGroup className="text-lg opacity-75" />
                <span>Requirement</span>
              </div>
              {showRecruitmentSubmenu ? <FiChevronDown className="text-lg opacity-75" /> : <FiChevronRight className="text-lg opacity-75" />}
            </button>
            {showRecruitmentSubmenu && (
              <div className="ml-8 space-y-1">
                <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-sm">
                  <span>We are hiring</span>
                </a>
                <a href="#" className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-blue-50 hover:text-blue-600 text-sm">
                  <span>Join Team</span>
                </a>
              </div>
            )}
          </div>

          <div className="pt-4">
            <p className="px-4 py-2 text-gray-400 text-xs font-medium tracking-wider uppercase">Client</p>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-blue-50 text-blue-600 font-medium">
              <FiUsers className="text-lg opacity-75" />
              <span>Client Enquiry</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">
              <FaRegBuilding className="text-lg opacity-75" />
              <span>My Adds Shop</span>
            </a>
          </div>

          <div className="pt-4">
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg hover:bg-blue-50 hover:text-blue-600">
              <FaRegNewspaper className="text-lg opacity-75" />
              <span>News</span>
            </a>
            <a href="#" className="flex items-center gap-3 px-4 py-2.5 rounded-lg text-red-500 hover:bg-red-50">
              <FiLogOut className="text-lg opacity-75" />
              <span>Logout</span>
            </a>
          </div>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-x-hidden">
        {/* Header */}
        <header className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Client Enquiry</h1>
          <div className="flex items-center space-x-4">
            <button className="relative p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
              <FiBell size={20} />
              <span className="absolute top-1 right-1 h-2 w-2 rounded-full bg-red-500"></span>
            </button>
            <button className="p-2 text-gray-500 hover:text-gray-700 rounded-full hover:bg-gray-100">
              <FiSettings size={20} />
            </button>
            <div className="hidden md:flex items-center space-x-2 bg-gray-100 rounded-full px-3 py-1">
              <div className="h-8 w-8 rounded-full bg-blue-500 flex items-center justify-center text-white font-medium">T</div>
              <span className="text-sm font-medium text-gray-700">Test User</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <div className="p-6">
          {/* Filters */}
          <div className="bg-white rounded-xl shadow-sm p-5 mb-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { field: 'name', icon: <FiUser className="text-gray-400" />, placeholder: 'Name' },
                { field: 'email', icon: <FiMail className="text-gray-400" />, placeholder: 'Email' },
                { field: 'phone', icon: <FiPhone className="text-gray-400" />, placeholder: 'Phone' },
                { field: 'date', icon: <FiCalendar className="text-gray-400" />, placeholder: 'Date' }
              ].map(({ field, icon, placeholder }) => (
                <div key={field} className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    {icon}
                  </div>
                  <input
                    type="text"
                    placeholder={placeholder}
                    value={filters[field]}
                    onChange={(e) => setFilters({ ...filters, [field]: e.target.value })}
                    className="block w-full pl-10 pr-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-200 focus:border-blue-500 outline-none transition-all text-sm"
                  />
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-4">
              <button
                onClick={handleSearch}
                className="flex items-center justify-center space-x-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-colors"
              >
                <FiSearch size={16} />
                <span>Search</span>
              </button>
              <button className="flex items-center justify-center space-x-2 bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 px-4 py-2 rounded-lg shadow-sm text-sm font-medium transition-colors">
                <FiDownload size={16} />
                <span>Download</span>
              </button>
            </div>
          </div>

          {/* Table */}
          <div className="bg-white rounded-xl shadow-sm overflow-hidden">
            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      First Name
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Email
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Phone Number
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Message
                    </th>
                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Date
                    </th>
                    <th scope="col" className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {filteredData.map((item, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-blue-50 ${activeRow === idx ? 'bg-blue-50' : ''}`}
                      onMouseEnter={() => handleRowHover(idx)}
                      onMouseLeave={handleRowLeave}
                    >
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{item.name}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{item.email}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-600">{item.phone}</div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="text-sm text-gray-600 max-w-xs truncate">{item.message}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-500">{item.date}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button className="text-blue-600 hover:text-blue-900 mr-3">
                          <FiEye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}