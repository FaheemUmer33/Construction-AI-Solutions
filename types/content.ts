export type Profile = {
  id: string;
  full_name: string;
  headline: string;
  bio: string;
  location: string;
  email: string;
  phone: string;
  profile_image_url: string | null;
  hero_image_url: string | null;
  years_experience: number;
  projects_completed: number;
  teams_coordinated: number;
};

export type Project = {
  id: string;
  title: string;
  slug: string;
  category: string;
  location: string;
  year: number;
  status: string;
  client_type: string;
  short_description: string;
  full_description: string;
  scope: string;
  challenges: string;
  solution: string;
  result: string;
  cover_image_url: string;
  gallery_urls: string[];
  metrics: Record<string, string>;
  is_featured: boolean;
  is_published: boolean;
};

export type Service = {
  id: string;
  title: string;
  slug: string;
  icon: string;
  short_description: string;
  includes: string[];
  outcome: string;
  sort_order: number;
  is_published: boolean;
};

export type Testimonial = {
  id: string;
  person_name: string;
  person_role: string;
  company: string;
  message: string;
  rating: number;
  image_url: string | null;
  is_published: boolean;
};

export type GalleryItem = {
  id: string;
  title: string;
  category: string;
  image_url: string;
  description: string;
  sort_order: number;
  is_published: boolean;
};

export type Inquiry = {
  id: string;
  full_name: string;
  email: string;
  phone: string;
  company: string;
  project_type: string;
  budget_range: string;
  message: string;
  status: "new" | "read" | "contacted" | "closed";
  created_at: string;
};
