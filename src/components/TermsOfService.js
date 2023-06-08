import React, { useContext,useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { ThemeContext } from "../ThemeContext";
import './Navbar.css';

const TermsOfService = () => {
    const { theme } = useContext(ThemeContext);
    const navbarCSS = theme === "dark" ? "navbar-dark" : "";

    const animationVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
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
                    <h2 className="text-3xl font-bold mb-6">Terms of Service</h2>

                    <div className="prose max-w-none">
                        <p className="mb-4"><i>Last updated on 8th June, 2023</i></p>
                        <p>
                            <b>Legal Compliance:</b> Support Local needs to ensure that its Services
                            comply with applicable laws and regulations in different
                            jurisdictions, especially regarding distribution, use, and
                            registration requirements. They must also address
                            industry-specific regulations, such as HIPAA and GLBA.
                        </p>
                        <p>
                            <b>Intellectual Property Protection:</b> Support Local must protect its
                            intellectual property rights, including copyrights, trademarks,
                            and service marks associated with their content and marks. They
                            need to prevent unauthorized copying, reproduction, distribution,
                            and exploitation of their Services.
                        </p>
                        <p>
                            <b>User-Generated Contributions:</b> Support Local should establish clear
                            guidelines for user-generated contributions, including submissions
                            and contributions posted through the Services. They need to
                            address ownership of intellectual property rights, rights granted
                            to the company, and prohibited activities to ensure the content
                            shared by users is legal, appropriate, and respectful.
                        </p>
                        <p>
                            <b>Product Representation:</b> Support Local needs to accurately represent
                            the products available on their platform, including their colors,
                            features, specifications, and details. They should address the
                            challenges of ensuring accurate electronic display and
                            availability of items, as well as the potential need to discontinue
                            products.
                        </p>
                        <p>
                            <b>Purchases and Payment:</b> Support Local must establish a secure and
                            reliable payment process for customers, accepting various forms of
                            payment. They need to ensure that customer information is accurate,
                            up-to-date, and protected, and handle issues such as pricing,
                            refunds, and order limitations effectively.
                        </p>
                        <p>
                            <b>Services Management:</b> Support Local needs to effectively manage the
                            Services, including monitoring for violations of legal terms,
                            taking legal action when necessary, and removing or disabling
                            inappropriate or burdensome content. They should also establish
                            mechanisms to protect their rights and property and ensure the
                            proper functioning of the Services.
                        </p>
                        <p>
                            <b>Privacy Policy:</b> Support Local should establish a comprehensive
                            privacy policy that addresses data privacy and security concerns.
                            They need to inform users about data collection, storage, and
                            usage practices, and comply with applicable privacy laws.
                        </p>
                        <p>
                            Overall, Support Local aims to create a legally compliant, secure,
                            and user-friendly platform that connects communities, supports
                            local artists, and fosters creativity while protecting
                            intellectual property rights and maintaining data privacy.
                        </p>
                    </div>
                    <div className="flex items-center mt-6">
                        <HiOutlineInformationCircle className="text-gray-500 mr-2" />
                        <p className="text-gray-500">
                            For more information, please contact us at
                            <a href="mailto:contact@supportlocalwith.us" className="text-blue-500 ml-1">
                                contact@supportlocalwith.us
                            </a>
                        </p>
                    </div>
                </motion.div>
            </div>
        </div>
    );
};

export default TermsOfService;
