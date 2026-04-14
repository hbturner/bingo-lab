---
description: "Use when designing or updating UI components and styles for Bingo Mixer. Focus on playful, polished visuals, consistent Tailwind v4 usage, and keeping logic separate from presentation."
applyTo: ["src/components/**", "src/index.css"]
---

# Design Guide

- Build UI in `src/components/` and keep reusable game behavior in `src/hooks/` or `src/utils/`.
- Prefer component-driven design over dumping logic into a single page.
- Use `src/index.css` for global theme tokens and background atmosphere, not for component-specific layout.
- Keep color and theme tokens in `@theme` and reuse them with Tailwind classes like `bg-[--color-accent]` or `text-[--color-accent]`.
- Choose a distinct, cohesive aesthetic rather than generic defaults. For playful screens, commit to bright gradients, soft rounded shapes, and expressive motion.
- Use Tailwind v4 utilities and CSS-first patterns: `bg-gradient-to-r`, `rounded-[32px]`, `shadow-lg`, `text-ellipsis`, and arbitrary values when necessary.
- Add motion only where it supports interaction or celebration: animate modals, buttons, and winning states rather than animating every element.
- Keep spacing generous and readable. Prefer `gap-3`/`gap-4` and larger padding for playful layouts.
- Use emojis, iconography, or light decorative elements sparingly to reinforce the theme without overwhelming the content.
- Avoid overly minimal or corporate styling in this repo; the app should feel fun, friendly, and social.
- Keep accessiblity in mind: use clear labels, focus states, and readable contrast for text over gradients.
