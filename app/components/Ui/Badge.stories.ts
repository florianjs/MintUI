import type { Meta, StoryObj } from '@storybook/vue3';
import UiBadge from './Badge.vue';

const meta: Meta<typeof UiBadge> = {
  title: 'Ui/Badge',
  component: UiBadge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiBadge },
    setup() {
      return { args };
    },
    template: '<UiBadge v-bind="args">Badge</UiBadge>',
  }),
  args: {
    variant: 'default',
  },
};

export const Secondary: Story = {
  render: (args) => ({
    components: { UiBadge },
    setup() {
      return { args };
    },
    template: '<UiBadge v-bind="args">Secondary</UiBadge>',
  }),
  args: {
    variant: 'secondary',
  },
};

export const Destructive: Story = {
  render: (args) => ({
    components: { UiBadge },
    setup() {
      return { args };
    },
    template: '<UiBadge v-bind="args">Destructive</UiBadge>',
  }),
  args: {
    variant: 'destructive',
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { UiBadge },
    setup() {
      return { args };
    },
    template: '<UiBadge v-bind="args">Outline</UiBadge>',
  }),
  args: {
    variant: 'outline',
  },
};
