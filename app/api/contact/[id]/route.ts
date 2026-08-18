import { NextResponse } from "next/server";
import { headers } from "next/headers";
import { eq } from "drizzle-orm";
import { z } from "zod";
import { db } from "@/db";
import { auth } from "@/lib/auth";
import { contactSubmission } from "@/db/schema/contact";

const paramsSchema = z.object({
  id: z.coerce.number().int().positive(),
});

async function requireAdmin() {
  const session = await auth.api.getSession({ headers: await headers() });
  return session ?? null;
}

export async function PATCH(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = paramsSchema.parse(await params);

  const [row] = await db
    .select({ isRead: contactSubmission.isRead })
    .from(contactSubmission)
    .where(eq(contactSubmission.id, id));

  if (!row) {
    return NextResponse.json({ error: "Pesan tidak ditemukan" }, { status: 404 });
  }

  const [updated] = await db
    .update(contactSubmission)
    .set({ isRead: !row.isRead })
    .where(eq(contactSubmission.id, id))
    .returning({ id: contactSubmission.id, isRead: contactSubmission.isRead });

  return NextResponse.json({ success: true, id: updated.id, isRead: updated.isRead });
}

export async function DELETE(
  request: Request,
  { params }: { params: Promise<{ id: string }> },
) {
  const session = await requireAdmin();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }
  const { id } = paramsSchema.parse(await params);

  const [deleted] = await db
    .delete(contactSubmission)
    .where(eq(contactSubmission.id, id))
    .returning({ id: contactSubmission.id });

  if (!deleted) {
    return NextResponse.json({ error: "Pesan tidak ditemukan" }, { status: 404 });
  }

  return NextResponse.json({ success: true, id: deleted.id });
}
