import type { Meta, StoryObj } from '@storybook/react';
import { Switch } from '../src/components/atoms/Switch';

const meta: Meta<typeof Switch> = {
  title: 'Atoms/Switch',
  component: Switch,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Switch>;

export const Default: Story = {
  args: {
    label: 'Switch',
  },
};

export const Checked: Story = {
  args: {
    label: 'Enabled',
    defaultChecked: true,
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch size="xs" label="Extra Small" />
      <Switch size="sm" label="Small" />
      <Switch size="md" label="Medium" defaultChecked />
      <Switch size="lg" label="Large" />
      <Switch size="xl" label="Extra Large" />
    </div>
  ),
};

export const Settings: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Switch label="Enable notifications" defaultChecked />
      <Switch label="Auto-save" defaultChecked />
      <Switch label="Dark mode" />
      <Switch label="Two-factor authentication" disabled />
    </div>
  ),
};

