import { motion } from "framer-motion";
import { useState } from "react";
import { services } from "../data/services";

const CircleServices = ({ openModal }) => {
  const centerX = 250;
  const centerY = 250;
  const radius = 180;
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div className="relative w-[500px] h-[500px] z-10 transition-opacity duration-300">
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-2xl font-bold text-indigo-600 text-center z-10">
        Where Ideas Meet Execution<br />
        <span className="underline decoration-orange-500">Our Services</span>
      </div>
      
      <motion.div 
        className="absolute w-full h-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        {services.map((service, index) => {
          const angle = (2 * Math.PI / services.length) * index;
          const x = centerX + radius * Math.cos(angle) - 60;
          const y = centerY + radius * Math.sin(angle) - 45;
          
          return (
            <motion.div 
              key={index}
              className={`absolute w-[120px] h-[90px] bg-white border-2 rounded-xl shadow-sm flex flex-col items-center justify-center text-center text-sm font-medium cursor-pointer transition-all duration-300 ${
                hoveredIndex === index 
                  ? 'shadow-lg bg-indigo-50 border-indigo-300 z-30' 
                  : 'border-gray-200 z-10'
              }`}
              style={{ left: `${x}px`, top: `${y}px` }}
              onClick={() => openModal(service)}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ scale: 1.15 }}
              animate={{
                scale: hoveredIndex === index ? 1.15 : 1,
                zIndex: hoveredIndex === index ? 30 : 10,
                borderWidth: hoveredIndex === index ? 2 : 1
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className="text-2xl mb-1">{service.icon}</span>
              <span>{service.label}</span>
            </motion.div>
          );
        })}
      </motion.div>
    </div>
  );
};

export default CircleServices;