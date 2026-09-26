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
