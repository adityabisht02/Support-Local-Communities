import { Client, ID, Account, Databases, Storage } from "appwrite";
//import config credentials
import { Server } from "../utils/config";

const client = new Client();
client.setEndpoint(Server.endpoint).setProject(Server.project);
//creating account,database storage objs
const account = new Account(client);
const database = new Databases(client);
const storage = new Storage(client);

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
};

export default api;
