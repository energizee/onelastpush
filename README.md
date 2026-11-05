NOVA CITY — LAKESIDE FIX

Fixes:
- The chosen pixel animal is now the complete playable character; no human underneath or floating animal above.
- Animal feet are anchored to the map and animate with movement.
- Lily pads are drawn exclusively within lake tiles.
- Water tiles are not covered by later meadow/path decoration.

Open index.html to play. Controls: WASD / arrows, E to interact.

## Demo-day refinements (5 Nov)

- **New player reset** on the start screen clears saved progress and the confidence survey (use it between testers).
- **Replay at a harder level:** completed missions show "Replay ↻". Memory, maths, data and debug missions randomise and get harder on each replay. Replays can raise your best score.
- **Scoring never depends on speed.** Timers stay for challenge; the hidden speed penalty is removed and the Help text matches.
- **Audience 16–24 job-seekers:** pathways now point to apprenticeships, HNC/degrees, entry-level roles, Code First Girls, Equate Scotland.
- **Women and non-binary people:** passport framing (results only, never before missions), present-day composite role-model lines, and a gender-coded wording check in Job Match (Gaucher, Friesen & Kay, 2011).
- **Accessibility basics:** grid cells have screen-reader labels, button labels cleaned up, minimum 12px text.
- New file `refine.js` holds the reset and the wording check.
- **Confidence Mirror:** before a mission's first play, players rate their confidence 1–5 (skippable). The Passport compares expected vs what they did: "You expected to struggle with 2 missions. You completed all of them."
- **Specific evidence:** Passport evidence lines now say what happened (first try, kept going after N attempts, harder level completed).
- **Copy my evidence for a CV** button on the Passport.
- **Job Match "X of Y":** shows how many of the ad's skills you've evidenced, with "You don't need 100% to apply". The example ad now includes gender-coded words so the wording check shows in a demo.
- Canvas renders at full resolution so map labels are sharp.
