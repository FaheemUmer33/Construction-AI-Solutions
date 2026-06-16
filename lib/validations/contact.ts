import { z } from "zod";

export const contactSchema = z.object({
  full_name: z.string().min(2, "Please enter your full name."),
  email: z.string().email("Please enter a valid email address."),
  phone: z.string().min(7, "Please enter a reachable phone number."),
  company: z.string().optional().default(""),
  project_type: z.string().min(2, "Please select a project type."),
  budget_range: z.string().min(2, "Please select a budget range."),
  message: z.string().min(20, "Please share a few details about the project.")
});

export type ContactInput = z.infer<typeof contactSchema>;
