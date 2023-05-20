import { Server } from '../utils/config';
import { Client } from 'appwrite';

const appwriteClient = new Client();

appwriteClient.setEndpoint(Server.endpoint);
appwriteClient.setProject(Server.project);

export const createDonationPost = async (donationData) => {
  try {
    const response = await appwriteClient.createDocument(
      Server.collectionID,
      donationData,
      ['*'], 
    );

    return response;
  } catch (error) {
    console.error('Error creating donation post:', error);
    throw error;
  }
};

export const getDonationPosts = async () => {
  try {
    const response = await appwriteClient.listDocuments(Server.collectionID);

    return response.documents;
  } catch (error) {
    console.error('Error getting donation posts:', error);
    throw error;
  }
};
