import React, { useState } from "react";
import { motion } from "framer-motion";

const InternshipContact = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    program: "",
    duration: "",
  });
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isChecked) return;
    setLoading(true);

    const message = `Hello, I want to apply for an internship.\n\n👤 *Name:* ${formData.fullName}\n📞 *Phone:* ${formData.phone}\n🎓 *Program:* ${formData.program}\n⏳ *Duration:* ${formData.duration}`;
    const encodedMessage = encodeURIComponent(message);
    const phoneNumber = "916002031116"; // Change to your business number

    window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, "_blank");
    setLoading(false);
  };

  return (
    <div className="bg-gray-900 text-white py-12 px-6 md:px-20 flex justify-center items-center min-h-screen">
      <div className="max-w-lg w-full bg-gray-800 p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-blue-400 mb-6 text-center">
          Apply for Internship & Training
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-gray-300 font-semibold mb-1">Full Name</label>
            <input
              type="text"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-1">Phone Number</label>
            <input
              type="tel"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
              placeholder="Enter your phone number"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-1">Internship Program</label>
            <select
              id="program"
              value={formData.program}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
              required
            >
              <option value="">Select an option</option>
              <option value="Web Development">Web Development</option>
            </select>
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-1">Internship Duration</label>
            <select
              id="duration"
              value={formData.duration}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
              required
            >
              <option value="">Select an option</option>
              <option value="14 days">14 days</option>
              <option value="28 days">28 days</option>
              <option value="45 days">45 days</option>
            </select>
          </div>

          <div className="flex items-start space-x-3 text-gray-300">
            <input
              type="checkbox"
              id="confirm"
              checked={isChecked}
              className="w-5 h-5 text-blue-500"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label htmlFor="confirm" className="text-left text-gray-300 text-sm leading-snug">
              I agree to the terms and conditions.
            </label>
          </div>

          <motion.button
            type="submit"
            className={`w-full font-bold py-3 px-6 rounded-lg transition duration-300 ${
              isChecked ? "bg-blue-500 hover:bg-blue-600 text-white" : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
            whileHover={isChecked ? { scale: 1.05 } : {}}
            disabled={!isChecked || loading}
          >
            {loading ? "Submitting..." : "Submit Application via WhatsApp"}
          </motion.button>
        </form>
      </div>
    </div>
  );
};

export default InternshipContact;