import type { Meta, StoryObj } from '@storybook/react';
import { Container } from '../src/components/layout/Container';
import { Flex } from '../src/components/layout/Flex';
import { Stack } from '../src/components/layout/Stack';
import { Grid } from '../src/components/layout/Grid';
import { Spacer } from '../src/components/layout/Spacer';
import { Card } from '../src/components/molecules/Card';

const meta: Meta = {
  title: 'Layout/Overview',
};

export default meta;

const Box = ({ children, ...props }: any) => (
  <div style={{ 
    padding: '1rem', 
    backgroundColor: '#e3f2fd', 
    borderRadius: '0.375rem',
    border: '1px solid #2196f3',
    ...props 
  }}>
    {children}
  </div>
);

export const ContainerExample: StoryObj = {
  render: () => (
    <div>
      <h3>Container with different max-widths</h3>
      <Container maxWidth="sm" style={{ backgroundColor: '#f5f5f5', padding: '1rem', marginBottom: '1rem' }}>
        <Box>Small Container (max-width: 768px)</Box>
      </Container>
      <Container maxWidth="md" style={{ backgroundColor: '#f5f5f5', padding: '1rem', marginBottom: '1rem' }}>
        <Box>Medium Container (max-width: 1024px)</Box>
      </Container>
      <Container maxWidth="lg" style={{ backgroundColor: '#f5f5f5', padding: '1rem' }}>
        <Box>Large Container (max-width: 1280px)</Box>
      </Container>
    </div>
  ),
};

export const FlexExample: StoryObj = {
  render: () => (
    <div>
      <h3>Flex Layouts</h3>
      
      <h4>Row with gap</h4>
      <Flex direction="row" gap="4" style={{ marginBottom: '2rem' }}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Flex>
      
      <h4>Column centered</h4>
      <Flex direction="column" align="center" gap="2" style={{ marginBottom: '2rem' }}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Flex>
      
      <h4>Space between</h4>
      <Flex direction="row" justify="between" style={{ marginBottom: '2rem' }}>
        <Box>Left</Box>
        <Box>Center</Box>
        <Box>Right</Box>
      </Flex>
    </div>
  ),
};

export const StackExample: StoryObj = {
  render: () => (
    <div>
      <h3>Stack Layouts</h3>
      
      <h4>Vertical Stack</h4>
      <Stack direction="vertical" spacing="4" style={{ marginBottom: '2rem' }}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Stack>
      
      <h4>Horizontal Stack</h4>
      <Stack direction="horizontal" spacing="4" style={{ marginBottom: '2rem' }}>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Stack>
      
      <h4>With Divider</h4>
      <Stack direction="vertical" spacing="4" divider>
        <Box>Item 1</Box>
        <Box>Item 2</Box>
        <Box>Item 3</Box>
      </Stack>
    </div>
  ),
};

export const GridExample: StoryObj = {
  render: () => (
    <div>
      <h3>Grid Layouts</h3>
      
      <h4>2 Columns</h4>
      <Grid columns="2" gap="4" style={{ marginBottom: '2rem' }}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </Grid>
      
      <h4>3 Columns</h4>
      <Grid columns="3" gap="4" style={{ marginBottom: '2rem' }}>
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
        <Box>5</Box>
        <Box>6</Box>
      </Grid>
      
      <h4>4 Columns with large gap</h4>
      <Grid columns="4" gap="8">
        <Box>1</Box>
        <Box>2</Box>
        <Box>3</Box>
        <Box>4</Box>
      </Grid>
    </div>
  ),
};

export const SpacerExample: StoryObj = {
  render: () => (
    <div>
      <h3>Spacer</h3>
      <Box>First Section</Box>
      <Spacer size="4" />
      <Box>With small space above</Box>
      <Spacer size="12" />
      <Box>With large space above</Box>
    </div>
  ),
};

export const CompleteLayout: StoryObj = {
  render: () => (
    <Container maxWidth="xl">
      <Stack direction="vertical" spacing="6">
        <h1>Dashboard</h1>
        
        <Grid columns="3" gap="4">
          <Card>
            <div style={{ padding: '1rem' }}>
              <h3>Users</h3>
              <p style={{ fontSize: '2rem', margin: '1rem 0' }}>1,234</p>
            </div>
          </Card>
          <Card>
            <div style={{ padding: '1rem' }}>
              <h3>Revenue</h3>
              <p style={{ fontSize: '2rem', margin: '1rem 0' }}>$56,789</p>
            </div>
          </Card>
          <Card>
            <div style={{ padding: '1rem' }}>
              <h3>Orders</h3>
              <p style={{ fontSize: '2rem', margin: '1rem 0' }}>890</p>
            </div>
          </Card>
        </Grid>
        
        <Card>
          <div style={{ padding: '1.5rem' }}>
            <h2>Recent Activity</h2>
            <Spacer size="4" />
            <Stack direction="vertical" spacing="3">
              <Flex justify="between" align="center">
                <span>New user registered</span>
                <span style={{ color: '#757575' }}>2 min ago</span>
              </Flex>
              <Flex justify="between" align="center">
                <span>Order #1234 completed</span>
                <span style={{ color: '#757575' }}>5 min ago</span>
              </Flex>
              <Flex justify="between" align="center">
                <span>Payment received</span>
                <span style={{ color: '#757575' }}>10 min ago</span>
              </Flex>
            </Stack>
          </div>
        </Card>
      </Stack>
    </Container>
  ),
};

