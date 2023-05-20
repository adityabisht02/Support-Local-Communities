import React, { useState } from 'react';
import { createDonationPost } from '../api/api';

const DonationForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const donationData = {
        title,
        description,
      };

      await createDonationPost(donationData);

      setTitle('');
      setDescription('');

    } catch (error) {
      console.error('Error creating donation post:', error);
    }
  };

  return (
    <div>
      <h2>Create a Donation Post</h2>
      <form onSubmit={handleFormSubmit}>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <br />
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonationForm;
