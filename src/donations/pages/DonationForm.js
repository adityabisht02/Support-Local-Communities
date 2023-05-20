import React, { useState } from 'react';
import { createDonationPost } from '../api/api';

const DonationForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const donationData = {
        title,
        content,
      };

      await createDonationPost(donationData);

      setTitle('');
      setContent('');
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
        <label htmlFor="content">Content:</label>
        <textarea
          id="content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        ></textarea>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DonationForm;
