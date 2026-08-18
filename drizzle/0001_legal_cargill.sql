CREATE TABLE "contact_submissions" (
	"id" serial PRIMARY KEY NOT NULL,
	"name" text NOT NULL,
	"email" text NOT NULL,
	"inquiry" text NOT NULL,
	"message" text NOT NULL,
	"is_read" boolean NOT NULL,
	"created_at" timestamp NOT NULL
);
