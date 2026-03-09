import type { Meta, StoryObj } from '@storybook/vue3';
import UiAlert from './Alert.vue';

const meta: Meta<typeof UiAlert> = {
  title: 'Ui/Alert',
  component: UiAlert,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning'],
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-xl">
        <UiAlert v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Heads up!',
    description: 'You can add components to your app using the cli.',
    variant: 'default',
  },
};

export const Destructive: Story = {
  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-xl">
        <UiAlert v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Error',
    description: 'Your session has expired. Please log in again.',
    variant: 'destructive',
  },
};

export const Success: Story = {
  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-xl">
        <UiAlert v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Success',
    description: 'Your account has been successfully created.',
    variant: 'success',
  },
};

export const Warning: Story = {
  render: (args) => ({
    components: { UiAlert },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-xl">
        <UiAlert v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Warning',
    description: 'You are about to delete a very important file.',
    variant: 'warning',
  },
};
