import React,{ useState } from 'react';
import { Client as Appwrite, Databases } from 'appwrite';
import { Server } from '../utils/config';


const CreateEvent = () => {
    const [Name, setName] = useState("");
    const [Description, setDescription] = useState("");
    const [Address, setAddress] = useState("");
    const [Organizers, setOrganizers] = useState("");
    const [Timeline, setTime] = useState("");
    const [Images, setImage] = useState("");

    const handleSubmit = async (event)=>{
      event.preventDefault();
      try{
        const appwrite = new Appwrite();
        const database = new Databases(appwrite);
        appwrite.setEndpoint(Server.endpoint).setProject(Server.project);
  
        const data = {
          Name,
          Description,
          Address,
          Organizers,
          Timeline,
          Images
        };
  
        const response = await database.createDocument(Server.databaseID, Server.collectionID, "unique()", data);
        console.log("Document created:", response);
  
        // Clear form inputs
        setName("");
        setDescription("");
        setAddress("");
        setOrganizers("");
        setTime("");
        setImage("");

      } catch(error){
        console.error("Error in creating Document: "+error);
      }
    } 

    return (
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name:</label>
            <input type="text" value={Name} onChange={(e) => setName(e.target.value)} />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" value={Description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div>
            <label>Address:</label>
            <input type="text" value={Address} onChange={(e) => setAddress(e.target.value)} />
          </div>
          <div>
            <label>Organizers:</label>
            <input type="text" value={Organizers} onChange={(e) => setOrganizers(e.target.value)} />
          </div>
          <div>
            <label>Timeline:</label>
            <input type="text" value={Timeline} onChange={(e) => setTime(e.target.value)} />
          </div>
          <div>
            <label>Image:</label>
            <input type="text" value={Images} onChange={(e) => setImage(e.target.value)} />
          </div>
          <button type="submit">Post</button>
        </form>
      );
}

export default CreateEvent;