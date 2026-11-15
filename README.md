# Rameshwar Bhumbar — Portfolio

React 18 + Vite single-page portfolio. Existing framework, entry point, section components, and section observer retained. No router or framework migration.

## Development

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm run preview`

## Content and presentation

Edit `src/data/portfolio.js` for profile links, projects, expertise, experience, education, certifications, and recognition. The hero and about copy live in their section components. `src/index.css` defines color, spacing, typography, responsive layouts, focus styles, and reduced-motion support. Project presentations share `src/components/ProjectShowcase.jsx`; optional project details use native disclosures. Resume and email were supplied by the owner during this redesign.

The Netlify site has not been redeployed. Deploy `dist/` after `npm run build` to update it. The selected-work live link deliberately identifies the previous deployment.

## Content review before publication

- Add authorized Plugo and Offbit project descriptions, specific contributions, public links, and genuine screenshots. Neither project exists in the supplied source, so no claims or screenshots were invented.
- The only verified project is this portfolio. Its source repository URL is unknown; the GitHub profile remains available instead of a fake source link.
- Confirm that the Google Drive resume is publicly viewable. The supplied URL is preserved, without changing file sharing.
- Confirm the education dates and grades remain current. The source listed September 2023–June 2026 and September 2019–June 2022; display uses year ranges and does not infer graduation status.
- The PHP trainee employer was absent from the source. The display uses a training description rather than inventing an organization.
- Experience, certifications, and recognition retain the repository's claims; their supporting documents were not available for independent verification.

## Audit and implementation

The original was JavaScript/JSX with Tailwind/PostCSS and Vite, no routing, lint script, type-check script, or tests. It used repetitive shadow cards, duplicated portraits, eight navigation items, placeholder project images and links, placeholder identity/metadata, an unsupported five-year experience claim, and a contact form without a handler. Only one real image was supplied.

The redesign uses charcoal and olive surfaces, ivory text, a lime accent, editorial type, a custom CSS system visual, a typographic project illustration explicitly labeled as illustration, and responsive section-specific layouts. JavaScript only manages navigation, section observation, and progressive reveal. Content stays visible when IntersectionObserver is unavailable. Framer Motion and React Icons were removed; no dependencies were added. Tailwind remains in the existing pipeline for compatibility, with the new design implemented in CSS tokens.

Accessibility features include a skip link, semantic sections, visible keyboard focus, a mobile disclosure menu with Escape/outside-click handling, active-section markers, native case-study disclosures, sized images, and reduced-motion support. Contact uses mailto and verified supplied/profile links instead of an unconnected form.

SEO includes accurate title/description, canonical URL, Open Graph and Twitter metadata, a real existing portrait as social image, favicon, robots.txt, and sitemap.xml. The old manifest was corrected, but is not linked because offline/PWA installation is not implemented.

## Validation

Production build passes. No separate lint, type-check, or test scripts exist in this repository. Source integrity checks validate fragment targets, public assets, placeholder removal, and absence of removed animation imports. Build output is approximately 51 KB gzipped JavaScript. Browserslist reports stale compatibility data; its database was not refreshed as part of the design change.

Visual browser verification remains incomplete: the in-app browser could not reach the Windows localhost preview. Desktop/mobile overflow, keyboard behavior, reduced motion, console state, and third-party link availability should receive a final browser pass before deployment.
