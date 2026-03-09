import type { Meta, StoryObj } from '@storybook/vue3';
import UiHeroCentric from './HeroCentric.vue';
import UiButton from './Button.vue';
import UiBadge from './Badge.vue';

const meta: Meta<typeof UiHeroCentric> = {
  title: 'Ui/HeroCentric',
  component: UiHeroCentric,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiHeroCentric, UiButton, UiBadge },
    setup() {
      return { args };
    },
    template: `
      <UiHeroCentric v-bind="args">
        <template #badge>
          <UiBadge variant="secondary" class="rounded-full px-3 py-1">
            🚀 MintUI 1.0 is now available
          </UiBadge>
        </template>
        <template #actions>
          <UiButton size="lg">Get Started</UiButton>
          <UiButton size="lg" variant="outline">Learn More</UiButton>
        </template>
        <template #image>
          <div class="aspect-video w-full bg-muted flex items-center justify-center text-muted-foreground p-8">
            <div class="h-full w-full rounded-lg border border-border border-dashed flex flex-col items-center justify-center bg-background">
              <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mb-4 opacity-50"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"/></svg>
              <span>App Screenshot Placeholder</span>
            </div>
          </div>
        </template>
      </UiHeroCentric>
    `,
  }),
  args: {
    title: 'Transform Your Workflow Today',
    subtitle:
      'The clean, modern, and compact component library crafted for Nuxt 4 and TailwindCSS. Build beautiful applications faster than ever before.',
  },
};
