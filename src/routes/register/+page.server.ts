import { fail } from '@sveltejs/kit';
import { Client, Databases, ID } from 'appwrite';
import { PROJECT_ID, DATABASE_ID, USERS_COLLECTION_ID } from '$env/static/private';
export const actions = {
	register: async ({ request }) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const repeatPassword = data.get('repeat-password');

		if (!username) {
			return fail(400, { message: 'Enter username' });
		} else if (username.length < 3) {
			return fail(400, { message: 'Username at least 3 chars long' });
		} else if (username.length > 25) {
			return fail(400, { message: 'Username cant be more than 25 chars long' });
		}

		if (!password) {
			return fail(400, { message: 'Enter password' });
		} else if (password.length < 8) {
			return fail(400, { message: 'Password must be at least 3 chars long' });
		}

		if (password !== repeatPassword) {
			return fail(400, { message: 'Passwords do not match' });
		}

		try {
			const client = new Client()
				.setEndpoint('https://cloud.appwrite.io/v1')
				.setProject(PROJECT_ID);

			const databases = new Databases(client);

			await databases.createDocument(DATABASE_ID, USERS_COLLECTION_ID, ID.unique(), {
				username,
				password
			});

			return { success: true };
		} catch (e) {
			console.log(e);
		}
	}
};
