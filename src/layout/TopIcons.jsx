import React from 'react';

const TopIcons = () => {
  return (
    <div className="flex justify-end items-center space-x-4 mb-6">
      <button className="w-6 h-6"><img src="https://img.icons8.com/ios-glyphs/30/000000/phone.png" alt="phone" /></button>
      <button className="w-6 h-6"><img src="https://img.icons8.com/ios-glyphs/30/000000/video-call.png" alt="video" /></button>
      <button className="w-6 h-6"><img src="https://img.icons8.com/ios-glyphs/30/000000/appointment-reminders.png" alt="reminder" /></button>
      <button className="w-8 h-8 rounded-full overflow-hidden border-2 border-gray-300">
        <img src="https://randomuser.me/api/portraits/women/44.jpg" alt="Profile" />
      </button>
    </div>
  );
};

export default TopIcons;