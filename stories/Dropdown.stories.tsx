import type { Meta, StoryObj } from '@storybook/react';
import { Dropdown } from '../src/components/molecules/Dropdown';
import { Button } from '../src/components/atoms/Button';

const meta: Meta<typeof Dropdown> = {
  title: 'Molecules/Dropdown',
  component: Dropdown,
  tags: ['autodocs'],
  argTypes: {
    placement: {
      control: 'select',
      options: ['bottom-start', 'bottom-end', 'top-start', 'top-end'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Dropdown>;

const items = [
  { label: 'Profile', value: 'profile', onClick: () => alert('Profile clicked') },
  { label: 'Settings', value: 'settings', onClick: () => alert('Settings clicked') },
  { label: 'Logout', value: 'logout', onClick: () => alert('Logout clicked') },
];

export const Default: Story = {
  args: {
    trigger: <Button>Open Menu</Button>,
    items,
  },
};

export const WithDisabledItem: Story = {
  args: {
    trigger: <Button>Actions</Button>,
    items: [
      { label: 'Edit', value: 'edit', onClick: () => alert('Edit') },
      { label: 'Delete', value: 'delete', onClick: () => alert('Delete') },
      { label: 'Archive (disabled)', value: 'archive', disabled: true },
    ],
  },
};

export const Placements: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', padding: '2rem', flexWrap: 'wrap' }}>
      <Dropdown
        trigger={<Button size="sm">Bottom Start</Button>}
        items={items}
        placement="bottom-start"
      />
      <Dropdown
        trigger={<Button size="sm">Bottom End</Button>}
        items={items}
        placement="bottom-end"
      />
      <Dropdown
        trigger={<Button size="sm">Top Start</Button>}
        items={items}
        placement="top-start"
      />
      <Dropdown
        trigger={<Button size="sm">Top End</Button>}
        items={items}
        placement="top-end"
      />
    </div>
  ),
};

