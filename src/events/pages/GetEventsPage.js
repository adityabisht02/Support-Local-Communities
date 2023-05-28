import React, { useState, useEffect } from "react";
import Navigation from "../components/navigation/Navigation";
import "./EventListsPage.css";
import api from "../../apis/apis";

const GetEvents = () => {
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const listDocuments = async () => {
      try {
        const response = await api.getEventByCurrentLocation();
        // console.log("List of documents:", response.documents);
        setDocuments(response.documents);
      } catch (error) {
        console.error("Error retrieving documents:", error);
      }
    };
    listDocuments();
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
