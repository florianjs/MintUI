import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiSwitch from './Switch.vue';

const meta: Meta<typeof UiSwitch> = {
  title: 'Ui/Switch',
  component: UiSwitch,
  tags: ['autodocs'],
  argTypes: {
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiSwitch },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: `
      <div class="flex items-center gap-2">
        <UiSwitch v-bind="args" v-model="checked" />
        <span class="text-sm text-muted-foreground">{{ checked ? 'On' : 'Off' }}</span>
      </div>
    `,
  }),
};

export const Checked: Story = {
  render: (args) => ({
    components: { UiSwitch },
    setup() {
      const checked = ref(true);
      return { args, checked };
    },
    template: '<UiSwitch v-bind="args" v-model="checked" />',
  }),
};

export const Disabled: Story = {
  render: (args) => ({
    components: { UiSwitch },
    setup() {
      const checked = ref(false);
      return { args, checked };
    },
    template: '<UiSwitch v-bind="args" v-model="checked" />',
  }),
  args: {
    disabled: true,
  },
};
