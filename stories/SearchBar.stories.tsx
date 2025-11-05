import type { Meta, StoryObj } from '@storybook/react';
import { SearchBar } from '../src/components/molecules/SearchBar';

const meta: Meta<typeof SearchBar> = {
  title: 'Molecules/SearchBar',
  component: SearchBar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof SearchBar>;

export const Default: Story = {
  args: {
    placeholder: 'Search...',
  },
};

export const WithCallback: Story = {
  args: {
    placeholder: 'Search...',
    onSearch: (value) => alert(`Searching for: ${value}`),
  },
};

export const NotClearable: Story = {
  args: {
    placeholder: 'Search...',
    clearable: false,
  },
};

export const Sizes: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '400px' }}>
      <SearchBar size="xs" placeholder="Extra Small" />
      <SearchBar size="sm" placeholder="Small" />
      <SearchBar size="md" placeholder="Medium" />
      <SearchBar size="lg" placeholder="Large" />
      <SearchBar size="xl" placeholder="Extra Large" />
    </div>
  ),
};

