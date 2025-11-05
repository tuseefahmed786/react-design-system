import type { Meta, StoryObj } from '@storybook/react';
import { Menu } from '../src/components/organisms/Menu';

const meta: Meta<typeof Menu> = {
  title: 'Organisms/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['vertical', 'horizontal'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Menu>;

const items = [
  { label: 'Home', value: 'home', onClick: () => alert('Home clicked') },
  { label: 'Profile', value: 'profile', onClick: () => alert('Profile clicked') },
  { label: 'Settings', value: 'settings', onClick: () => alert('Settings clicked') },
  { label: 'Logout', value: 'logout', onClick: () => alert('Logout clicked') },
];

export const Vertical: Story = {
  args: {
    items,
    orientation: 'vertical',
  },
};

export const Horizontal: Story = {
  args: {
    items,
    orientation: 'horizontal',
  },
};

export const WithDisabled: Story = {
  args: {
    items: [
      { label: 'Home', value: 'home', onClick: () => alert('Home') },
      { label: 'About', value: 'about', onClick: () => alert('About') },
      { label: 'Services (Coming Soon)', value: 'services', disabled: true },
      { label: 'Contact', value: 'contact', onClick: () => alert('Contact') },
    ],
    orientation: 'vertical',
  },
};

export const WithIcons: Story = {
  args: {
    items: [
      { 
        label: 'Dashboard', 
        value: 'dashboard',
        icon: '📊',
        onClick: () => alert('Dashboard')
      },
      { 
        label: 'Users', 
        value: 'users',
        icon: '👥',
        onClick: () => alert('Users')
      },
      { 
        label: 'Settings', 
        value: 'settings',
        icon: '⚙️',
        onClick: () => alert('Settings')
      },
      { 
        label: 'Help', 
        value: 'help',
        icon: '❓',
        onClick: () => alert('Help')
      },
    ],
    orientation: 'vertical',
  },
};

