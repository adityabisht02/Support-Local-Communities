import { Server } from '../utils/config';
import { createClient } from 'appwrite';

const appwriteClient = createClient({
  endpoint: Server.endpoint,
  project: Server.project,
});

export const createDonationPost = async (donationData) => {
  try {
    const response = await appwriteClient.database.createDocument(
      Server.collectionID,
      donationData,
      [],
      Server.databaseID
    );

    return response;
  } catch (error) {
    console.error('Error creating donation post:', error);
    throw error;
  }
};

export const getDonationPosts = async () => {
  try {
    const response = await appwriteClient.database.listDocuments(
      Server.collectionID,
      [],
      [],
      Server.databaseID
    );

    return response.documents;
  } catch (error) {
    console.error('Error getting donation posts:', error);
    throw error;
  }
};
