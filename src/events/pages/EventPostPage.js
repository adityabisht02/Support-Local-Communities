import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import "./EventPostPage.css";
import api from "../../apis/apis";
import { ThemeContext } from "../../ThemeContext";
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
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default EventDetails;
