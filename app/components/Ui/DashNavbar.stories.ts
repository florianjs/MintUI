import type { Meta, StoryObj } from '@storybook/vue3';
import UiDashNavbar from './DashNavbar.vue';
import UiButton from './Button.vue';
import UiInput from './Input.vue';
import UiAvatar from './Avatar.vue';

const meta: Meta<typeof UiDashNavbar> = {
  title: 'Ui/Dash/Navbar',
  component: UiDashNavbar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiDashNavbar, UiButton, UiInput, UiAvatar },
    setup() {
      return { args };
    },
    template: `
      <div class="rounded-md border border-border w-full overflow-hidden bg-background">
        <UiDashNavbar v-bind="args">
          <div class="flex items-center gap-4">
            <span class="font-semibold md:hidden">MintUI</span>
            <UiInput placeholder="Search..." class="hidden md:block w-64" />
          </div>
          <div class="flex items-center gap-4">
            <UiButton variant="ghost" size="sm">Help</UiButton>
            <UiAvatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" />
          </div>
        </UiDashNavbar>
        <div class="p-8 h-32 text-muted-foreground flex items-center justify-center bg-muted/20">Content area below navbar</div>
      </div>
    `,
  }),
  args: {},
};
