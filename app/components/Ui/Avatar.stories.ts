import type { Meta, StoryObj } from '@storybook/vue3';
import UiAvatar from './Avatar.vue';

const meta: Meta<typeof UiAvatar> = {
  title: 'Ui/Avatar',
  component: UiAvatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
    src: { control: 'text' },
    alt: { control: 'text' },
    fallback: { control: 'text' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const WithImage: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=storybook',
    alt: 'John Doe',
    size: 'default',
  },
};

export const Fallback: Story = {
  args: {
    alt: 'John Doe',
    size: 'default',
  },
};

export const CustomFallback: Story = {
  args: {
    fallback: 'AB',
    size: 'default',
  },
};

export const Small: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=small',
    alt: 'Small Avatar',
    size: 'sm',
  },
};

export const Large: Story = {
  args: {
    src: 'https://i.pravatar.cc/150?u=large',
    alt: 'Large Avatar',
    size: 'lg',
  },
};
