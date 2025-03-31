import { ID, Databases, Client, Storage } from 'appwrite';
import { Buffer } from 'buffer';
import { InputFile } from 'node-appwrite/file';
import { PROJECT_ID, DATABASE_ID, POSTS_COLLECTION_ID, BUCKET_ID } from '$env/static/private';

export const actions = {
	post: async ({ request }) => {
		const data = await request.formData();
		const image = data.get('image');

		const arrayBuffer = await image.arrayBuffer();
		const buffer = Buffer.from(arrayBuffer);

		const client = new Client()
			.setEndpoint('https://cloud.appwrite.io/v1') // API Endpoint
			.setProject(PROJECT_ID); // project ID

		const storage = new Storage(client);

		const result = await storage.createFile(
			BUCKET_ID, // bucketId
			ID.unique(),
			InputFile.fromBuffer(buffer, 'sssss')
		);

		console.log(result);
	}
};
