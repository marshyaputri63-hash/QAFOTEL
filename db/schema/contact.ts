import {
  pgTable,
  serial,
  text,
  timestamp,
  boolean,
} from "drizzle-orm/pg-core";

export const contactSubmission = pgTable("contact_submissions", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  inquiry: text("inquiry").notNull(),
  message: text("message").notNull(),
  isRead: boolean("is_read").$defaultFn(() => false).notNull(),
  createdAt: timestamp("created_at").$defaultFn(() => new Date()).notNull(),
});
