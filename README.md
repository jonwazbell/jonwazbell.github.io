# Personal website

A simple static site: plain HTML, CSS, and a tiny bit of JavaScript. No build step.

## Files
- `index.html`, `experience.html`, `portfolio.html`, `resume.html`, `contact.html` – the pages
- `style.css` – all styling (colors and fonts are variables at the top)
- `script.js` – mobile menu and footer year
- `404.html` – shown for missing pages
- `CNAME` – your custom domain (edit it)
- `img/` – put `photo.jpg` here (about 4:5 portrait)

## Customize
1. Search for `Your Name`, `you@example.com`, and `your-handle` and replace them.
2. Add `img/photo.jpg` and, optionally, `resume.pdf` at the top level.
3. Change colors in the `:root` block of `style.css`.

## Deploy on GitHub Pages
1. Create a repo (e.g. `my-website`) and upload these files to the root.
2. Repo **Settings → Pages**: Source = *Deploy from a branch*, Branch = `main`, folder = `/ (root)`.
3. Edit `CNAME` to contain only your domain, e.g. `www.yourdomain.com`.
4. At your domain registrar, add DNS records:
   - `www` → **CNAME** → `YOUR-USERNAME.github.io`
   - Apex domain (`yourdomain.com`) → **A** records: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
5. Back in **Settings → Pages**, enter the custom domain and tick **Enforce HTTPS** once it's available (can take a few minutes to a few hours).

Preview locally by opening `index.html` in a browser.
