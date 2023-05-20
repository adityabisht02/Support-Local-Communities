import React, { useState, useEffect } from "react";
import { Client as Appwrite, Databases, Locale, Query } from "appwrite";
import { Server } from "../utils/config";

const GetEvents = () => {
  const [documents,setDocuments] = useState([]);

  useEffect(() => {
    const listDocuments = async (databaseId, collectionId) => {
      try {
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        const locale = new Locale(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
        const promise = await locale.get();
        const location = await fetch(`https://ipgeolocation.abstractapi.com/v1/?api_key=1f2b9a1faf86493db202d2e400534b03&ip_address=${promise.ip}`);

        const city = await location.json();

        const response = await database.listDocuments(databaseId, collectionId, 
          [
            Query.equal('Address', [city.city, city.region]),
            Query.orderAsc('Name'),
          ]
          );
        // console.log("List of documents:", response.documents);
        setDocuments(response.documents)


      } catch (error) {
        console.error("Error retrieving documents:", error);
      }
    };

    const databaseId = Server.databaseID; // Replace with your database ID
    const collectionId = Server.collectionID; // Replace with your collection ID

    listDocuments(databaseId, collectionId);
  }, []);

  if(documents.length>0){
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
  } else{
    return (
      <p>No events in your areas</p>
    )
  }
  
};

export default GetEvents;

