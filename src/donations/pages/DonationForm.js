import React, { useState } from 'react';
import appwrite from 'appwrite';
import axios from 'axios';

const endpoint = '';
const projectId = '';

// Initializing the Appwrite SDK
const sdk = new appwrite.SDK({
  endpoint,
  project: projectId,
});

const DonationForm = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Create a new donation post in Appwrite
      const response = await sdk.database.createDocument('collectionsId', {
        title,
        description,
      });

      // Clear form inputs
      setTitle('');
      setDescription('');

      console.log('Donation post created:', response);
    } catch (error) {
      console.log('Error creating donation post:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Create Donation Post</button>
    </form>
  );
};

export default DonationForm;
