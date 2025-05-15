import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const tasks = pgTable('tasks', {
	id: serial('id').primaryKey(),
	title: varchar('title').notNull(),
	content: varchar('content'),
	dueDate: timestamp('due_date').notNull(),
	createdAt: timestamp('created_at').defaultNow().notNull(),
	updatedAt: timestamp('updated_at').defaultNow()
});
