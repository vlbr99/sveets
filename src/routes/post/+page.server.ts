import { ID, Databases, Client, Storage } from 'node-appwrite';
import { fail, redirect } from '@sveltejs/kit';
//IF YOU WANT THIS TO WORK YOU WILL NEED TO MAKE YOUR OWN ENV WITH YOUR DB AND STORAGE ID-S
import { PROJECT_ID, DATABASE_ID, POSTS_COLLECTION_ID, BUCKET_ID } from '$env/static/private';

//one mb of memory
const MB = 1024 * 1024;

export const actions = {
	post: async ({ request }) => {
		const data = await request.formData();

		//THOSE 3 LINES BELOW TAKE THE INPUT VALUE FROM THE FORM ON +PAGE.SVELTE
		const petImage = data.get('image');
		const petName = data.get('title');
		const petDescription = data.get('description');

		//we make a appwrite client
		const client = new Client().setEndpoint('https://cloud.appwrite.io/v1').setProject(PROJECT_ID);

		//we connect the appwrite storage and the database
		const storage = new Storage(client);
		const database = new Databases(client);

		//check if petName is there, and if length is too long
		if (!petName) {
			return fail(400, { message: 'Please enter a title' });
		} else if (petName.length > 128) {
			return fail(400, { message: "Title can't be longer than 128 characters" });
		}

		//check if petDescrition is there, and if length is too long
		if (!petDescription) {
			return fail(400, { message: 'Please enter a description' });
		} else if (petDescription.length > 512) {
			return fail(400, { message: "Description can't be longer than 512 characters" });
		}

		//check if petImage is there, and if size is greater than 5mb
		if (!petImage || petImage.size === 0) {
			return fail(400, { message: 'Please post a picture of your pet' });
		} else if (petImage.size > MB * 5) {
			return fail(400, { message: 'Image must me less than 5mb' });
		}

		//if everythin submited in form is fine we upload a image to a bucket
		try {
			//uplads a image to a bucket
			const result = await storage.createFile(BUCKET_ID, ID.unique(), petImage);
			if (result) {
				//so if there is result (if the image is uploaded) we upload the data to the db as a document
				const uploadedPetData = await database.createDocument(
					DATABASE_ID,
					POSTS_COLLECTION_ID,
					ID.unique(),
					{
						title: petName,
						description: petDescription,
						image: result.$id,
						by: 'test'
					}
				);
				//now if the uploadedPetData is there it means that everything is good
				//image is uploaded to the bucket, and data is written in db, we now redirect...
				if (uploadedPetData) {
					return { success: true };
				} else {
					return fail(400, { message: 'Data is not written in db.' });
				}
			}
		} catch (error) {
			//if something is wrong we catch the error that is visible in the console
			console.log(error);
		}
	}
};
