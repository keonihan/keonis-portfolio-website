# Keoni Han - Personal Portfolio

An interactive, clean portfolio built with **React**, **TypeScript**, and **Vite** using **npm**, completely driven by human-editable JSON files.

## Editing Your Site (JSON Driven)

All site data is separated from the code into `src/data/`. To update anything on the site, simply edit the corresponding `.json` file:

- **[src/data/profile.json](file:///c:/Users/Keoni/Desktop/Agent%20Practice/src/data/profile.json)**: Edit your name, title, location, bio, availability status, and social profile links.
- **[src/data/experience.json](file:///c:/Users/Keoni/Desktop/Agent%20Practice/src/data/experience.json)**: Add or edit jobs, roles, dates, company websites, and task bullet points.
- **[src/data/education.json](file:///c:/Users/Keoni/Desktop/Agent%20Practice/src/data/education.json)**: Add or edit schools, degrees, and graduation years.
- **[src/data/projects.json](file:///c:/Users/Keoni/Desktop/Agent%20Practice/src/data/projects.json)**: Add or edit coding projects, dates, descriptions, and GitHub repositories.
- **[src/data/graphic_design_projects.json](file:///c:/Users/Keoni/Desktop/Agent%20Practice/src/data/graphic_design_projects.json)**: Add or edit graphic design work, visualizers, and YouTube/Spotify links.
- **[src/data/hobbies.json](file:///c:/Users/Keoni/Desktop/Agent%20Practice/src/data/hobbies.json)**: Add or edit personal hobbies.

Whenever you save a JSON file, Vite instantly hot-reloads the site in your browser.

## Styling Rules

- **Corner Radii**: Cards, boxes, and containers use subtle/sharp corners (`4px`–`6px`). Only main CTA action buttons feature fully rounded pill shapes.
- **Simplicity**: No fake or exaggerated metrics—clean, direct presentation of your real work and experience.
- **Mobile Push Navigation**: On mobile, the hamburger menu slides and scales the main window out to reveal the sidebar navigation.

## Quick Commands

```powershell
# Start Vite development server
npm run dev

# Production build
npm run build
```
