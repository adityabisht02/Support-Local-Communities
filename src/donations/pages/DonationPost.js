import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Client as Appwrite, Databases } from 'appwrite';
import { Server } from '../utils/config';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

import './Donation.css';

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
      console.log('postId:', postId); 
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

  const shareOnFacebook = () => {
    console.log('Sharing on Facebook');
  };

  const shareOnTwitter = () => {
    console.log('Sharing on Twitter');
  };

  const shareOnLinkedIn = () => {
    console.log('Sharing on LinkedIn');
  };

  return (
    <div className='donationPost'>
      <div className="donation-list">
        <div className="title">
          <p>Donation Post</p>
        </div>

        <div className="donation-card">
        <div className="donation-card-image">
            <img src={`https://www.gapio.in/wp-content/uploads/2022/05/1_4XRAX4obUOvMVqWibVCneQ.jpeg`} alt='donation-images' />
        </div>

        </div>
          <h1 align='center'>{donation.title}</h1>
          <h>{donation.content}</h>
          <br /><br />
          <hr />
          <div align='left'>
            <h3>Target Amount: ${donation.amount}</h3>
            <p>Donation so far: ${Math.floor(Math.random() * donation.amount)}</p>
            <p>Email: <u><a href={`mailto:${donation.email}`}>{donation.email}</a></u></p>
            <p>Phone: {donation.phone}</p>
            <p>Location: {donation.location}</p>
          </div>
          <div align='center'>
            <a href={"/"} className="payment-link">
              <button className="donate-button" type="submit">Donate Now</button>
            </a>
            <a href={`/donations/${donation.$id}`} className='pid'>
              <button className="donate-button" type="submit">Go to Post</button>
            </a>

          </div>
          <br />
          <small>Posted at: {donation.date}</small>
          <div className="share-buttons">
            <p>Share this post:</p>
            <div className="social-icons">
              <FaFacebook onClick={shareOnFacebook} />
              <FaTwitter onClick={shareOnTwitter} />
              <FaLinkedin onClick={shareOnLinkedIn} />
            </div>
          </div>
        </div>
      </div>
  );
};

export default DonationPost;
