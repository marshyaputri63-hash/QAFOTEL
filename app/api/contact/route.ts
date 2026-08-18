import { NextResponse } from "next/server";
import { z } from "zod";
import { db } from "@/db";
import { contactSubmission } from "@/db/schema/contact";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email"),
  inquiry: z.string().min(1).max(100),
  message: z.string().min(1, "Message is required").max(2000),
});

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const parsed = contactSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { error: "Data tidak valid", details: parsed.error.flatten() },
        { status: 400 },
      );
    }

    const { name, email, inquiry, message } = parsed.data;

    const [row] = await db
      .insert(contactSubmission)
      .values({ name, email, inquiry, message })
      .returning({ id: contactSubmission.id });

    return NextResponse.json(
      { success: true, id: row.id },
      { status: 201 },
    );
  } catch (err) {
    console.error("Failed to save contact submission:", err);
    return NextResponse.json(
      { error: "Terjadi kesalahan pada server" },
      { status: 500 },
    );
  }
}
