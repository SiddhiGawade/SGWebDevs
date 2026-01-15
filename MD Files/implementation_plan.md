# Implementation Plan

This document tracks the step-by-step technical implementation of the Rare Elephant Media website.

## 1. Project Initialization
- [x] Initialize Vite project with React.
- [x] Install Tailwind CSS and configure `tailwind.config.js`.
    - Extend colors with `brand-yellow: '#FFF200'`.
    - Extend font families.
- [x] Install dependencies:
    - `framer-motion` (Animations)
    - `lucide-react` (Icons)

## 2. Global Styles & Assets
- [x] Import Google Fonts:
    - **Oswald** (Headings)
    - **Permanent Marker** (Accents)
    - **Times New Roman** (Body)
- [x] Set default animations in `index.css` or Tailwind config.

## 3. Component Architecture

### `Hero` Section
- **Layout**: `flex` or `grid` (Tailwind).
- **Style**: White background, Black text.
- **Key Element**: Large "Rare Elephant" logo, bright yellow CTA buttons.

### `Timeline` Section ("The story so far")
- **Layout**: Full-width container.
- **Style**: Black background (`bg-black`), White text (`text-white`).
- **Logic**: Use `framer-motion`'s `useScroll` to drive the SVG path drawing animation.

### `FounderNote` Section ("Who we are")
- [x] **Style**: Whiteboard look (`bg-white`, `shadow-xl`, `rotate-1`).
- [x] **Typography**: `Permanent Marker` for the "Founder's note" highlight.

### `Services` Section ("What we do")
- [x] **Style**: Black background.
- [x] **Cards**: Image cards with yellow hover effects.

### `Team` Section
- [x] **Style**: Yellow background (`bg-brand-yellow`).
- [x] **Cards**: Circular avatars with white scribbled borders.

## 4. Verification Checklist
- [ ] **Color Check**: Verify `#FFF200` is used exactly.
- [ ] **Font Check**: Ensure "Oswald" is distinct from "Times New Roman".
- [ ] **Responsive**: Test Tailwind breakpoints (`md`, `lg`) for mobile vs desktop layouts.
