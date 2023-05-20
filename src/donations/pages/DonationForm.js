import React,{ useState } from 'react';
import { Client as Appwrite, Databases } from 'appwrite';
import { Server } from '../utils/config';


const CreateEvent = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");

    const handleSubmit = async (event)=>{
      event.preventDefault();
      try{
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
  
        const data = {
          title,
          content
        };
  
        const response = await database.createDocument("64689fe1bca86b952f51", "6468a0342d1d8955e8c3", "unique()", data);
        console.log("Document created:");
        if(response){
          alert("Post Created Successfully!")
          window.location.replace('/createDonation');
        }

      } catch(error){
        console.error("Error in creating Document:",error);
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
          <button type="submit">Create</button>
        </form>
      );
}

export default CreateEvent;