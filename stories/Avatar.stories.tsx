import type { Meta, StoryObj } from '@storybook/react';
import { Avatar } from '../src/components/atoms/Avatar';

const meta: Meta<typeof Avatar> = {
  title: 'Atoms/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Avatar>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?img=1',
    alt: 'User avatar',
  },
};

export const WithInitials: Story = {
  args: {
    name: 'John Doe',
  },
};

export const Placeholder: Story = {
  args: {},
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
      <Avatar size="xs" name="XS" />
      <Avatar size="sm" name="SM" />
      <Avatar size="md" name="MD" />
      <Avatar size="lg" name="LG" />
      <Avatar size="xl" name="XL" />
    </div>
  ),
};

export const UserGroup: Story = {
  render: () => (
    <div style={{ display: 'flex', marginLeft: '1rem' }}>
      <Avatar src="https://i.pravatar.cc/150?img=1" style={{ marginLeft: '-0.5rem' }} />
      <Avatar src="https://i.pravatar.cc/150?img=2" style={{ marginLeft: '-0.5rem' }} />
      <Avatar src="https://i.pravatar.cc/150?img=3" style={{ marginLeft: '-0.5rem' }} />
      <Avatar name="+5" style={{ marginLeft: '-0.5rem', backgroundColor: '#757575' }} />
    </div>
  ),
};

