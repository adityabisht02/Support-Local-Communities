import React, { useEffect, useState } from 'react';
import { Client as Appwrite, Databases } from 'appwrite';
import { Server } from '../utils/config';
import { AiOutlineMail, AiOutlinePhone, AiOutlineCalendar, AiOutlineEnvironment } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';
import './Donation.css';
import Navigation from './Navigation';

const DonationList = () => {
  const [donations, setDonations] = useState([]);
  const [statusFilter, setStatusFilter] = useState('all');
  const [locationFilter, setLocationFilter] = useState('all');

  useEffect(() => {
    fetchData();
  }, [statusFilter, locationFilter]);

  const fetchData = async () => {
    try {
      const appwrite = new Appwrite();
      const database = new Databases(appwrite);
      appwrite.setEndpoint("https://cloud.appwrite.io/v1").setProject("646848cf83cf66ebfe7c");

      const response = await database.listDocuments(
        '64689fe1bca86b952f51',
        '6468a0342d1d8955e8c3',
      );

      if (response.documents) {
        setDonations(response.documents);
      }
    } catch (error) {
      console.error('Error in fetching data:', error);
    }
  };

  return (
    <React.Fragment>
    <Navigation/>
    <div className='donationPost'>
      <br />
      <div className="donation-list">
        <div className="title">
          <p>Donation List</p>
          <div className='addDonation' align='center'>
            <button type='submit'>
              <a href='/createDonation'>Create a donation post</a>
            </button>
          </div>
          <div className="filter-container">
            <label>Status:</label>
            <select value={statusFilter} onChange={(e) => setStatusFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="open">Open</option>
              <option value="closed">Closed</option>
            </select>

            <label>Location:</label>
            <select value={locationFilter} onChange={(e) => setLocationFilter(e.target.value)}>
              <option value="all">All</option>
              <option value="Pune">Pune</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
              <option value="Chennai">Chennai</option>
              <option value="Delhi">Delhi</option>
            </select>
          </div>
        </div>



        <div className="donation-cards-container">
          {donations.map((donation) => (
            <div key={donation.$id} className="donation-card">
              {/* {donation.image && <img src={`https://64698f415734ecd90ca9/v1/storage/files/${donation.image}`} alt="Donation" />} */}
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
              <div align='center'>
                <a href={"/"} className="payment-link">
                  <button className="donate-button" type="submit">Donate Now</button>
                </a>
                <a href={`/donations/:${donation.$id}`} className='postid'>
                  <button className="donate-button" type="submit">Go to Post</button>
                </a>
              </div>
              <br />
              <small>Posted at: {donation.date}</small>
            </div>
          ))}
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default DonationList;