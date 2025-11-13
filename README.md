# @a7mdmo74/bun-react-ssr

A modern server-side rendering (SSR) starter template built with [Bun](https://bun.com), React, Tailwind CSS, and Radix UI components.

## Features

- ⚡ **Bun Runtime** - Lightning-fast JavaScript runtime
- ⚛️ **React 19** - Latest React for building user interfaces
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **Radix UI** - Accessible component library
- 📝 **TypeScript** - Type-safe development
- 🎭 **Lucide Icons** - Beautiful icon library

## Installation

```bash
npm install @a7mdmo74/bun-react-ssr
```

Or with Bun:

```bash
bun add @a7mdmo74/bun-react-ssr
```

## Getting Started

### Install dependencies

```bash
bun install
```

### Development

Run the development server with file watching:

```bash
bun run dev
```

Or run once:

```bash
bun run index.ts
```

### Build

Build the project for production:

```bash
bun run build
```

### Tailwind CSS

Build Tailwind CSS in watch mode:

```bash
bun run tailwind:build
```

## Project Structure

```
.
├── src/
│   ├── components/     # React components
│   ├── pages/          # Page components
│   ├── assets/         # Static assets
│   ├── Layout.tsx      # Main layout
│   └── styles.css      # Global styles
├── lib/                # Utility functions
├── middleware/         # Server middleware
├── dist/               # Build output
└── index.ts            # Entry point
```

## License

MIT @a7mdmo74
