import { fail } from '@sveltejs/kit';
import { tasks } from '$lib/server/db/schema/task';
import { db } from '$lib/server/db';

import type { Actions } from './$types';

export const actions = {
	create: async ({ request }) => {
		const formData = await request.formData();
		const title = String(formData.get('title'));
		const content = String(formData.get('content'));
		const dueDateString = formData.get('dueDate');
		if (!title) {
			return fail(400, { title, missing: true });
		}
		if (!dueDateString) {
			return fail(400, { dueDateString, missing: true });
		}

		const dueDate = new Date(String(dueDateString));

		// Basic check to see if the conversion was successful and the date is valid
		if (isNaN(dueDate.getTime())) {
			return fail(400, { dueDate: dueDateString, invalid: true });
		}

		await db.insert(tasks).values({
			title: title,
			content: content,
			dueDate: dueDate
		});
		return { success: true };
	}
} satisfies Actions;
