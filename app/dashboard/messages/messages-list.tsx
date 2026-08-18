"use client";

import { useState } from "react";
import { toast } from "sonner";

type Submission = {
  id: number;
  name: string;
  email: string;
  inquiry: string;
  message: string;
  isRead: boolean;
  createdAt: string;
};

export function MessagesList({ initial }: { initial: Submission[] }) {
  const [submissions, setSubmissions] = useState(initial);

  async function toggleRead(id: number) {
    const res = await fetch(`/api/contact/${id}`, { method: "PATCH" });
    if (!res.ok) {
      toast.error("Gagal mengubah status");
      return;
    }
    setSubmissions((prev) =>
      prev.map((s) => (s.id === id ? { ...s, isRead: !s.isRead } : s)),
    );
  }

  async function remove(id: number) {
    if (!window.confirm("Hapus pesan ini?")) return;
    const res = await fetch(`/api/contact/${id}`, { method: "DELETE" });
    if (!res.ok) {
      toast.error("Gagal menghapus pesan");
      return;
    }
    setSubmissions((prev) => prev.filter((s) => s.id !== id));
    toast.success("Pesan dihapus");
  }

  if (submissions.length === 0) {
    return (
      <div className="rounded-xl border border-dashed p-10 text-center text-sm text-muted-foreground">
        Belum ada pesan masuk. Pesan dari form Hubungi Kami akan muncul di sini.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {submissions.map((s) => (
        <div
          key={s.id}
          className={`rounded-xl border p-4 shadow-sm ${
            s.isRead ? "border-border bg-muted/40" : "border-olive/40 bg-white"
          }`}
        >
          <div className="mb-1.5 flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="font-semibold">{s.name}</span>
              <span className="text-xs text-muted-foreground">{s.email}</span>
              {!s.isRead && (
                <span className="rounded-full bg-olive px-2 py-0.5 text-[10px] font-semibold text-white">
                  Belum dibaca
                </span>
              )}
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {new Date(s.createdAt).toLocaleString("id-ID")}
              </span>
              <button
                onClick={() => toggleRead(s.id)}
                className="rounded-md border border-border px-2 py-1 text-xs transition-colors hover:bg-muted"
              >
                {s.isRead ? "Tandai belum dibaca" : "Tandai dibaca"}
              </button>
              <button
                onClick={() => remove(s.id)}
                className="rounded-md border border-red-200 px-2 py-1 text-xs text-red-600 transition-colors hover:bg-red-50"
              >
                Hapus
              </button>
            </div>
          </div>
          <div className="mb-1.5 inline-block rounded-md bg-muted px-2 py-0.5 text-xs">
            {s.inquiry}
          </div>
          <p className="whitespace-pre-wrap text-sm leading-relaxed">
            {s.message}
          </p>
        </div>
      ))}
    </div>
  );
}
