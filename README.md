# SparkleNeat — Professional Cleaning Services Landing Page

A responsive, conversion-focused landing page built for a Nigerian cleaning services business. Part of a portfolio of niche business websites built for local Nigerian SMEs (cleaning, food/catering, fashion, events).

**Live demo:** _add your GitHub Pages / Netlify link here once deployed_

![SparkleNeat preview](images/2nd.jpg)

## What this is

SparkleNeat doesn't have a website — like most Nigerian SMEs, they only had a WhatsApp number. This project gives them:

- A professional landing page that builds trust before a customer ever messages them
- A direct WhatsApp CTA (no app, no friction — just `wa.me` links)
- A working contact/quote form wired to Formspree (no backend needed)
- Fully responsive layout (mobile-first, since most Nigerian traffic is mobile)

## Tech stack

- Plain HTML5, CSS3, vanilla JavaScript — no frameworks, no build step
- [Formspree](https://formspree.io) for form handling (no backend required)
- Fonts: Syne (headings) + DM Sans (body), via Google Fonts

## Features

- Sticky nav with scroll-aware styling and mobile hamburger menu
- Hero section with WhatsApp CTA + stats
- Image collage grid showcasing real work
- Services grid (6 services)
- Before/after section
- "Why choose us" section
- Testimonials
- Quote request form with client-side validation (name, phone, service required)
- Fully responsive (breakpoints at 900px, 600px, 400px)

## Project structure

```
sparkleneat/
├── index.html      # markup
├── style.css       # all styling
├── script.js       # nav scroll state, mobile menu, form validation
├── images/         # photography used across the page
└── README.md
```

## Running locally

No build tools needed — it's static HTML/CSS/JS.

```bash
git clone <this-repo-url>
cd sparkleneat
# just open index.html in a browser, or serve it:
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deployment

Deployed easily on GitHub Pages, Netlify, or Vercel — it's a static site with no server-side dependencies.

**GitHub Pages:** Settings → Pages → Deploy from branch → `main` / root.

## Notes

- Contact form posts to Formspree; replace the `action` URL in `index.html` with your own Formspree endpoint if reusing this template.
- Brand color palette: dark green (`#1A6B4A`), lime (`#B5E550`), off-white (`#F2F7F4`) — used consistently across this and sibling projects in the portfolio series.

## Part of a series

This is the first of a set of single-purpose landing pages built for Nigerian small businesses, each following the same pattern: landing page + clear CTA (WhatsApp/call) + Google Business Profile alignment, built fast and priced affordably for local SMEs while serving as portfolio pieces for international client acquisition.
