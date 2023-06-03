import React, { useState, useEffect } from "react";
import "./EventListsPage.css";
import api, { client } from "../../apis/apis";

const EventLists = () => {
  const [documents, setDocuments] = useState([]);

  //REALTIME CREATION, UPDATION AND DELETION.

  useEffect(() => {
    const unsubscribe = client.subscribe("documents", (response) => {
      if (
        response.events.includes("databases.*.collections.*.documents.*.create")
      ) {
        console.info("New Document has been created!");
        setDocuments((documents) => [...documents, response.payload]);
      } else if (
        response.events.includes("databases.*.collections.*.documents.*.update")
      ) {
        console.info("Document has been updated");
        setDocuments((documents) =>
          documents.map((doc) => {
            if (doc.$id === response.payload.$id) {
              return response.payload;
            } else {
              return doc;
            }
          })
        );
      } else if (
        response.events.includes("databases.*.collections.*.documents.*.delete")
      ) {
        console.info("Document has been deleted!");
        setDocuments((documents) =>
          documents.filter((doc) => {
            return doc.$id !== response.payload.$id;
          })
        );
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  // GETTING LIST OF EVENTS

  useEffect(() => {
    const listDocuments = async () => {
      try {
        const response = await api.eventslists();
        // console.info("List of documents:", response.documents);
        setDocuments(response.documents);
      } catch (error) {
        console.error("Error retrieving documents:", error);
      }
    };

    listDocuments();
  }, []);

  if (documents) {
    return (
      <React.Fragment>
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
        <div>
          <p>Loading...</p>
        </div>
      </React.Fragment>
    );
  }
};

export default EventLists;
