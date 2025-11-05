import type { Meta, StoryObj } from '@storybook/react';
import { Radio } from '../src/components/atoms/Radio';

const meta: Meta<typeof Radio> = {
  title: 'Atoms/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Radio>;

export const Default: Story = {
  args: {
    label: 'Radio button',
    name: 'default',
  },
};

export const Checked: Story = {
  args: {
    label: 'Checked',
    defaultChecked: true,
    name: 'checked',
  },
};

export const Disabled: Story = {
  args: {
    label: 'Disabled',
    disabled: true,
    name: 'disabled',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Radio size="xs" label="Extra Small" name="size" />
      <Radio size="sm" label="Small" name="size" />
      <Radio size="md" label="Medium" name="size" defaultChecked />
      <Radio size="lg" label="Large" name="size" />
      <Radio size="xl" label="Extra Large" name="size" />
    </div>
  ),
};

export const RadioGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
      <Radio label="Option 1" name="group" defaultChecked />
      <Radio label="Option 2" name="group" />
      <Radio label="Option 3" name="group" />
      <Radio label="Option 4 (Disabled)" name="group" disabled />
    </div>
  ),
};

