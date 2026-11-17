# Rameshwar Bhumbar — Portfolio

React 18 + Vite single-page portfolio. The approved warm off-white, charcoal, sage, Newsreader, and Manrope identity is retained.

## Commands

- `npm ci`
- `npm run dev`
- `npm run build`
- `npm run preview`
- `npm run check:content`
- `npm run check:sections`

No lint or type-check scripts are configured. No dependencies were added for the section redesign. Section rendering checks use the esbuild compiler already supplied by Vite.

## Update content

`src/data/portfolio.js` contains profile links, projects, expertise, experience, education, and recognition. Project and experience details are factual owner-supplied content. No metrics, screenshots, source URLs, or demo URLs have been invented.

### Add actual project screenshots

Place authorized, compressed images under `public/images/`. Then update the appropriate project's `media` in `src/data/portfolio.js`:

```js
media: {
  src: '/images/plugo/station-discovery.webp',
  alt: 'Plugo map showing nearby charging stations',
  width: 390,
  height: 844,
  secondary: {
    src: '/images/plugo/booking.webp',
    alt: 'Plugo charging-slot booking screen',
    width: 390,
    height: 844,
  },
  caption: 'Station discovery and charging-slot booking.',
}
```

These are example paths, not existing assets. Use the actual image dimensions and descriptive alt text. Plugo uses `presentation: 'mobile'`; Offbit uses `presentation: 'browser'` with a single wide `media.src` and optional caption. Until assets are added, charcoal screen areas explicitly state that screenshots are pending. They contain no fabricated UI. A failed image returns to a labeled fallback.

The portfolio has `presentation: 'artwork'` and a typographic cover, clearly distinguished from application screenshots. `ProjectMedia.jsx` owns the device framing. `ProjectShowcase.jsx` owns metadata, feature journeys, engineering disclosures, and conditional links. Add `live` and/or `github` only when approved public links are available. Plugo and Offbit currently have neither.

## Current section design

Only Projects, Work Experience, and Education were redesigned in this iteration. The hero, navbar, About/Expertise, contact, footer, global tokens, and fonts were left unchanged.

- **Projects:** three distinct compositions. Plugo is an asymmetric paired-phone product spread; Offbit is a wide browser study; the portfolio is an offset paper composition. Role, technologies, owner-supplied project scope, and representation notes remain visible. Native engineering disclosures reveal features, contributions, architectural choices, and constraints.
- **Experience:** an accessible vertical tablist on desktop, with a contribution panel on the right. Arrow keys and Home/End select entries and move focus. All panels share a grid cell to reserve the tallest content height. On mobile, the selector is removed and every entry appears in document order, without hidden contributions.
- **Education:** a compact academic signature with split year/degree records. Dates and grades are preserved; the end years are displayed without inferring degree-completion status.

New composition styles live in `src/styles/portfolio-sections.css`, scoped to these three sections. Existing global CSS and approved identity styles were preserved. Motion is small, CSS-based, and disabled by reduced-motion preferences.

## Representation and remaining content review

- Plugo is a final-year engineering project. Razorpay is a **test-payment integration**, not live payment processing.
- Offbit is a team platform; the work shown is **selected contributions**. Its Studio Revenue Tracker is a **feature-flagged mock-data demo**, not live financial analytics. Deployment of contributions is not verified.
- Authorized screenshots and public project/source links remain pending.
- Offbit's work-experience start date is still `Jun — Present`; the year needs confirmation.
- Sinovax's existing entry describes a MongoDB backend while its technology label mentions MySQL. Confirm the correct stack. The obvious month typo `Fed` was corrected to `Feb` without changing the year or date range.
- Confirm Google Drive resume sharing permissions and the currency of academic grades. The supplied resume URL and email are preserved.

## Verification and deployment

`check:content` verifies section targets, assets, contact details, and placeholder cleanup. `check:sections` renders the actual components in desktop/mobile modes and checks project disclosures, honest image placeholders, tab/panel relationships, visible mobile articles, and academic data. These are rendering checks, not browser interaction tests.

Production build and both checks pass. Desktop/mobile visual appearance, live keyboard interaction, external-link availability, and console state remain unverified: browser access was previously stopped because Computer Use could not confidently establish the active Chrome URL. A visual browser pass is still needed before deployment.

The existing Netlify deployment has not been changed. Run `npm run build` and deploy `dist/` to update it. The portfolio's live link currently points to the previous deployment.

## Motion and interaction layer

`src/styles/motion.css` adds staggered hero entrances, a slowly rotating/breathing line motif, transition-based one-time scroll reveals, project-device hover lifts, navigation underlines, and engineering-note entrances. The approved palette, typography, and content remain intact.

`PageMotion.jsx` supplies a decorative reading-progress bar and a persistent Pause/Resume motion control. Scroll updates are passive and requestAnimationFrame-throttled, without React state updates on scroll. ResizeObserver accounts for expanded project notes and other content-height changes. Event listeners, observers, and pending animation frames are cleaned up on unmount. The control honors operating-system reduced motion and safely falls back to a session preference when browser storage is unavailable.

`useScrollReveal.js` progressively enhances existing reveal markers. Content is visible without IntersectionObserver and reveals immediately when keyboard focus enters it. Reduced motion and the visitor pause control keep all content visible and disable animations/transitions. No animation dependencies were introduced.

Validation after motion changes: build, check:content, and check:sections pass. JavaScript is approximately 53.8 KB gzipped. Runtime motion timing, scroll behavior, and appearance remain unverified in a browser because of the existing browser-access limitation. Not deployed.
