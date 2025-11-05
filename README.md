# React Design System 

> A production-ready React + TypeScript component library with 30+ components, design tokens, and theme system.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Storybook](https://img.shields.io/badge/Storybook-FF4785?style=flat&logo=storybook&logoColor=white)](https://storybook.js.org/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Overview

React Design System is a comprehensive UI component library featuring 30+ production-ready components built with React and TypeScript. Designed for scalability, accessibility, and developer experience.

### Features

- **30+ Components** - From basic atoms to complex organisms
- **TypeScript** - Full type safety
- **Accessible** - WCAG 2.1 compliant
- **Theme System** - Light/dark mode support
- **Design Tokens** - Centralized design values
- **Storybook** - Interactive documentation

---

## Live Demo

**[View Storybook Documentation →](https://your-storybook-url.netlify.app)**

---

## Components

### Atoms
Button, Input, Label, Badge, Avatar, Checkbox, Radio, Switch, Spinner

### Molecules
Card, Alert, Tooltip, Dropdown, FormField, SearchBar

### Organisms
Modal, Tabs, Accordion, Menu, Breadcrumb

### Layout
Container, Flex, Stack, Grid, Spacer

---

## Quick Start

```tsx
import { ThemeProvider, Button, Card } from 'react-design-system';

function App() {
  return (
    <ThemeProvider>
      <Card>
        <h1>Welcome</h1>
        <Button variant="primary">Get Started</Button>
      </Card>
    </ThemeProvider>
  );
}
```

---

## Development

### Setup

```bash
# Install dependencies
npm install

# Start Storybook
npm run storybook

# Build library
npm run build
```

### Project Structure

```
src/
├── components/    # React components
├── tokens/        # Design tokens
├── theme/         # Theme system
├── hooks/         # Custom hooks
└── utils/         # Utilities
```

---

## Browser Support

Chrome, Firefox, Safari, Edge (Latest 2 versions)

---

## License

MIT © [Your Name/Organization]

---

## Links

- **Live Demo**: [Storybook](https://your-storybook-url.netlify.app)
- **Repository**: [GitHub](https://github.com/yourusername/react-design-system)
