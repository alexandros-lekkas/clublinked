# Clublinked 🔗

Clublinked is a modern web platform designed to streamline the connection between university clubs and students. Built with Next.js 15 App Router, it provides a modular, scalable, and beautiful interface for both club administrators and student users.

---

## 🚀 Purpose

- **For Clubs:** Manage onboarding, build custom forms, and track submissions from students.
- **For Students:** Discover clubs, explore opportunities, and submit applications or interest forms.

---

## 🏗️ Architecture & Structure

- **Next.js 15 App Router**: Uses the new `app/` directory for layouts, routing, and server/client component separation.
- **Nested Layouts**:
  - `app/layout.tsx`: Global layout (navigation, toast provider, theme)
  - `app/(university)/layout.tsx`: University/club-scoped layout for routes like `/dashboard`, `/form-builder`, `/submissions`
- **Component Organization**:
  - `components/ui/`: Shared UI primitives (shadcn/ui)
  - `components/app/`: Logic-specific, reusable app components
  - Route-specific components are co-located (e.g., `app/club/form-builder/components/`)
- **Styling**:
  - Tailwind CSS with a blue theme, soft gradients, and rounded corners
  - No shadow utilities; use border classes (e.g., `border-2 border-base-300`)

---

## 👤 User Flows

### Authentication

- `.edu` email gating via Clerk or NextAuth
- Post-signup redirects:
  - **Clubs:** `/club/onboarding`
  - **Students:** `/student/explore`

### Club Experience

- **Dashboard** (`/dashboard`): Tabbed interface for current form and submissions
- **Form Builder** (`/club/form-builder`):
  - Left: Draggable form components (inputs, checkboxes, etc.)
  - Right: Live preview (hydrated only where needed)
- **Submissions** (`/club/submissions`): Table view of student submissions

### Student Experience

- **Explore** (`/student/explore`): Browse and discover clubs

---

## 🛠️ Tech Stack

- **Framework:** Next.js 15 (App Router)
- **UI:** shadcn/ui, Tailwind CSS
- **Auth:** Clerk or NextAuth (with .edu gating)
- **State/Logic:** React Server Components (hydrate only where needed)
- **Drag-and-Drop:** (To be implemented for form builder)

---

## 🗂️ Key Folders

```
src/
  app/
    layout.tsx
    (university)/layout.tsx
    dashboard/
    club/
    student/
  components/
    ui/
    app/
  lib/
    hooks/
    utils/
  styles/
```

---

## 🧑‍💻 Development Setup

1. **Install dependencies:**
   ```bash
   pnpm install
   # or npm install
   ```
2. **Run the dev server:**
   ```bash
   pnpm dev
   # or npm run dev
   ```
3. **Configure environment variables:**
   - For authentication, set up Clerk or NextAuth credentials in `.env.local`.

---

## 🤝 Contributing

- Follow the modular structure for components and pages.
- Use shadcn/ui and Tailwind for all UI work.
- Prefer server components; hydrate only for interactive features.
- Co-locate route-specific components.

---

## 📄 License

MIT
