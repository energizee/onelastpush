# Hidden Talent — Product Spec (Future Makers 2026)

> **"You're more qualified than you think."**
> A short, story-driven game that watches *how* you solve problems, shows you the gap between how capable you *felt* and how capable you *were*, and turns what you did into real evidence for your CV and job applications.

**Status:** build spec for the hackathon. Demo to coaches **Thu 5 Nov, 1pm**. Everything below is scoped to roughly 6–8 build hours across a team of six.

## Quick reference

- **Problem:** women undervalue their own STEM ability and skip roles they could do. The barrier is self-recognition, not ability.
- **Audience:** women and non-binary job-seekers aged 16–24 at Scottish colleges and universities. ✅ *Locked*
- **Product:** a 10–15 minute browser game. 6 missions, scored on how you play, not just right answers. ✅ *Core 6 locked:* `login`, `find`, `bridge`, `logic`, `budget`, `data`
- **Hook:** the Confidence Mirror. Players predict how they'll do before each mission, then see predicted vs actual at the end.
- **Output:** a Skills Passport with CV-ready evidence lines, career matches and Scottish routes in.
- **Should-have:** the Job Ad Decoder ("you've shown 6 of 8 requirements"). ✅ *Locked as Should*
- **Tech:** static HTML/CSS/JS, no backend, no AI, no personal data collected. ✅ *AI out for now*
- **Must-dos for accessibility:** Mission List mode (no walking needed) and remove the reaction-time mission.
- **Deadlines:** feature freeze Thu 11:45 · demo Thu 1:00pm.
- **Still open:** who collects role-model quotes from the Lloyds helpers (§15).

---

## 0. TL;DR

| | |
|---|---|
| **Problem** | Women and girls with STEM-relevant ability rule themselves out. They rate their own ability lower than men with the same performance, they don't see their everyday skills as "technical", and they hold back from roles unless they meet every requirement. The barrier is **self-recognition**, not ability. |
| **Audience** | Women and non-binary students aged 16–24 at Scottish colleges and universities, especially those on non-STEM or "STEM-adjacent" courses, who are starting to look for jobs. Secondary audience: career changers. |
| **Solution** | *Hidden Talent: Nova City*, a 10–15 minute browser game. Players fix problems around a city. The game records **behaviour** (how you approached a task, how you checked your work, how you recovered from mistakes), not just right answers. |
| **What's different** | 1. **Confidence Mirror:** you predict how you'll do before each mission, and at the end you see your predictions next to your actual results. 2. **Process over answers:** strengths are inferred from *how* you play, so there's no test to fail. 3. **Evidence, not labels:** results become ready-to-use CV lines and a "Job Ad Decoder" that shows how many of a real job's requirements you've already demonstrated. |
| **Tech** | Static HTML/CSS/JS. No backend, no login, no data leaves the device. Runs offline at the demo. |

---

## 1. The problem (what we tell the judges)

**The barrier we're tackling:** women undervalue their own STEM ability and transferable skills, so they opt out of STEM roles they could do. Existing careers tools make this worse: they ask *"What are you good at?"*, and the people who underrate themselves give low answers.

Evidence to cite (⚠️ **check each one and get the source link before the pitch**, and use only what you can source):
- Women are roughly **a quarter** of the UK core-STEM workforce (WISE annual workforce statistics). Equate Scotland and the Scottish Government publish Scotland-specific figures.
- OECD PISA: girls report **higher maths anxiety and lower self-efficacy than boys, even at the same performance level**.
- The often-quoted line *"men apply when they meet ~60% of requirements, women when they meet 100%"* comes from an internal HP report and is **contested**. If you use it, say so openly ("widely quoted, and here's why it resonates"). Being honest about it scores on Problem Understanding.
- Scotland-specific: girls' uptake of Computing Science and Physics at National 5/Higher (SQA attainment statistics) and female share of STEM Modern/Graduate Apprenticeships (Skills Development Scotland).

**One-sentence problem statement:**
> *Talented women are filtering themselves out of STEM before anyone else gets the chance to, because they can't see the evidence of their own ability.*

---

## 2. Who it's for

**Primary persona: "Aisha, 19"**
- Second year of an HNC in Business at a Dundee college. Good at organising, spotting what's wrong in spreadsheets, and handling tricky customers in her retail job.
- Has never thought of herself as "techy". Scrolls past job ads that list "analytical skills" and "problem solving" because she assumes those mean coding.
- What she needs: proof she already has the skills, in language employers use, and a route in that doesn't require starting over.

**Secondary persona: "Morag, 34, career changer"**
- Ten years in healthcare admin and wants a change. Same barrier, plus a feeling that it's "too late".

