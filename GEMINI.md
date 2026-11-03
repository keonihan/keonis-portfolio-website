# Agent Instructions

Read this entire file before starting any tasks

## Self-Correcting Rules-Engine

This file contains a growing ruleset that will improve over time. **At session start, read the entire "Learned Rules" section before doing anything**

### How it works

### How it works

1. When the user corrects you or you make a mistake, immediately append a new rule to the "Learned Rules" section at the bottom of this file.
2. Rules are numbered sequentially and written as clear, imperative instructions.
3. Format: N. [CATEGORY] Never/Always do X – because Y.
4. Categories: [STYLE], [CODE], [ARCH], [TOOL], [PROCESS], [DATA], [UX], [OTHER]
5. Before starting any task, scan all rules below for relevant constraints.
6. If two rules conflict, the higher-numbered (newer) rule wins.
7. Never delete rules. If a rule becomes obsolete, append a new rule that supersedes it.

### When to add a rule

- User explicitly corrects your output ("no, do it this way")
- User rejects a file, approach, or pattern
- You hit a bug caused by a wrong assumption about this codebase
- User states a preference ("always use X", "never do Y")

### Rule format example

14. [CODE] Always use `bun` instead of `npm` – user preference, bun is installed globally.
15. [STYLE] Never add emojis to commit messages – project convention.
16. [ARCH] API routes live in `src/server/routes/`, not `src/api/` – existing codebase pattern.

---

## Learned Rules

<!-- New Rules are appended below this line. Do not edit above this section -->

1. [TOOL] Always use Vite with npm for web projects instead of plain static HTML/CSS/JS – user preference, rejected plain static setup.
2. [UX] Always use an off-canvas push layout for mobile navigation where the main window slides out – user preference for interactive navigation.
3. [ARCH] Structure portfolio navigation into Home, Experience, Hobbies, Projects, Socials – aligns with user's personal site keonihan.com.
4. [STYLE] Never use fake or hyped counting stats (e.g. 60fps, code+design domains, exaggerated numbers) – user preference, wants clean and authentic presentation.
5. [STYLE] Always keep corners subtle/sharp for cards and containers, reserving rounded pill corners strictly for main action buttons – user design preference.
6. [DATA] Always drive portfolio content directly from human-editable JSON files in src/data/ – user workflow preference.
7. [ARCH] Use dedicated page views for Home, Experience, Hobbies, Projects, Socials with a summarized landing page, rather than one long continuous scroll page – user preference, rejected single-page anchor scrolling.
8. [STYLE] Use a dark blue / navy color scheme and subtle background blur (~4px) so background artwork remains recognizable – user design preference.
9. [STYLE] Always use Tailwind CSS for styling instead of raw custom CSS – user preference for modern utility-first workflow.
10. [STYLE] Never use negative z-index (e.g. `z-index: -20`) for site-wide background backdrops when `body` has a background color – because browsers paint negative z-index behind the root body canvas, completely hiding the image. Use positive layering (`z-index: 0` for backdrop, `1` for overlay, `10` for content).
11. [UX] For homepage project and design showcases, use horizontal scrollable feeds (Netflix-style rows that bleed off-screen with navigation controls) instead of static 3-column card grids – user preference, finds static 3-card grids generic/AI-like.




