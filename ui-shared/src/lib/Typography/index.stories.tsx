import type { Meta, StoryObj } from '@storybook/react';
import { Typography } from './index';

const meta: Meta<typeof Typography> = {
  component: Typography,
  title: 'Typography',
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
};
export default meta;
type Story = StoryObj<typeof Typography>;

export const H1: Story = {
  args: {
    variant: 'h1',
    children: 'h1. Heading',
  },
};

export const H2: Story = {
  args: {
    variant: 'h2',
    children: 'h2. Heading',
  },
};

export const H3: Story = {
  args: {
    variant: 'h3',
    children: 'h3. Heading',
  },
};

export const H4: Story = {
  args: {
    variant: 'h4',
    children: 'h4. Heading',
  },
};

export const H5: Story = {
  args: {
    variant: 'h5',
    children: 'h5. Heading',
  },
};

export const H6: Story = {
  args: {
    variant: 'h6',
    children: 'h6. Heading',
  },
};

export const SubTitle1: Story = {
  args: {
    variant: 'subtitle1',
    children:
      'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  },
};

export const SubTitle2: Story = {
  args: {
    variant: 'subtitle2',
    children:
      'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  },
};

export const Body1: Story = {
  args: {
    variant: 'body1',
    children:
      'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  },
};

export const Body2: Story = {
  args: {
    variant: 'body2',
    children:
      'subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos blanditiis tenetur',
  },
};

export const Button: Story = {
  args: {
    variant: 'button',
    children: 'button text',
  },
};

export const Caption: Story = {
  args: {
    variant: 'caption',
    children: 'caption text',
  },
};

export const Overline: Story = {
  args: {
    variant: 'overline',
    children: 'overline text',
  },
};
