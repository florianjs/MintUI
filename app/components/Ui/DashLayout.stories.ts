import type { Meta, StoryObj } from '@storybook/vue3';
import UiDashLayout from './DashLayout.vue';
import UiDashSidebar from './DashSidebar.vue';
import UiDashNavbar from './DashNavbar.vue';
import UiDashContent from './DashContent.vue';
import UiButton from './Button.vue';
import UiInput from './Input.vue';
import UiAvatar from './Avatar.vue';
import UiCard from './Card.vue';
import UiCardHeader from './CardHeader.vue';
import UiCardTitle from './CardTitle.vue';
import UiCardContent from './CardContent.vue';

const meta: Meta<typeof UiDashLayout> = {
  title: 'Ui/Dash/Layout',
  component: UiDashLayout,
  tags: ['autodocs'],
  parameters: {
    layout: 'fullscreen',
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {
      UiDashLayout,
      UiDashSidebar,
      UiDashNavbar,
      UiDashContent,
      UiButton,
      UiInput,
      UiAvatar,
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardContent,
    },
    setup() {
      return { args };
    },
    template: `
      <UiDashLayout v-bind="args">
        <template #sidebar>
          <UiDashSidebar>
            <div class="flex h-14 items-center border-b border-border px-4 lg:h-16">
              <span class="font-bold text-lg text-primary tracking-tight">MintUI Dash</span>
            </div>
            <div class="flex-1 overflow-y-auto p-4 space-y-1">
              <UiButton variant="secondary" class="w-full justify-start">Overview</UiButton>
              <UiButton variant="ghost" class="w-full justify-start text-muted-foreground">Analytics</UiButton>
              <UiButton variant="ghost" class="w-full justify-start text-muted-foreground">Customers</UiButton>
              <UiButton variant="ghost" class="w-full justify-start text-muted-foreground">Settings</UiButton>
            </div>
          </UiDashSidebar>
        </template>
        <template #navbar>
          <UiDashNavbar>
            <div class="flex items-center flex-1">
              <UiInput placeholder="Search..." class="w-64 max-w-sm" />
            </div>
            <div class="flex items-center space-x-4">
              <UiButton variant="ghost" size="icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-bell"><path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/></svg>
              </UiButton>
              <UiAvatar src="https://i.pravatar.cc/150?u=a04258114e29026708c" fallback="JD" />
            </div>
          </UiDashNavbar>
        </template>
        
        <UiDashContent>
          <div class="mb-6">
            <h1 class="text-3xl font-bold tracking-tight">Dashboard</h1>
            <p class="text-muted-foreground">Welcome back, here's your overview.</p>
          </div>
          <div class="grid gap-4 md:grid-cols-3 mb-6">
            <UiCard>
              <UiCardHeader><UiCardTitle class="text-sm font-medium">Total Revenue</UiCardTitle></UiCardHeader>
              <UiCardContent><div class="text-2xl font-bold">$45,231.89</div></UiCardContent>
            </UiCard>
            <UiCard>
              <UiCardHeader><UiCardTitle class="text-sm font-medium">Subscriptions</UiCardTitle></UiCardHeader>
              <UiCardContent><div class="text-2xl font-bold">+2350</div></UiCardContent>
            </UiCard>
            <UiCard>
              <UiCardHeader><UiCardTitle class="text-sm font-medium">Sales</UiCardTitle></UiCardHeader>
              <UiCardContent><div class="text-2xl font-bold">+12,234</div></UiCardContent>
            </UiCard>
          </div>
          <UiCard class="min-h-[300px] flex items-center justify-center text-muted-foreground border-dashed">
            Main content area (e.g., charts, tables)
          </UiCard>
        </UiDashContent>
      </UiDashLayout>
    `,
  }),
  args: {},
};
