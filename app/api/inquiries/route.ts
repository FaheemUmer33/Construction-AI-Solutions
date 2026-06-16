import { NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { contactSchema } from "@/lib/validations/contact";

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid inquiry payload." }, { status: 400 });
  }

  const supabase = await createClient();
  if (!supabase) {
    return NextResponse.json({ error: "Supabase environment variables are not configured." }, { status: 503 });
  }

  const { error } = await supabase.from("inquiries").insert(parsed.data);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  return NextResponse.json({ ok: true });
}
