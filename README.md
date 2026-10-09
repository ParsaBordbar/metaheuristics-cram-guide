# 🧠 Metaheuristics Cram Guide

> A fast, interactive study guide for metaheuristic optimization — built for exam prep and quick reference.

[![GitHub Pages](https://img.shields.io/badge/Live%20Demo-GitHub%20Pages-blue?logo=github)](https://parsabordbar.github.io/metaheuristics-cram-guide/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

---

## 📖 About

This is an interactive, single-page HTML study guide covering the core algorithms and concepts in **metaheuristic optimization**, built specifically for graduate-level coursework in Advanced Algorithms.

The guide is designed for:
- **Exam cramming** — dense, well-structured summaries of every major algorithm
- **Quick reference** — all algorithms in one place, no scrolling through lecture slides
- **Visual learning** — pseudocode, complexity notes, and comparison tables

---

## 🗂️ Topics Covered

| Category | Algorithms |
|---|---|
| **Trajectory-based** | Hill Climbing, Simulated Annealing (SA), Tabu Search (TS) |
| **Evolutionary** | Genetic Algorithm (GA), Memetic Algorithm (MA) |
| **Swarm Intelligence** | Particle Swarm Optimization (PSO), Ant Colony Optimization (ACO) |
| **Multi-objective** | NSGA-II, Pareto Front concepts |
| **Foundations** | No Free Lunch Theorem, Exploration vs. Exploitation, Fitness Landscapes |

Each section includes:
- Algorithm overview and motivation
- Step-by-step pseudocode
- Key parameters and their effects
- Common applications
- Pros/cons at a glance
- Links to the papers that introduced the method (DOI links, shared across all pages via `papers.js`)

---


### View Online

The guide is deployed on GitHub Pages — no setup required:

👉 **[https://parsabordbar.github.io/metaheuristics-cram-guide/](https://parsabordbar.github.io/metaheuristics-cram-guide/)**

### Run Locally

```bash
git clone https://github.com/ParsaBordbar/metaheuristics-cram-guide.git
cd metaheuristics-cram-guide
# Open index.html in your browser
open index.html
```

No dependencies, no build step — plain HTML/CSS/JS. Each page links `shared.css` (common responsive layer) and `papers.js` (the reading list), so keep those files next to the pages.

---

## 🛠️ Tech Stack

- **Pure HTML/CSS/JavaScript** — zero dependencies
- **GitHub Pages** — deployed via `gh-pages` branch / GitHub Actions
- Interactive collapsible sections and search/highlight for quick navigation
- Responsive from 360px phones to wide desktops; swipeable topic tabs on small screens

---

## Context

Built as a study tool for the **Advanced Algorithms** course at Shiraz University, M.Sc. Computer Science program. The guide covers the theoretical and practical aspects of metaheuristics as taught in the course, with a focus on exam-relevant content.

---

## Contributing

Spotted an error or want to add an algorithm? Feel free to open an issue or PR.

---

## 📄 License

MIT © [Parsa Bordbar](https://github.com/ParsaBordbar)
