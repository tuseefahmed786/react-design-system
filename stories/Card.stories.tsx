import type { Meta, StoryObj } from '@storybook/react';
import { Card, CardHeader, CardBody, CardFooter } from '../src/components/molecules/Card';
import { Button } from '../src/components/atoms/Button';
import React from 'react';

const meta: Meta<typeof Card> = {
  title: 'Molecules/Card',
  component: Card,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Card>;

export const Default: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>Card Title</CardHeader>
      <CardBody>
        <p>This is the card content. You can put any content here.</p>
      </CardBody>
    </Card>
  ),
};

export const WithFooter: Story = {
  render: () => (
    <Card style={{ maxWidth: '400px' }}>
      <CardHeader>Card with Footer</CardHeader>
      <CardBody>
        <p>This card has a footer with actions.</p>
      </CardBody>
      <CardFooter>
        <Button variant="ghost" size="sm">Cancel</Button>
        <Button size="sm">Save</Button>
      </CardFooter>
    </Card>
  ),
};

export const Hoverable: Story = {
  render: () => (
    <Card hoverable style={{ maxWidth: '400px' }}>
      <CardHeader>Hoverable Card</CardHeader>
      <CardBody>
        <p>Hover over this card to see the effect.</p>
      </CardBody>
    </Card>
  ),
};

export const NoBorder: Story = {
  render: () => (
    <Card bordered={false} style={{ maxWidth: '400px', boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)' }}>
      <CardHeader>Card without Border</CardHeader>
      <CardBody>
        <p>This card has no border.</p>
      </CardBody>
    </Card>
  ),
};

