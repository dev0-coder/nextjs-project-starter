Below is the detailed implementation plan for the Solar AI Agent project. This plan covers every dependent file and changes needed, including UI/UX design, API routes, error‐handling, and best practices. Review each step below to ensure nothing is missed. If additional files are later identified as missing, re-read their contents and update this plan accordingly.

---

## 1. Overall Feature & Architecture Overview

- **Core Functionality:**  
  – A SaaS application that handles automated lead scraping, multi‐channel outreach (Email, LinkedIn, FB/Instagram, SMS), AI calling with a smart script editor, and complete admin/user dashboards.  
  – The system integrates with external APIs (OpenRouter, Twilio, HubSpot, Email providers, Social APIs) and features a fully interactive technical architecture page.

- **UI/UX Considerations:**  
  – Use a modern, clean design via Tailwind CSS (inherited from “globals.css”).  
  – Marketing pages use descriptive placeholders with `<img>` tags pointing to “https://placehold.co” URLs (with descriptive text and alt text) only when needed.
  – All forms, modals, and interactive components will have clear error states, loading indicators, and form validation using Zod and react-hook-form.

---

## 2. Directory Structure & File Changes

### New Next.js Pages (Located in `src/app/`)
Each page uses the new app router and shares common components and styling.
- **Home Page** (`src/app/page.tsx`)  
  – Contains the Hero section with headline, subheadline, primary and secondary CTAs.  
  – Use a `<Hero />` component that embeds an `<img>` tag for the animated 6‐step flow (src:  
  `"https://placehold.co/800x600?text=Animated+6-step+automation+flow+diagram+with+process+arrows"`).  
  – Include a “Trusted by solar leaders” trust bar.

- **Product – How It Works** (`src/app/product/page.tsx`)  
  – Horizontally scrollable section with six cards representing each step.  
  – Each card (built via a new `<StepCard />` component) shows an icon (if needed, use typographic placeholders instead of icon libraries), title, description, action button, and an expandable “more details” section.

- **Features** (`src/app/features/page.tsx`)  
  – Detail each module (Lead Scraper, Enrichment Engine, Duplicate Detection, AI Calling Engine, etc.).  
  – Each feature component includes a brief explanation (50–80 words), an admin control button, and a micro-interaction tooltip on hover.

- **Pricing & ROI Calculator** (`src/app/pricing/page.tsx`)  
  – Three-column card layout for Pilot, Growth, and Enterprise tiers.  
  – Embedded interactive ROI Calculator component `<ROIcalculator />` with input fields (avg order value, close rate, calls/day) that computes expected metrics.  
  – A “Calculate & Generate PDF” button that triggers a mock API to download a dynamically generated report.

- **Demo & Free Trial** (`src/app/demo/page.tsx`)  
  – A modal-triggered demo form built as `<DemoForm />` with fields: Company Name, Contact Name, Role, Email, Phone, and Timezone.  
  – On submit, the system sends an autoresponder email and triggers a lead in the CRM (using mock data).

- **Case Studies & Testimonials** (`src/app/case-studies/page.tsx`)  
  – A marketing page with customer testimonials and case studies.  
  – Use placeholder images (if required) with detailed alt text for each case study.

- **Integrations** (`src/app/integrations/page.tsx`)  
  – Lists available integrations (CRM, Twilio, Meta, LinkedIn, Email) with Connect buttons.  
  – For each integration, include a brief description and a “Connect” CTA that opens a configuration modal.

- **Dashboard Preview** (`src/app/dashboard/page.tsx`)  
  – Provides interactive mock screens (Admin and Client view) with charts (using recharts) and KPI cards.  
  – Use `<DashboardWidgets />` to display Today’s Calls, Conversion Rates, etc.

- **Security & Compliance** (`src/app/security/page.tsx`)  
  – Contains GDPR/CCPA text, data retention info (default 90 days), and a cookie consent widget.  
  – The cookie consent widget utilizes a modal with clear acceptance controls.

- **Blog / Resources** (`src/app/blog/page.tsx`)  
  – A list of templates, scripts, blog posts (if any resources are available).

- **Contact / Sales** (`src/app/contact/page.tsx`)  
  – Simple lead generation form with necessary fields and a submit button.  
  – Proper validation and error-handling are applied.

- **Legal** (`src/app/legal/page.tsx`)  
  – Static pages with Privacy Policy, Terms, and Cookie policies (text content sourced from provided sales copy).

- **Onboarding Wizard** (`src/app/onboarding/page.tsx`)  
  – Multi-step onboarding flow for new customers using a combination of modals and progressive forms.

- **Developer / API Docs** (`src/app/developer/page.tsx`)  
  – Displays API keys, webhooks, sample JSON payloads, and developer documentation.  
  – Sample JSONs are shown for endpoints such as `lead.created`.

- **Technical Architecture Page** (`src/app/architecture/page.tsx`)  
  – Provides detailed technical documentation and system architecture diagrams in text format.

---

## 3. New Components (Create under `src/components/`)

- **Hero Component (`src/components/Hero.tsx`):**  
  – Renders headline, subheadline, CTAs, and an `<img>` with a placeholder image.  
  – Adds microcopy and a trust bar with textual “Pilot case: 30% sales uplift.”

- **StepCard Component (`src/components/StepCard.tsx`):**  
  – A card for each “How It Works” step. Implements expand/collapse functionality for additional details.  
  – Includes a primary action button and an on-click event to run simulated demos (e.g., “Scrape Sample Now”).

