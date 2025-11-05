import type { Meta, StoryObj } from '@storybook/react';
import { FormField } from '../src/components/molecules/FormField';
import { Input } from '../src/components/atoms/Input';
import { Checkbox } from '../src/components/atoms/Checkbox';

const meta: Meta<typeof FormField> = {
  title: 'Molecules/FormField',
  component: FormField,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof FormField>;

export const Default: Story = {
  args: {
    label: 'Email',
    children: <Input placeholder="Enter your email" />,
  },
};

export const Required: Story = {
  args: {
    label: 'Password',
    required: true,
    children: <Input type="password" placeholder="Enter your password" />,
  },
};

export const WithHelperText: Story = {
  args: {
    label: 'Username',
    helperText: 'Choose a unique username',
    children: <Input placeholder="Choose username" />,
  },
};

export const WithError: Story = {
  args: {
    label: 'Email',
    required: true,
    error: 'Please enter a valid email address',
    children: <Input placeholder="you@example.com" error />,
  },
};

export const CompleteForm: Story = {
  render: () => (
    <div style={{ maxWidth: '400px', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
      <FormField label="Full Name" required>
        <Input placeholder="John Doe" />
      </FormField>
      
      <FormField label="Email" required error="This email is already taken">
        <Input type="email" placeholder="you@example.com" error />
      </FormField>
      
      <FormField label="Password" required helperText="Must be at least 8 characters">
        <Input type="password" placeholder="••••••••" />
      </FormField>
      
      <FormField>
        <Checkbox label="I agree to the terms and conditions" />
      </FormField>
    </div>
  ),
};

