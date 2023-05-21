import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Client as Appwrite, Databases } from 'appwrite';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa';

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
    const url = window.location.href;
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = window.location.href;
    window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}`, '_blank');
  };

  const shareOnLinkedIn = () => {
    const url = window.location.href;
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, '_blank');
  };

  return (
    <React.Fragment>
    <Navigation/>
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

        <div className="donation-content">
          <h1>{donation.title}</h1>
          <p>{donation.content}</p>

          <div className="donation-details">
            <div className="donation-detail">
              <h3>Target Amount:</h3>
              <p>${donation.amount}</p>
            </div>
            <div className="donation-detail">
              <h3>Donation so far:</h3>
              <p>${Math.floor(Math.random() * donation.amount)}</p>
            </div>
            <div className="donation-detail">
              <h3>Email:</h3>
              <p><u><a href={`mailto:${donation.email}`}>{donation.email}</a></u></p>
            </div>
            <div className="donation-detail">
              <h3>Phone:</h3>
              <p>{donation.phone}</p>
            </div>
            <div className="donation-detail">
              <h3>Location:</h3>
              <p>{donation.location}</p>
            </div>
          </div>

          <div className="donation-actions">
            <a href="https://buy.stripe.com/test_3csaHCdRHe1e5QAdQQ" className="payment-link">
              <button className="donate-button" type="submit">Donate Now</button>
            </a>
            <small>Posted at: {donation.date}</small>
          </div>
        </div>
      <hr/>
        <div className="share-buttons">
          <p>Share this post:</p>
          <div className="social-icons">
            <FaFacebook onClick={shareOnFacebook} size={50} />
            <FaTwitter onClick={shareOnTwitter} size={50} />
            <FaLinkedin onClick={shareOnLinkedIn} size={50} />
          </div>
        </div>
      <hr/>
        <div className="comments">
          <div className="comment-box">
            <h3>Comments</h3>
            <div className="comment">
              <p>Comment 1</p>
              <p>Comment 2</p>
              <p>Comment 3</p>
            </div>

            <div className="comment-form">
              <h3>Leave a comment</h3>
              <form>
                <input type="text" placeholder="Name" />
                <textarea placeholder="Comment" />
                <button type="submit">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
    </React.Fragment>
  );
};

export default DonationPost;
