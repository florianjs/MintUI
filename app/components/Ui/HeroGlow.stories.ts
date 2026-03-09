import type { Meta, StoryObj } from '@storybook/vue3';
import UiHeroGlow from './HeroGlow.vue';
import UiButton from './Button.vue';
import UiBadge from './Badge.vue';

const meta: Meta<typeof UiHeroGlow> = {
  title: 'Ui/HeroGlow',
  component: UiHeroGlow,
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
    components: { UiHeroGlow, UiButton, UiBadge },
    setup() {
      return { args };
    },
    template: `
      <UiHeroGlow v-bind="args">
        <template #badge>
          <div class="inline-flex items-center rounded-full border border-zinc-700/50 bg-zinc-800/30 px-3 py-1 text-sm font-medium text-zinc-300 backdrop-blur-md">
            <span class="flex h-2 w-2 rounded-full bg-primary mr-2 animate-pulse shadow-[0_0_8px_rgba(var(--primary),0.8)]"></span>
            Unveiling Next-Gen Tech
          </div>
        </template>
        <template #actions>
          <UiButton size="lg" class="rounded-full px-8 shadow-[0_0_20px_rgba(var(--primary),0.3)] hover:shadow-[0_0_30px_rgba(var(--primary),0.5)] transition-shadow">Deploy Now</UiButton>
          <UiButton size="lg" variant="outline" class="rounded-full px-8 border-zinc-700 text-zinc-300 hover:bg-zinc-800 hover:text-white backdrop-blur-sm">Read Documentation</UiButton>
        </template>
      </UiHeroGlow>
    `,
  }),
  args: {
    title: 'Ship code at the speed of light.',
    subtitle:
      'The dark-mode optimized components designed specifically for AI tools, developer platforms, and modern web application interfaces.',
  },
};
