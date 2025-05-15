ALTER TABLE "user" ADD COLUMN "full_name" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "email" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "password" varchar NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "created_at" timestamp DEFAULT now() NOT NULL;--> statement-breakpoint
ALTER TABLE "user" ADD COLUMN "updated_at" timestamp DEFAULT now();--> statement-breakpoint
ALTER TABLE "user" DROP COLUMN "age";--> statement-breakpoint
ALTER TABLE "user" ADD CONSTRAINT "user_email_unique" UNIQUE("email");