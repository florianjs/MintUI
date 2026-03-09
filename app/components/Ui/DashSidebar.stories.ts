import type { Meta, StoryObj } from '@storybook/vue3';
import UiDashSidebar from './DashSidebar.vue';
import UiButton from './Button.vue';

const meta: Meta<typeof UiDashSidebar> = {
  title: 'Ui/Dash/Sidebar',
  component: UiDashSidebar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiDashSidebar, UiButton },
    setup() {
      return { args };
    },
    template: `
      <div class="flex h-[500px] rounded-md border border-border overflow-hidden">
        <UiDashSidebar v-bind="args">
          <div class="flex h-14 items-center border-b border-border px-4 font-semibold text-primary">
            App Logo
          </div>
          <div class="flex-1 space-y-1 p-4">
            <UiButton variant="secondary" class="w-full justify-start">Dashboard</UiButton>
            <UiButton variant="ghost" class="w-full justify-start">Projects</UiButton>
            <UiButton variant="ghost" class="w-full justify-start">Tasks</UiButton>
          </div>
          <div class="mt-auto border-t border-border p-4">
            <UiButton variant="ghost" class="w-full justify-start">Settings</UiButton>
          </div>
        </UiDashSidebar>
        <div class="flex-1 bg-muted/20 p-8 text-muted-foreground flex items-center justify-center">Main content area</div>
      </div>
    `,
  }),
  args: {},
};
