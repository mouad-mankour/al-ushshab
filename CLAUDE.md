# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Purpose

This project is dedicated to building dynamic 3D websites and web applications using modern web technologies (Three.js, React Three Fiber, WebGL, GSAP, etc.).

## Preferred Stack

- **3D Engine**: Three.js or React Three Fiber (@react-three/fiber + @react-three/drei)
- **Framework**: Vite (preferred for speed) or Next.js for SSR needs
- **Animation**: GSAP for DOM/camera transitions, Framer Motion for React UI
- **Shaders**: GLSL written inline (glsl-literal) or in `.glsl` / `.vert` / `.frag` files
- **Styling**: Tailwind CSS or CSS Modules — no plain global CSS unless minimal
- **Language**: TypeScript by default

## Commands

Once a project is bootstrapped, the typical commands are:

```bash
npm install          # install dependencies
npm run dev          # start Vite dev server (hot reload)
npm run build        # production build
npm run preview      # preview production build locally
npm run lint         # ESLint check
npm run typecheck    # tsc --noEmit
```

For a React Three Fiber + Vite project, bootstrap with:
```bash
npm create vite@latest . -- --template react-ts
npm install three @react-three/fiber @react-three/drei
npm install -D @types/three
```

## Architecture Principles

- **Scene composition**: Each 3D scene lives in its own component (e.g., `src/scenes/HeroScene.tsx`). The canvas wrapper (`<Canvas>`) is set up once at the route level.
- **Assets**: 3D models (`.glb`, `.gltf`) go in `public/models/`, textures in `public/textures/`. Use `useGLTF` / `useTexture` from drei for loading with Suspense.
- **Shaders**: Custom GLSL shaders go in `src/shaders/<name>/`. Split into `vertex.glsl` and `fragment.glsl`. Import via Vite's `?raw` or a glsl plugin.
- **Performance**: Always use `dispose()` on geometries/materials when unmounting. Prefer instanced meshes for repeated objects. Keep draw calls low.
- **Camera & controls**: Default to `OrbitControls` (drei) for dev; replace with custom camera rigs for production experiences.
- **Responsive canvas**: Use the `dpr` prop on `<Canvas>` with `Math.min(window.devicePixelRatio, 2)` to cap pixel ratio.

## Key Conventions

- R3F components use the declarative JSX scene graph — avoid imperative `scene.add()` inside components.
- `useFrame` hooks must be kept lean; heavy computations belong outside the render loop.
- Separate scene logic (hooks, stores) from visual components.
- Use Zustand for shared 3D state (e.g., scroll progress, interaction flags).

## Design System

This project uses the **Al-ʿUshshāb Heritage System** documented in [DESIGN.md](DESIGN.md). Always consult it before building any UI.

Key constraints to respect at all times:
- **No pure white or black** — use `#e8e1d9` (on-surface) for light text, `#15130e` (surface) for dark backgrounds
- **No rounded corners** — `border-radius: 0` everywhere; sharpness is structural to the aesthetic
- **Fonts**: `Aref Ruqaa` for Arabic display, `Cormorant Garamond` for Latin display/headings, `Inter 300` for body — load all three from Google Fonts
- **Gold accents** (`#e4c278` secondary) are for borders, strokes, and micro-accents only — never fills
- **Depth via texture and tonal layers**, not box-shadow; use grain overlays and inner glows
- **Section gaps of 128px**, page margins of 64px — whitespace is intentional and generous
- **Photography**: always wrapped in a vignette filter to mimic chiaroscuro lighting

When using `/frontend-design` on this project, the DESIGN.md system takes precedence over any other aesthetic direction.

## Custom Skills

| Skill | Trigger | Purpose |
|-------|---------|---------|
| `/frontend-design` | Building any UI component, page, or app | Generates distinctive, production-grade interfaces with intentional aesthetic direction — avoids generic AI aesthetics |
| `/skill-creator` | Creating, editing, or benchmarking a skill | Full skill lifecycle: draft → test → eval loop → description optimization → package |
