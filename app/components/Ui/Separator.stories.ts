import type { Meta, StoryObj } from '@storybook/vue3';
import UiSeparator from './Separator.vue';

const meta: Meta<typeof UiSeparator> = {
  title: 'Ui/Separator',
  component: UiSeparator,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Horizontal: Story = {
  render: (args) => ({
    components: { UiSeparator },
    setup() {
      return { args };
    },
    template: `
      <div class="w-[300px]">
        <p class="text-sm font-medium">Section One</p>
        <UiSeparator v-bind="args" class="my-4" />
        <p class="text-sm font-medium">Section Two</p>
      </div>
    `,
  }),
  args: {
    orientation: 'horizontal',
  },
};

export const Vertical: Story = {
  render: (args) => ({
    components: { UiSeparator },
    setup() {
      return { args };
    },
    template: `
      <div class="flex h-5 items-center gap-4 text-sm">
        <span>Blog</span>
        <UiSeparator v-bind="args" />
        <span>Docs</span>
        <UiSeparator v-bind="args" />
        <span>Source</span>
      </div>
    `,
  }),
  args: {
    orientation: 'vertical',
  },
};
