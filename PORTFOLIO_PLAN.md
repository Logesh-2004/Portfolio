# Portfolio Build Plan

2026-10-28 · Logesh V

Source: https://claude.ai/artifact/LKU1hDbND7u8FrVYdBcYSW

## Goal and positioning

The site positions Logesh as an **AI & Data Analyst who builds automation**: analysis first, building as the proof. Four of the five target roles are analyst roles, so the headline, project order and wording all lead with analysis.

Headline draft: *AI & Data Analyst · I turn data and AI outputs into decisions, and automate the busywork around them.*

| Target role | What a recruiter looks for | Proof on the site |
| --- | --- | --- |
| AI Business Analyst | Business questions turned into data insights and recommendations | Data analysis + dashboard project, AI benchmark experience |
| AI Product Analyst | Judging AI output quality, user-facing metrics, clear write-ups | LLM evaluation case study, benchmark experience |
| AI Research Analyst | Structured evaluation, rubrics, rater agreement, published work | LLM evaluation case study, IconDeepCom 2026 paper, IRR rater experience |
| Data Analyst | SQL, Python, dashboards, insights | Data analysis + dashboard project |
| AI Automation Engineer | Working automation code, clear architecture | AI chat automation runner, EHR system |

The other 15 roles on the list (LLM Evaluation Analyst, BI Analyst, Junior Data Scientist and so on) are covered by the same projects. Don't add a section per role.

## Site structure

The site is one scrolling home page plus one case-study page per project. A recruiter should get the full picture from the home page in 2 minutes and open a case study only if interested.

**Home page, in this order:**

1. **Hero:** photo, name, headline, one-line value statement, buttons for Resume (PDF), GitHub, LinkedIn and Email.
2. **About:** 3–4 lines covering mechatronics diploma → B.Tech AI & Data Science → AI benchmark work, and the roles you're open to.
3. **Featured projects:** 4 cards, each with a screenshot, a one-line result, tech tags and a "Read case study" link.
4. **Experience:**
    - Quelinthos Technologies (Buy Through Words), AI Data & Research Associate, Jun–Oct 2026. Data collector and blind rater in the inter-rater reliability (IRR) process for India's first agentic-commerce AI shopping benchmark, with a link to the published benchmark.
    - Forge: 3D modelling and printing in Fusion 360.
5. **Research & publications:** the IconDeepCom 2026 paper (SRM Institute of Science and Technology, 15–16 June 2026), with the certificate image and a PDF link.
6. **Skills:** grouped as Data & analysis, Python & automation, AI & LLMs, and Tools. List only what you can defend in an interview, with no percentage bars.
7. **Hackathons:** INFINIX'26, contributed to a friend's team project, AgentGuard. Include the demo video.
8. **Education:** B.Tech AI & Data Science, Kumaraguru College of Technology (2026) and Diploma in Mechatronics, Nachimuthu Polytechnic College (2023).
9. **Contact footer:** email, LinkedIn, GitHub.

**Case-study page template:** every project page uses the same headings, so they're quick to write and to read.

1. Problem: what was broken or slow, and for whom
2. Approach: the 2–3 key decisions and why
3. Architecture or flow diagram
4. Tech stack
5. Results: numbers where you have them, otherwise what it now does
6. What I'd improve next
7. Links: GitHub, live demo or video

## Projects

Four featured projects, plus AgentGuard under Hackathons. Two exist locally and need cleanup. Two are new and are the most important gaps for the analyst roles.

| Order | Project | Proves (roles) | State | Demo |
| --- | --- | --- | --- | --- |
| 1 | Data analysis + dashboard (new) | Data Analyst, AI Business Analyst, BI | To build | Live dashboard link |
| 2 | LLM evaluation case study (new) | AI Research Analyst, AI Product Analyst, LLM Evaluation | To build | Report page + charts |
| 3 | AI chat automation runner | AI Automation Engineer, Python Automation | Local, needs cleanup | 60–90 s video |
| 4 | Secure EHR sharing with encrypted QR codes | Research depth, security, full-stack build | Local, needs cleanup | Live demo with dummy data |
| Hackathons | AgentGuard (friend's team, INFINIX'26) | Extra credibility | In friend's Git repo | Recorded video |

### Ready-for-portfolio checklist (every existing project)

Do this in a separate chat per project, with that project's folder connected.

- [ ] Move every API key, password and token into a `.env` file. Commit only a `.env.example`.
- [ ] Remove personal file paths, Chrome profile paths, and any company, client or task names.
- [ ] Add `.gitignore`, `requirements.txt` (or `package.json`) and a short `LICENSE`.
- [ ] Make it run from a fresh clone, following the README's own steps.
- [ ] Write the README: one-line summary, problem, demo GIF or screenshot, architecture diagram, setup steps, tech stack, limitations.
- [ ] Push to a public GitHub repo with a clear name, description and topic tags.
- [ ] Make a demo: a live link where possible, otherwise a 60–90 second video.
- [ ] Write the 300–500 word case study for the site, using the template above.

### Project-specific notes

**1. Data analysis + dashboard (new).**

