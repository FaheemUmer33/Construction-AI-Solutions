"use client";

import { useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { createClient } from "@/lib/supabase/client";

type Row = Record<string, any>;

export function AdminCrud({
  table,
  rows,
  fields,
  title
}: {
  table: string;
  rows: Row[];
  fields: string[];
  title: string;
}) {
  const empty = useMemo(() => Object.fromEntries(fields.map((field) => [field, ""])), [fields]);
  const [items, setItems] = useState<Row[]>(rows);
  const [draft, setDraft] = useState<Row>(empty);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function normalize(value: string) {
    if (value === "true") return true;
    if (value === "false") return false;
    if (/^\d+$/.test(value)) return Number(value);
    if (value.startsWith("[") || value.startsWith("{")) {
      try { return JSON.parse(value); } catch { return value; }
    }
    return value;
  }

  async function save() {
    setMessage("");
    const supabase = createClient();
    const payload = Object.fromEntries(fields.map((field) => [field, normalize(String(draft[field] ?? ""))]));
    const request = editingId
      ? supabase.from(table).update(payload).eq("id", editingId).select()
      : supabase.from(table).insert(payload).select();
    const { data, error } = await request;
    if (error) setMessage(error.message);
    else if (data?.[0]) {
      setItems((current) => editingId ? current.map((item) => item.id === editingId ? data[0] : item) : [data[0], ...current]);
      setDraft(empty);
      setEditingId(null);
      setMessage("Saved.");
    }
  }

  async function remove(id: string) {
    const supabase = createClient();
    const { error } = await supabase.from(table).delete().eq("id", id);
    if (error) setMessage(error.message);
    else setItems((current) => current.filter((item) => item.id !== id));
  }

  function edit(row: Row) {
    setEditingId(row.id);
    setDraft(Object.fromEntries(fields.map((field) => [field, typeof row[field] === "object" ? JSON.stringify(row[field]) : row[field] ?? ""])));
  }

  return (
    <div className="grid gap-8">
      <section className="rounded-lg border border-white/10 bg-white/[0.04] p-5">
        <h2 className="font-display text-xl font-medium tracking-[0.01em]">{editingId ? `Edit ${title}` : `Create ${title}`}</h2>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
          {fields.map((field) => (
            <label key={field} className="grid gap-2 text-sm text-slate-300">
              {field.replaceAll("_", " ")}
              <textarea rows={field.includes("description") || field === "bio" || field === "message" ? 4 : 1} className="rounded-md border border-white/10 bg-white/5 px-3 py-2 text-white" value={draft[field] ?? ""} onChange={(e) => setDraft({ ...draft, [field]: e.target.value })} />
            </label>
          ))}
        </div>
        {message ? <p className="mt-4 text-sm text-safety">{message}</p> : null}
        <div className="mt-5 flex gap-3">
          <Button onClick={save}>Save</Button>
          {editingId ? <Button variant="secondary" onClick={() => { setEditingId(null); setDraft(empty); }}>Cancel</Button> : null}
        </div>
      </section>
      <section className="overflow-x-auto rounded-lg border border-white/10 bg-white/[0.04]">
        <table className="w-full min-w-[900px] text-left text-sm">
          <thead className="bg-white/[0.06] text-slate-300"><tr>{["Title/Name", "Status", "Actions"].map((h) => <th key={h} className="p-4">{h}</th>)}</tr></thead>
          <tbody className="divide-y divide-white/10">
            {items.map((row) => (
              <tr key={row.id}>
                <td className="p-4 font-medium text-white">{row.title ?? row.full_name ?? row.person_name ?? row.key ?? row.email ?? row.id}</td>
                <td className="p-4 text-slate-300">{String(row.status ?? row.is_published ?? "editable")}</td>
                <td className="flex gap-2 p-4"><Button variant="secondary" onClick={() => edit(row)}>Edit</Button><Button variant="ghost" onClick={() => remove(row.id)}>Delete</Button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}
