import React, { useState, useEffect } from "react";
import { Client as Appwrite, Databases, Query } from "appwrite";
import { Server } from "../utils/config";
import Navigation from "../components/navigation/Navigation";
import "./EventListsPage.css";

const EventLists = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const listDocuments = async (databaseId, collectionId) => {
      try {
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

        const response = await database.listDocuments(
          databaseId,
          collectionId,
          [Query.orderAsc("Name")]
        );
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

  if (documents) {
    return (
      <React.Fragment>
        <Navigation />
        <section className="cards">
        {documents.map((document) => (
          <div className="card">
            <img src={document.Images} alt="Event-image" />
            <h1>{document.Name}</h1>
            <p className="price">{document.Region}, {document.City}</p>
            <p>{document.Organizers}</p>
            <p>
            <a href={`/event/${document.$id}`}>
              <button>Read More</button>
            </a>
            </p>
          </div>
        ))}
        </section>
      </React.Fragment>
    );
  } else {
    return (
      <React.Fragment>
        <Navigation />
        <div>
          <p>Loading...</p>
        </div>
      </React.Fragment>
    );
  }
};

export default EventLists;
