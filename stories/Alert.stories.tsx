import type { Meta, StoryObj } from '@storybook/react';
import { Alert } from '../src/components/molecules/Alert';

const meta: Meta<typeof Alert> = {
  title: 'Molecules/Alert',
  component: Alert,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'warning', 'error', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Alert>;

export const Default: Story = {
  args: {
    children: 'This is an alert message',
    variant: 'info',
  },
};

export const WithTitle: Story = {
  args: {
    title: 'Alert Title',
    children: 'This is the alert message content.',
    variant: 'info',
  },
};

export const Closable: Story = {
  args: {
    title: 'Closable Alert',
    children: 'You can close this alert by clicking the X button.',
    closable: true,
    variant: 'info',
  },
};

export const Variants: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <Alert variant="primary" title="Primary">
        This is a primary alert message.
      </Alert>
      <Alert variant="secondary" title="Secondary">
        This is a secondary alert message.
      </Alert>
      <Alert variant="success" title="Success">
        Your changes have been saved successfully!
      </Alert>
      <Alert variant="warning" title="Warning">
        Please review your information before submitting.
      </Alert>
      <Alert variant="error" title="Error">
        Something went wrong. Please try again.
      </Alert>
      <Alert variant="info" title="Information">
        Here's some helpful information for you.
      </Alert>
    </div>
  ),
};

