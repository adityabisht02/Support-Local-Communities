import React, { useState, useEffect } from "react";
import {
  Client as Appwrite,
  Databases,
  Locale,
  Query,
  Functions,
} from "appwrite";
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
        const trackUserFunctionID = Server.trackUserLocationFunctionID;
        const promise = await locale.get();
        const functions = new Functions(appwrite);
        const ip = promise.ip;
        const payload = `{"ip": "${ip}"}`;

        // tracking the user location by Appwrite Cloud Track User Location Function
        const data = functions.createExecution(trackUserFunctionID, payload);
        const city = (await data).response;
        console.log(city);

        const response = await database.listDocuments(
          databaseId,
          collectionId,
          [Query.search("City", city), Query.orderAsc("Name")]
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
