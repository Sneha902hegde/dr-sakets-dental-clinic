# Project memory

## Product intent & audience

- Vite + React starter project, apparently for a dental/medical practice website (About page references "People Behind Every Smile").
- Audience likely patients seeking information about the clinic and its doctors.

## Brand personality & voice

- Warm, professional, trust-oriented (smile/dental framing).
- Production-quality, polished presentation expected by default per `.bolt/prompt`.

## Visual design & UX direction

- Tech stack: Vite + React, JSX, Tailwind CSS, Lucide React icons (no extra UI/icon packages unless requested).
- About page "People Behind Every Smile" section uses doctor profile cards.
- Profile cards feature a subtle image hover effect on real photo cards.
- Placeholder cards remain for doctors whose real photos are not yet available.
- Prefer real images over placeholders when assets already exist in the project.

## Decisions, constraints & rationale

- Dr. Saket and Dr. Sneha placeholder cards replaced with their existing real portraits; Dr. Aheli card left unchanged.
- Only targeted edits made to the About section, preserving rest of page.
- Avoid installing additional packages for UI/themes/icons unless absolutely necessary.

## Open questions & assumptions

- Exact image asset paths for doctors inferred from project files; confirm if new doctors are added.
- Dr. Aheli may also need a real photo update later; placeholder/card status to verify.
- Broader site structure (routes, other pages) not yet mapped — update as work progresses.