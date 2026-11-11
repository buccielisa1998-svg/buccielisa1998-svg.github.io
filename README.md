# Elisa Bucci — Academic Portfolio

Static, responsive GitHub Pages website for Elisa Bucci, Mathematics Ph.D. student at USC.

## Contents

- `index.html` — Homepage: about, doctoral research, selected theses, coursework, teaching and education
- `coursework/index.html` — Coursework archive (currently empty on purpose)
- `coursework/data.js` — Simple list of assignments to publish in the future
- `coursework/files/` — Put approved homework PDFs, notebooks and code here
- `documents/Elisa_Bucci_CV.pdf` — Website version of the résumé (phone number omitted for public sharing)
- `documents/*Thesis*.pdf` — Original Master's and Bachelor's theses
- `assets/style.css`, `assets/site.js` — Theme, mobile navigation and social links
- `.nojekyll` — GitHub Pages serves all files as-is, no static-site build tool needed

## Publish at `YOUR-USERNAME.github.io`

1. Sign in to **Elisa's** GitHub account. Create a **public** repository named exactly `YOUR-USERNAME.github.io` (replace `YOUR-USERNAME` with Elisa's actual GitHub login).
2. Upload **the contents of this folder**, not the folder itself, to the repository's root. `index.html` must be at the root. Easiest method: in the repository choose **Add file → Upload files**, drag and drop the files/folders (GitHub's browser uploader may need dropping the complete unzipped folder contents), then commit. Alternatively use Git:
   ```sh
   git init
   git add .
   git commit -m "Create academic portfolio"
   git branch -M main
   git remote add origin https://github.com/YOUR-USERNAME/YOUR-USERNAME.github.io.git
   git push -u origin main
   ```
3. Under **Settings → Pages**, select **Deploy from a branch**, branch **main**, folder **/(root)**, and **Save**.
4. Visit `https://YOUR-USERNAME.github.io/` after Pages finishes publishing.
5. Add this verified live URL to Elisa's LinkedIn **Contact info → Website** and to her résumé header.

> **Important:** This is a complete site package but it has **not been published** yet. It should go in Elisa's account, not another person's account.

## Add Elisa's LinkedIn (and GitHub) URL

Open `assets/site.js` and edit:

```js
window.ELISA_SITE = {
  linkedinUrl: 'https://www.linkedin.com/in/REAL-ELISA-LINK/',
  githubUrl: 'https://github.com/REAL-USERNAME'
};
```

LinkedIn links automatically appear in the main site's contact area and both footers when a real HTTPS link is supplied. The GitHub URL is reserved for future project/code links.

## Add future homework

1. Get Elisa's approval to post her solution. Do **not** upload classmate work, instructor-only problem sets, solutions restricted by the course, or identifying student records.
2. Copy each PDF / notebook / script into `coursework/files/`.
3. Add an entry to the `window.ELISA_ASSIGNMENTS` array in `coursework/data.js`:

```js
window.ELISA_ASSIGNMENTS = [
  {
    title: 'Assignment title',
    course: 'Stochastic Calculus for Finance',
    category: 'Probability & Finance',
    year: '2026',
    description: 'Short, accurate summary of what this assignment covers.',
    url: 'files/assignment-name.pdf',
    linkLabel: 'View assignment'
  }
];
```

4. Commit / push the updates to `main`. The assignment card will automatically appear on the coursework page, with a category filter. You can add as many entries as needed.
5. Prefer your own written solutions and explanatory notebooks rather than republishing copyrighted course handouts. For notebooks, consider also exporting to HTML or PDF so recruiters can read them without a Jupyter environment.

## Update content

All site copy can be edited directly in `index.html`. No external JavaScript dependencies and no build step are required. To test locally, open `index.html` in a browser or run `python -m http.server 8000` in this folder and open `http://localhost:8000/`.

## Attribution and accuracy

- Doctoral advisor: Prof. Jinchi Lv, USC.
- The 2026 arXiv paper by Mei, Fan, Leng & Lv is listed as **related literature**, not as a publication by Elisa.
- Thesis descriptions are based on Elisa's uploaded thesis manuscripts.
- No software implementations, publications, measured ML results or homework assignments have been fabricated.
- Public résumé includes the email address but omits the personal phone number; the original résumé remains unchanged outside this site.
