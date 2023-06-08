import {
  Client,
  ID,
  Account,
  Databases,
  Storage,
  Query,
  Locale,
  Functions,
} from "appwrite";
//import config credentials
import { Server } from "../utils/config";

export const client = new Client();
client.setEndpoint(Server.endpoint).setProject(Server.project);
//creating account,database storage objs
const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
const locale = new Locale(client);
const functions = new Functions(client);

let api = {
  createAccount: async (email, password, name) => {
    return await account.create(ID.unique(), email, password, name);
  },

  getAccount: async () => {
    return await account.get();
  },
  //creates user session valid till one year
  createSession: async (email, password) => {
    return await account.createEmailSession(email, password);
  },
  //upload image to bucket
  uploadImageToMarket: async (fileID, file) => {
    return await storage.createFile(Server.bucketID, fileID, file);
  },
  //retrieve view only link of a particular file from bucket
  viewImageFromMarket: async (fileID) => {
    return await storage.getFilePreview(Server.bucketID, fileID);
  },
  createArt: async (name, description, price, fileID) => {
    //firstly use the fileID to get the view only file url from the storage bucket
    const fileURL = await api.viewImageFromMarket(fileID);
    console.log(fileURL);
    //pass in the parameters and the file URL to be saved in the collection
    return await database.createDocument(
      Server.databaseID,
      Server.artcollectionID,
      ID.unique(),
      {
        title: name,
        description: description,
        price: price,
        fileId: fileURL,
      }
    );
  },
  viewAllArt: async () => {
    return await database.listDocuments(
      Server.databaseID,
      Server.artcollectionID,
      []
    );
  },
  deleteCurrentSession: async () => {
    return await account.deleteSession("current");
  },

  createDonationPost: async (data) => {
    return await database.createDocument(
      Server.databaseID,
      Server.donationcollectionID,
      ID.unique(),
      data
    );
  },
  getAllDonationPosts: async () => {
    return await database.listDocuments(
      Server.databaseID,
      Server.donationcollectionID
    );
  },
  getDonationPost: async (postId) => {
    return await database.getDocument(
      Server.databaseID,
      Server.donationcollectionID,
      postId
    );
  },
  //update donations collection with comment
  addComment: async (postId, updatedComments) => {
    return await database.updateDocument(
      Server.databaseID,
      Server.donationcollectionID,
      postId,
      {
        comments: JSON.stringify(updatedComments),
      }
    );
  },

  eventslists: async () => {
    return await database.listDocuments(
      Server.databaseID,
      Server.eventscollectionID,
      [Query.orderAsc("Name")]
    );
  },

  createEvent: async (data) => {
    return await database.createDocument(
      Server.databaseID,
      Server.eventscollectionID,
      ID.unique(),
      data
    );
  },

  getEventById: async (documentId) => {
    return await database.getDocument(
      Server.databaseID,
      Server.eventscollectionID,
      documentId
    );
  },

  getEventByCurrentLocation: async () => {
    const promise = await locale.get();
    const ip = promise.ip;
    const payload = `{"ip": "${ip}"}`;
    const data = functions.createExecution(
      Server.trackUserLocationFunctionID,
      payload
    );
    const city = (await data).response;
    console.log(city);
    return await database.listDocuments(
      Server.databaseID,
      Server.eventscollectionID,
      [Query.search("City", city), Query.orderAsc("Name")]
    );
  },

  updateEvents: (documentId, data) => {
    return database.updateDocument(
      Server.databaseID,
      Server.eventscollectionID,
      documentId,
      data
    );
  },
};

export default api;
