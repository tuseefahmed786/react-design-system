import type { Meta, StoryObj } from '@storybook/react';
import { Spinner } from '../src/components/atoms/Spinner';

const meta: Meta<typeof Spinner> = {
  title: 'Atoms/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Spinner>;

export const Default: Story = {
  args: {
    variant: 'primary',
  },
};

export const WithLabel: Story = {
  args: {
    label: 'Loading...',
    variant: 'primary',
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
      <Spinner size="xs" />
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
      <Spinner size="xl" />
    </div>
  ),
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
      <Spinner variant="primary" label="Primary" />
      <Spinner variant="secondary" label="Secondary" />
      <Spinner variant="success" label="Success" />
      <Spinner variant="warning" label="Warning" />
      <Spinner variant="error" label="Error" />
      <Spinner variant="info" label="Info" />
    </div>
  ),
};

