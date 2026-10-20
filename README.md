# CivicFlow — Small Business Support Prototype

CivicFlow is a front-end prototype that helps small-business owners in Andhra Pradesh organise their search for government support, track preparation tasks, and get ready before visiting official portals.

> **Prototype status:** This is a student demonstration, not a live government service. Scheme cards are starting points, not verified eligibility matches. It does not submit applications or collect sensitive identity/banking information.

## Run locally
1. Download or clone this repository.
2. Open `index.html` in a browser, or use VS Code with the Live Server extension.
3. No package installation or build step is required.

## Features
- Dashboard with progress at a glance.
- Searchable scheme/support pathways with business-type filter.
- Links to official websites such as Udyam, Ministry of MSME, Startup India, MSME Samadhaan, CHAMPIONS, and GST.
- Interactive task checklist saved in the browser using `localStorage`.
- Application-preparation checklist with privacy-first guidance.
- Responsive layout for desktop and mobile.

## Suggested GitHub setup
1. Create a public repository named `civicflow-prototype`.
2. Upload `index.html`, `style.css`, `app.js`, and this README.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**, choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site.

## Project presentation template (aligned to student instructions)

### 1. Problem
Small and first-time business owners may need to search across multiple government websites to understand relevant schemes, registration steps, and compliance tasks. Information scattered across portals can make the next step unclear.

### 2. People & context
First-time entrepreneurs and micro/small business owners in Andhra Pradesh, especially rural and semi-urban users who may have limited time or confidence navigating multiple portals.

### 3. Evidence to collect
This prototype does **not** claim to have completed field research. Before presenting impact claims, collect:
- Short interviews with 5–10 small-business owners.
- Observations of how long it takes them to find one relevant scheme.
- Common points of confusion and missed steps.
- Feedback from a local MSME office, incubator, or business association.

### 4. Idea / proposed solution
CivicFlow provides a single guidance dashboard: discover official support pathways, maintain a checklist, and prepare questions/documents before going to the relevant government portal. The prototype does not replace government systems.

### 5. Government fit
Potential stakeholders to approach include the Andhra Pradesh Industries/Commerce ecosystem, District Industries Centres, and the Ministry of MSME. Treat these as prospective partners; no partnership is implied. Applications remain on official portals.

### 6. Feasibility
- **People:** 2–4 student developers/designers plus a faculty mentor and feedback from local business owners.
- **Technology:** HTML, CSS, JavaScript for the prototype; a later version could add a reviewed database of schemes and multilingual guidance.
- **Permissions/data:** Public official information, reviewed and dated; user research consent; avoid collecting Aadhaar/PAN or bank details.
- **Pilot:** A proposed 90-day pilot in two districts, subject to stakeholder approval and validation.
- **Cost:** Initial prototype can be hosted on GitHub Pages at no hosting cost.

### 7. Expected impact & measurement
Potential outcomes to test—not results already achieved:
- Less time to locate an appropriate official starting point.
- More preparation tasks completed before a visit/application.
- Fewer users unsure about their next step.
- User satisfaction and repeat usage.
Measure with a small baseline test and a follow-up usability test. Track time-to-find, checklist completion, successful clicks to official portals, and user feedback.

## Suggested 6-slide presentation (5 minutes)
1. **Problem & relevance** — the fragmented search journey.
2. **People & evidence** — target users and the interviews/observations collected.
3. **CivicFlow solution** — show the dashboard and scheme finder.
4. **Government fit & workflow** — official portals remain the application destination.
5. **Feasibility & pilot** — team, technology, validation plan, and costs.
6. **Expected impact & scale** — measures, sustainability, and next steps.

## Evaluation alignment (100 marks)
- Problem & relevance (20): support with real local interviews/observations.
- Impact (20): define measurable outcomes and report only tested results.
- Innovation (20): combine scheme discovery, checklist, and application preparation.
- Feasibility & cost (20): static prototype, low-cost hosting, clear pilot.
- Scalability & sustainability (20): maintain a reviewed scheme directory, add Telugu support after validation, and partner with local support organisations.

## Official starting points
- [Udyam Registration](https://udyamregistration.gov.in/)
- [Ministry of MSME](https://msme.gov.in/)
- [Startup India](https://www.startupindia.gov.in/)
- [MSME Samadhaan](https://samadhaan.msme.gov.in/)
- [CHAMPIONS Portal](https://champions.gov.in/)
- [GST Portal](https://www.gst.gov.in/)

## Next development steps
1. Validate the problem with local interviews.
2. Verify scheme names, current rules, eligibility, and links with official sources.
3. Add Telugu/English language switching.
4. Create an admin-reviewed scheme dataset with last-verified dates.
5. Conduct usability testing before describing the prototype as effective.
