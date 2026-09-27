# Srijato Bhattacharyya — Academic Website

A lightweight static academic website inspired by the information architecture of Changwoo Lee's AcademicPages site, but implemented from scratch so it works on GitHub Pages with no Jekyll configuration.

## Publish on GitHub Pages

1. Create a GitHub repository named **`YOUR_GITHUB_USERNAME.github.io`**.
2. Upload the contents of this folder to the repository root.
3. In GitHub, open **Settings → Pages**.
4. Under **Build and deployment**, select **Deploy from a branch** and choose the `main` branch / root folder if GitHub has not enabled it automatically.
5. Your site will appear at `https://YOUR_GITHUB_USERNAME.github.io/`.

## Before publishing

### Add your photograph
Save your headshot as:

`assets/img/profile.jpg`

Then edit `assets/js/components.js` and change:

`assets/img/profile-placeholder.svg`

to:

`assets/img/profile.jpg`

### Add your CV
Save your CV as:

`files/Srijato_Bhattacharyya_CV.pdf`

Then in `cv.html`, replace the disabled CV link with:

```html
<a class="btn" href="files/Srijato_Bhattacharyya_CV.pdf" target="_blank">View CV</a>
```

### Optional links
Edit `assets/js/components.js` if you want to add Google Scholar, GitHub, ORCID, or remove ResearchGate/LinkedIn.

## Main files

- `index.html` — homepage
- `research.html` — publications and current research directions
- `talks.html` — presentations and selected awards
- `teaching.html` — teaching record
- `cv.html` — CV landing page
- `personal.html` — optional personal page
- `assets/css/style.css` — all styling
- `assets/js/components.js` — shared header/sidebar/footer

## Design notes

The layout intentionally follows the clean academic pattern used by AcademicPages sites: persistent top navigation, profile column, restrained typography, and content-first pages. It is not a copy of Changwoo Lee's source code or theme.