**Why this audience:** the brief invites job-seeking audiences. Our hackathon peers *are* this audience, so we can user-test on the day. Lloyds (the judges' employer) recruits from it through early-careers and apprenticeship schemes.

**Out of scope:** school pupils under 16. That's a strong future direction (subject choice in S3), but it brings different tone, safeguarding and consent issues.

---

## 3. The concept: three pillars

### Pillar 1: Confidence Mirror *(the memorable hook)*
Before each mission, one tap: **"How confident are you about this one?"** (1–5 sparks).
After all missions, the results screen shows a chart of **predicted vs actual** for each mission:

> *"You expected to struggle with 4 of 6 missions. You completed all of them, and solved the data mission faster than average.*
> *That gap between how you felt and what you did? That's the gap that keeps people out of STEM."*

- This is the line from the demo people will remember. It turns an abstract statistic into a personal moment.
- If someone *over*-predicts, use neutral framing: "You know your strengths, so here's where to stretch next." Never shame.

### Pillar 2: Process over answers *(no test to fail)*
Each mission records **how** you work, not just whether you got it right:

| Signal | What it shows | Example |
|---|---|---|
| Explored before acting (inspected several options before choosing) | Analytical approach, investigation | Looked at all 3 terminals before picking one |
| Recovered after a mistake and succeeded | Resilience, debugging mindset | Got the boundary case wrong, then right |
| Chose the inclusive option when a faster one was available | Inclusive / user-centred design | Picked the step-free route |
| Checked work before submitting (e.g. adjusted the allocation) | Attention to detail, quality assurance | Re-balanced the power grid before activating |
| Asked for a hint and then solved it | Uses available resources (a real workplace skill) | |
| Consistent accuracy across detail missions | Precision | |

Getting something wrong is never only negative. **Retrying and succeeding raises "Resilience / Debugging".** That's honest, because debugging is the job.

### Pillar 3: Evidence, not labels *(the job-seeking link)*
The output is evidence, not "You are a Data Scientist!":
1. **Skills Passport:** your top 3–5 demonstrated strengths. Each one comes with a plain-English **evidence line** written from what you actually did:
   > *Attention to detail:* "Identified a suspicious login by comparing time, location and device data across three sessions."
   These are templated CV / personal-statement / interview (STAR) lines the player can copy.
2. **Everyday translation:** "Where else have you done this?" chips (retail, caring, gaming, sport, organising events). Pick one and the line updates: *"…the same skill I use reconciling stock counts at work."* This connects game evidence to real life.
3. **Job Ad Decoder** *(Should-have, see §5):* paste or pick a real entry-level job ad. Requirements you've demonstrated light up green: *"You've shown evidence for 6 of 8 requirements. You don't need 100%. Apply."*
4. **Routes in (Scotland-specific):** each suggested career shows Foundation / Modern / Graduate Apprenticeship, college and university routes, plus a role-model card.

---

## 4. Player journey (10–15 minutes)

1. **Intro (30s):** "Something is wrong in Nova City. You don't need to be an expert. Just curious." Choose an animal explorer. **No gender, name, or account asked.** Choose play mode: *Explore the city* (walk around) or *Mission list* (accessible, no movement needed).
2. **Missions (6 in the core path):** for each one:
   1. Mission Control briefing (1–2 lines).
   2. **Confidence tap** (1–5).
   3. Play the mission. Behaviour is logged.
   4. Debrief: what you did, which skill it shows, and a **role-model micro-story** (20 words + photo or illustration): *"I use this every day to catch fraud." Priya, Fraud Analyst.*
3. **Futures Studio (results):**
   1. Confidence Mirror reveal (animated predicted vs actual).
   2. Skills Passport with evidence lines.
   3. "Where else have you done this?" chips.
   4. 3 career matches with Scottish routes in.
   5. Job Ad Decoder.
   6. **Take it with you:** copy text, print / save as PDF, or show a QR code to open the passport on a phone.

---

## 5. Features & priorities (MoSCoW)

### MUST (the demo fails without these)
- [ ] **M1 Confidence tap** before each mission, stored per mission.
- [ ] **M2 Behaviour logging:** `startedAt`, `firstActionAt`, `completedAt`, `attempts`, `inspections`, `hintsUsed`, `choice` per mission (see §8).
- [ ] **M3 Core path of 6 missions** (selected from the current 11, see §6), each mapped to signals.
- [ ] **M4 Confidence Mirror** chart on the results screen.
- [ ] **M5 Skills Passport** with templated evidence lines.
- [ ] **M6 Mission List mode:** play every mission with no walking (keyboard and screen-reader friendly). *Essential for the Accessibility score.*
- [ ] **M7 Remove or replace the reaction-time mission.** It excludes players with motor impairments and isn't a meaningful career signal (see §6).
- [ ] **M8 Debrief role-model line** per mission (text is fine).

### SHOULD (strongly improves the score)
- [ ] **S1 Job Ad Decoder** using keyword matching against 3 preloaded sample ads plus paste-your-own. No AI needed.
- [ ] **S2 "Where else have you done this?"** chips that rewrite evidence lines.
- [ ] **S3 Copy / print passport** (`window.print()` with a print stylesheet).
- [ ] **S4 Accessibility settings panel:** text size, reduced motion, high contrast, dyslexia-friendly font.
- [ ] **S5 Hint button** on each mission (also feeds a signal).

### COULD (only if ahead of schedule)
- [ ] **C1** QR code to open the passport on a phone (encode results in a URL hash, no server).
- [ ] **C2** Ambient sound / voiced Mission Control (keep off by default).
- [ ] **C3** Optional, explicitly consented, *anonymous* "share my mirror" counter for the pitch: "X of our testers underestimated themselves". It's fine to collect this by hand on paper from testers instead.
- [ ] ~~**C4** AI rewrite of evidence lines~~. **Parked: no AI for now.** Templates only. Mention it in the pitch as a possible next step.

### WON'T (say so in the pitch as "next steps")
- Accounts, employer dashboards, ML-based scoring, school version, multiplayer.

> **Cut line:** if it's 10am Thursday and the MUSTs aren't done, drop all SHOULDs except S3.

---

## 6. Mission design: the core six

Keep the existing code; rework the framing and add signals. Recommended core path (one per room plus finale):

| # | Mission (existing id) | Room | What player does | Signals logged | Skills fed |
|---|---|---|---|---|---|
| 1 | Suspicious logins (`login`) | Security Lab | Pick the odd login | inspected terminals before choosing (*hover/focus or "inspect" tap*), attempts | Pattern recognition, Analytical thinking |
| 2 | Find the evidence (`find`) | Security Lab | Find 3 clues among 6 objects | misclicks, time | Attention to detail, Investigation |
| 3 | Build a crossing (`bridge`) | Engineering Bay | Safety vs accessibility trade-off | chose inclusive, read all options | Engineering judgement, Inclusive design |
| 4 | Debug the robot (`logic`) | Community Centre | Boundary-condition bug | wrong then right → resilience | Logical reasoning, Debugging/Resilience |
| 5 | Power the shelters (`budget`) | Community Centre | Allocate 9 units | adjustments before submit, prioritised essentials | Resource planning, Decision-making |
| 6 | Spot the bottleneck (`data`) | Data Ops | Read a chart | time-to-answer, attempts | Data literacy |

**Optional bonus missions** (kept, not required for results): `route`, `detail`, `pattern`, `sequence`.
**Remove:** `reaction`. If time allows, replace it with a *Hypothesis test* mission: "Which experiment would tell us why the signal fails?" That's the Experimentation skill without timing or motor demands.

**Design rules for every mission**
- Plain language, ≤ 40 words of instructions.
- **No timers** that affect outcome. Time is only logged, never shown as pressure.
- Always more than one way to succeed; wrong answers give a hint, never "Wrong!".
- The debrief names the skill **and** a real job that uses it.

---

## 7. Scoring model (transparent and explainable)

Simple, rule-based, and visible to the player ("Why am I seeing this?" link on each skill).

```
skillScore[skill] = Σ over missions feeding that skill of:
    + 3  completed
    + 2  completed first try
    + 2  recovered after ≥1 mistake (Resilience/Debugging only)
    + 1  explored ≥2 options before choosing (Analytical/Investigation)
    + 2  chose inclusive option (Inclusive design)
    + 1  adjusted before submitting (Attention to detail)
    + 1  used a hint then succeeded (Resourcefulness)
```
- Top 3–5 skills → Passport. Careers ranked by sum of their 3 linked skills (existing `careers` array; add Scottish routes).
- **Confidence Mirror:** `predicted` = tap (1–5) → expected success %. `actual` = completed (+ first-try bonus). Gap = actual − predicted. Show a headline count: *"You underestimated yourself on N missions."*
- **Honesty statement on screen:** "This is a discovery tool, not an aptitude test. It reflects what you did in 15 minutes, and you're more than that." (The prototype already has similar wording; keep it.)

---

## 8. Technical design

**Stack:** keep vanilla HTML/CSS/JS, single page, no build step. Works offline and opens from `index.html`. Optional deploy to Vercel/GitHub Pages for a QR link at the demo.

**Refactor (minimal, do first, ~45 min, one person):**
- `game.js` is currently minified-style one-liners, which makes it hard for six people to edit together. Split into:
  - `js/world.js`: map, movement, rendering (existing code, mostly untouched).
  - `js/missions.js`: mission definitions plus `beginTask` handlers.
  - `js/telemetry.js`: the session log (new).
  - `js/results.js`: scoring, mirror, passport, decoder (new).
  - `js/data/*.js`: careers, evidence templates, role models, job ads (content people can edit without touching logic).
- Use plain `<script>` tags in order, not modules, to avoid `file://` CORS issues.

**Data model (in memory, optionally `sessionStorage` wrapped in try/catch):**
```js
session = {
  mode: 'explore' | 'list',
  settings: { textSize, reducedMotion, highContrast, dyslexiaFont },
  missions: {
    login: {
      confidence: 2,            // 1–5, from confidence tap
      startedAt, firstActionAt, completedAt,   // ms timestamps
      attempts: 1,              // wrong submissions
      inspections: 3,           // options looked at before choosing
      hintsUsed: 0,
      adjustments: 0,           // changes before submit
      choice: 'B', inclusiveChoice: null,
      contextChip: 'retail'     // from "where else have you done this?"
    }
  }
}
```

**Evidence line templates** (`js/data/evidence.js`):
```js
login: {
  skill: 'Pattern recognition',
  line: 'Identified a suspicious login by comparing time, location and device data across {inspections} sessions.',
  firstTry: ' Found it on the first attempt.',
  recovered: ' Re-checked the evidence after an initial miss and found the anomaly.'
}
```

**Job Ad Decoder:** a keyword → skill map (`'analytical'|'analyse'|'data'` → Data literacy; `'attention to detail'|'accuracy'` → Attention to detail; `'problem solving'|'troubleshoot'` → Logical reasoning…). Highlight matches in the ad text; show `X of Y requirements evidenced`. Preload 3 **sample** ads written by the team, in the style of real entry-level roles (junior data analyst, cyber apprentice, IT support). Don't copy a real company's ad or use its branding.

**Privacy:** nothing is sent anywhere. No gender, name, email, or age is collected. Say this in the pitch: it's a design choice for trust, not a missing feature.

---

## 9. Accessibility & inclusion requirements (20% of the score)

| Requirement | How |
|---|---|
| Play without fine motor control / walking | **Mission List mode** (M6); remove the reaction test (M7) |
| Keyboard only | All buttons focusable, visible focus ring, Esc closes, Enter selects; no canvas-only interactions |
| Screen readers | Missions are HTML buttons (already true); add `aria-live` to feedback; describe the chart in text ("Predicted 2/5, completed first try") |
| Low vision | Text-size toggle; contrast ≥ 4.5:1; don't rely on colour alone (✓ icons plus colour) |
| Neurodivergent players | No timers; short instructions; reduced-motion toggle (stop bouncing and pulsing trails); optional dyslexia-friendly font; sound off by default |
| Language | Plain English (~reading age 12); no jargon without explanation |
| Emotional safety | No "fail" states, no lives, no leaderboard; gentle framing for over-confidence |
| Representation | Role-model stories cover different ages, ethnicities, disabilities and routes in (apprentice, career changer, graduate) |

**Role models:** use **real people only with their permission.** Ask the Lloyds helpers today for a 20-word quote and job title. That's also great Learning & Adaptability evidence. Otherwise, use clearly labelled composite characters ("based on real roles"). Don't use photos or names of real people without consent.

---

## 10. Build plan

### Roles (team of 6)
| Person | Owns |
|---|---|
| **A: Tech lead** | Refactor split, telemetry, scoring (§7–8), integration and merges |
| **B: Missions dev** | Confidence tap, signal hooks in 6 missions, hint button, remove reaction mission |
| **C: Results dev** | Futures Studio: Mirror chart (SVG or CSS bars), Passport, copy/print |
| **D: Accessibility & UX** | Mission List mode, settings panel, keyboard/screen-reader pass, reduced motion |
| **E: Content & research** | Evidence templates, career routes (Scotland), role-model quotes from Lloyds helpers, sample job ads, source every stat |
| **F: Pitch & testing lead** | User tests (§11), collect the before/after data, build the pitch deck and demo script, timekeeper |

### Timeline
**Wed 4 Nov (today)**
- **Now → +45 min:** agree this spec (lock the audience and the 6 missions). A does the refactor split; E starts content; F writes the test script.
- **+45 min → 3:30pm:** B/C/D build MUSTs in parallel on the split files. E feeds content into `js/data/`.
- **3:30pm → 4pm:** integrate. **First playtest with 2–3 people from other teams.** Write down what confused them.

**Thu 5 Nov**
- **10:00–11:00:** fix the top 3 issues from yesterday's playtest. Start SHOULDs (S1 decoder, S3 print).
- **11:00–11:45:** second playtest round (aim for 5+ testers total). F records the confidence-gap numbers.
- **11:45–12:15:** **feature freeze.** Bug fixes only. Accessibility pass (keyboard-only run, zoom to 200%).
- **12:15–1:00:** rehearse the demo twice; fallback screenshots/video ready.
- **1:00pm:** coach demo.

### Git workflow
- Branch per person (`feat/telemetry`, `feat/results`…); A merges to `main` hourly.
- Keep `main` always openable from `index.html`. Tag a known-good demo version before 12:15 Thu.

---

## 11. Testing plan (feeds the Learning & Adaptability score)

- Test with **other participants**, who are our target audience.
- Before playing: "On a scale of 1–5, how 'technical' would you say you are?"
- After the results screen: same question again, plus "Would you apply for a junior data/cyber role after seeing this?" (1–5).
- Record the **before → after shift** for the pitch: *"Our 8 testers' self-rating went from an average of 2.1 to 3.4."* (Use whatever the real numbers turn out to be, even if they're modest.)
- Keep a **change log** of what testing made you change (for "What did you learn?"). Example: *"Testers skipped the confidence tap, so we made it a big, friendly one-tap step."*

---

## 12. Pitch (10 min), mapped to the judging criteria

| Min | Beat | Criterion |
|---|---|---|
| 0–1 | Open with the Mirror: show one tester's real predicted-vs-actual chart. "She expected to fail 4 of 6. She failed none." | Creativity, Impact |
| 1–2.5 | The barrier: self-recognition gap; sourced stats; Aisha persona | Problem understanding |
| 2.5–6 | **Live demo:** intro → one mission with confidence tap → results: Mirror, Passport, Job Ad Decoder | Technical execution |
| 6–7 | Why a game and why this tech: shows ability instead of asking about it; no backend, so it's private and runs anywhere | Technical execution |
| 7–8 | Accessibility: switch to Mission List mode live; no timers; no personal data | Accessibility & inclusion |
| 8–9 | What we learned: test data and the change log | Learning & adaptability |
| 9–10 | Impact & next steps: colleges' careers services, SDS / DYW, employers using the Decoder to rewrite exclusionary job ads, school version | Impact |

**Closing line:** *"Hidden Talent doesn't tell women they could be good at STEM. It shows them they already are."*

---

## 13. Risks & fallbacks

| Risk | Mitigation |
|---|---|
| Refactor breaks the game | Do it first, test immediately; keep the original `game.js` on a tag |
| Results feel like a horoscope | Evidence lines quote what the player actually did; "Why am I seeing this?" link |
| Judges ask "Isn't this just a careers quiz?" | "Quizzes ask what you're good at, and people who underrate themselves answer low. We observe it instead, then show you the gap." |
| Wi-Fi fails at demo | Runs from `file://`, no network needed (Google Fonts falls back to system fonts) |
| Reinforcing stereotypes ("girls do caring jobs") | Career matches are driven by skills, not gender; no gender input; role models across all fields |
| Overclaiming validity | Say clearly it's a discovery tool; scoring is transparent |

---

## 14. Known issues in the current prototype (V10)

- `index.html` shows "0 / 6 MISSIONS" while there are 11 tasks. The count updates at runtime, but the chapter thresholds (4/8) and ending assume a different number. Align with the core-6 path.
- Map icons only exist for the original 6 task ids; the other 5 render `undefined` labels on the canvas.
- `reaction` mission: timed and motor-dependent (remove, M7).
- Movement is the only way to reach missions (Mission List mode needed, M6). Fast-travel map helps but still needs walking to stations.
- Scoring uses only completion and first try; no process signals yet.
- Sound button implies audio that doesn't exist; hide it or label it honestly.

---

## 15. Decisions

| # | Decision | Status |
|---|---|---|
| 1 | **Audience:** 16–24 college/uni job-seekers | ✅ Locked |
| 2 | **Core 6 missions:** list in §6 | ✅ Locked |
| 3 | **Job Ad Decoder:** Should-have | ✅ Locked |
| 4 | **AI:** none for now; C4 stays parked | ✅ Locked |
| 5 | **Role models:** who asks the Lloyds helpers for quotes, and when? | ⏳ Open, assign today |
