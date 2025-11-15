# React Design System 

> A production-ready React + TypeScript component library with 30+ components, design tokens, and theme system.


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

**[Explore Component Library →](https://design-system-lib-tuseef-ahmed.netlify.app/)**

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
