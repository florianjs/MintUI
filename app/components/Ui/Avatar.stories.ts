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
  render: (args) => ({
    components: { UiAvatar },
    setup() {
      return { args };
    },
    template: '<UiAvatar v-bind="args" />',
  }),
  args: {
    src: 'https://i.pravatar.cc/150?u=storybook',
    alt: 'John Doe',
    size: 'default',
  },
};

export const Fallback: Story = {
  render: (args) => ({
    components: { UiAvatar },
    setup() {
      return { args };
    },
    template: '<UiAvatar v-bind="args" />',
  }),
  args: {
    alt: 'John Doe',
    size: 'default',
  },
};

export const CustomFallback: Story = {
  render: (args) => ({
    components: { UiAvatar },
    setup() {
      return { args };
    },
    template: '<UiAvatar v-bind="args" />',
  }),
  args: {
    fallback: 'AB',
    size: 'default',
  },
};

export const Small: Story = {
  render: (args) => ({
    components: { UiAvatar },
    setup() {
      return { args };
    },
    template: '<UiAvatar v-bind="args" />',
  }),
  args: {
    src: 'https://i.pravatar.cc/150?u=small',
    alt: 'Small Avatar',
    size: 'sm',
  },
};

export const Large: Story = {
  render: (args) => ({
    components: { UiAvatar },
    setup() {
      return { args };
    },
    template: '<UiAvatar v-bind="args" />',
  }),
  args: {
    src: 'https://i.pravatar.cc/150?u=large',
    alt: 'Large Avatar',
    size: 'lg',
  },
};
