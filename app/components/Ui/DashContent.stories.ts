import type { Meta, StoryObj } from '@storybook/vue3';
import UiDashContent from './DashContent.vue';

const meta: Meta<typeof UiDashContent> = {
  title: 'Ui/Dash/Content',
  component: UiDashContent,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiDashContent },
    setup() {
      return { args };
    },
    template: `
      <div class="h-[400px] flex flex-col border border-border rounded-md overflow-hidden bg-muted/20">
        <div class="h-14 bg-card border-b border-border flex items-center px-4 font-semibold text-sm">Header Placeholder</div>
        <UiDashContent v-bind="args">
          <div class="h-[600px] rounded-lg border-2 border-dashed border-border flex items-center justify-center text-muted-foreground w-full">
            Scrollable Content Area
          </div>
        </UiDashContent>
      </div>
    `,
  }),
  args: {},
};
