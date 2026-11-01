# Edit USA Field Guide

A complete static companion for **https://editusa.github.io/**. It contains original reference guides, a primary-source directory and a browser-only cost comparison tool. No framework, package installation, paid service or build command is needed.

## Upload to GitHub Pages

1. Use the GitHub account or organization named **editusa**. That owner name is required for the exact address `editusa.github.io`; naming a repository this way in a different account does not give it that address.
2. Create a public repository named **editusa.github.io**.
3. Extract the ZIP. Upload the files **inside** the extracted folder to the repository root. `index.html`, `assets/`, `favicon.svg` and the other files must be at the root, not inside an extra folder. Include `.nojekyll`.
4. Open the repository's **Settings → Pages**. Select **Deploy from a branch**, then **main** and **/(root)**. Save.
5. Wait for the Pages deployment to finish. Open `https://editusa.github.io/`, then check a guide, the source directory, the comparison tool and `/favicon.ico`.

The package does not create the repository, publish the site, change DNS or alter editusa.com. No custom domain is needed. If you later choose another address, replace `https://editusa.github.io/` throughout the HTML, `robots.txt` and `sitemap.xml` before uploading.

## What is included

- Home page with all six guides and links to the magazine's ten sections.
- Six original guides, each more than 600 words, covering news records, technology and AI, costs and deadlines, culture and entertainment, security and intelligence, and sports access.
- Twenty official resources with a searchable directory.
- Two-plan cost calculator with a print option. Its example prices are hypothetical.
- About page explaining ownership, sources, generated illustrations and data handling.
- A custom 404 page, sitemap, robots file and self-canonical metadata.
- Three contextual editorial illustrations with 640/960/1536 px delivery options, local fonts and font licenses.
- A bookmark favicon distinct from the main website's mark: SVG, ICO, and 48/96/192/512 px PNGs.

## Editorial and image notes

The site openly identifies itself as an official Edit USA companion. Its guides are original material rather than copies of magazine stories. Relevant links to Edit USA are ordinary links, without `nofollow` or `sponsored`; there is no `dofollow` attribute to add. This does not guarantee indexing, ranking or transferred ranking value.

Generated contextual illustrations are credited `Image: Edit USA` and are described on About. The three full-size WebP files are the exact downloads obtained through DeleteFootprints' upload, Remove All Metadata and Download Image workflow. Their decoded pixels and dimensions were verified against the prepared uploads. Smaller WebPs are delivery derivatives of those cleaned originals. Private generation and cleanup proof is kept outside this public package.

The cost comparison and directory search run locally in the browser. There are no analytics tags, ad pixels, cookies, browser-storage calls, embedded third-party media or external font requests. GitHub remains the hosting provider and handles network requests under its own policies.

## Maintenance

Keep guides current when the underlying subject changes. Correct a broken source link to its actual replacement. Do not change dates merely to suggest freshness or duplicate news articles across the two domains. Current reporting belongs on editusa.com; this companion supplies durable references and tools.

When editing a page, preserve the title, description, canonical URL, social metadata, structured data and descriptive image alt text. Add a genuinely new page to the sitemap when it is ready. The existing sitemap intentionally omits fabricated modification dates.

## Font licenses

Newsreader and DM Sans are bundled locally. Their license texts are in `assets/fonts/`. Keep those files when redistributing or updating the package.

Original companion copy, design and illustrations: Edit USA. Third-party sources retain their own rights. No endorsement by GitHub or a linked agency is implied.
