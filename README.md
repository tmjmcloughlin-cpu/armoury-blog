# The Armoury Blog

> An independent Arsenal FC sports blog — clean, fast, SEO-ready static HTML.

**Live site:** [https://thearmoury.blog](https://thearmoury.blog) *(update after GitHub Pages is configured)*

---

## About

The Armoury is a static HTML/CSS/JS Arsenal FC blog with a design system inspired by iconic Arsenal kits:

| Kit | Era | Design Influence |
|-----|-----|-----------------|
| Classic Red/White Home (JVC) | 1988–91 | Hero section, primary palette |
| Bruised Banana Away | 1991–93 | Category strip, yellow tags |
| Navy & Gold Away (Puma) | 2015–16 | Header, footer, dark sections |
| White Away (Adidas) | 1994–95 | Article body, clean reading layout |

---

## SEO Features

Every page includes a full SEO stack out of the box:

- **Primary meta** — `<title>`, `<meta name="description">`, `<meta name="keywords">`, `<meta name="robots">`, `<link rel="canonical">`
- **Open Graph** — Full OG tags for Facebook, LinkedIn and WhatsApp previews
- **Twitter / X Cards** — `summary_large_image` card with per-page overrides
- **Schema.org JSON-LD** — `WebSite`, `Blog`, `BlogPosting`, `BreadcrumbList`, `Organization`, `Person`
- **Sitemap** — `sitemap.xml` with Google News extension on article URLs
- **RSS Feed** — `rss.xml` with full metadata
- **robots.txt** — Permissive with sitemap declaration
- **Reading progress bar** — On article pages
- **Semantic HTML** — `<main>`, `<article>`, `<aside>`, `<nav>`, `<header>`, `<footer>`, ARIA labels throughout

---

## Structure

```
armoury-blog/
├── index.html              # Homepage
├── match-reports.html      # Section index (template)
├── tactics.html
├── transfers.html
├── history.html
├── opinion.html
├── about.html
├── posts/
│   ├── arsenal-3-1-chelsea-match-report.html
│   ├── bruised-banana-kit-history.html
│   └── ... (add more posts here)
├── css/
│   └── style.css           # Full design system
├── js/
│   └── main.js             # Navigation, lazy load, progress bar
├── images/
│   └── favicon.svg
├── sitemap.xml
├── rss.xml
├── robots.txt
└── .nojekyll               # Disables Jekyll processing on GitHub Pages
```

---

## Adding a New Post

1. Copy an existing post from `posts/` as a template.
2. Update all meta tags: `<title>`, `<meta name="description">`, `<link rel="canonical">`, all `og:` and `twitter:` tags.
3. Update the `BlogPosting` JSON-LD block with the new post's details.
4. Update the `BreadcrumbList` JSON-LD.
5. Write your content in the `.article-body` div.
6. Add the post to `sitemap.xml` and `rss.xml`.

---

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. Go to **Settings → Pages**.
3. Set source to **Deploy from a branch → main → / (root)**.
4. Your site will be live at `https://<username>.github.io/<repo-name>/`.

---

## Kit Colour Palette

| Name | Hex | Usage |
|------|-----|-------|
| Arsenal Red | `#EF0107` | Primary accent, hero, CTAs |
| Midnight Navy | `#0A1931` | Header, footer, dark sections |
| Gold | `#C5A028` | Accents, hover states, footer text |
| Bruised Yellow | `#FFD700` | Tags, category strip |
| White | `#FFFFFF` | Cards, article body |

---

*Not affiliated with Arsenal Football Club plc.*