- Pick one public business dataset, for example Indian retail or e-commerce sales from Kaggle (https://www.kaggle.com/datasets).
- Clean it with SQL and Python (pandas), and answer 4–5 business questions.
- Build a dashboard with a free, public link: Looker Studio, or Streamlit. A Power BI version works too, with screenshots and the `.pbix` file in the repo.
- End with 3–5 written insights and recommendations. The written insights are what analyst recruiters read.

**2. LLM evaluation case study (new).**

- Compare 3–4 AI assistants on 30–50 questions from a public domain. Use a domain other than shopping, so it stays clearly separate from your former employer's benchmark.
- Score answers on a written rubric: accuracy, helpfulness, sources, safety.
- Use two raters (you plus a friend) and compute agreement with Cohen's kappa.
- Publish the rubric, the data, charts and findings.

This is the public version of the IRR work you already did, and it directly targets the research and product analyst roles.

**3. AI chat automation runner.**

- Give it a generic name, e.g. *multi-assistant chat automation runner*.
- Explain only how and why it works: the problem of running the same prompts across several AI chat apps, browser automation with a logged-in profile, saving chat links, batching.
- Never mention where it was used.
- Demo it on a small public prompt set. Show it as a video rather than a live link, because it drives a logged-in browser.

**4. Secure EHR sharing with encrypted QR codes.**

- Use dummy patient data only, never real records.
- Link the paper and certificate from the case study.
- Host a live demo if the stack allows it.

**AgentGuard.**

- Record the defense-off vs defense-on demo.
- Describe it as a contribution to a friend's team.
- Link the repo only with your friend's OK.

## Look, tech stack and hosting

Go for a clean, minimal, content-first site built with Astro + Tailwind and hosted free on Vercel. Everything below costs ₹0.

**Design direction**

- Lots of white space, one accent colour, one font family, light and dark mode.
- Mobile-first: many recruiters open the link on a phone.
- Project cards with real screenshots. Charts and diagrams do the talking.
- Subtle motion only (hover and fade-in), and respect reduced-motion settings.
- Avoid skill percentage bars, emoji as icons, heavy animations, and generic template looks.
- Generate the palette and type with the UI/UX Pro Max skill's `--design-system` command, then keep to it.

**Tech stack:** Astro + Tailwind CSS, with each case study written as a Markdown file. Astro suits content sites: it's fast, simple, and Claude Code can add a new project page from one Markdown file.

| What | Where (free) | URL |
| --- | --- | --- |
| Portfolio site | Vercel Hobby plan | https://vercel.com |
| Project code | GitHub public repos | https://github.com |
| Python app demos | Streamlit Community Cloud or Hugging Face Spaces | https://streamlit.io/cloud · https://huggingface.co/spaces |
| Dashboard | Looker Studio | https://lookerstudio.google.com |
| Demo videos | YouTube (unlisted) | https://www.youtube.com |

The site starts on a free address like `logeshv.vercel.app` (name subject to availability). A custom domain can come later; it's optional and roughly ₹800–1,000 a year (approximate).

## Assets: have vs need

You already have 7 of the 17 assets. The two code projects need cleanup, and the rest are to make.

| Asset | Status | Notes |
| --- | --- | --- |
| Resume PDF | Have | Already fixed; becomes the site's Resume button |
| Profile photo | Have | Square crop, plain background, used in the hero |
| Research paper PDF | Have | Linked from Research section and EHR case study |
| Publication certificate | Have | Shown as an image in the Research section |
| LinkedIn profile | Have | https://www.linkedin.com/in/logeshv-ai |
| GitHub account | Have | Connect when cleaning up the projects |
| AgentGuard code | Have | Friend's repo; record the demo video from it |
| AI chat automation runner code | Needs work | Local only; follow the ready-for-portfolio checklist |
| EHR project code | Needs work | Local only; follow the ready-for-portfolio checklist |
| Personal contact email | To do | Use a personal address on the site, not the former work address |
| Link to the published benchmark | To do | For the Experience section |
| Demo videos (runner, AgentGuard) | To do | 60–90 s each, YouTube unlisted |
| Architecture diagram per project | To do | One simple flow diagram each, reused in README and case study |
| Data analysis + dashboard project | To do | New; highest priority for analyst roles |
| LLM evaluation case study | To do | New; targets research and product analyst roles |
| Case-study write-ups (4) | To do | 300–500 words each, using the template |
| Forge experience details | To do | Confirm dates and role title for the Experience section |

## Roadmap

The build runs in five phases. Phase 1, the sample page, is the next step. Each gate must pass before the next phase starts; phases 2 and 3 can run side by side.

## Phase 1: the sample page

A home page with real text and placeholders, previewed locally before anything goes live. Preview it locally, ask for changes, and only then push to GitHub and import the repo into Vercel.

Assets go in `public/`: `photo.jpg`, `Logesh_V_Resume.pdf`, `certificate.jpg`.

Rules for the build:

- Stack: Astro + Tailwind CSS. Mobile-first, light and dark mode.
- Build only the home page sections listed above.
- Use the real text from the plan. Where content is missing, use a clearly marked placeholder like [TODO: dashboard screenshot]. Never invent numbers, dates or results.
- Check contrast, focus states and alt text with the UI/UX Pro Max pre-delivery checklist.
