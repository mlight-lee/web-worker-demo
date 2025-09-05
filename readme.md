# Web Worker Demo

This demo shows how to use **Web Workers** with **Vite** and **TypeScript** to perform CPU-intensive tasks without blocking the main thread. It also demonstrates how to handle **multi-bundle builds** and **single-bundle builds** including dependencies like `lodash-es`.

---

## Features

* Main thread UI with **number input** and **start computation button**.
* Heavy computation is offloaded to a **Web Worker**.
* Waiting **spinner animation** while computation is running.
* Uses **lodash-es** in both main thread and worker.
* Supports **two Vite build modes**:

  * **Multi-bundle build** (default, worker and vendor separate).
  * **Single-bundle build** (everything inlined).

---

## Project Structure

```
.
├─ index.html
├─ package.json
├─ tsconfig.json
├─ vite.config.multi.ts      # multi-bundle build
├─ vite.config.single.ts     # single-bundle build
└─ src/
   ├─ main.ts
   ├─ worker.ts
   ├─ types.ts
   └─ style.css
```

---

## Setup

1. Install dependencies:

```bash
pnpm install
```

2. Start development server:

```bash
pnpm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Usage

1. Enter **two numbers** in the input fields.
2. Click **Start Computation**.
3. A **spinner animation** will appear while the worker computes the result.
4. When finished, the result will be displayed below the spinner.

---

## Build

### 1. Multi-bundle build (default, recommended)

```bash
pnpm run build
```

* Produces separate chunks: main, worker, and vendor (lodash-es).
* Output in `dist/`.

### 2. Single-bundle build (everything in one file)

```bash
pnpm run build:single
```

* Produces one single JS bundle including main, worker, and lodash-es.
* Output in `dist/`.

---

## Technologies Used

* [Vite](https://vitejs.dev/) — Fast frontend build tool
* [TypeScript](https://www.typescriptlang.org/) — Type-safe JavaScript
* [lodash-es](https://www.npmjs.com/package/lodash-es) — Utility functions
* Web Workers — Offload heavy computation from main thread

---

## Notes

* The heavy computation in the worker is **CPU-intensive** (simulated with a large loop).
* In production, consider **optimizing or splitting tasks** to avoid freezing the worker.
* The **single-bundle build** inlines everything, which is useful for environments that require only **one JS file**, but results in a larger bundle size.
