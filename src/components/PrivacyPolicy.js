import React, { useContext,useEffect } from "react";
import { motion } from "framer-motion";
import { HiOutlineInformationCircle } from "react-icons/hi";
import { ThemeContext } from "../ThemeContext";
import './Navbar.css';

const PrivacyPolicy = () => {
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
            <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>

            <div className="prose max-w-none">
              <p className="mb-4">
                <i>Last updated on 8th June, 2023</i>
              </p>
              <p>
                <b>Data Collection:</b> Support Local collects and stores certain
                information when you visit our website or use our services. This
                includes information such as your IP address, browser type,
                device information, and usage data. We use this data to provide
                and improve our services, analyze trends, and personalize your
                experience.
              </p>
              <p>
                <b>Data Usage:</b> The information we collect may be used to
                communicate with you, deliver relevant content and advertising,
                provide support, and conduct research and analysis. We may also
                share your information with trusted third parties for these
                purposes.
              </p>
              <p>
                <b>Data Protection:</b> Support Local takes appropriate measures
                to protect your information from unauthorized access, alteration,
                disclosure, or destruction. We use industry-standard security
                techniques and regularly update our systems to ensure the
                security of your data.
              </p>
              <p>
                <b>Cookies:</b> We use cookies and similar tracking technologies
                to enhance your browsing experience, analyze usage patterns, and
                deliver personalized content and ads. You can control cookies
                through your browser settings or other tools.
              </p>
              <p>
                <b>Third-Party Links:</b> Our website may contain links to
                third-party websites or services. We are not responsible for the
                privacy practices or content of these third parties. We encourage
                you to review the privacy policies of those websites before
                providing any personal information.
              </p>
              <p>
                <b>Changes to the Policy:</b> We may update this Privacy Policy
                from time to time. We will notify you of any significant changes
                by posting the updated policy on our website or through other
                communication channels.
              </p>
              <p>
                <HiOutlineInformationCircle/>If you have any questions or concerns regarding our Privacy Policy,
                please contact us at
                <a
                  href="mailto:contact@supportlocalwith.us"
                  className="text-blue-500 ml-1"
                >
                  contact@supportlocalwith.us
                </a>
              </p>
            </div>
          </motion.div>
        </div>
      </div>
  );
};

export default PrivacyPolicy;
