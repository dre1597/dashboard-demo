import type { Meta, StoryObj } from '@storybook/react';
import { Button } from './button';

const meta: Meta<typeof Button> = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
      control: { type: 'select' },
      defaultValue: 'default',
    },
    size: {
      options: ['default', 'sm', 'lg', 'icon'],
      control: { type: 'select' },
      defaultValue: 'default',
    }
  }
};

export default meta;

type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: {
    variant: 'default',
    size: 'default',
    children: 'Button'
  }
};
