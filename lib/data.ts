import { createClient } from "@/lib/supabase/server";
import { brand } from "@/lib/brand";
import type { GalleryItem, Inquiry, Profile, Project, Service, Testimonial } from "@/types/content";

const image = (id: string) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=1600&q=80`;

export const fallbackProfile: Profile = {
  id: "00000000-0000-0000-0000-000000000001",
  full_name: brand.name,
  headline: brand.tagline,
  bio: brand.overview,
  location: "Pakistan",
  email: "projects@example.com",
  phone: "+92 300 0000000",
  profile_image_url: null,
  hero_image_url: image("photo-1503387762-592deb58ef4e"),
  years_experience: 7,
  projects_completed: 18,
  teams_coordinated: 6
};

export const fallbackProjects: Project[] = [
  {
    id: "p1",
    title: "Residential Grey Structure Coordination",
    slug: "residential-grey-structure-coordination",
    category: "Residential",
    location: "Lahore",
    year: 2024,
    status: "Completed",
    client_type: "Private homeowner",
    short_description: "Site coordination for foundations, columns, slabs, masonry, and finishing handover planning.",
    full_description: "A private residence requiring steady supervision across structural work and early finishing coordination.",
    scope: "Daily site checks, contractor coordination, concrete pour readiness, material follow-up, and progress reporting.",
    challenges: "Maintaining work continuity while aligning trades, deliveries, and consultant observations.",
    solution: "Weekly look-ahead planning, clearer work fronts, and a practical inspection checklist before major activities.",
    result: "Improved sequence control, fewer rework items, and a cleaner transition from structure to finishing.",
    cover_image_url: image("photo-1541888946425-d81bb19240f5"),
    gallery_urls: [image("photo-1504307651254-35680f356dfd"), image("photo-1485083269755-a7b559a4fe5e")],
    metrics: { Scope: "Grey structure", Duration: "8 months", Teams: "4 site teams" },
    is_featured: true,
    is_published: true
  },
  {
    id: "p2",
    title: "Commercial Plaza Fit-Out Support",
    slug: "commercial-plaza-fit-out-support",
    category: "Commercial",
    location: "Islamabad",
    year: 2023,
    status: "Completed",
    client_type: "Commercial developer",
    short_description: "Coordination of partitioning, ceiling, MEP follow-ups, finishing snag lists, and vendor access.",
    full_description: "A commercial fit-out phase where multiple vendors needed access without blocking finishing progress.",
    scope: "Fit-out sequencing, quality inspections, site meetings, punch lists, and vendor coordination.",
    challenges: "Concurrent ceiling, electrical, HVAC, and finishing teams competing for limited work zones.",
    solution: "Zone-based scheduling and daily access windows for critical vendors.",
    result: "Clearer handover tracking and faster closure of finishing defects.",
    cover_image_url: image("photo-1494526585095-c41746248156"),
    gallery_urls: [image("photo-1505693416388-ac5ce068fe85"), image("photo-1600607687920-4e2a09cf159d")],
    metrics: { Zones: "5 floors", Focus: "Fit-out", Vendors: "9 vendors" },
    is_featured: true,
    is_published: true
  },
  {
    id: "p3",
    title: "Warehouse Slab and Utilities Package",
    slug: "warehouse-slab-utilities-package",
    category: "Industrial",
    location: "Karachi",
    year: 2022,
    status: "Completed",
    client_type: "Industrial operator",
    short_description: "Industrial slab preparation, utility trench coordination, and pre-pour inspection support.",
    full_description: "A warehouse improvement package focused on durable slab work and utility coordination.",
    scope: "Subgrade checks, reinforcement observations, pour planning, curing follow-up, and utility sleeve coordination.",
    challenges: "Heavy-use floor requirements and tight access for concrete placement.",
    solution: "Pre-pour checklists, access planning, and close coordination with the batching supplier.",
    result: "A more controlled pour sequence and documented quality checkpoints.",
    cover_image_url: image("photo-1531834685032-c34bf0d84c77"),
    gallery_urls: [image("photo-1590479773265-7464e5d48118"), image("photo-1518005020951-eccb494ad742")],
    metrics: { Area: "42,000 sq ft", Package: "Slab and utilities", Checks: "Pre-pour QA" },
    is_featured: false,
    is_published: true
  },
  {
    id: "p4",
    title: "Roadside Drainage and Civil Works",
    slug: "roadside-drainage-civil-works",
    category: "Infrastructure",
    location: "Faisalabad",
    year: 2021,
    status: "Completed",
    client_type: "Local contractor",
    short_description: "Drainage channels, concrete works, level checks, and field coordination for public-facing works.",
    full_description: "A focused civil works package requiring coordination around traffic, safety, and levels.",
    scope: "Setting-out support, formwork checks, concrete coordination, and site safety observations.",
    challenges: "Live surroundings and the need to keep access open during works.",
    solution: "Segmented execution, barricading, and short daily coordination meetings.",
    result: "Progress remained organized while maintaining cleaner public access.",
    cover_image_url: image("photo-1565008447742-97f6f38c985c"),
    gallery_urls: [image("photo-1517089596392-fb9a9033e05b"), image("photo-1581094288338-2314dddb7ece")],
    metrics: { Length: "1.2 km", Work: "Drainage", Safety: "Live-site controls" },
    is_featured: false,
    is_published: true
  },
  {
    id: "p5",
    title: "Apartment Renovation Coordination",
    slug: "apartment-renovation-coordination",
    category: "Renovation",
    location: "Rawalpindi",
    year: 2024,
    status: "In Progress",
    client_type: "Private client",
    short_description: "Renovation sequencing for demolition, plumbing, electrical rough-in, finishes, and handover checks.",
    full_description: "A controlled apartment renovation focused on quality, communication, and limited disruption.",
    scope: "Work sequencing, contractor follow-up, material coordination, and defect tracking.",
    challenges: "Occupied-building restrictions and limited working hours.",
    solution: "Noise-aware scheduling, advance material staging, and compact daily progress reporting.",
    result: "Better client visibility and reduced idle time between trades.",
    cover_image_url: image("photo-1600585154340-be6161a56a0c"),
    gallery_urls: [image("photo-1600566753190-17f0baa2a6c3"), image("photo-1600607687939-ce8a6c25118c")],
    metrics: { Units: "1 apartment", Trades: "6 trades", Status: "Active" },
    is_featured: true,
    is_published: true
  },
  {
    id: "p6",
    title: "Villa Finishing and Handover Controls",
    slug: "villa-finishing-handover-controls",
    category: "Residential",
    location: "Multan",
    year: 2023,
    status: "Completed",
    client_type: "Private client",
    short_description: "Finishing quality checks, snag lists, vendor coordination, and final handover documentation.",
    full_description: "A residential finishing stage requiring disciplined tracking of paint, tile, joinery, and MEP defects.",
    scope: "Snag list management, finishing inspections, vendor coordination, and owner reporting.",
    challenges: "Finishing details needed consistent closure before handover.",
    solution: "Room-by-room handover sheets and direct issue ownership for each trade.",
    result: "A more transparent completion path and fewer unresolved handover items.",
    cover_image_url: image("photo-1600585154526-990dced4db0d"),
    gallery_urls: [image("photo-1600566752355-35792bedcfea"), image("photo-1600566753151-384129cf4e3e")],
    metrics: { Rooms: "12 spaces", Focus: "Finishing", Handover: "Snag tracking" },
    is_featured: false,
    is_published: true
  }
];

export const fallbackServices: Service[] = [
  ["Construction Project Management", "ClipboardCheck", "Planning, sequencing, progress tracking, and issue follow-up for construction delivery.", ["Look-ahead schedules", "Progress reviews", "Stakeholder coordination"], "A clearer path from drawings to site execution."],
  ["Site Supervision", "HardHat", "Daily site oversight with practical quality, safety, and productivity checks.", ["Daily inspections", "Work-front coordination", "Site reporting"], "Better control over workmanship and activity flow."],
  ["Civil Works Coordination", "Landmark", "Coordination for foundations, concrete, masonry, drainage, and site preparation works.", ["Setting-out support", "Concrete readiness", "Civil team follow-up"], "Civil packages that move with fewer avoidable delays."],
  ["Residential and Commercial Construction", "Building2", "Execution support for homes, plazas, offices, and mixed-use construction projects.", ["Structure coordination", "Finishing follow-up", "Client updates"], "Organized delivery across structure and finishing phases."],
  ["Renovation and Fit-Out Coordination", "PaintRoller", "Trade sequencing and finishing controls for occupied or fast-moving renovation sites.", ["Demolition planning", "MEP coordination", "Snag lists"], "Cleaner fit-out execution and smoother handover."],
  ["Quality and Safety Monitoring", "ShieldCheck", "Practical checklists and site observations to support workmanship and safer operations.", ["Inspection sheets", "Safety walks", "Corrective action tracking"], "Fewer surprises during consultant and client reviews."],
  ["BOQ and Material Coordination", "Boxes", "Support for BOQ understanding, material planning, purchase follow-up, and wastage awareness.", ["Quantity review", "Material logs", "Delivery coordination"], "Better alignment between planned work and available materials."],
  ["Contractor and Vendor Management", "UsersRound", "Coordination between contractors, vendors, consultants, and client representatives.", ["Meeting notes", "Responsibility tracking", "Vendor access planning"], "Less confusion and stronger accountability on site."]
].map(([title, icon, short_description, includes, outcome], index) => ({
  id: `s${index + 1}`,
  title: title as string,
  slug: (title as string).toLowerCase().replaceAll(" ", "-").replaceAll("and", "and"),
  icon: icon as string,
  short_description: short_description as string,
  includes: includes as string[],
  outcome: outcome as string,
  sort_order: index + 1,
  is_published: true
}));

export const fallbackTestimonials: Testimonial[] = [
  "The site conversations stayed focused and practical. Progress reporting was clear, and issues were easier to close.",
  "The strongest value was coordination between trades. We had fewer surprises when finishing activities overlapped.",
  "The field follow-up helped us keep quality observations visible without slowing every work front.",
  "Communication with contractors and suppliers became more organized during the concrete and masonry stages.",
  "For renovation work, the daily sequencing and snag tracking made the handover process much smoother.",
  "A reliable construction professional for practical site execution and stakeholder updates."
].map((message, index) => ({
  id: `t${index + 1}`,
  person_name: ["Project Owner", "Site Engineer", "Fit-Out Contractor", "Civil Supervisor", "Private Client", "Development Coordinator"][index],
  person_role: ["Client representative", "Consultant team", "Contractor", "Civil works lead", "Homeowner", "Project stakeholder"][index],
  company: ["Residential Project", "Commercial Works", "Interior Package", "Civil Package", "Renovation Project", "Mixed-Use Site"][index],
  message,
  rating: index === 2 ? 4 : 5,
  image_url: null,
  is_published: true
}));

export const fallbackGallery: GalleryItem[] = [
  "photo-1541888946425-d81bb19240f5", "photo-1504307651254-35680f356dfd", "photo-1531834685032-c34bf0d84c77",
  "photo-1565008447742-97f6f38c985c", "photo-1581094288338-2314dddb7ece", "photo-1518005020951-eccb494ad742",
  "photo-1600585154340-be6161a56a0c", "photo-1600566753190-17f0baa2a6c3", "photo-1600607687939-ce8a6c25118c",
  "photo-1600566752355-35792bedcfea", "photo-1600585154526-990dced4db0d", "photo-1485083269755-a7b559a4fe5e"
].map((id, index) => ({
  id: `g${index + 1}`,
  title: ["Site progress", "Concrete activity", "Structural frame", "Drainage works", "Equipment coordination", "Facade review", "Interior planning", "Finishing work", "MEP coordination", "Final checks", "Residential exterior", "Site inspection"][index],
  category: ["Site Progress", "Civil Works", "Structural Work", "Civil Works", "Equipment", "Finishing", "Team Coordination", "Finishing", "Team Coordination", "Finishing", "Structural Work", "Site Progress"][index],
  image_url: image(id),
  description: "Construction documentation image for site progress, civil works, and field coordination context.",
  sort_order: index + 1,
  is_published: true
}));

async function getRows<T>(table: string, fallback: T[], query?: (q: any) => any): Promise<T[]> {
  const supabase = await createClient();
  if (!supabase) return fallback;
  let request = supabase.from(table).select("*");
  request = query ? query(request) : request;
  const { data, error } = await request;
  if (error || !data?.length) return fallback;
  return data as T[];
}

export async function getProfile() {
  const rows = await getRows<Profile>("profile", [fallbackProfile], (q) => q.limit(1));
  return rows[0];
}

export async function getProjects() {
  return getRows<Project>("projects", fallbackProjects, (q) => q.eq("is_published", true).order("year", { ascending: false }));
}

export async function getProject(slug: string) {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug) ?? null;
}

export async function getServices() {
  return getRows<Service>("services", fallbackServices, (q) => q.eq("is_published", true).order("sort_order"));
}

export async function getTestimonials() {
  return getRows<Testimonial>("testimonials", fallbackTestimonials, (q) => q.eq("is_published", true).order("created_at", { ascending: false }));
}

export async function getGallery() {
  return getRows<GalleryItem>("gallery", fallbackGallery, (q) => q.eq("is_published", true).order("sort_order"));
}

export async function getInquiries() {
  return getRows<Inquiry>("inquiries", [], (q) => q.order("created_at", { ascending: false }));
}
