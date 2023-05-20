import React, { useState } from 'react';
import { Client as Appwrite, Databases } from 'appwrite';
import { Server } from '../utils/config';


const DonationForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const appwrite = new Appwrite();
      const database = new Databases(appwrite);
      appwrite.setEndpoint(Server.endpoint).setProject(Server.project);

      const data = {
        title,
        content,
        amount,
        email,
        phone,
        date,
      };

      const response = await database.createDocument(
        '64689fe1bca86b952f51',
        '6468a0342d1d8955e8c3',
        'unique()',
        data
      );
      console.log(response);

      console.log("Document created:");
      if (response) {
        alert("Post Created Successfully!")
        window.location.replace('/donations');
      }

    } catch (error) {
      console.error("Error in creating Document:", error);
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Title:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" value={content} onChange={(e) => setContent(e.target.value)} />
      </div>
      <div>
        <label>Target Amount:</label>
        <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div>
        <label>Phone:</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
      </div>
      
      <button type="submit">Create Post</button>
    </form>
  );
}

export default DonationForm;