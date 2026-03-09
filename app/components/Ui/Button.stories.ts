import type { Meta, StoryObj } from '@storybook/vue3';
import UiButton from './Button.vue';

const meta: Meta<typeof UiButton> = {
  title: 'Ui/Button',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Click me</UiButton>',
  }),
  args: {
    variant: 'default',
    size: 'default',
  },
};

export const Secondary: Story = {
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Secondary</UiButton>',
  }),
  args: {
    variant: 'secondary',
  },
};

export const Outline: Story = {
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Outline</UiButton>',
  }),
  args: {
    variant: 'outline',
  },
};
