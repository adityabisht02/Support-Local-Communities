import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Client as Appwrite, Databases } from 'appwrite';
import { Server } from '../utils/config';

import './Donation.css';
import Navigation from './Navigation';

const DonationPost = () => {
  const { postId } = useParams();
  const [donation, setDonation] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const appwrite = new Appwrite();
      const database = new Databases(appwrite);
      appwrite.setEndpoint("https://cloud.appwrite.io/v1").setProject("646848cf83cf66ebfe7c");

      const response = await database.getDocument('64689fe1bca86b952f51', '6468a0342d1d8955e8c3', postId);

      if (response.$id) {
        setDonation(response);
      }
    } catch (error) {
      console.error('Error in fetching data:', error);
    }
  };

  if (!donation) {
    return <div>Loading...</div>;
  }

 
  return (
    <React.Fragment>
    <Navigation/>
    <div className='donationPost'>
      <div className="donation-list">
        <div className="title">
          <p>Donation Post</p>
        </div>

        <div className="donation-card">
          <img src={`https://www.gapio.in/wp-content/uploads/2022/05/1_4XRAX4obUOvMVqWibVCneQ.jpeg`} alt='donation-images' />
          <h1 align='center'>{donation.title}</h1>
          <h>{donation.content}</h>
          <br /><br />
          <hr />
          <div align='left'>
            <h3>Target Amount: ${donation.amount}</h3>
            <p>Donation so far: ${Math.floor(Math.random(0, donation.amount) * 100)}</p>
            <p>Email: <u><a href={`mailto:${donation.email}`}>{donation.email}</a></u></p>
            <p>Phone: {donation.phone}</p>
            <p>Location: {donation.location}</p>
          </div>
          {/* <div align='center'>
            <button className="donate-button" onClick={handleDonateNow}>Donate Now</button>
          </div> */}
          <br />
          <small>Posted at: {donation.date}</small>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default DonationPost;
