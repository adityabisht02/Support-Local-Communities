import React, { useEffect, useState } from 'react';
import { getDonationPosts } from '../api/api';

const DonationList = () => {
  const [donationPosts, setDonationPosts] = useState([]);

  useEffect(() => {
    const fetchDonationPosts = async () => {
      try {
        const posts = await getDonationPosts();
        setDonationPosts(posts);
      } catch (error) {
        console.error('Error getting donation posts:', error);
      }
    };

    fetchDonationPosts();
  }, []);

  return (
    <div>
      <h2>Donation Posts</h2>
      {donationPosts.map((post) => (
        <div key={post.$id}>
          <h3>{post.title}</h3>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default DonationList;
