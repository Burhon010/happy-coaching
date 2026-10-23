# Happy Coaching

A multi-page personal-brand site for a life coach, built with React + Vite + Tailwind CSS v4.

Figma: https://www.figma.com/design/LBQXzdCbADDNucDDe3svp8/Happy-Coaching--Copy-

## Pages

- `/` — Home
- `/services` — Services
- `/free-guide` — Free Guide
- `/about` — About me
- `/self-esteem-therapy` — Self Esteem Therapy (sales page)

## Structure

Feature-Sliced Design:

```
src/
  app/                  router, layout, scroll restoration
  pages/<page>/         ui/<Page>.jsx + sections/<section>/<Section>.jsx, one folder per page
  widgets/               Header and Footer only (nothing else lives here)
  features/             interactive, stateful pieces: subscribe-newsletter, faq-accordion,
                         request-free-guide (each a form/behavior + its own ui/)
  entities/              domain content: testimonial (+ TestimonialCard ui), faq-item,
                         blog-post, service, highlight, program-fit
  shared/ui/             generic, content-agnostic primitives (Button, Container,
                         SectionHeading, Rating, Zigzag, StatBadge) plus the composite
                         sections reused across pages (FaqSection, TestimonialsSection,
                         TransformSection, CtaSession, NewsletterSection, FreeGuidePromo),
                         which compose entities + features
  shared/lib/             framework-agnostic helpers (icon map)
  shared/config/          site-wide static config (photos/media references)
  assets/images/          local image assets (coach photos replacing stock placeholders)
```

Each slice exposes a single `index.js` public API — other layers import from
`@/entities/testimonial`, never `@/entities/testimonial/model/data` directly.

Path alias: `@` → `src`.

## Scripts

```
npm run dev       # start dev server
npm run build     # production build
npm run lint      # oxlint
npm run preview   # preview the production build
```
