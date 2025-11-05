import type { Meta, StoryObj } from '@storybook/react';
import { Tabs } from '../src/components/organisms/Tabs';

const meta: Meta<typeof Tabs> = {
  title: 'Organisms/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['line', 'enclosed'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Tabs>;

const items = [
  {
    label: 'Profile',
    value: 'profile',
    content: <div style={{ padding: '1rem' }}>Profile content goes here</div>,
  },
  {
    label: 'Settings',
    value: 'settings',
    content: <div style={{ padding: '1rem' }}>Settings content goes here</div>,
  },
  {
    label: 'Messages',
    value: 'messages',
    content: <div style={{ padding: '1rem' }}>Messages content goes here</div>,
  },
  {
    label: 'Disabled',
    value: 'disabled',
    content: <div style={{ padding: '1rem' }}>This tab is disabled</div>,
    disabled: true,
  },
];

export const Default: Story = {
  args: {
    items,
  },
};

export const Enclosed: Story = {
  args: {
    items,
    variant: 'enclosed',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
      <Tabs items={items} size="xs" />
      <Tabs items={items} size="sm" />
      <Tabs items={items} size="md" />
      <Tabs items={items} size="lg" />
    </div>
  ),
};

