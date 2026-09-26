# Gumshuda Jhelum — Lost Jhelum

A static, single-page heritage site documenting seven places in Jhelum district. No build step, no framework, no backend — just `index.html`, `style.css`, `script.js`.

## Run it locally
Just open `index.html` in a browser — or in Cursor, right-click it and "Open with Live Server" if you have that extension, or run:
```
npx serve .
```

## Update photos
Each site in `script.js` has an `eras` array with two entries. Each era object has an `img` field pointing to a file in `/images`.

To swap or add a photo:
1. Drop the new image file into `/images`
2. In `script.js`, update the matching era object's `img` field to the new filename:
   ```js
   { id: 'now', label: 'NOW', color: '#4a6fa5', img: 'images/your-file.jpg', caption: '...' }
   ```
3. Refresh the page.

## Deploy to Vercel
No config needed — it's already a static site.

**Option A — via GitHub (recommended):**
1. Push this folder to a new GitHub repo
2. Go to vercel.com → "Add New Project" → import that repo
3. Leave all settings as default (no build command, no output directory needed for plain static)
4. Deploy — you get a live `.vercel.app` URL instantly, and it auto-redeploys every time you push

**Option B — instant, no GitHub:**
1. Install the Vercel CLI: `npm i -g vercel`
2. From inside this folder, run: `vercel`
3. Follow the prompts (first deploy asks a few setup questions — accept the defaults)
4. You get a live URL in your terminal within seconds

Either way, the link stays live indefinitely (not just a week) unless you delete the project.
