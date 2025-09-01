# 🏛️ E‑Governance Portal

An e‑governance portal where citizens can **file complaints**, **track progress**, and see **live locations** on an interactive Google Map. Built with **Vite + React + TypeScript**, **TailwindCSS**, and **Supabase**.

<p align="center">
  <img alt="Vite" src="https://img.shields.io/badge/Vite-5.x-646CFF?logo=vite&logoColor=white" />
  <img alt="React" src="https://img.shields.io/badge/React-18.x-61DAFB?logo=react&logoColor=black" />
  <img alt="TypeScript" src="https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript&logoColor=white" />
  <img alt="Supabase" src="https://img.shields.io/badge/Supabase-2.x-3FCF8E?logo=supabase&logoColor=white" />
  <img alt="TailwindCSS" src="https://img.shields.io/badge/Tailwind-3.x-06B6D4?logo=tailwindcss&logoColor=white" />
</p>

## ✨ Features

- 📍 **Live Map** using Google Maps (`@react-google-maps/api`) with markers per complaint
- 📝 **Structured Complaint Form** with tracking ID
- 🛠️ **Admin Dashboard** to update status and progress
- 🔐 **Auth/DB** via **Supabase** (email optional in form)
- ⚡ Modern UI with Tailwind + shadcn/ui components

---

## 📂 Project Structure

```text
e-governance-main/
├── public/
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── assets/
│   ├── components/
│   ├── hooks/
│   ├── lib/
│   ├── pages/
│   ├── App.css
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── vite-env.d.ts
├── bun.lockb
├── components.json
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.js
├── README.md
├── supabase.js
├── tailwind.config.ts
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

> **Note:** Supabase client keys are currently hard‑coded in `src/pages/supabaseClient.ts` and `supabase.js`. Move these into `.env` (see below) before pushing to public GitHub.

---

## 🔑 Environment Variables

Create a `.env` file at the project root:

```bash
# Google Maps
VITE_GOOGLE_MAPS_API_KEY=your_google_maps_api_key

# Supabase
VITE_SUPABASE_URL=your_supabase_project_url   # e.g. https://xxxx.supabase.co
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

### Refactor Supabase client to use env

**src/pages/supabaseClient.ts**

```ts
import { createClient, SupabaseClient } from "@supabase/supabase-js";

const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL as string;
const supabaseKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY as string;

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey);
```

**supabase.js**

```js
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);
```

---

## 🗄️ Database

Create a table named `complaints` in Supabase:

```sql
create table public.complaints (
  id bigserial primary key,
  name text not null,
  category text not null,
  ward text not null,             -- location/address
  description text not null,
  email text,
  phone text,
  status text default 'new',      -- 'new' | 'in-progress' | 'resolved'
  progress text,                  -- free text for admin updates
  lat double precision,           -- optional; used for map marker
  lng double precision,           -- optional; used for map marker
  created_at timestamp with time zone default now()
);
```

> The map centers on Nagpur by default. If `lat/lng` are present, markers will use those values.

---

## 🚀 Getting Started

```bash
# 1) Install deps
npm install

# 2) Create .env and add keys
cp .env.example .env   # if you add one; or create manually

# 3) Run dev
npm run dev

# 4) Open app
# http://localhost:5173
```

---

## 🧭 Key Screens / Files

- `src/pages/BookComplaint.tsx` — citizen complaint form (inserts into `complaints`)
- `src/components/ComplaintMapSection.tsx` — Google Map + markers, reads from Supabase
- `src/components/AdminDashboard.tsx` — filter, update `status` / `progress`
- `src/pages/TrackComplaint.tsx` — view complaint progress
- `src/pages/Login.tsx`, `src/pages/signup.tsx` — auth UI (optional wiring)
- `src/pages/supabaseClient.ts` — Supabase client (use env as shown)

---

## 🧪 Scripts

