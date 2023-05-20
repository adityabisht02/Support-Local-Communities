import React, { useEffect } from "react";
import { Client as Appwrite, Databases } from "appwrite";
import { Server } from "../utils/config";

const EventLists = () => {
  useEffect(() => {
    const listDocuments = async (databaseId, collectionId) => {
      try {
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

        const response = await database.listDocuments(databaseId, collectionId);
        console.log("List of documents:", response.documents);
        // Process the retrieved documents as needed
      } catch (error) {
        console.error("Error retrieving documents:", error);
      }
    };

    const databaseId = Server.databaseID; // Replace with your database ID
    const collectionId = Server.collectionID; // Replace with your collection ID

    listDocuments(databaseId, collectionId);
  }, []);

  return <div>My Component</div>;
};

export default EventLists;
