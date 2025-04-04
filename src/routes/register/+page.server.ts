import { fail, RequestEvent } from '@sveltejs/kit';
import { Client, Databases, ID } from 'appwrite';
import { PROJECT_ID, DATABASE_ID, USERS_COLLECTION_ID } from '$env/static/private';
import { Query } from 'node-appwrite';
import bcrypt from 'bcrypt';
const saltRounds = 10;
export const actions = {
	register: async ({ request, cookies }: RequestEvent) => {
		const data = await request.formData();
		const username = data.get('username');
		const password = data.get('password');
		const repeatPassword = data.get('repeat-password');
		const framework = data.get('selected-framework');

		if (!username) {
			return fail(400, { message: 'Enter username' });
		} else if (username.length < 3) {
			return fail(400, { message: 'Username must be at least 3 characters long' });
		} else if (username.length > 25) {
			return fail(400, { message: 'Username cant be more than 25 characters long' });
		}

		if (!password) {
			return fail(400, { message: 'Enter password' });
		} else if (password.length < 8) {
			return fail(400, { message: 'Password must be at least 8 characters long' });
		}

		if (!framework) {
			return fail(400, { message: 'Please select framework' });
		}

		if (password !== repeatPassword) {
			return fail(400, { message: 'Passwords do not match' });
		}

		//we hash the password, it says that await has no effect but without it whole thing breaks idk why
		const hashedPassword = await bcrypt.hash(password, saltRounds);
		try {
			const client = new Client()
				.setEndpoint('https://cloud.appwrite.io/v1')
				.setProject(PROJECT_ID);

			const databases = new Databases(client);

			const existingUsername = await databases.listDocuments(DATABASE_ID, USERS_COLLECTION_ID, [
				Query.equal('username', username)
			]);

			if (existingUsername.documents.length > 0) {
				return fail(400, { message: 'Username exists' });
			}

			await databases.createDocument(DATABASE_ID, USERS_COLLECTION_ID, ID.unique(), {
				username,
				password: hashedPassword,
				framework
			});

			return { success: true, message: 'Account created successfully' };
		} catch (e) {
			console.log(e);
		}
	}
};
