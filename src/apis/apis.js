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

const client = new Client();
client.setEndpoint(Server.endpoint).setProject(Server.project);
//creating account,database storage objs
const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);
const locale = new Locale(client);
const functions = new Functions(client);

let api = {
  createAccount: (email, password, name) => {
    return account.create(ID.unique(), email, password, name);
  },

  getAccount: () => {
    return account.get();
  },
  //creates user session valid till one year
  createSession: (email, password) => {
    return account.createEmailSession(email, password);
  },

  deleteCurrentSession: () => {
    return account.deleteSession("current");
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
      "unique()",
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
};

export default api;
