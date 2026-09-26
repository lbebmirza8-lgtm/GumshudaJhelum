# Gumshuda Jhelum — Lost Jhelum

**Live at:** https://lbebmirza8-lgtm.github.io/GumshudaJhelum/

An interactive heritage web application exploring seven historic landmarks across Jhelum district, Pakistan:

- **Hydaspes** — Site of Alexander the Great's famous battle against King Porus (326 BC)
- **Tilla Jogian** — Ancient hilltop monastic sanctuary of ascetic yogis
- **Nandana Fort** — Historic fort where polymath Al-Biruni calculated the Earth's circumference
- **Rohtas Fort** — Massive 16th-century garrison fort and UNESCO World Heritage Site
- **Khewra Salt Mines** — World-famous historic salt mines
- **Victoria Bridge** — Iconic 19th-century colonial railway bridge
- **Mangla Dam** — Modern reservoir landmark that submerged ancient river settlements

### Why It Exists
Most people, including local residents, have never heard the full story behind these places despite walking past or living near them every day. *Gumshuda Jhelum* exists to bring this history to life, making it accessible, engaging, and memorable rather than letting it fade from public memory.

### Interactive Features
- **Now vs. Historical Era Sliders:** Visual comparison sliders matching present-day site views with past eras.
- **Heritage Passport:** Interactive quizzes for each location that seal progress into a collectible passport.
- **Global Significance, Local Silence:** Highlights explaining why each landmark matters far beyond Jhelum.
- **The Chronicler:** An embedded offline, rule-based chatbot that answers common questions about each site.

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

## Deploy (GitHub Pages)
This repo is already deployed via GitHub Pages.
- Live at: https://lbebmirza8-lgtm.github.io/GumshudaJhelum/
- To update the live site: make your changes locally, then:
  git add .
  git commit -m "describe the change"
  git push
  GitHub Pages redeploys automatically within a minute or two of every push.
- If Pages ever needs to be reconfigured: repo Settings → Pages → Source:
  "Deploy from a branch" → Branch: main, folder: / (root).
