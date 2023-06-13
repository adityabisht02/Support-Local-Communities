import React, { useContext,useEffect } from "react";
import { motion } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import './Navbar.css';

const ContactUs = () => {
  const { theme } = useContext(ThemeContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";

  const animationVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -180 },
    visible: { opacity: 1, y: 0, rotateX: 0 },
  };
  useEffect(() => {
    window.scrollTo(0, 0);
}, []);
  return (
    <div className={`navbar ${navbarCSS}`}>
        <div className="container mx-auto">
          <motion.div
            className="bg-white rounded-lg shadow p-6 text-black"
            initial="hidden"
            animate="visible"
            variants={animationVariants}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">Contact Us</h2>

            <div className="prose max-w-none">
              <p>
                We'd love to hear from you! If you have any questions, feedback,
                or inquiries, please fill out the form below or reach out to us
                using the provided contact information.
              </p>
            </div>

            <div className="mt-8">
              <form className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block mb-2 font-bold">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block mb-2 font-bold">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div className="col-span-2">
                  <label htmlFor="message" className="block mb-2 font-bold">
                    Message
                  </label>
                  <textarea
                    id="message"
                    className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    rows="6"
                    placeholder="Your Message"
                  ></textarea>
                </div>
                <div className="col-span-2">
                  <button
                    type="submit"
                    className="w-full py-2 px-4 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
                  >
                    Send Message
                  </button>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default ContactUs;
