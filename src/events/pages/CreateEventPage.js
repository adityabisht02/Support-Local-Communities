import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import "./CreateEventPage.css";
import api from "../../apis/apis";
import { ThemeContext } from "../../context/ThemeContext";
import { AuthContext } from "../../context/AuthContext";
import "../../components/Navbar.css";

const CreateEvent = () => {
  const { theme } = useContext(ThemeContext);
  const user = useContext(AuthContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";
  const [Name, setName] = useState("");
  const [Description, setDescription] = useState("");
  const [City, setCity] = useState("");
  const [Region, setRegion] = useState("");
  const [Address, setAddress] = useState("");
  const [Organizers, setOrganizers] = useState("");
  const [StartTime, setStartTime] = useState("");
  const [EndTime, setEndTime] = useState("");
  const [Images, setImage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!user.isLoggedIn) {
      alert("Login First !!");
      navigate("/login");
    }
    try {
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

      const response = await api.createEvent(data);
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
      <div className={`navbar ${navbarCSS}`}>
        <div className="container">
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-25">
                <label>Event Name</label>
              </div>
              <div className="col-75 text-black">
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
                  className="text-black"
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
                  className="text-black"
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
                  className="text-black"
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
                  className="text-black"
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
                  className="text-black"
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
                  className="text-black"
                  type="datetime-local"
                  value={StartTime}
                  onChange={(e) => setStartTime(e.target.value)}
                />
                <br />
                <input
                  className="text-black"
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
                  className="text-black"
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
      </div>
    </React.Fragment>
  );
};

export default CreateEvent;
