import React, { useState } from "react";
import { motion } from "framer-motion";

function InternshipContact() {
  const [isChecked, setIsChecked] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    program: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const { fullName, email, phone, program, duration } = formData;

    if (!fullName || !email || !phone || !program || !duration) {
      alert("Please fill in all fields!");
      setLoading(false);
      return;
    }

    // ✅ Correct Google Apps Script Web App URL
    const googleSheetURL =
      "https://script.google.com/macros/s/AKfycbzaIy5X9T0rWfKmlDbO9KmZqaMXWIE3j7o0LXRxFqC1ML61lHIcHd6QBEXcaV-GxpWEMg/exec";

    try {
      const response = await fetch(googleSheetURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const result = await response.json();
      if (result.status === "success") {
        alert("Application submitted successfully!");
        setFormData({
          fullName: "",
          email: "",
          phone: "",
          program: "",
          duration: "",
        });
        setIsChecked(false);
      } else {
        alert("Submission failed. Try again!");
      }
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Error submitting form. Please check your internet connection.");
    }

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
            <label className="block text-gray-300 font-semibold mb-1">
              Full Name
            </label>
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
            <label className="block text-gray-300 font-semibold mb-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded bg-gray-700 text-white"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-300 font-semibold mb-1">
              Phone Number
            </label>
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
            <label className="block text-gray-300 font-semibold mb-1">
              Internship Program
            </label>
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
            <label className="block text-gray-300 font-semibold mb-1">
              Internship Duration
            </label>
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

          {/* Checkbox for confirmation */}
          <div className="flex items-start space-x-3 text-gray-300">
            <input
              type="checkbox"
              id="confirm"
              checked={isChecked}
              className="w-5 h-5 text-blue-500"
              onChange={(e) => setIsChecked(e.target.checked)}
            />
            <label
              htmlFor="confirm"
              className="text-left text-gray-300 text-sm leading-snug"
            >
              I agree to the terms and conditions.
            </label>
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            className={`w-full font-bold py-3 px-6 rounded-lg transition duration-300 ${
              isChecked
                ? "bg-blue-500 hover:bg-blue-600 text-white"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
            whileHover={isChecked ? { scale: 1.05 } : {}}
            disabled={!isChecked || loading}
          >
            {loading ? "Submitting..." : "Submit Application"}
          </motion.button>
        </form>
      </div>
    </div>
  );
}

export default InternshipContact;
