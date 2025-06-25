import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "./Model.css"; // Keep the .burning-word CSS here

const SuccessModal = ({ isOpen, onClose }) => {
  const [activeWords, setActiveWords] = useState([]);
  const [burningEffect, setBurningEffect] = useState(false);
  const [finalMessageShown, setFinalMessageShown] = useState(false);
  const [fadedOut, setFadedOut] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setBurningEffect(true);
      setActiveWords([]);

      const allWords = [
        "Verified",
        "Your", "vision", "is", "now", "in", "motion!",
        "Like", "a", "spark", "igniting", "innovation,",
        "we'll", "fan", "the", "flames", "of", "your", "idea", "into", "reality."
      ];

      allWords.forEach((_, i) => {
        setTimeout(() => {
          setActiveWords(prev => [...prev, i]);
        }, i * 200);
      });

      setTimeout(() => {
        setBurningEffect(false);
        setFinalMessageShown(true);

        setTimeout(() => {
          setFadedOut(true);
          setTimeout(() => {
            onClose();
            setFinalMessageShown(false);
            setFadedOut(false);
          }, 1000);
        }, 3000);
      }, allWords.length * 200 + 1000);
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const renderWord = (word, index) => {
    const isActive = activeWords.includes(index);
    return (
      <span 
        key={index}
        className={`relative inline-block mx-1 ${isActive ? 'burning-word' : ''}`}
      >
        {word}
      </span>
    );
  };

  return (
    <>
      {burningEffect && (
        <div className="fixed inset-0 z-40 burning-overlay pointer-events-none"></div>
      )}

      <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-5 z-50">
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className={`bg-gradient-to-br from-gray-50 to-gray-200 p-10 rounded-xl text-center max-w-md w-full relative overflow-hidden shadow-xl transition-opacity duration-1000 ${
            fadedOut ? 'opacity-0' : 'opacity-100'
          }`}
        >
          <div className="relative z-10">
            <h2 className="text-2xl font-bold mb-2">
              {renderWord("Verified", 0)}
            </h2>
            
            <div className="text-lg leading-relaxed my-5 text-gray-700">
              <p>
                {renderWord("Your", 1)} {renderWord("vision", 2)} {renderWord("is", 3)} {renderWord("now", 4)} {renderWord("in", 5)} {renderWord("motion!", 6)}
              </p>
              <p className="mt-3">
                {renderWord("Like", 7)} {renderWord("a", 8)} {renderWord("spark", 9)} {renderWord("igniting", 10)} {renderWord("innovation,", 11)}
              </p>
              <p className="mt-3">
                {renderWord("we'll", 12)} {renderWord("fan", 13)} {renderWord("the", 14)} {renderWord("flames", 15)} {renderWord("of", 16)} {renderWord("your", 17)} {renderWord("idea", 18)} {renderWord("into", 19)} {renderWord("reality.", 20)}
              </p>
            </div>

            <img 
              src="https://cdn-icons-png.flaticon.com/512/190/190411.png" 
              width={100} 
              height={100} 
              alt="Success" 
              className="mx-auto"
            />

            {finalMessageShown && (
              <p className="mt-6 text-xl font-semibold text-red-600 animate-pulse">
                🔥 Your journey begins now!
              </p>
            )}

            <button 
              onClick={onClose}
              className="bg-gradient-to-r from-blue-400 to-cyan-400 text-white py-3 px-6 rounded font-bold mt-6 cursor-pointer shadow hover:shadow-lg transition-all"
            >
              Got It
            </button>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default SuccessModal;
