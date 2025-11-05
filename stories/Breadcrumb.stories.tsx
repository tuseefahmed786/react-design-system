import type { Meta, StoryObj } from '@storybook/react';
import { Breadcrumb } from '../src/components/organisms/Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
  title: 'Organisms/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
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

