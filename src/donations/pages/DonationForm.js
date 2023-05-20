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
  
        const response = await database.createDocument(Server.databaseID, Server.collectionID, "unique()", data);
        console.log("Document created:");
        if(response){
          window.location.replace('/donations');
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
          <button type="submit">Post</button>
        </form>
      );
}

export default CreateEvent;