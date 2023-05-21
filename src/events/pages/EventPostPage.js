import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Client as Appwrite, Databases } from "appwrite";
import { Server } from "../utils/config";
import Navigation from "../components/navigation/Navigation";
import "./EventPostPage.css";

const EventDetails = () => {
  const { id } = useParams();

  const [document, setDocument] = useState(null);

  useEffect(() => {
    const getDocumentById = async (databaseId, collectionId, documentId) => {
      try {
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

        const response = await database.getDocument(
          databaseId,
          collectionId,
          documentId
        );
        setDocument(response);
      } catch (error) {
        console.error("Error retrieving document:", error);
      }
    };

    const databaseId = Server.databaseID;
    const collectionId = Server.collectionID;

    getDocumentById(databaseId, collectionId, id);
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
