import { headers } from "next/headers";
import { redirect } from "next/navigation";
import { desc } from "drizzle-orm";
import { auth } from "@/lib/auth";
import { db } from "@/db";
import { contactSubmission } from "@/db/schema/contact";
import { MessagesList } from "./messages-list";

export const dynamic = "force-dynamic";

export default async function MessagesPage() {
  const session = await auth.api.getSession({ headers: await headers() });
  if (!session) redirect("/sign-in");

  const submissions = await db
    .select()
    .from(contactSubmission)
    .orderBy(desc(contactSubmission.createdAt));

  const data = submissions.map((s) => ({
    id: s.id,
    name: s.name,
    email: s.email,
    inquiry: s.inquiry,
    message: s.message,
    isRead: s.isRead,
    createdAt: s.createdAt.toISOString(),
  }));

  const unreadCount = data.filter((s) => !s.isRead).length;

  return (
    <div className="flex flex-1 flex-col gap-4 p-4 md:p-6">
      <div>
        <h1 className="text-xl font-semibold">Pesan Kontak Masuk</h1>
        <p className="text-sm text-muted-foreground">
          {data.length} pesan total · {unreadCount} belum dibaca
        </p>
      </div>
      <MessagesList initial={data} />
    </div>
  );
}
