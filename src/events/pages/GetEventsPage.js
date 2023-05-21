import React, { useState, useEffect } from "react";
import { Client as Appwrite, Databases, Locale, Query } from "appwrite";
import { Server } from "../utils/config";
import Navigation from "../components/navigation/Navigation";
import "./EventListsPage.css";

const GetEvents = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const listDocuments = async (databaseId, collectionId) => {
      try {
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        const locale = new Locale(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
        const promise = await locale.get();
        const location = await fetch(
          `https://ipgeolocation.abstractapi.com/v1/?api_key=1f2b9a1faf86493db202d2e400534b03&ip_address=${promise.ip}`
        );

        const city = await location.json();
        console.log(city);

        const response = await database.listDocuments(
          databaseId,
          collectionId,
          [Query.search("City", city.city), Query.orderAsc("Name")]
        );
        // console.log("List of documents:", response.documents);
        setDocuments(response.documents);
      } catch (error) {
        console.error("Error retrieving documents:", error);
      }
    };

    const databaseId = Server.databaseID; // Replace with your database ID
    const collectionId = Server.collectionID; // Replace with your collection ID

    listDocuments(databaseId, collectionId);
  }, []);

  if (documents.length > 0) {
    return (
      <React.Fragment>
        <Navigation />
        <section className="cards">
          {documents.map((document) => (
            <div className="card">
              <img src={document.Images} alt="Event-image" />
              <h1>{document.Name}</h1>
              <p className="price">
                {document.Region}, {document.City}
              </p>
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
        <p>No events in your areas</p>
      </React.Fragment>
    );
  }
};

export default GetEvents;
