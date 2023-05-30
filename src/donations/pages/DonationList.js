import React, { useEffect, useState } from "react";
import { Client as Appwrite, Databases } from "appwrite";
import "./Donation.css";
import Navigation from "./Navigation";

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [statusFilter, setStatusFilter] = useState("all");
  const [locationFilter, setLocationFilter] = useState("all");
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, [statusFilter, locationFilter]);

  const fetchData = async () => {
    try {
      const appwrite = new Appwrite();
      const database = new Databases(appwrite);
      appwrite
        .setEndpoint("https://cloud.appwrite.io/v1")
        .setProject("646848cf83cf66ebfe7c");

      const response = await database.listDocuments(
        "64689fe1bca86b952f51",
        "6468a0342d1d8955e8c3"
      );

      if (response.documents) {
        setDonations(response.documents);
        const uniqueLocations = [...new Set(response.documents.map(donation => donation.location))];
        setUniqueLocations(uniqueLocations);
      }
    } catch (error) {
      console.error("Error in fetching data:", error);
    }
  };

  useEffect(() => {
    applyFilters();
  }, [donations, statusFilter, locationFilter]);

  const applyFilters = () => {
    let filteredData = donations;

    if (statusFilter !== "all") {
      filteredData = filteredData.filter(
        (donation) => donation.status === statusFilter
      );
    }

    if (locationFilter !== "all") {
      filteredData = filteredData.filter(
        (donation) => donation.location === locationFilter
      );
    }

    setFilteredDonations(filteredData);
  };

  return (
    <>
      <Navigation />
      <div className="donationPost">
        <br />
        <div className="donation-list">
          <div className="title">
            <p>Donation List</p>
            <div className="addDonation" align="center">
              <button type="submit">
                <a href="/createDonation">Create a donation post</a>
              </button>
            </div>
          </div>
          <div className="filter-container">
            <div>
              <label>Status:</label>
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">All</option>
                <option value="open">Open</option>
                <option value="closed">Closed</option>
              </select>
            </div>
            <div>
              <label>Location:</label>
              <select
                value={locationFilter}
                onChange={(e) => setLocationFilter(e.target.value)}
              >
                <option value="all">All</option>
                {uniqueLocations.map((location) => (
                  <option key={location} value={location}>
                    {location}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="donation-cards-container">
            {filteredDonations.length === 0 ? (
              <div className="no-donations-message">
                No nearby donation posts found.
              </div>
            ) : (
              filteredDonations.map((donation) => (
                <div key={donation.$id} className="donation-card">
                  <img
                    src={`https://www.gapio.in/wp-content/uploads/2022/05/1_4XRAX4obUOvMVqWibVCneQ.jpeg`}
                    alt="donation-images"
                  />
                  <h1 align="center">{donation.title}</h1>
                  <h>{donation.content}</h>
                  <br />
                  <br />
                  <hr />
                  <div align="left">
                    <h3>Target Amount: ${donation.amount}</h3>
                    <p>
                      Donation so far: $
                      {Math.floor(Math.random(0, donation.amount) * 100)}
                    </p>
                    <p>
                      Email:{" "}
                      <u>
                        <a href={`mailto:${donation.email}`}>{donation.email}</a>
                      </u>
                    </p>
                    <p>Phone: {donation.phone}</p>
                    <p>Location: {donation.location}</p>
                  </div>
                  <div align="center">
                    <a href={"https://buy.stripe.com/test_3csaHCdRHe1e5QAdQQ"} className="payment-link">
                      <button className="donate-button" type="submit">
                        Donate Now
                      </button>
                    </a>
                    <a href={`/donations/${donation.$id}`} className="postid">
                      <button className="donate-button" type="submit">
                        Go to Post
                      </button>
                    </a>
                  </div>
                  <br />
                  <small>Posted at: {donation.date}</small>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default DonationList;
