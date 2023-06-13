import React, { useContext, useState } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaPinterest } from "react-icons/fa";
import { ThemeContext } from "../context/ThemeContext";
import { FaHeart } from "react-icons/fa";
import './Footer.css';
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToButton";
import Confetti from 'react-confetti';

const Footer = () => {
  const { theme } = useContext(ThemeContext);
  const footerCSS = theme === "dark" ? "footer-dark" : "";
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setShowConfetti(true);
    setIsSubscribed(true);
    e.target.reset();
    setTimeout(() => {
      setShowConfetti(false);
      setIsSubscribed(false);
    }, 7000);
  };

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
          <div className="flex items-center" onSubmit={handleSubmit}>
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
            {isSubscribed && (
              <p className="text-green-500">Subscribed successfully!</p>
            )}
            <div className="text-sm">
              <a href='mailto:support@localcommunities.com'>support@localcommunities.com</a>
              <p>
                <a href="tel:+91 1234567890">+91 1234567890</a>
              </p>
            </div>
          </div>
        </div>
        <div className="components container mx-auto mt-6">
          <ul className="flex justify-center space-x-6">
            <li>
              <Link to="/aboutUs">About Us</Link>
            </li>
            <li>
              <Link to="/termsOfService">Terms of Service</Link>
            </li>
            <li>
              <Link to="/privacyPolicy">Privacy Policy</Link>
            </li>
            <li>
              <Link to="/contactUs">Contact</Link>
            </li>
          </ul>
        </div>
        <p className="text-4xl text-center mt-6 text-bold text-lg font-bold">
          © 2023 Support Local Communities. All rights reserved.
          <br />
          <pre className="text-4xl"> Made with <span class="sparkling-heart">&#10084;</span> using React JS, Appwrite and Tailwind CSS</pre>
        </p>
        <div className="confetti-container">
          {showConfetti && <Confetti />}
          {isSubscribed && (
            <Confetti />
          )}
        </div>
      </footer>
      <ScrollToTopButton />
    </div>
  );
};

export default Footer;
