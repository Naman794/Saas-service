export type ServiceType = "community" | "website" | "backend" | "automation" | "consulting" | "audit";

export const navItems = [
  { label: "Services", href: "/services" },
  { label: "Process", href: "/process" },
  { label: "Pricing", href: "/pricing" },
  { label: "Case Studies", href: "/case-studies" }
];

export const services = [
  {
    slug: "community-systems",
    type: "community" as ServiceType,
    icon: "users",
    label: "Community Systems",
    title: "Build communities that are structured, active and easy to operate.",
    short: "Discord, Reddit, Telegram and creator community setup with onboarding, moderation and engagement systems.",
    description: "We design the community architecture: channels, roles, moderation, events, welcome flows, content loops, member routing and owner alerts.",
    deliverables: ["Discord/Reddit structure", "Roles and permissions", "Onboarding flow", "Moderation rules", "Engagement loops", "Webhook alerts"],
    outcomes: ["Cleaner member journeys", "Better moderation", "Repeatable engagement", "Owner visibility"]
  },
  {
    slug: "website-saas-builds",
    type: "website" as ServiceType,
    icon: "globe",
    label: "Website & SaaS Builds",
    title: "Launch premium websites that explain, sell and capture leads.",
    short: "Landing pages, SaaS websites, brand websites and dashboards built for clear conversion.",
    description: "We build polished websites with strong messaging, responsive design, service pages, pricing, forms and launch-ready deployment on Vercel.",
    deliverables: ["Homepage", "Service pages", "Pricing sections", "Lead forms", "Responsive UI", "Vercel deployment"],
    outcomes: ["Stronger first impression", "Clearer offer", "Better leads", "Faster launch"]
  },
  {
    slug: "backend-systems",
    type: "backend" as ServiceType,
    icon: "server",
    label: "Backend Systems",
    title: "Create backend workflows that turn operations into a system.",
    short: "APIs, forms, admin systems, lead flows and database-ready architecture.",
    description: "We create the logic behind your business: lead capture, scoring, routing, admin workflows, logs, system events and MongoDB-ready data structures.",
    deliverables: ["API routes", "Lead scoring", "Admin-ready structure", "Data models", "System logs", "MongoDB migration plan"],
    outcomes: ["Less manual work", "Structured data", "Better follow-up", "Scalable operations"]
  },
  {
    slug: "automation",
    type: "automation" as ServiceType,
    icon: "workflow",
    label: "Automation Workflows",
    title: "Automate alerts, routing, follow-ups and internal workflows.",
    short: "Discord webhooks, lead routing, CRM-style flows, alerts and workflow automation.",
    description: "We connect your frontend, backend and operating channels so submissions, errors, bookings and high-priority leads are routed automatically.",
    deliverables: ["Discord webhook routing", "Priority alerts", "Form automation", "Error logs", "Owner notifications", "Workflow documentation"],
    outcomes: ["Instant alerts", "Less missed leads", "Cleaner ops", "Faster response time"]
  },
  {
    slug: "consulting",
    type: "consulting" as ServiceType,
    icon: "chart",
    label: "Growth Consulting",
    title: "Get a practical roadmap for growth, community and monetization.",
    short: "Strategy for community growth, creator ecosystems, content systems and monetization flows.",
    description: "We audit your current stage and give you a clear plan for positioning, growth loops, content systems, creator operations and infrastructure.",
    deliverables: ["Growth audit", "Community roadmap", "Content strategy", "Monetization plan", "Tool stack review", "Execution plan"],
    outcomes: ["Clearer direction", "Better priorities", "Stronger funnel", "More consistent execution"]
  },
  {
    slug: "system-audits",
    type: "audit" as ServiceType,
    icon: "shield",
    label: "System Audits",
    title: "Find what is broken before you build more on top of it.",
    short: "Audit your website, community, backend, funnel or automation setup and get a clear fix list.",
    description: "We review your current system, identify gaps and create a prioritized action plan for improving conversion, operations and scalability.",
    deliverables: ["System review", "Funnel audit", "Tool stack audit", "Conversion notes", "Priority fixes", "Build roadmap"],
    outcomes: ["Know what to fix", "Avoid wasted work", "Improve conversion", "Build with clarity"]
  }
];

export const processSteps = [
  { step: "01", title: "Diagnose", text: "We understand your offer, audience, current tools, blockers and desired outcome." },
  { step: "02", title: "Architect", text: "We map the website, backend, community, automation and lead flow before building." },
  { step: "03", title: "Build", text: "We design and develop the system with a clean UI, reusable components and scalable structure." },
  { step: "04", title: "Automate", text: "We connect forms, Discord alerts, routing logic, logs and operational workflows." },
  { step: "05", title: "Scale", text: "We improve conversion, engagement, reporting and prepare the system for MongoDB or deeper tooling." }
];

export const packages = [
  {
    name: "Starter System",
    price: "₹25K+",
    text: "For creators, communities and small brands that need a polished launch layer.",
    features: ["1 premium landing page", "Lead capture form", "Discord webhook logging", "Basic service structure", "Vercel deployment support"]
  },
  {
    name: "Growth Build",
    price: "₹50K+",
    text: "For businesses that need website, services, automation and structured lead routing.",
    features: ["Multi-page website", "Service pages", "Priority lead scoring", "Multiple Discord channels", "Process and pricing pages", "SEO-ready structure"],
    popular: true
  },
  {
    name: "Full Infrastructure",
    price: "Custom",
    text: "For teams that need a full website, backend workflows and growth operating system.",
    features: ["Website + backend architecture", "Admin-ready structure", "Automation workflows", "MongoDB migration plan", "Community systems", "Consulting roadmap"]
  }
];

export function getService(slug: string) {
  return services.find((service) => service.slug === slug);
}
