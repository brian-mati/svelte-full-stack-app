import { pgTable, serial, varchar, timestamp } from 'drizzle-orm/pg-core';

export const user = pgTable('user', {
	id: serial('id').primaryKey(),
	fullName: varchar('full_name').notNull(),
	email: varchar('email').notNull().unique(),
	password: varchar('password').notNull(),
	createdAt: timestamp('created_at').notNull().defaultNow(),
	updatedAt: timestamp('updated_at').defaultNow()
});
