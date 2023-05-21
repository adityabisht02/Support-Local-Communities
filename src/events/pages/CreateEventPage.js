import React, { useState } from "react";
import { Client as Appwrite, Databases } from "appwrite";
import { Server } from "../utils/config";
import Navigation from "../components/navigation/Navigation";
import "./CreateEventPage.css";

const CreateEvent = () => {
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [City, setCity] = useState("");
  const [Region, setRegion] = useState("");
  const [Address, setAddress] = useState("");
  const [Organizers, setOrganizers] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [Images, setImage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const appwrite = new Appwrite();
      const database = new Databases(appwrite);
      appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

      const data = {
        Name,
        Description,
        City,
        Region,
        Address,
        Organizers,
        Images,
        StartTime,
        EndTime,
      };

      const response = await database.createDocument(
        Server.databaseID,
        Server.collectionID,
        "unique()",
        data
      );
      console.log("Document created:");
      if (response) {
        window.location.replace("/events");
      }
    } catch (error) {
      console.error("Error in creating Document:", error);
    }
  };

  return (
    <React.Fragment>
      <Navigation />
      <div className="container">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-25">
              <label>Event Name</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                value={Name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Event name.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Event Description</label>
            </div>
            <div className="col-75">
              <textarea
                type="text"
                value={Description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="  Write something about event.."
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>City</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                value={City}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Region</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                value={Region}
                onChange={(e) => setRegion(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Address</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                value={Address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-25">
              <label>Organizers</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                value={Organizers}
                onChange={(e) => setOrganizers(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Timeline</label>
            </div>
            <div className="col-75">
              <input
                type="datetime-local"
                value={StartTime}
                onChange={(e) => setStartTime(e.target.value)}
              />
              <br />
              <input
                type="datetime-local"
                value={EndTime}
                onChange={(e) => setEndTime(e.target.value)}
              />
            </div>
          </div>
          <div className="row">
            <div className="col-25">
              <label>Image</label>
            </div>
            <div className="col-75">
              <input
                type="text"
                value={Images}
                onChange={(e) => setImage(e.target.value)}
              />
            </div>
          </div>
          <div className="center">
            <input type="submit" value="Submit" />
          </div>
        </form>
      </div>
    </React.Fragment>
  );
};

export default CreateEvent;
