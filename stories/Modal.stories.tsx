import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '../src/components/organisms/Modal';
import { Button } from '../src/components/atoms/Button';
import React from 'react';

const meta: Meta<typeof Modal> = {
  title: 'Organisms/Modal',
  component: Modal,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Modal>;

export const Default: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Modal Title"
        >
          <p>This is the modal content. You can put any content here.</p>
          <p>Click outside or press ESC to close.</p>
        </Modal>
      </>
    );
  },
};

export const WithFooter: Story = {
  render: () => {
    const [isOpen, setIsOpen] = useState(false);
    
    return (
      <>
        <Button onClick={() => setIsOpen(true)}>Open Modal with Footer</Button>
        <Modal
          isOpen={isOpen}
          onClose={() => setIsOpen(false)}
          title="Confirm Action"
          footer={
            <>
              <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
              <Button onClick={() => setIsOpen(false)}>Confirm</Button>
            </>
          }
        >
          <p>Are you sure you want to perform this action?</p>
        </Modal>
      </>
    );
  },
};

export const Sizes: Story = {
  render: () => {
    const [size, setSize] = useState<'xs' | 'sm' | 'md' | 'lg' | 'xl' | null>(null);
    
    return (
      <>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <Button size="sm" onClick={() => setSize('xs')}>XS Modal</Button>
          <Button size="sm" onClick={() => setSize('sm')}>SM Modal</Button>
          <Button size="sm" onClick={() => setSize('md')}>MD Modal</Button>
          <Button size="sm" onClick={() => setSize('lg')}>LG Modal</Button>
          <Button size="sm" onClick={() => setSize('xl')}>XL Modal</Button>
        </div>
        {size && (
          <Modal
            isOpen={!!size}
            onClose={() => setSize(null)}
            title={`${size.toUpperCase()} Modal`}
            size={size}
          >
            <p>This is a {size} sized modal.</p>
          </Modal>
        )}
      </>
    );
  },
};

