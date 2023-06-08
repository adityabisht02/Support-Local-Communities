import React, { useState, useEffect, useContext } from "react";
import "../../index.css";
import NFTCard from "./NFTCard";
import { Client, Databases, Storage } from "appwrite";
import { Server } from "../utils/config";
import img from "./painting.jpg";
import { ThemeContext } from "../../ThemeContext";
import '../../components/Navbar.css';

function PaintingMarketplace() {
  const { theme } = useContext(ThemeContext);
  const navbarCSS = theme === "dark" ? "navbar-dark" : "";
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getAllArt() {
      const client = new Client();
      const databases = new Databases(client);

      client
        .setEndpoint(Server.endpoint) // Your API Endpoint
        .setProject(Server.project); // Your project ID

      let promise = databases.listDocuments(
        Server.databaseID,
        Server.collectionID,
        []
      );

      promise.then(
        function (response) {
          setData(response.documents);
          console.log(response.documents); // Success
        },
        function (error) {
          console.log(error); // Failure
        }
      );
    }
    getAllArt();
  }, []);
  const sampledata = [
    {
      title: "Madhubani Art",
      description: "A madhubani painting of an elephant",
      img: "https://cloud.appwrite.io/v1/storage/buckets/6468da15c5435898f194/files/1684617104296-fntmo/preview?project=646848cf83cf66ebfe7c",
      price: "0.01 HBAR",
    },
    {
      title: "Madhubani Art",
      description: "A madhubani painting of an elephant",
      img: img,
      price: "0.01 HBAR",
    },
    {
      title: "Madhubani Art",
      description: "A madhubani painting of an elephant",
      img: img,
      price: "0.01 HBAR",
    },
    {
      title: "Madhubani Art",
      description: "A madhubani painting of an elephant",
      img: img,
      price: "0.01 HBAR",
    },
  ];
  return (
    <React.Fragment>
      <div className={`navbar ${navbarCSS}`}>
        <div className="grid grid-cols-3">
          {data.map((value, index) => {
            return <NFTCard data={value} key={index} />;
          })}
        </div>
      </div>
    </React.Fragment>
  );
}

export default PaintingMarketplace;
