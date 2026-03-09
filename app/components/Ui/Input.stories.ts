import type { Meta, StoryObj } from '@storybook/vue3';
import UiInput from './Input.vue';

const meta: Meta<typeof UiInput> = {
  title: 'Ui/Input',
  component: UiInput,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'tel', 'url'],
    },
    placeholder: { control: 'text' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiInput },
    setup() {
      return { args };
    },
    template: '<UiInput v-bind="args" />',
  }),
  args: {
    placeholder: 'Enter text...',
  },
};

export const Email: Story = {
  render: (args) => ({
    components: { UiInput },
    setup() {
      return { args };
    },
    template: '<UiInput v-bind="args" />',
  }),
  args: {
    type: 'email',
    placeholder: 'you@example.com',
  },
};

export const Password: Story = {
  render: (args) => ({
    components: { UiInput },
    setup() {
      return { args };
    },
    template: '<UiInput v-bind="args" />',
  }),
  args: {
    type: 'password',
    placeholder: 'Password',
  },
};

export const Disabled: Story = {
  render: (args) => ({
    components: { UiInput },
    setup() {
      return { args };
    },
    template: '<UiInput v-bind="args" />',
  }),
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
};
