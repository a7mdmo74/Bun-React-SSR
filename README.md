# @a7mdmo74/bun-react-ssr

A full-stack Bun framework for building modern web applications. Combines server-side rendering (SSR) with React, backend APIs, middleware support, Tailwind CSS, and shadcn UI components - all powered by the lightning-fast [Bun](https://bun.com) runtime.

**Repository**: [github.com/a7mdmo74/Bun-React-SSR](https://github.com/a7mdmo74/Bun-React-SSR)

## Features

### Frontend

- ⚛️ **React 19** - Latest React for SSR and interactive UIs
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - High-quality, accessible component library built on Radix UI
- 🎭 **Lucide Icons** - Beautiful, consistent icon library

### Backend & Full-Stack

- ⚡ **Bun Runtime** - Lightning-fast, all-in-one JavaScript runtime
- 🔌 **Middleware System** - Built-in logger and static file serving
- 📡 **API Ready** - Perfect for building REST APIs and backend logic
- 🛠️ **Utilities** - Pre-configured utilities and helpers

### Developer Experience

- 📝 **TypeScript** - Full type-safe development
- 🔄 **Hot Reload** - Watch mode for instant feedback
- 📦 **Zero Config** - Pre-configured and ready to use

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

Run the development server with hot reload:

```bash
bun run dev
```

Or run once:

```bash
bun run start
```

### Build for Production

Bundle everything for production deployment:

```bash
bun run build
```

### Tailwind CSS Development

Build and watch Tailwind CSS:

```bash
bun run tailwind:build
```

## What's Included

- **Full-stack foundation** - Backend API routes, server logic, and frontend all in one
- **Production-ready middleware** - Logger and static file serving out of the box
- **Page routing** - Example pages (Home, About) demonstrating SSR
- **Component library** - Pre-built UI components with shadcn/ui and Tailwind
- **Styling** - Global styles with Tailwind CSS integration
- **Type safety** - Everything written in TypeScript

## Project Structure

```text
.
├── src/
│   ├── components/       # Reusable React components
│   │   └── ui/          # UI components (Button, etc.)
│   ├── pages/           # Page components for routing
│   ├── assets/          # Static assets (CSS, images)
│   ├── Layout.tsx       # Main application layout
│   ├── Main.tsx         # Main component
│   └── styles.css       # Global styles
├── lib/
│   └── utils.ts         # Utility functions and helpers
├── middleware/
│   ├── logger.ts        # Request logging middleware
│   └── static.ts        # Static file serving middleware
├── hydrate.tsx          # Client-side hydration setup
├── index.ts             # Server entry point
├── dist/                # Build output (generated)
└── package.json         # Dependencies and scripts
```

## Use Cases

- 🌐 Full-stack web applications
- 🚀 Server-side rendered React apps
- 📱 Progressive web applications (PWAs)
- 🛍️ E-commerce platforms
- 📊 Content-heavy websites
- 🔌 REST APIs with React frontends
- 🎯 Real-time applications

## License

MIT @a7mdmo74
