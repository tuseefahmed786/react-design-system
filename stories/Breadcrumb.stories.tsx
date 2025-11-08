import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../src/components/organisms/Breadcrumb';
import React from 'react';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Organisms/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Breadcrumb>;

export const Default: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#' },
      { label: 'Electronics', href: '#' },
      { label: 'Laptops' },
    ],
  },
};

export const WithButtons: Story = {
  args: {
    items: [
      { label: 'Home', onClick: () => alert('Home') },
      { label: 'Users', onClick: () => alert('Users') },
      { label: 'Profile', onClick: () => alert('Profile') },
      { label: 'Settings' },
    ],
  },
};

export const CustomSeparator: Story = {
  args: {
    items: [
      { label: 'Dashboard', href: '#' },
      { label: 'Projects', href: '#' },
      { label: 'Design System' },
    ],
    separator: '›',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { label: 'Home', href: '#', icon: '🏠' },
      { label: 'Products', href: '#', icon: '📦' },
      { label: 'Electronics', href: '#', icon: '⚡' },
      { label: 'Laptops', icon: '💻' },
    ],
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Products', href: '#', disabled: true },
      { label: 'Electronics', href: '#' },
      { label: 'Laptops' },
    ],
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <div>
        <h4>Extra Small</h4>
        <Breadcrumb
          size="xs"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Current' },
          ]}
        />
      </div>
      <div>
        <h4>Small</h4>
        <Breadcrumb
          size="sm"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Current' },
          ]}
        />
      </div>
      <div>
        <h4>Medium (Default)</h4>
        <Breadcrumb
          size="md"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Current' },
          ]}
        />
      </div>
      <div>
        <h4>Large</h4>
        <Breadcrumb
          size="lg"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Current' },
          ]}
        />
      </div>
      <div>
        <h4>Extra Large</h4>
        <Breadcrumb
          size="xl"
          items={[
            { label: 'Home', href: '#' },
            { label: 'Products', href: '#' },
            { label: 'Current' },
          ]}
        />
      </div>
    </div>
  ),
};

export const LongPath: Story = {
  args: {
    items: [
      { label: 'Home', href: '#' },
      { label: 'Documents', href: '#' },
      { label: 'Projects', href: '#' },
      { label: '2024', href: '#' },
      { label: 'Q4', href: '#' },
      { label: 'Design Library' },
    ],
  },
};

