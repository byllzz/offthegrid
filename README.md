<p align="center">
  <img src="/public/favicon/favicon.svg" width="120" alt="OffTheGrid Logo" />
</p>

<h1 align="center">OffTheGrid</h1>

<p align="center">
  <strong>Make your own grid paper - instantly.</strong><br />
  Choose from 10+ patterns, customize spacing, color, and opacity, then print.
</p>

<p align="center">
  <a href="./LICENSE">
    <img src="https://img.shields.io/badge/License-MIT-9B72FF.svg?style=flat" alt="MIT License" />
  </a>
  <img src="https://img.shields.io/badge/Repository-Active-9B72FF.svg?style=flat" alt="Repository Status" />
  <img src="https://img.shields.io/badge/Website-Online-9B72FF.svg?style=flat" alt="Website Status" />
  <img src="https://img.shields.io/badge/React-19-9B72FF.svg?style=flat&logo=react&logoColor=white" alt="React 19" />
  <img src="https://img.shields.io/badge/TypeScript-5-9B72FF.svg?style=flat&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind-v4-9B72FF.svg?style=flat&logo=tailwindcss&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Zustand-4-9B72FF.svg?style=flat" alt="Zustand" />
  <img src="https://img.shields.io/badge/Vite-7-9B72FF.svg?style=flat&logo=vite&logoColor=white" alt="Vite" />
  <img src="https://img.shields.io/badge/Made%20With-React-9B72FF.svg?style=flat&logo=react&logoColor=white" alt="Made with React" />
  <img src="https://img.shields.io/badge/Open%20Source-❤-9B72FF.svg?style=flat" alt="Open Source" />
  <a href="https://github.com/byllzz">
    <img src="https://img.shields.io/badge/Author-Bilal%20Malik-9B72FF.svg?style=flat" alt="Author" />
  </a>
  <img src="https://img.shields.io/badge/PRs-Welcome-9B72FF.svg?style=flat" alt="PRs Welcome" />
  <img src="https://img.shields.io/badge/Maintained-Yes-9B72FF.svg?style=flat" alt="Maintained" />
</p>

<p align="center">
  <a href="https://gridpaper.vercel.app">
    <img src="https://img.shields.io/badge/%20Try%20-OffTheGrid-9B72FF?style=for-the-badge" alt="Try OffTheGrid" />
  </a>
</p>

<p align="center">
  <img src="./public/preview.gif" width="100%" alt="OffTheGrid Demo" />
</p>

<p align="center">
  <em>Choose a pattern, customize your grid, and print - all in one place.</em>
</p>

---

## What is OffTheGrid?

**OffTheGrid** is a free online tool that lets you create custom grid paper in seconds.

Whether you need dot grids for bullet journaling, square grids for sketching, isometric grids for 3D drawing, or music staff paper for composing - OffTheGrid has you covered.

> **No sign-up. No ads. Just grid paper.**

---


## Why OffTheGrid?

Traditional grid paper comes with limitations. You're limited to whatever patterns are available in stores, restricted to standard sizes, and often paying for an entire notebook when you only need a few sheets.

**OffTheGrid** removes those limitations by putting you in complete control of your grid paper.

No more compromises. Whether you're:

*  A student sketching diagrams
*  A designer prototyping layouts
*  A musician composing on staff paper
*  A bullet journal enthusiast creating custom spreads

OffTheGrid adapts to **your workflow**, not the other way around.

Print exactly what you need, when you need it, completely free.

---

##  10+ Grid Patterns

Choose from a growing collection of professionally designed grid patterns for creative, educational, and technical work.

* **Dot Grid** - Perfect for bullet journaling, sketching, and note-taking. Subtle dots provide guidance without distracting from your content.

* **Lined Paper** - Classic ruled lines for writing, journaling, and everyday notes.

* **Square Grid** - Standard graph paper for mathematics, plotting, and technical drawing.

* **Isometric Grid** - Triangular grids for 3D sketches, architectural drawings, and isometric illustrations.

* **Hex Grid** - Hexagonal layouts for tabletop games, maps, and geometric artwork.

* **Cross Grid** - Crosshatch patterns designed for drafting and precision work.

* **Graph Paper** - Traditional 5×5 graph paper featuring bold major lines and subtle minor divisions, ideal for mathematics and data plotting.

* **Large Dot Grid** - Larger, more visible dots for bold journaling, planning, and heavy writing.

* **Music Staff** - Five-line staff paper for composers, musicians, and music students.

* **Isometric Dots** - An isometric dot layout for perspective drawing and 3D sketching.

---

##  Customizable Spacing

Adjust grid density with precision.

