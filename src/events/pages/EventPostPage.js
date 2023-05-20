import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Client as Appwrite, Databases } from "appwrite";
import { Server } from "../utils/config";

const EventDetails = () => {
  const { id } = useParams(); 

  const [document, setDocument] = useState(null);

  useEffect(() => {
    const getDocumentById = async (databaseId, collectionId, documentId) => {
      try {
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

        const response = await database.getDocument(databaseId, collectionId, documentId);
        setDocument(response);
      } catch (error) {
        console.error("Error retrieving document:", error);
      }
    };

    const databaseId = Server.databaseID; // Replace with your database ID
    const collectionId = Server.collectionID; // Replace with your collection ID

    getDocumentById(databaseId, collectionId, id); // Use the ID from the URL
  }, [id]);

  return (
    <div>
      {document ? (
        <div>
          <h3>{document.Name}</h3>
          <p>{document.Description}</p>
          <p>{document.Address}</p>
          <p>{document.Organizers}</p>
          <p>{document.Timeline}</p>
          <p>{document.Images}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default EventDetails;
