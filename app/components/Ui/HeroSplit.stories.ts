import type { Meta, StoryObj } from '@storybook/vue3';
import UiHeroSplit from './HeroSplit.vue';
import UiButton from './Button.vue';
import UiBadge from './Badge.vue';

const meta: Meta<typeof UiHeroSplit> = {
  title: 'Ui/HeroSplit',
  component: UiHeroSplit,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    subtitle: { control: 'text' },
    reversed: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiHeroSplit, UiButton, UiBadge },
    setup() {
      return { args };
    },
    template: `
      <UiHeroSplit v-bind="args">
        <template #badge>
          <UiBadge variant="outline" class="text-primary border-primary/30 py-1.5 px-3 rounded-full font-medium">
            Version 2.0 is live
          </UiBadge>
        </template>
        <template #actions>
          <UiButton size="lg" class="w-full sm:w-auto font-semibold">Start Free Trial</UiButton>
          <UiButton size="lg" variant="secondary" class="w-full sm:w-auto font-semibold">View Demo</UiButton>
        </template>
        <template #features>
          <div class="grid grid-cols-2 gap-4 text-sm font-medium text-muted-foreground">
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="20 6 9 17 4 12"/></svg>
              No credit card required
            </div>
            <div class="flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="text-primary"><polyline points="20 6 9 17 4 12"/></svg>
              14-day free trial
            </div>
          </div>
        </template>
        <template #image>
          <div class="w-full aspect-[4/3] rounded-2xl border border-border bg-card shadow-xl overflow-hidden flex flex-col">
            <div class="h-10 border-b border-border bg-muted flex items-center px-4 gap-2">
              <div class="h-3 w-3 rounded-full bg-destructive/50"></div>
              <div class="h-3 w-3 rounded-full bg-primary/50"></div>
              <div class="h-3 w-3 rounded-full bg-secondary/50"></div>
            </div>
            <div class="flex-1 p-6 flex flex-col gap-4 bg-background">
              <div class="h-8 w-1/3 bg-muted rounded"></div>
              <div class="h-32 w-full bg-muted rounded-lg"></div>
              <div class="grid grid-cols-2 gap-4">
                <div class="h-24 bg-muted rounded-lg"></div>
                <div class="h-24 bg-muted rounded-lg"></div>
              </div>
            </div>
          </div>
        </template>
      </UiHeroSplit>
    `,
  }),
  args: {
    title: 'Data driven decisions made easy',
    subtitle:
      'Connect your tools, analyze your behavior, and discover the exact steps you need to take to increase conversion rates.',
    reversed: false,
  },
};

export const Reversed: Story = {
  render: Default.render,
  args: {
    ...Default.args,
    reversed: true,
  },
};