* Interactive spacing slider
* Direct numeric input
* Millimeters (mm) and inches (in)
* Instant ruler updates when switching units

Create the exact spacing your project requires.

---

##  Color & Opacity

Personalize every sheet.

* Choose any grid color
* Adjust opacity from subtle to bold
* One-click reset to default settings

Whether you prefer barely visible guides or high-contrast grids, you're in control.

---

##  Print Ready

Grid paper is made to be printed.

With a single click:

* Clean print output
* No ads
* No UI clutter
* Sharp, accurate rendering

Just your custom grid, ready for paper.

---

##  Persistent Storage

Your preferences are automatically saved in your browser.

* No account required
* No sign-up
* Settings persist between sessions
* Resume exactly where you left off

Everything is stored locally, keeping your workflow fast and private.

---

## How to Use

| Action | How to do it |
|--------|--------------|
| **Choose a pattern** | Click any pattern icon in the control panel |
| **Adjust spacing** | Drag the slider or click the value to type manually |
| **Change unit** | Click the `mm` or `in` button next to the spacing value |
| **Change color** | Click the color preview box or the color picker icon |
| **Reset color** | Click the reset button (↺) next to the color picker |
| **Change opacity** | Drag the opacity slider |
| **Toggle ruler unit** | Click anywhere on the ruler at the top |
| **Print** | Click the `PRINT` button |

---

## Project Structure

```
offthegrid/
├── public/
│ └── favicon/
│ └── icon.png
├── src/
│ ├── components/
│ │ ├── Canvas/
│ │ │ └── GridBackground.tsx
│ │ ├── Controls/
│ │ │ ├── ControlPanel.tsx
│ │ │ └── Ruler.tsx
│ │ └── UI/
│ │ ├── Loader.tsx
│ │ ├── Notification.tsx
│ │ ├── GlobalNotification.tsx
│ │ ├── OpacityControl.tsx
│ │ ├── PrintButton.tsx
│ │ └── SpacingControl.tsx
│ ├── hooks/
│ │ ├── useDebouncedGrid.ts
│ │ └── useNotification.ts
│ ├── store/
│ │ ├── gridStore.ts
│ │ └── notificationStore.ts
│ ├── types/
│ │ └── grid.ts
│ ├── utils/
│ │ ├── constants.ts
│ │ └── patternClasses.ts
│ ├── App.tsx
│ ├── main.tsx
│ └── index.css
├── .gitignore
├── index.html
├── package.json
├── README.md
├── LICENSE
├── tsconfig.json
└── vite.config.ts
```


---

## Tech Stack

| Technology | Purpose |
|------------|---------|
| **React 19** | UI framework |
| **TypeScript** | Type safety |
| **Tailwind CSS v4** | Styling |
| **Zustand** | State management |
| **Vite** | Build tool |
| **use-debounce** | Performance optimization |

---

## Contributing
Contributions are welcome. Yes, even yours.

## How to contribute
* Fork the repository

* Create a feature branch
```bash
git checkout -b feature/amazing-feature
Commit your changes
```
* Commit your feature
```bash
git commit -m "Add amazing feature"
Push to your branch
```

* Push to your's branch
```bash
git push origin feature/amazing-feature
```
- *Open a Pull Request*

---

## Guidelines
- Use ES6+ syntax
- Format code with Prettier
- Write clear, descriptive commit messages
- Update documentation when needed
- Ensure there are no console errors or warnings

---


## Getting Started

### Prerequisites

- **Node.js** 18+ (LTS recommended)
- **npm**, **yarn**, or **pnpm**

### Installation

```bash
# Clone the repository
git clone https://github.com/byllzz/offthegrid.git

# Navigate to the project
cd offthegrid

# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

---

## Support
If OffTheGrid helps you, consider supporting the project:

-  Star this repository on GitHub
-  Share it with your friends
-  Leave feedback in GitHub Discussions
-  Buy me a coffee

<p align="left"> <a href="https://buymeacoffee.com/bilalmlkdev"> <img src="https://img.shields.io/badge/Buy%20Me%20A%20Coffee-FFDD00?style=for-the-badge&logo=buy-me-a-coffee&logoColor=black" alt="Buy Me A Coffee" /> </a>

<a href="https://github.com/sponsors/byllzz"> <img src="https://img.shields.io/badge/Sponsor%20on%20GitHub-181717?style=for-the-badge&logo=github&logoColor=white" alt="Sponsor on GitHub" /> </a> </p>

---

<p align="center"> Made with 💛 using React, TypeScript, and Tailwind CSS.<br /> <strong>Print your perfect grid. 🎯</strong> </p><p align="center"> © 2026 OffTheGrid - Open Source MIT </p>
