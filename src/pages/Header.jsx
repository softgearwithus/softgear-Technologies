import React from 'react';
import { Link } from 'react-router-dom';
import { FaCogs, FaUserTie, FaRocket, FaShieldAlt } from 'react-icons/fa';
import headerImage from "../assets/header-image.jpg"


function Header() {
  const handleScrollToService = (e) => {
    e.preventDefault();
    document.getElementById("service-section").scrollIntoView({ behavior: "smooth" });

  };

  return (
    <>
      {/* Header Section */}
      <div className='flex flex-col md:flex-row items-center bg-[#0C0F12] text-white px-6 md:px-12 py-10 pt-24'>
        {/* Left Side Content */}
        <div className='md:w-1/2 text-center md:text-left'>
          <h1 className='text-3xl sm:text-4xl md:text-5xl font-extrabold leading-tight'>
            Empowering businesses Digitally with Affordable Growth solutions at Softgear Technologies
          </h1>
          <p className='mt-5 text-sm sm:text-base md:text-lg max-w-lg px-2 sm:px-0 font-bold'>
            Best Digital solutions for Small businesses
          </p>
          <p className='mt-4 text-sm md:text-base max-w-lg text-justify'>
            At SoftGear Technologies, we specialize in turning businesses into brands by leveraging the power of digitalization. Our mission is to empower 75 million SMEs by creating stunning websites, innovative apps, and robust software solutions.Transform your business Digitally and reach more Customers today.
          </p>
          <button className='bg-red-400 px-5 py-3 rounded mt-6 sm:mt-5 hover:bg-blue-800 transition-all text-sm sm:text-base'>
            <Link to='/get-started' onClick={handleScrollToService} >Start Your Digital Journey</Link>
          </button>
        </div>

        {/* Right Side Image */}
        <div className='md:w-1/2 flex justify-center mt-6 md:mt-0'>
          <img src={headerImage} alt='SoftGear Technologies' className='w-full max-w-sm sm:max-w-md md:max-w-lg rounded' />
        </div>
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
