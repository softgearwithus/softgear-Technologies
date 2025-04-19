import React from 'react';
import { Link } from 'react-router-dom';
import { FaCogs, FaUserTie, FaRocket, FaShieldAlt } from 'react-icons/fa';
import headerImage from "../assets/hero-image.png"
import { motion } from 'framer-motion';


function Header() {
  const handleScrollToService = (e) => {
    e.preventDefault();
    document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });

  };

  return (
    <>
      {/* Header Section */}
     {/* Ring Image with Animated Text on Top */}
{/* Ring Image with Animated Text on Top */}
<div className=" relative w-4/5 md:w-3/4 lg:w-2/3 max-w-[700px] mb-6">
  <motion.img
    src={headerImage}
    alt="Ring"
    initial={{ opacity: 0, y: 100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: "easeOut" }}
    className="w-full"
  />

  {/* Centered Text Over Image with White and Blue Colors */}
  <motion.h1
    initial={{ opacity: 0, y: 60 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
    className="absolute inset-0 flex items-center justify-center text-center text-white text-2xl sm:text-4xl md:text-5xl font-bold leading-tight px-4"
  >
    QUALITY PRODUCTS <br />
    <span className="text-blue-700">FOR QUALITY LIFE.</span>
  </motion.h1>
</div>


      {/* Stats & Features Section */}
      <div className='bg-[#0C0F12] text-white px-6 md:px-12 py-10 flex flex-col md:flex-row items-center justify-center text-center md:text-left'>
        {/* 75M+ Target Section */}
        <div className='mb-10 md:mb-0 md:w-1/3 mr-60'>
          <h1 className='text-5xl sm:text-6xl font-extrabold text-blue-700'>75M+</h1>
          <p className='pt-3 text-sm sm:text-base'>SMEs targeted for digital transformation</p>
        </div>

        {/* Features Section */}
        <div className='grid grid-cols-1  gap-6 '>
          <FeatureCard icon={<FaCogs />} title="Customized Solutions" text="Tailored digital solutions that fit your business needs" />
          <FeatureCard icon={<FaUserTie />} title="Professional Expertise" text="Experienced team dedicated to your digital success" />
          <FeatureCard icon={<FaRocket />} title="Innovative Technology" text="Cutting-edge technology for digital excellence" />
          <FeatureCard icon={<FaShieldAlt />} title="Ongoing Support" text="Continuous support to ensure optimal performance" />
        </div>
      </div>
    </>
  );
}

// Reusable Feature Card Component
const FeatureCard = ({ icon, title, text }) => (
  <div className='flex items-center space-x-3'>
    <span className='text-blue-500 text-2xl'>{icon}</span>
    <div>
      <h2 className='font-bold'>{title}</h2>
      <p className='text-sm text-gray-400'>{text}</p>
    </div>
  </div>
);

export default Header;