```json
{
  "name": "vite_react_shadcn_ts",
  "private": true,
  "version": "0.0.0",
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "build:dev": "vite build --mode development",
    "lint": "eslint .",
    "preview": "vite preview"
  },
  "dependencies": {
    "@hookform/resolvers": "^3.10.0",
    "@radix-ui/react-accordion": "^1.2.11",
    "@radix-ui/react-alert-dialog": "^1.1.14",
    "@radix-ui/react-aspect-ratio": "^1.1.7",
    "@radix-ui/react-avatar": "^1.1.10",
    "@radix-ui/react-checkbox": "^1.3.2",
    "@radix-ui/react-collapsible": "^1.1.11",
    "@radix-ui/react-context-menu": "^2.2.15",
    "@radix-ui/react-dialog": "^1.1.14",
    "@radix-ui/react-dropdown-menu": "^2.1.15",
    "@radix-ui/react-hover-card": "^1.1.14",
    "@radix-ui/react-label": "^2.1.7",
    "@radix-ui/react-menubar": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.13",
    "@radix-ui/react-popover": "^1.1.14",
    "@radix-ui/react-progress": "^1.1.7",
    "@radix-ui/react-radio-group": "^1.3.7",
    "@radix-ui/react-scroll-area": "^1.2.9",
    "@radix-ui/react-select": "^2.2.5",
    "@radix-ui/react-separator": "^1.1.7",
    "@radix-ui/react-slider": "^1.3.5",
    "@radix-ui/react-slot": "^1.2.3",
    "@radix-ui/react-switch": "^1.2.5",
    "@radix-ui/react-tabs": "^1.1.12",
    "@radix-ui/react-toast": "^1.2.14",
    "@radix-ui/react-toggle": "^1.1.9",
    "@radix-ui/react-toggle-group": "^1.1.10",
    "@radix-ui/react-tooltip": "^1.2.7",
    "@react-google-maps/api": "^2.20.7",
    "@sendgrid/mail": "^8.1.5",
    "@supabase/supabase-js": "^2.56.0",
    "@tanstack/react-query": "^5.83.0",
    "axios": "^1.11.0",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "cmdk": "^1.1.1",
    "cors": "^2.8.5",
    "date-fns": "^3.6.0",
    "embla-carousel-react": "^8.6.0",
    "express": "^5.1.0",
    "input-otp": "^1.4.2",
    "lucide-react": "^0.462.0",
    "next-themes": "^0.3.0",
    "nodemailer": "^7.0.5",
    "react": "^18.3.1",
    "react-day-picker": "^8.10.1",
    "react-dom": "^18.3.1",
    "react-hook-form": "^7.61.1",
    "react-resizable-panels": "^2.1.9",
    "react-router-dom": "^6.30.1",
    "recharts": "^2.15.4",
    "sonner": "^1.7.4",
    "tailwind-merge": "^2.6.0",
    "tailwindcss-animate": "^1.0.7",
    "vaul": "^0.9.9",
    "zod": "^3.25.76"
  },
  "devDependencies": {
    "@eslint/js": "^9.32.0",
    "@tailwindcss/typography": "^0.5.16",
    "@types/express": "^5.0.3",
    "@types/googlemaps": "^3.43.3",
    "@types/node": "^22.17.2",
    "@types/react": "^18.3.24",
    "@types/react-dom": "^18.3.7",
    "@vitejs/plugin-react-swc": "^3.11.0",
    "autoprefixer": "^10.4.21",
    "eslint": "^9.32.0",
    "eslint-plugin-react-hooks": "^5.2.0",
    "eslint-plugin-react-refresh": "^0.4.20",
    "globals": "^15.15.0",
    "lovable-tagger": "^1.1.9",
    "postcss": "^8.5.6",
    "tailwindcss": "^3.4.17",
    "typescript": "^5.8.3",
    "typescript-eslint": "^8.38.0",
    "vite": "^5.4.19"
  }
}

```

> Common: `npm run dev`, `npm run build`, `npm run preview`, `npm run lint`

---

## 🔒 Security Checklist (Before GitHub)

- [ ] Move Supabase URL & ANON key to `.env` (remove hard‑coded values)
- [ ] Do **not** commit `.env` (already in `.gitignore`)
- [ ] Rotate any leaked keys in Supabase dashboard
- [ ] Restrict RLS policies to protect data (configure in Supabase)

---


---

## 👥 Team Members  

- Harshal Waindeshkar  
- Prathmesh Kuthe  
- Sujal Kalmegh  
- Mithilesh Lohakare  
- Nikhil Gourkar  

