import React, { useEffect, useState } from 'react';
import { Client as Appwrite, Databases } from 'appwrite';
import { Server } from '../utils/config';

import './Donation.css';

const DonationList = () => {
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const appwrite = new Appwrite();
      const database = new Databases(appwrite);
      appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

      const response = await database.listDocuments(
        '64689fe1bca86b952f51',
        '6468a0342d1d8955e8c3'
      );

      if (response.documents) {
        setDonations(response.documents);
      }
    } catch (error) {
      console.error('Error in fetching data:', error);
    }
  };

  return (
    <div className='donationPost'>
    <div className="donation-list">
      <div align='center'>
        <h1>Donation List<hr/></h1>
    </div>
      <div className="donation-cards-container">
        {donations.map((donation) => (
          <div key={donation.$id} className="donation-card">
            <h3>{donation.title}</h3>
            <p>{donation.content}</p>
            <hr/>
            <div align='center'>
            <p><h3>Target Amount: ${donation.amount}</h3></p>
            <p>Donation so far: $0</p>
            <p>Email: {donation.email}</p>
            <p>Phone: {donation.phone}</p>
            <p>Timestamp: {donation.date}</p>
            <p>Location: {donation.location}</p>
            </div>
            <a href={"/"} className="payment-link">
              <button className="donate-button" type="submit">Donate Now</button>
            </a>

          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default DonationList;
