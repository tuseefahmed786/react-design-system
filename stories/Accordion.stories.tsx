import type { Meta, StoryObj } from '@storybook/react';
import { Accordion } from '../src/components/organisms/Accordion';

const meta: Meta<typeof Accordion> = {
  title: 'Organisms/Accordion',
  component: Accordion,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Accordion>;

const items = [
  {
    title: 'What is React?',
    value: 'react',
    content: 'React is a JavaScript library for building user interfaces, maintained by Facebook and a community of individual developers and companies.',
  },
  {
    title: 'What is TypeScript?',
    value: 'typescript',
    content: 'TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.',
  },
  {
    title: 'What is Storybook?',
    value: 'storybook',
    content: 'Storybook is an open source tool for building UI components and pages in isolation. It streamlines UI development, testing, and documentation.',
  },
  {
    title: 'Disabled Item',
    value: 'disabled',
    content: 'This item is disabled.',
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const DefaultOpen: Story = {
  args: {
    items,
    defaultValue: ['react'],
  },
};

export const AllowMultiple: Story = {
  args: {
    items,
    allowMultiple: true,
    defaultValue: ['react', 'typescript'],
  },
};

export const FAQ: Story = {
  render: () => {
    const faqItems = [
      {
        title: 'How do I install the library?',
        value: 'install',
        content: 'You can install the library using npm: npm install @yourorg/design-library',
      },
      {
        title: 'Is it compatible with React 18?',
        value: 'react18',
        content: 'Yes, this library is fully compatible with React 18 and uses modern React patterns.',
      },
      {
        title: 'Does it support TypeScript?',
        value: 'typescript',
        content: 'Absolutely! The entire library is written in TypeScript and provides full type definitions.',
      },
      {
        title: 'Can I customize the components?',
        value: 'customize',
        content: 'Yes, all components accept className and style props, and you can also modify the design tokens.',
      },
    ];
    
    return <Accordion items={faqItems} />;
  },
};

