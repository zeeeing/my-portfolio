import type { Project } from "../types";

export const projects = [
  {
    id: 1,
    slug: "golden-tikkee",
    image: "/golden_tikkee_thumbnail.png",
    title: "Golden Tikkee",
    description:
      "A full-stack event ticketing platform built with Next.js, Supabase, and Stripe, featuring authenticated checkout and automated QR ticket delivery via email and in-app wallet.",
    tools: [
      "Next.js",
      "TypeScript",
      "TailwindCSS",
      "Supabase",
      "Stripe API",
      "Nodemailer and Gmail",
      "Node QRCode",
      "Vercel",
    ],
    year: "2025",
    liveLink: "https://golden-tikkee.vercel.app",
    githubLink: "https://github.com/zeeeing/event-ticketer",
    featured: true,
    status: "live",
    caseStudy: {
      problem:
        "Event checkout needs more than a payment button: users need authenticated access, payment confirmation, ticket issuance, and a reliable way to retrieve tickets after purchase.",
      solution:
        "Golden Tikkee connects Supabase authentication with Stripe Checkout and a signature-verified webhook. Successful payments create QR-coded tickets in Supabase, deliver them by email, and surface them in an in-app wallet with order history for traceability.",
    },
  },
  {
    id: 2,
    slug: "residency-rotation-scheduler",
    image: "/residency_rotation_scheduler_thumbnail.png",
    title: "Residency Rotation Scheduler (R2S)",
    description:
      "A constraint-based optimisation tool for residency rotation scheduling powered by Google OR-Tools.",
    tools: [
      "React.js",
      "TypeScript",
      "TailwindCSS",
      "FastAPI",
      "Google OR-Tools",
      "Replit",
    ],
    year: "2025",
    liveLink: "https://im-r2s.replit.app",
    githubLink: "https://github.com/zeeeing/residency-rotation-scheduler",
    featured: true,
    status: "archived",
    caseStudy: {
      problem:
        "Residency rotation scheduling is difficult to manage manually because every timetable must satisfy capacity limits, rotation requirements, preferences, leave, historical postings, and fairness constraints.",
      solution:
        "R2S models the scheduling problem as a constraint optimisation workflow. A FastAPI backend parses structured CSV inputs, builds an OR-Tools solver model, and returns feasible timetables that users can tune, pin, inspect, and export through a React interface.",
    },
  },
  {
    id: 3,
    slug: "hypercharged-cc",
    image: "/hypercharged_cc_thumbnail.jpeg",
    title: "Hypercharged.CC",
    description:
      "Started off as a passion project, Hypercharged.CC is a full-stack web application that delivers accurate, near real-time competitive statistics for dedicated players of Brawl Stars - a mobile game developed by Supercell.",
    tools: [
      "React.js",
      "JavaScript",
      "TailwindCSS",
      "GSAP",
      "FastAPI",
      "MongoDB",
      "Docker",
      "AWS",
    ],
    year: "2024 - Present",
    liveLink: "https://hypercharged.cc",
    featured: true,
    status: "wip",
    caseStudy: {
      problem:
        "Competitive Brawl Stars players need fast, readable statistics, but raw game data is hard to compare without context around players, brawlers, maps, modes, and recent performance.",
      solution:
        "Hypercharged.CC turns game data into a web analytics experience focused on near real-time competitive insight. The app combines a React frontend, FastAPI backend, MongoDB persistence, and cloud deployment to present player and meta statistics in a dedicated product surface.",
    },
  },
  {
    id: 4,
    slug: "write-now",
    image: "/write_now_thumbnail.png",
    title: "WriteNow",
    description:
      "An AI-powered digital PA that integrates with G Suite to automate email summarisation, task creation, meeting scheduling and generate AI-powered meeting minutes for the Singapore Book Council. Built for H4G 2025.",
    tools: [
      "React.js",
      "JavaScript",
      "TailwindCSS",
      "Framer Motion",
      "FastAPI",
      "MongoDB",
      "Docker",
      "AWS",
      "Google Cloud API",
      "OpenAI API",
      "Read AI API",
    ],
    year: "2025",
    githubLink: "https://github.com/zeeeing/write-now",
    featured: false,
    status: "wip",
    caseStudy: {
      problem:
        "Administrative work across email, tasks, meetings, and minutes can become fragmented, especially when teams rely on multiple Google Workspace tools and manual follow-up.",
      solution:
        "WriteNow explores an AI-powered assistant workflow for the Singapore Book Council. It connects G Suite workflows with AI summarisation, task creation, meeting scheduling, and generated meeting minutes through a React and FastAPI application.",
    },
  },
] satisfies Project[];
