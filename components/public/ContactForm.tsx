"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Send } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { contactSchema, type ContactInput } from "@/lib/validations/contact";

const projectTypes = ["AI Site Monitoring", "Project Intelligence Dashboard", "Workflow Automation", "Client Communication Automation", "Infrastructure Delivery", "Construction Consulting"];
const budgets = ["To be discussed", "Under $25k", "$25k - $100k", "$100k - $500k", "$500k+"];

export function ContactForm() {
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");
  const form = useForm<ContactInput>({
    resolver: zodResolver(contactSchema),
    defaultValues: { full_name: "", email: "", phone: "", company: "", project_type: "", budget_range: "", message: "" }
  });

  async function onSubmit(values: ContactInput) {
    setStatus("idle");
    const response = await fetch("/api/inquiries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(values)
    });
    if (response.ok) {
      form.reset();
      setStatus("success");
    } else {
      setStatus("error");
    }
  }

  const input = "w-full rounded-md border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition placeholder:text-cas-mint/55 focus:border-cas-light focus:bg-white/[0.08] focus:shadow-[0_0_0_4px_rgba(165,199,183,0.16)]";

  return (
    <form onSubmit={form.handleSubmit(onSubmit)} className="industrial-card grid gap-4 rounded-lg p-5 md:p-7">
      <div className="grid gap-4 md:grid-cols-2">
        <label className="grid gap-2 text-sm text-slate-300">Full Name<input className={input} {...form.register("full_name")} /></label>
        <label className="grid gap-2 text-sm text-slate-300">Email<input className={input} type="email" {...form.register("email")} /></label>
        <label className="grid gap-2 text-sm text-slate-300">Phone<input className={input} {...form.register("phone")} /></label>
        <label className="grid gap-2 text-sm text-slate-300">Company<input className={input} {...form.register("company")} /></label>
        <label className="grid gap-2 text-sm text-slate-300">Project Type<select className={input} {...form.register("project_type")}><option value="">Select type</option>{projectTypes.map((item) => <option key={item}>{item}</option>)}</select></label>
        <label className="grid gap-2 text-sm text-slate-300">Budget Range<select className={input} {...form.register("budget_range")}><option value="">Select range</option>{budgets.map((item) => <option key={item}>{item}</option>)}</select></label>
      </div>
      <label className="grid gap-2 text-sm text-slate-300">Message<textarea rows={6} className={input} {...form.register("message")} /></label>
      {Object.values(form.formState.errors)[0]?.message ? <p className="text-sm text-red-300">{Object.values(form.formState.errors)[0]?.message}</p> : null}
      {status === "success" ? <p className="rounded-md border border-green-400/30 bg-green-400/10 p-3 text-sm text-green-200">Inquiry saved. Our project team can follow up with you shortly.</p> : null}
      {status === "error" ? <p className="rounded-md border border-red-400/30 bg-red-400/10 p-3 text-sm text-red-200">The form could not be submitted. Please check Supabase environment setup and try again.</p> : null}
      <Button disabled={form.formState.isSubmitting} className="w-full md:w-fit">
        <Send size={17} /> {form.formState.isSubmitting ? "Sending..." : "Send Inquiry"}
      </Button>
    </form>
  );
}
