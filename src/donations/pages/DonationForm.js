import React, { useState } from 'react';
import { Client as Appwrite, Databases } from 'appwrite';
import { Server } from '../utils/config';
import './Donation.css';
import { AiOutlineMail, AiOutlinePhone, AiOutlineCalendar, AiOutlineEnvironment } from 'react-icons/ai';
import { FaMoneyBillWave } from 'react-icons/fa';
import { IoIosCreate } from 'react-icons/io';

const DonationForm = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [amount, setAmount] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [location,setLocation] = useState("");

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
        location,
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
    <div className='body'>
    <div align='center'>
            <h1><FaMoneyBillWave className="money-icon" />  Create a Donation<hr/></h1>
    </div>
    <div className="donation-form-container">
      <br/>
      <form onSubmit={handleSubmit} className="donation-form">
        <div className="form-group">
          <label htmlFor="title"><IoIosCreate />  Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="content"><IoIosCreate /> Description:</label>
          <textarea id="content" value={content} onChange={(e) => setContent(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="amount"><IoIosCreate /> Target Amount:</label>
          <input type="number" id="amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="email"><AiOutlineMail /> Email:</label>
          <input type="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="phone"><AiOutlinePhone /> Phone:</label>
          <input type="tel" id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="date"><AiOutlineCalendar /> Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div> 
        <div className="form-group">
          <label htmlFor="location"><AiOutlineEnvironment /> Location[City]:</label>
          <input type="text" id="location" value={location} onChange={(e) => setLocation(e.target.value)} />
        </div>     
        <button type="submit" className="submit-button">Create Post</button>
      </form>
    </div>
    </div>
  );
}

export default DonationForm;