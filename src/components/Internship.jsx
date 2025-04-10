import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/logo.png"; // Replace with actual logo path
import { TiTick } from "react-icons/ti";
import { GoDash } from "react-icons/go";

const Internship = () => {
  return (
    <div>
      <div className="bg-gray-950 py-12 px-6 md:px-20 text-center text-white">
        <h2 className="text-3xl font-bold mb-4">Internship Program</h2>
        <p className="text-gray-300 mb-8">
          Gain hands-on experience and enhance your skills with Softgear Technologies' internship program.
        </p>
      </div>

      {/* Internship Details  */}
      <div className="flex flex-wrap justify-center items-center text-white bg-gray-950 p-4">
        {[
          {
            title: "14 Days Training",
          description: "Join our team for a 14-Day Web Development Training! Gain hands-on experience in web development , coding for beginners.",

            benefits: [
              "HTML, CSS, JavaScript (Basics)",
              "Portfolio Building",
              "Group guidance",
              "Course Certification",
              "Internship Opportunity (Only top 2)",
            ],
            extras: [
              "Stipend worth",
              "MERN Stack Course",
              "Priority support",
              "SEO & Performance Optimization",
              "Freelancing Guide",
              "Industry Based Webinars",
              "Access to Paid Resources Free (eBooks, templates, premium tools)",
            ],
          },
          {
            title: "28 Days Training",

            description: "Join our  28-Day Advanced Web Development Training ! Gain  in-depth coding experience , master front-end and back-end development , and work on  real-world web development projects  to build a strong portfolio.",

            benefits: [
              "HTML, CSS, JavaScript (Basics + Advance)",
              "3x Real projects + Portfolio Building",
              "One-to-one guidance",
              "Course Certification",
              "Internship for All Participants",
              "Stipend worth (1k INR)",
              "MERN Stack Course (Basics)",
              "Priority support (14x7)",
            ],
            extras: [
              "SEO & Performance Optimization",
              "Freelancing Guide",
              "Industry Based Webinars",
              "Access to Paid Resources Free (eBooks, templates, premium tools)",
            ],
          },
          {
            title: "45 Days Training",

            description: "Join our 45-Day Full-Stack Web Development Training ! Master front-end and back-end technologies , work on real-world web development projects , and gain expert-level coding experience  to launch your career in tech.",


            benefits: [
              "HTML, CSS, JavaScript (Basics + Advance)",
              "Portfolio Building",
              "Group guidance",
              "Course Certification",
              "Internship Opportunity (Only top 2)",
              "Stipend worth (3k INR)",
              "MERN Stack Course",
              "Priority support",
            ],
            extras: [
              "SEO & Performance Optimization",
              "Freelancing Guide",
              "Industry Based Webinars",
              "Access to Paid Resources Free (eBooks, templates, premium tools)",
            ],
          },
        ].map((program, index) => (
          <div key={index} className="max-w-md w-full md:w-96 bg-gray-950 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 m-5 relative">
            {/* Company Logo */}
            <div className="absolute top-4 right-4">
              <img src={companyLogo} alt="Company Logo" className="w-12 h-12" />
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold mb-4">{program.title}</h2>

            {/* Description */}

            <p className="mb-4 text-justify">{program.description}</p>


            {/* Benefits */}
            <div className="bg-gray-100 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Benefits</h3>
              <ul className="text-gray-700 text-sm space-y-2">
                {program.benefits.map((benefit, i) => (
                  <li key={i} className="flex items-center">
                    <TiTick className="text-green-400 size-5 mr-2" /> {benefit}
                  </li>
                ))}
                {program.extras.map((extra, i) => (
                  <li key={i} className="flex items-center text-gray-400">
                    <GoDash className="size-5 mr-2" /> {extra}
                  </li>
                ))}
              </ul>
            </div>

            {/* Buttons */}
            <div className="flex justify-center space-x-4 mt-4">
              <Link to="/intern-contactForm" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
                Apply Now
              </Link>
              <Link to="/learn-more" className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition">
                Learn More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Internship;