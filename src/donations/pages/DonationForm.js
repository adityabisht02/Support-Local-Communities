import React, { useState } from 'react';
import { Client } from 'appwrite';
import { Server } from '../utils/config';

const DonationForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    try {
      const appwrite = new Client();
      appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

      // Create a new donation document
      const response = await appwrite.createDocument(
        Server.collectionID,
        {
          title,
          content,
        },
        ['*'],
        []
      );

      console.log('Donation created:', response);
      
      // Reset form fields
      setTitle('');
      setContent('');
    } catch (error) {
      console.error('Error creating donation:', error);
    }
  };

  return (
    <div>
      <h2>Make a Donation</h2>
      <form onSubmit={handleFormSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="content">Content:</label>
          <input
            type="text"
            id="content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>
        <button type="submit">Donate</button>
      </form>
    </div>
  );
};

export default DonationForm;
