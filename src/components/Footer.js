import React,{useContext} from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";
import { ThemeContext } from "../ThemeContext";
import { FaHeart } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const footerCSS = theme === "dark" ? "footer-dark" : "";
  return (
    <div className={`footer ${footerCSS}`}>
    <footer className="bg-gray-900 text-white py-6">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center">
          <h3 className="text-xl font-bold mr-4">Follow Us</h3>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={24} className="text-white hover:text-blue-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={24} className="text-white hover:text-blue-400 transition-colors duration-300" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} className="text-white hover:text-pink-500 transition-colors duration-300" />
            </a>
            <a
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} className="text-white hover:text-blue-600 transition-colors duration-300" />
            </a>
            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaYoutube size={24} className="text-white hover:text-red-600 transition-colors duration-300" />
            </a>
            <a
              href="https://www.pinterest.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaPinterest size={24} className="text-white hover:text-red-500 transition-colors duration-300" />
            </a>
          </div>
        </div>
        <div className="flex items-center">
          <form className="mr-8">
            <input
              type="email"
              placeholder="Subscribe to our newsletter"
              className="bg-gray-800 text-white px-4 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-500"
            />
            <button
              type="submit"
              className="ml-2 bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md transition-colors duration-300"
            >
              Subscribe
            </button>
          </form>
          <div className="text-sm">
            <a href='mailto:support@localcommunities.com'>support@localcommunities.com</a>
            <p>
              <a href="tel:+91 1234567890">+91 1234567890</a>
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto mt-6">
        <ul className="flex justify-center space-x-6">
          <li>
            <a href="/">About Us</a>
          </li>
          <li>
            <a href="/">Terms of Service</a>
          </li>
          <li>
            <a href="/">Privacy Policy</a>
          </li>
          <li>
            <a href="/">Contact</a>
          </li>
        </ul>
      </div>
      <p className="text-4xl text-center mt-6 text-bold text-lg font-bold">
        © 2023 Support Local Communities. All rights reserved.
        <br/>
        <pre className="text-4xl"> Made with <span class="sparkling-heart">&#10084;</span> using React JS, Appwrite and Tailwind CSS</pre>
      </p>
    </footer>
    </div>
  );
};

export default Footer;
