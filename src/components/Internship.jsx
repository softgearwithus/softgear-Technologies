import React from "react";
import { Link } from "react-router-dom";
import companyLogo from "../assets/logo.png"; // Replace with actual logo path
import { TiTick } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";
import { GoDash } from "react-icons/go";
const Internship = () => {
  return (
    <div>
      <div className="bg-gray-950 py-12 px-6 md:px-20 text-center text-white">
        <h2 className="text-3xl font-bold text-white mb-4">
          Internship Program
        </h2>
        <p className="text-gray-300 mb-8">
          Gain hands-on experience and enhance your skills with Softgear
          Technologies' internship program.
        </p>
      </div>

      {/* Internship Details  */}
      <div className="flex flex-row justify-center items-center text-white bg-gray-950">
        <div className="max-w-md mx-auto bg-gray-950 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 m-5 relative w-96">
          {/* Company Logo */}
          <div className="absolute top-4 right-4">
            <img src={companyLogo} alt="Company Logo" className="w-12 h-12" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold  mb-4">14 Days Training</h2>

          {/* Description */}
          <p className=" mb-4">
            Join our team for a{" "}
            <span className="font-semibold">Web Development</span>{" "}
            <span className="font-semibold">14-day training</span>! Gain
            hands-on experience in web development, coding, and real-world
            projects..
          </p>

          {/* Qualifications & Skills */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {" "}
              Benefits
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> HTML, CSS,
                JavaScript (
                <span className="font-bold text-black pr-1">Basics</span> )
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" />
                Portfolio Building
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Group guidence
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Course
                Certification
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Internship
                Opportunity (Only top 2 )
              </li>
              <p> </p>
              <li className="flex items-center text-gray-400 ">
                <GoDash className="text-gray-400 size-5 mr-2" />
                Stipend worth 
              </li>
              <li className="flex items-center text-gray-400">
                <GoDash className="text-gray-400 size-5 mr-2" /> Mern Stack
                Course
              </li>

              <li className="flex items-center text-gray-400">
                <GoDash className="text-gray-400 size-5 mr-2" /> Priority
                support
              </li>

              <li className="flex items-center text-gray-400">
                <GoDash className="text-gray-400 size-5 mr-2" /> SEO &
                Performance Optimization
              </li>
              <li className="flex items-center text-gray-400">
                <GoDash className="text-gray-400 size-5 mr-2" /> Freelancing
                Guide
              </li>
              <li className="flex items-center text-gray-400">
                <GoDash className="text-gray-400 size-5 mr-2" /> Industry Based
                Webiners
              </li>
              <li className="flex items-center text-gray-400">
                <GoDash className="text-gray-400 size-5 mr-2" /> Access to Paid
                Resources Free ( eBooks, templates, premium tools)
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              to="/intern-contactForm"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/learn-more"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-gray-950 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 m-5 relative w-96">
          {/* Company Logo */}
          <div className="absolute top-4 right-4">
            <img src={companyLogo} alt="Company Logo" className="w-12 h-12" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold  mb-4">28 Days Training</h2>

          {/* Description */}
          <p className=" mb-4">
            Join our team for a{" "}
            <span className="font-semibold">Web Development</span>{" "}
            <span className="font-semibold">14-day training</span>! Gain
            hands-on experience in web development, coding, and real-world
            projects..
          </p>

          {/* Qualifications & Skills */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {" "}
              Benifites
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> HTML, CSS,
                JavaScript (
                <span className="font-bold text-black pr-1">
                  Basics + Advance
                </span>{" "}
                )
              </li>

              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" />
                <span className="font-bold text-black pr-1">3x</span> Real
                project + Portfolio Building
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> One 2 one
                guidence
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Course
                Certification
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Internship for
                All Participants
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Stipend worth
                (1k INR)
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Mern Stack
                Course (Basics)
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Priority
                support (14x7)
              </li>
              <li className="flex items-center text-gray-400">
                <GoDash className="text-green-400 size-5 mr-2" /> SEO &
                Performance Optimization
              </li>
              <li className="flex items-center text-gray-400">
                <GoDash className="text-green-400 size-5 mr-2 " /> Freelancing
                Guide
              </li>
              <li className="flex items-center text-gray-400">
                <GoDash className="text-gray-400 size-5 mr-2" /> Industry Based
                Webiners
              </li>
              <li className="flex items-center text-gray-400">
                <GoDash className="text-gray-400 size-5 mr-2" /> Access to Paid
                Resources Free ( eBooks, templates, premium tools)
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              to="/intern-contactForm"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/learn-more"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </Link>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-gray-950 shadow-lg rounded-lg overflow-hidden border border-gray-200 p-6 m-5 relative w-96">
          {/* Company Logo */}
          <div className="absolute top-4 right-4">
            <img src={companyLogo} alt="Company Logo" className="w-12 h-12" />
          </div>

          {/* Title */}
          <h2 className="text-2xl font-bold  mb-4">45 Days Training</h2>

          {/* Description */}
          <p className=" mb-4">
            Join our team for a{" "}
            <span className="font-semibold">Web Development</span>{" "}
            <span className="font-semibold">14-day training</span>! Gain
            hands-on experience in web development, coding, and real-world
            projects..
          </p>

          {/* Qualifications & Skills */}
          <div className="bg-gray-100 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-gray-800 mb-2">
              {" "}
              Benifites
            </h3>
            <ul className="text-gray-700 text-sm space-y-2">
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> HTML, CSS,
                JavaScript (
                <span className="font-bold text-black pr-1">Basics + Advance</span> )
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" />
                Portfolio Building
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Group guidence
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Course
                Certification
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Internship
                Opportunity (Only top 2 )
              </li>
              <p> </p>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" />
                Stipend worth (3k INR)
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Mern Stack
                Course
              </li>

              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Priority
                support
              </li>

              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> SEO &
                Performance Optimization
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Freelancing
                Guide
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Industry Based
                Webiners
              </li>
              <li className="flex items-center">
                <TiTick className="text-green-400 size-5 mr-2" /> Access to Paid
                Resources Free ( eBooks, templates, premium tools)
              </li>
            </ul>
          </div>

          {/* Buttons */}
          <div className="flex justify-center space-x-4 mt-4">
            <Link
              to="/intern-contactForm"
              className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Apply Now
            </Link>
            <Link
              to="/learn-more"
              className="bg-gray-200 text-gray-800 px-4 py-2 rounded-lg hover:bg-gray-300 transition"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Internship;
