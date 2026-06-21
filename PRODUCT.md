# Product

## Register

product

## Users

Internal staff at Event Maldives, a Maldives-based events production company. Three rough user types:

1. **Office staff** (HR officers, accounts/managers, GM/COO) on desktop at the Malé office, doing focused multi-step work: hiring an expat, running a payroll month, approving a leave request, reviewing the audit trail. They live in this tool for hours at a stretch and need density without fatigue.
2. **Warehouse / equipment crew** on a phone at the warehouse, scanning QR codes to check equipment in and out under poor lighting and time pressure. Short-burst use, one-handed, often outdoors.
3. **Field staff** (technicians, riggers, casual labour) on a phone, submitting leave, viewing their payslip, reporting a fault, receiving a push notification. Sparse but high-trust interactions; these users are often not desk workers.

English is the primary language. Maldivian Rufiyaa (MVR) is the base currency, USD is secondary. The team is mixed local + expat (work permits, quotas, multi-currency salaries are first-class concerns).

## Product Purpose

A single internal platform that replaces a stack of spreadsheets and WhatsApp threads: event planning, equipment inventory + check-in/out, full-cycle HR (records, payroll, leave, loans, training, probation, contracts, salary revisions, reports), labour pay tracking, push notifications, audit trail. The success measure is that nothing important falls through the cracks during the high-pressure run-up to a live event: every expiring work permit gets flagged, every approved leave request is honoured in the production schedule, every piece of equipment is accounted for, every payslip is correct on the 28th.

The tool is not a portfolio piece. It is the operational nervous system of a company that loses money the moment a job site stalls.

## Brand Personality

Three words: **operational, calm, exact.**

Voice: direct, no marketing fluff, no exclamation marks, no playful microcopy. Buttons say "Approve" not "Let's approve!" Empty states say "No overdue equipment" not "Looking great!" Error states are factual and tell you what to do next.

Emotional goal: trust. Staff use this to manage paychecks, work permits, and equipment worth millions of Rufiyaa. The interface should feel as serious as the consequences of getting it wrong, without ever feeling intimidating.

## Anti-references

What this should explicitly **not** look or feel like:

- **Generic SaaS dashboards** (Stripe-cream surfaces, hero-metric template, 3-card feature grids, blue+purple gradients). The tool is too operational for marketing aesthetics.
- **Enterprise HR software circa 2014** (SAP SuccessFactors, Workday). Dense grey, decorative chrome, half a screen of nav before any content.
- **Crypto / fintech neon** (neon glow on black, drenched purple, gradient text). Wrong register entirely.
- **Glassmorphism, backdrop-blur as decoration.** Once was novel; now a tell.
- **Emoji as icons.** Done at scale in the recent taste pass; the rule sticks.
- **Cards-everywhere layouts.** Nested cards, decorative cards, every list item wrapped in a card. The current system uses cards as elevation signals, not as the default container.
- **Cute illustrations in empty states.** Operational tools don't need a friendly mascot apologising for an empty inbox.

## Design Principles

1. **The tool disappears into the task.** Familiarity is a feature here. Standard navigation, predictable form layouts, conventional table behaviour. Strangeness without purpose is the failure mode.
2. **Density when there's data, breath when there isn't.** The Payroll Finance Sheet is dense by necessity, twelve columns wide. The home launcher and empty states get more whitespace than you'd guess. Match the spacing to the information, not to a global rhythm.
3. **Trust through specificity.** Every number is tabular-numeral and aligned to the decimal. Every status badge says exactly what state the record is in and which stage it's at. No "Pending..." with no further context.
4. **One accent, used sparingly.** A single brand colour carries primary actions, current selection, and live status indicators. Everywhere else is tinted neutrals. Decoration is not a design tool here.
5. **Mobile is a different shape, not a smaller copy.** The warehouse-scan flow and the leave-request flow were designed for phones first. The HR officer's payroll flow was designed for a 27" monitor first. Responsive collapse should respect that; don't force the desktop layout to squash onto a phone.

## Accessibility & Inclusion

- Target **WCAG 2.1 AA**. Contrast is non-negotiable; tabular numerals required for all monetary values.
- Light + dark mode both first-class. The choice is the user's, persisted per device. Dark mode is for warehouse scanning at night and the office at the end of a long day; light mode is the day default.
- `prefers-reduced-motion` respected globally. The staggered reveals, urgency pulses, and skeleton shimmers all stop under the OS preference.
- iOS-safe input sizing (16px+ to prevent unwanted zoom on focus).
- Touch targets ≥44px on phone breakpoints.
- Keyboard focus visible everywhere (`:focus-visible` outlined with the accent colour).
- Screen-reader: real semantics — landmarks, headings, labelled forms, status regions for notification toasts. (Currently partial; an audit pass is overdue.)
- Push notifications work through FCM and are the primary out-of-app signal; in-app bell is the fallback. Staff who block notifications lose timely signal but never functionality.
