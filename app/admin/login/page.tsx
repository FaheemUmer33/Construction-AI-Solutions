import type { Metadata } from "next";
import { LoginForm } from "@/components/admin/LoginForm";

export const metadata: Metadata = { title: "Admin Login" };

export default function AdminLoginPage() {
  return <main className="container-shell py-16"><LoginForm /></main>;
}
