import Logo from "../assets/logo.png";
import { FaLinkedin } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaSquareThreads } from "react-icons/fa6";
export default function Footer() {
  return (
    <footer className="bg-[#0C0F12] py-10 text-gray-400 border-t border-gray-700">
      <div className="container mx-auto px-6 md:flex md:justify-between">
        <div>
          <h3 className="text-white text-xl font-semibold flex items-center gap-2">
            <img src={Logo} alt="SoftGear Logo" className="h-6" /> SoftGear
          </h3>
          <p className="mt-2">
            Transforming businesses through digital innovation
          </p>
          <div className="flex gap-4 mt-4">
            <a
              href="https://www.linkedin.com/company/softgear-technologies/posts/?feedView=all"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaLinkedin />
            </a>

            <a
              href="https://x.com/Softgear_Groups"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaSquareXTwitter />
            </a>
            <a
              href="https://www.instagram.com/qwiksnow/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white"
            >
              <FaInstagramSquare />
            </a>
            <a href="#" className="hover:text-white">
              <FaSquareThreads />
            </a>
          </div>
        </div>
        <div className="mt-6 md:mt-0">
          <h4 className="text-white font-semibold">Company</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Careers
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Blog
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Press
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h4 className="text-white font-semibold">Services</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Web Development
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Mobile Apps
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Software Solutions
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Digital Marketing
              </a>
            </li>
          </ul>
        </div>
        <div className="mt-6 md:mt-0">
          <h4 className="text-white font-semibold">Contact</h4>
          <ul className="mt-2 space-y-2">
            <li>
              <a href="#" className="hover:text-white">
                Contact Us
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Support
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Sales
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-white">
                Partners
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        © 2024 SoftGear Technologies. All rights reserved.
      </div>
    </footer>
  );
}
