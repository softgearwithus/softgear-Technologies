import Image from '../assets/Office.jpg'
import { FaLaptopCode, FaMobileAlt, FaServer } from "react-icons/fa";
import { motion } from "framer-motion";
import Footer from './Footer';

const services = [
    {
      icon: <FaLaptopCode size={30} className="text-blue-400" />,
      title: "Website Development",
      description: "Custom websites that engage visitors and drive business growth."
    },
    {
      icon: <FaMobileAlt size={30} className="text-blue-400" />,
      title: "App Development",
      description: "Native and cross-platform mobile applications for iOS and Android."
    },
    {
      icon: <FaServer size={30} className="text-blue-400" />,
      title: "Software Solutions",
      description: "Tailored software solutions to streamline your business operations."
    }
  ];

  

  const testimonials = [
    {
      name: "John Smith",
      role: "Tech Solutions Inc",
      feedback: "SoftGear transformed our business with their innovative solutions. The team's expertise and dedication were exceptional."
    },
    {
      name: "Lisa Anderson",
      role: "Digital Marketing Pro",
      feedback: "Working with SoftGear was a game-changer for our company. They delivered beyond our expectations."
    },
    {
      name: "Mark Wilson",
      role: "Global Retail",
      feedback: "The team at SoftGear helped us modernize our operations. Their support was invaluable to our success."
    }
  ];


function About(){
    return(<>
     <div className="bg-[#0C0F12] text-white py-12 px-6 md:px-20 flex flex-col md:flex-row items-center gap-8">
      <div className="md:w-1/2">
        <h2 className="text-3xl font-bold text-blue-400 mb-4">About Us</h2>
        <p className="text-gray-300 mb-4">
          SoftGear Technologies is a leading digital transformation partner for
          small and medium enterprises. We specialize in creating innovative
          digital solutions that help businesses thrive in the modern digital
          landscape.
        </p>
        <p className="text-gray-300">
          Our mission is to empower businesses with cutting-edge technology
          solutions, making digital transformation accessible and achievable for
          companies of all sizes. With our expertise in web development, mobile
          applications, and software solutions, we help businesses stay ahead in
          the digital age.
        </p>
      </div>
      <div className="md:w-1/2">
        <img
          src={Image}
          alt="Laptop with analytics dashboard"
          className="rounded-lg shadow-lg"
        />
      </div>
    </div>

      
      {/* Our Services Section */}
      <div className="bg-[#0C0F12] text-white py-12 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">Our Services</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-lg shadow-md text-center"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="mb-4 flex justify-center">{service.icon}</div>
            <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
            <p className="text-gray-300">{service.description}</p>
          </motion.div>
        ))}
      </div>
    </div>
    {/* our team  */}
    
    <div className="bg-gray-900 text-white py-12 px-6 md:px-20 text-center">
      <h2 className="text-3xl font-bold text-blue-400 mb-8">What Our Clients Say</h2>
      <div className="grid md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 text-center border border-blue-500"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <p className="text-gray-300 italic mb-4">"{testimonial.feedback}"</p>
            <h3 className="text-xl font-bold text-white">{testimonial.name}</h3>
            <p className="text-blue-400 font-semibold">{testimonial.role}</p>
          </motion.div>
        ))}
      </div>
    </div>

    <div className="bg-gray-900 text-white py-12 px-6 text-center">
      <h2 className="text-2xl font-bold text-blue-400 mb-4">Ready to Start Your Digital Journey?</h2>
      <motion.button
        className="bg-blue-500 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-600 transition duration-300"
        whileHover={{ scale: 1.1 }}
      >
        Contact Us Today
      </motion.button>
    </div>

    <Footer/>
    </>)
}

export default About