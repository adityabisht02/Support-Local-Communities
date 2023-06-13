import React, { useState, useEffect, useContext } from "react";
import { Link, useParams } from "react-router-dom";
import "./EventPostPage.css";
import api from "../../apis/apis";
import { ThemeContext } from "../../context/ThemeContext";
import '../../components/Navbar.css';

const EventDetails = () => {
  const { theme } = useContext(ThemeContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";
  const { id } = useParams();

  const [document, setDocument] = useState(null);

  useEffect(() => {
    const getDocumentById = async (documentId) => {
      try {
        const response = await api.getEventById(documentId);
        setDocument(response);
      } catch (error) {
        console.error("Error retrieving document:", error);
      }
    };
    getDocumentById(id);
  }, [id]);

  return (
    <React.Fragment>
      <div className={`navbar ${navbarCSS}`}>
        {document ? (
          <div className="card">
            <img src={document.Images} alt="events-image" />
            <p className="text-4xl font-bold text-black">
              <strong>{document.Name}</strong>
            </p>
            <p className="price">
              {document.Region}, {document.City}, {document.Address}
            </p>
            <p className="price">
              <strong>Organized by: {document.Organizers}</strong>
            </p>
            <p className="price">From - {document.StartTime}</p>
            <p className="price">To - {document.EndTime}</p>
            <p className="text-black">{document.Description}</p>
            <Link to='/events'>
                    <button
                      type="button"
                      class="inline-block rounded bg-blue-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white  transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                      data-te-ripple-init
                      data-te-ripple-color="light"
                    >
                      Go Back
                    </button>
                  </Link>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default EventDetails;
