import React, { useEffect, useState } from "react";
import { Client as Appwrite, Databases } from "appwrite";
import Navigation from "./Navigation";

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [locationFilter, setLocationFilter] = useState("all");
  const [filteredDonations, setFilteredDonations] = useState([]);
  const [uniqueLocations, setUniqueLocations] = useState([]);

  useEffect(() => {
    fetchData();
  }, [locationFilter]);

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
  }, [donations, locationFilter]);

  const applyFilters = () => {
    let filteredData = donations;

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
      <div className="container mx-auto py-8">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold">Donation List</h1>
          <div className="mt-4">
            <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
              <a href="/createDonation">Create a donation post</a>
            </button>
          </div>
        </div>
        <div className="mb-4">
          <label className="block">Location:</label>
          <select
            value={locationFilter}
            onChange={(e) => setLocationFilter(e.target.value)}
            className="py-2 px-4 border border-gray-300 rounded"
          >
            <option value="all">All</option>
            {uniqueLocations.map((location) => (
              <option key={location} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredDonations.length === 0 ? (
            <div className="text-center text-gray-500">
              No nearby donation posts found.
            </div>
          ) : (
            filteredDonations.map((donation) => (
              <div key={donation.$id} className="bg-white shadow rounded p-4">
                <img
                  src={donation.image}
                  alt="donation-images"
                  className="w-full h-40 object-cover mb-4 rounded"
                />
                <h2 className="text-xl font-bold text-center">{donation.title}</h2>
                <p className="mt-2 text-gray-600">{donation.content}</p>
                <hr className="my-4" />
                <div>
                <div className="donation-detail">
                    <h3 className="font-bold">Target Amount:</h3>
                    <p>${donation.amount}</p>
                    <div className="w-full bg-gray-200 h-3 rounded-full mt-2">
                      <div className="bg-blue-500 h-full rounded-full" style={{ width: `${Math.floor((donation.amount - (Math.floor(Math.random() * donation.amount) % donation.amount)) / donation.amount * 100)}%` }}></div>
                    </div>
                  </div>
                  <p>
                    Email:{" "}
                    <u>
                      <a href={`mailto:${donation.email}`}>{donation.email}</a>
                    </u>
                  </p>
                  <p>Phone: {donation.phone}</p>
                  <p>Location: {donation.location}</p>
                </div>
                <div className="text-center mt-4">
                  <a href="https://buy.stripe.com/test_3csaHCdRHe1e5QAdQQ" className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded">
                    Donate Now
                  </a>
                  <a href={`/donations/${donation.$id}`} className="inline-block bg-blue-500 text-white font-bold py-2 px-4 rounded ml-2">
                    Go to Post
                  </a>
                </div>
                <br />
                <small>Posted at: {donation.date}</small>
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default DonationList;
