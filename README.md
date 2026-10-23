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

Lightweight FSD-style layout:

```
src/
  app/            router, layout, scroll restoration
  pages/<page>/   ui/<Page>.jsx + sections/<section>/<Section>.jsx, one folder per page
  widgets/        Header and Footer only
  shared/ui/      reusable primitives (Button, Container, SectionHeading, FaqSection,
                  TestimonialsSection, TransformSection, CtaSession, NewsletterSection, …)
  shared/lib/     framework-agnostic helpers (icon map)
  data/           static content (testimonials, FAQ, services, blog posts, photos)
```

Path alias: `@` → `src`.

## Scripts

```
npm run dev       # start dev server
npm run build     # production build
npm run lint      # oxlint
npm run preview   # preview the production build
```
