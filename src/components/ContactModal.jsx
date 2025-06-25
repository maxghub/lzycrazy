import { useState } from "react";
import { motion } from "framer-motion";

const ContactModal = ({ isOpen, onClose, onSubmit }) => {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    email: '',
    phone: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstname.trim()) newErrors.firstname = "First name is required";
    if (!formData.lastname.trim()) newErrors.lastname = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/^\S+@\S+\.\S+$/.test(formData.email)) newErrors.email = "Email is invalid";
    if (!formData.phone.trim()) newErrors.phone = "Phone number is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    try {
      await onSubmit(formData);
      // Reset form after successful submission if needed
      setFormData({
        firstname: '',
        lastname: '',
        email: '',
        phone: '',
        message: ''
      });
    } catch (error) {
      console.error("Submission error:", error);
      // Handle API errors here if needed
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-5 z-50">
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        className="bg-gradient-to-br from-indigo-500 to-purple-600 rounded-xl p-8 flex flex-col md:flex-row gap-8 max-w-4xl w-full text-white shadow-xl"
      >
        <div className="flex-1 flex flex-col">
          <img 
            src="https://s3.amazonaws.com/cdn.naturalcandystore.com/images/uploads/promo-heat-safe-candy-2024-565x400-72k.jpg" 
            alt="Contact" 
            className="w-full h-full rounded-lg shadow object-cover"
          />
          <div className="text-sm italic text-center mt-5 leading-relaxed">
            <p>We're here to listen, collaborate, and create solutions that move your vision forward.</p>
            <p className="mt-2">Just as astronauts explore the unknown to uncover new possibilities, we believe every idea—no matter how small—holds the power to create something extraordinary.</p>
            <p className="mt-2">Let's begin a journey of creativity, purpose, and innovation.</p>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <button 
            onClick={onClose}
            className="absolute top-2 right-2 text-2xl font-bold text-white cursor-pointer hover:rotate-90 transition-transform duration-300" 
            style={{top: '-27px',
                right: '-15px',}}
          >
            &times;
          </button>
          
          <h2 className="text-2xl font-bold mb-4">Let's Build Something Remarkable</h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col">
            <div className="flex gap-3">
              <div className="flex-1">
                <input
                  type="text"
                  name="firstname"
                  placeholder="First Name"
                  value={formData.firstname}
                  onChange={handleChange}
                  className={`w-full p-3 mb-1 rounded border ${errors.firstname ? 'border-red-300' : 'border-white/30'} bg-white/10 text-white placeholder-white/70 text-sm`}
                />
                {errors.firstname && <p className="text-red-200 text-xs mb-2">{errors.firstname}</p>}
              </div>
              <div className="flex-1">
                <input
                  type="text"
                  name="lastname"
                  placeholder="Last Name"
                  value={formData.lastname}
                  onChange={handleChange}
                  className={`w-full p-3 mb-1 rounded border ${errors.lastname ? 'border-red-300' : 'border-white/30'} bg-white/10 text-white placeholder-white/70 text-sm`}
                />
                {errors.lastname && <p className="text-red-200 text-xs mb-2">{errors.lastname}</p>}
              </div>
            </div>
            
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full p-3 my-2 rounded border ${errors.email ? 'border-red-300' : 'border-white/30'} bg-white/10 text-white placeholder-white/70 text-sm`}
            />
            {errors.email && <p className="text-red-200 text-xs mb-2">{errors.email}</p>}
            
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full p-3 my-2 rounded border ${errors.phone ? 'border-red-300' : 'border-white/30'} bg-white/10 text-white placeholder-white/70 text-sm`}
            />
            {errors.phone && <p className="text-red-200 text-xs mb-2">{errors.phone}</p>}
            
            <textarea
              rows="4"
              name="message"
              placeholder="Your vision or project details"
              value={formData.message}
              onChange={handleChange}
              className={`w-full p-3 my-2 rounded border ${errors.message ? 'border-red-300' : 'border-white/30'} bg-white/10 text-white placeholder-white/70 text-sm`}
            />
            {errors.message && <p className="text-red-200 text-xs mb-2">{errors.message}</p>}
            
            <button
              type="submit"
              disabled={isSubmitting}
              className={`bg-gradient-to-r from-orange-500 to-pink-600 text-white py-3 px-6 rounded font-bold mt-3 cursor-pointer hover:-translate-y-1 transition-transform duration-300 shadow hover:shadow-lg ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactModal;