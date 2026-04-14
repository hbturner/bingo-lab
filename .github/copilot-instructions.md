---
name: bingo-lab workspace instructions
description: "Shared workspace instructions for the Bingo Mixer repo. Use these to understand repo structure, build/test commands, and frontend conventions before editing or creating files."
---

## Mandatory development checklist

- [ ] `npm run lint`
- [ ] `npm run build`
- [ ] `npm test`

## Project overview

Bingo Mixer is a React + Vite + TypeScript app with Tailwind CSS v4 and an interactive workshop guide under `workshop/`.

## Key files and directories

- `src/main.tsx` — application entry point
- `src/App.tsx` — root app shell
- `src/components/` — UI components for the game (`BingoBoard`, `BingoModal`, `GameScreen`, `StartScreen`, etc.)
- `src/hooks/useBingoGame.ts` — reusable game state hook
- `src/utils/bingoLogic.ts` — game logic and tests
- `src/data/questions.ts` — bingo question data
- `public/` — static assets
- `workshop/` — lab content and guided exercises

## Build and development commands

Use the existing npm scripts defined in `package.json`:

- `npm install`
- `npm run dev` — local development server
- `npm run build` — build production output
- `npm run lint` — lint source files
- `npm test` — run tests with Vitest

## Conventions

- Keep UI logic in `src/components/` and reusable game behavior in `src/hooks/` or `src/utils/`.
- Prefer component-driven design rather than putting game rules directly in page code.
- Use TypeScript types from `src/types/` when available.
- Follow existing React and Tailwind patterns from current components.

## When to use this workspace instruction

Use this file for general project guidance, not for task-specific prompts or workflows. For focused custom instructions, add a dedicated `*.instructions.md` under `.github/instructions/` or a prompt under `.github/prompts/`.

## Notes for future customization

- Do not duplicate workshop or README content. Link to `workshop/GUIDE.md` or `README.md` when needed.
- If you add tooling-specific agent guidance, keep it narrow and file-scoped rather than making everything global.
