import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";
import "./EventPostPage.css";
import api from "../../apis/apis";

const EventDetails = () => {
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
      <Navigation />
      <div>
        {document ? (
          <div className="card">
            <img src={document.Images} alt="events-image" />
            <h1>
              <strong>{document.Name}</strong>
            </h1>
            <p className="price">
              {document.Region}, {document.City}, {document.Address}
            </p>
            <p className="price">
              <strong>Organized by: {document.Organizers}</strong>
            </p>
            <p className="price">From - {document.StartTime}</p>
            <p className="price">To - {document.EndTime}</p>
            <p>{document.Description}</p>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </React.Fragment>
  );
};

export default EventDetails;
