# Harshit Yoga and Naturopathy Centre — Static Site

Ready-to-deploy static website. Three core files plus an `images/` folder.

## Files
- `index.html` — page structure, SEO meta + JSON-LD
- `styles.css` — all styling (mobile-first, nature-inspired palette)
- `script.js` — gallery/services/reviews rendering, mobile nav, contact form
- `images/` — hero, sprouts and gallery photos

## Deploy
Upload the entire folder to any static host:
- **Netlify / Vercel**: drag-and-drop the folder, no build step.
- **GitHub Pages**: push to a repo, enable Pages on the branch root.
- **Any web server**: copy contents into the web root.

## Customise
- Phone / WhatsApp: edit `+918295625192` in `index.html` and `script.js`.
- Email & address: edit `index.html` (contact section + JSON-LD).
- Contact form currently opens WhatsApp with the message pre-filled. To send by email instead, replace the submit handler in `script.js` with a `mailto:` link or a form backend (Formspree, Getform, Web3Forms).
