import { BUCKET_ID, DATABASE_ID, POSTS_COLLECTION_ID, PROJECT_ID } from '$env/static/private';
import { Client, Databases, Storage } from 'appwrite';

export const load = async () => {
	//we make a new appwrite client
	const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

	//we make a appwrite storage and database (with this we can pull the data)
	const storage = new Storage(client);
	const database = new Databases(client);

	//get the data from database and bucket
	const databaseData = await database.listDocuments(DATABASE_ID, POSTS_COLLECTION_ID);
	const storageData = await storage.listFiles(BUCKET_ID);

	//return the data to the client
	return { databaseData, storageData };
};
