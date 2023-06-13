import React, { useContext,useEffect } from "react";
import { motion } from "framer-motion";
import { FaUsers, FaStar, FaHeart, FaSmile, FaLinkedin, FaGithub } from "react-icons/fa";
import logo from "../assets/logo.png";
import Suruchi from "../assets/aboutUs/suruchi.png";
import Aditya from "../assets/aboutUs/aditya.png";
import Vaishnavi from "../assets/aboutUs/vaishnavi.png";
import "./AboutUs.css";
import './Navbar.css';
import { ThemeContext } from "../context/ThemeContext";

const AboutUs = () => {
    const { theme } = useContext(ThemeContext);
    const navbarCSS = theme === "dark" ? "navbar-dark" : "";
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    
    return (
        <div className={`navbar ${navbarCSS}`}>
            <div className="about-us">
                <div className="header">
                    <img src={logo} alt="Logo" className="logo" />
                    <h2 className="text-3xl font-bold">About Us</h2>
                </div>
                <div className="content text-black">
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-black">Our Mission</h3>
                        <p className="text-black">
                            We strive to connect communities, empower local artists, and make a
                            positive impact through events, art marketplace, and donations. Our
                            goal is to foster creativity, cultural exchange, and support for
                            local causes.
                        </p>
                    </motion.div>
                    <motion.div
                        className="card"
                        initial={{ opacity: 0, y: 100 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <h3 className="text-2xl font-bold text-black">Our Vision</h3>
                        <p className="text-black">
                            Our vision is to create a vibrant and inclusive community where artists
                            can thrive, art enthusiasts can discover unique creations, and meaningful
                            connections can be made. We aim to be the platform that inspires, empowers,
                            and uplifts both artists and art lovers.
                        </p>
                    </motion.div>
                    <div className="features text-black">
                        <motion.div
                            className="feature-card"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaUsers className="icon" />
                            <h4>Community</h4>
                            <p>Bringing people together to celebrate and collaborate.</p>
                        </motion.div>
                        <motion.div
                            className="feature-card text-black"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaStar className="icon" />
                            <h4>Artistic Excellence</h4>
                            <p>Promoting and showcasing the work of talented local artists.</p>
                        </motion.div>
                        <motion.div
                            className="feature-card"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaHeart className="icon" />
                            <h4>Philanthropy</h4>
                            <p>Supporting local charities and making a difference.</p>
                        </motion.div>
                        <motion.div
                            className="feature-card"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                        >
                            <FaSmile className="icon" />
                            <h4>Joyful Experiences</h4>
                            <p>Creating memorable and enjoyable moments for everyone.</p>
                        </motion.div>
                    </div>
                    <motion.div
                        className="team-section"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <h3 className="text-2xl font-bold text-blue py-8">Meet Our Team</h3>
                        <div className="team-members">
                            <div className="team-member">
                                <img src={Suruchi} alt="Team Member 1" className="team-avatar" />
                                <h4>Suruchi Kumari</h4>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/suruchi-kumari-5b3445230" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="social-icon" />
                                    </a>
                                    <a href="https://github.com/coder12git" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="social-icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="team-member">
                                <img src={Aditya} alt="Team Member 2" className="team-avatar" />
                                <h4>Aditya Bisht</h4>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/aditya-bisht-567ba81ba" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="social-icon" />
                                    </a>
                                    <a href="https://github.com/adityabisht02" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="social-icon" />
                                    </a>
                                </div>
                            </div>
                            <div className="team-member">
                                <img src={Vaishnavi} alt="Team Member 3" className="team-avatar" />
                                <h4>Vaishnavi Kale</h4>
                                <div className="social-links">
                                    <a href="https://www.linkedin.com/in/vaishnavi-kale-111543204" target="_blank" rel="noopener noreferrer">
                                        <FaLinkedin className="social-icon" />
                                    </a>
                                    <a href="https://github.com/vaishnavi-3969" target="_blank" rel="noopener noreferrer">
                                        <FaGithub className="social-icon" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default AboutUs;