- **PricingCard Component (`src/components/PricingCard.tsx`):**  
  – Renders pricing tier details, description, and CTA buttons.

- **ROIcalculator Component (`src/components/ROIcalculator.tsx`):**  
  – Interactive form accepting inputs (order value, conversion rates, etc.) calculating ROI in real time.  
  – Has client-side validations and error messages.

- **DemoForm Component (`src/components/DemoForm.tsx`):**  
  – A form with proper input fields that validates using react-hook-form and Zod.  
  – Submits using a mocked API call and triggers a Calendly modal (if integrated later).

- **ScriptEditor Component (`src/components/ScriptEditor.tsx`):**  
  – A rich text/code editor area providing support for conditional branches, variable tokens (e.g., `{{Company}}`), fallback messages, and tone adjustments.  
  – Contains buttons: Test Call, Publish Script, Rollback Version, Export Script.  
  – Includes error handling for empty or malformed scripts.

- **MessageTemplates Component (`src/components/MessageTemplates.tsx`):**  
  – Allows editing of multi-channel message templates (Email, LinkedIn, FB/IG DM, WhatsApp).  
  – Each template field includes token placeholders with clear labels and validation. 

- **Admin Components (Create a folder `src/components/Admin/`):**  
  – **ScraperScheduler.tsx:** Form for setting timezone, region, frequency, concurrency; includes a Start/Stop button.  
  – **OutreachCadence.tsx:** Form for configuring multi-channel outreach schedules with delays.  
  – **LeadFilters.tsx:** Boolean builder for lead filtering with save functionality.  
  – **RetryRules.tsx:** UI for setting max retries and cooldown rules; includes error messaging if inputs are invalid.  
  – **RolesManagement.tsx:** Interface for managing user roles (Super Admin, Sales Admin, Ops, Viewer, Integration User) with invitation and role-change modals.

- **DashboardWidgets Component (`src/components/DashboardWidgets.tsx`):**  
  – Displays KPI metrics as cards and charts (calls made, conversion rate, ROI per channel).  
  – Includes export CSV and scheduling buttons that trigger mock endpoints.

---

## 4. New API Routes (Under `src/app/api/`)

Create server endpoints with proper error handling and input validation (using try-catch blocks and Zod):

- **Scrape Endpoint (`src/app/api/scrape/route.ts`):**  
  – POST endpoint that simulates lead scraping.  
  – Validates parameters (e.g., region, frequency) and returns mock sample results.

- **AI Script Endpoint (`src/app/api/ai/script/route.ts`):**  
  – Handles saving, testing, and retrieving AI call scripts.  
  – Integrates with OpenRouter (using process.env.OPENROUTER_API_KEY) or returns simulated responses if keys are not set.

- **Message Template Endpoint (`src/app/api/message/template/route.ts`):**  
  – Supports CRUD operations on multi-channel message templates with error responses on validation failures.

- **Integrations Endpoints:**  
  – Create routes such as `src/app/api/integrations/hubspot/route.ts` and `src/app/api/integrations/twilio/route.ts` for handling API connection requests using OAuth or API key validation.  
  – Ensure these endpoints log errors and return HTTP status codes appropriately.

---

## 5. Configuration & Environment

- **Environment Variables:**  
  – Add required keys (OpenRouter, Twilio, Email Service, LinkedIn, HubSpot, Database URL) in a `.env.development` file.  
  – Update `next.config.ts` to expose only non-sensitive keys publicly.
  
- **Error Handling & Logging:**  
  – In every API route, wrap operations in try-catch blocks and return JSON error messages with appropriate status codes.  
  – Use client-side error boundaries (if needed) to catch rendering errors.

- **Documentation Updates:**  
  – Update the `README.md` file to include setup instructions, API key configuration, and integration guidelines.

---

## 6. UI/UX & Testing Considerations

- **Modern UI:**  
  – All new pages and components follow a minimalistic layout with clear typography, adequate spacing, and color contrasts defined in `globals.css`.  
  – Use inline Tailwind classes to ensure responsiveness and mobile compatibility.

- **Interactive Elements:**  
  – Use modals for demo forms, integration confirmation, and cookie consent.  
  – All call-to-action buttons give visual feedback (hover/focus states) and clear error messages on invalid input.

- **Testing:**  
  – Validate API endpoints using curl commands as per the requirements (check HTTP status, content-type, and JSON payloads).  
  – Manual UI tests should cover form submissions, modal openings, and simulated API error states.

---

## Summary

- New pages (Home, Product, Features, Pricing, Demo, etc.) are created under `src/app/` using Next.js’s app router.  
- Custom UI components (Hero, StepCard, ROIcalculator, ScriptEditor, etc.) are built with Tailwind styling and proper error handling.  
- Administrative configurations such as scraper scheduling, outreach cadence, and team roles are implemented in dedicated admin components.  
- API routes for scraping, AI scripts, message templates, and integrations include proper try-catch blocks and validation via Zod.  
- Environment variable setup in `next.config.ts` and .env files ensures secure API key management.  
- The design uses descriptive placeholder images only when needed and avoids external icon libraries per specifications.  
- Documentation and API testing (using curl) are updated in README.md and enforced across endpoints.  
- The end-to-end demo uses mock data and simulated responses to allow incremental real API integration later.
