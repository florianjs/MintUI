import type { Meta, StoryObj } from '@storybook/vue3';
import UiPricingCard from './PricingCard.vue';

const meta: Meta<typeof UiPricingCard> = {
  title: 'Ui/PricingCard',
  component: UiPricingCard,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
    price: { control: 'text' },
    period: { control: 'text' },
    isPopular: { control: 'boolean' },
    buttonText: { control: 'text' },
    buttonVariant: {
      control: 'select',
      options: [
        'default',
        'destructive',
        'outline',
        'secondary',
        'ghost',
        'link',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiPricingCard },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-sm">
        <UiPricingCard v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Hobby',
    description: 'Perfect for small side projects.',
    price: '$0',
    features: ['1 Project', '100 API Calls', 'Community Support'],
    buttonText: 'Get Started',
  },
};

export const Popular: Story = {
  render: (args) => ({
    components: { UiPricingCard },
    setup() {
      return { args };
    },
    template: `
      <div class="max-w-sm pt-4">
        <UiPricingCard v-bind="args" />
      </div>
    `,
  }),
  args: {
    title: 'Pro',
    description: 'For power users and small teams.',
    price: '$29',
    isPopular: true,
    features: [
      'Unlimited Projects',
      '100,000 API Calls',
      'Priority Support',
      'Custom Domains',
    ],
    buttonText: 'Upgrade to Pro',
  },
};

export const PricingTable: Story = {
  render: () => ({
    components: { UiPricingCard },
    template: `
      <div class="grid w-full max-w-6xl gap-8 md:grid-cols-3 pt-6">
        <UiPricingCard
          title="Hobby"
          description="Perfect for small side projects."
          price="$0"
          :features="['1 Project', '100 API Calls', 'Community Support']"
          buttonText="Get Started"
          buttonVariant="outline"
        />
        <UiPricingCard
          title="Pro"
          description="For power users and small teams."
          price="$29"
          :isPopular="true"
          :features="['Unlimited Projects', '100,000 API Calls', 'Priority Support', 'Custom Domains', 'Analytics Dashboard']"
          buttonText="Upgrade to Pro"
        />
        <UiPricingCard
          title="Enterprise"
          description="For large scale applications."
          price="$99"
          :features="['Unlimited Everything', 'Dedicated Support', 'Custom SLA', 'On-Premise Deployment']"
          buttonText="Contact Sales"
          buttonVariant="outline"
        />
      </div>
    `,
  }),
};
