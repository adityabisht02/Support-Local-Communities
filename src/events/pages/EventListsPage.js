import React, { useState, useEffect } from "react";
import { Client as Appwrite, Databases } from "appwrite";
import { Server } from "../utils/config";

const EventLists = () => {
  const [documents,setDocuments] = useState([]);

  useEffect(() => {
    const listDocuments = async (databaseId, collectionId) => {
      try {
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

        const response = await database.listDocuments(databaseId, collectionId);
        console.log("List of documents:", response.documents);
        setDocuments(response.documents);
        // Process the retrieved documents as needed
      } catch (error) {
        console.error("Error retrieving documents:", error);
      }
    };

    const databaseId = Server.databaseID; // Replace with your database ID
    const collectionId = Server.collectionID; // Replace with your collection ID

    listDocuments(databaseId, collectionId);
  }, []);

  return (
    <div>
        <h1>Events</h1>
        <ul>
        {documents.map((document) => (
          <div>
          <li key={document.$id}><a href={`/event/${document.$id}`}><strong>{document.Name}</strong></a></li>
          <p>{document.Description}</p>
          <p>{document.Images}</p>
          </div>
        ))}
        </ul>
    </div>
  );
};

export default EventLists;


// Work to do - Search by city name or user current location
