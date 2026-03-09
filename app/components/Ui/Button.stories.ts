import type { Meta, StoryObj } from '@storybook/vue3';
import { ref } from 'vue';
import UiButton from './Button.vue';

const meta: Meta<typeof UiButton> = {
  title: 'Ui/Button',
  component: UiButton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'gradient', 'elevated', 'soft', 'positive'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg', 'icon'],
    },
    state: {
      control: 'select',
      options: ['idle', 'loading', 'success', 'error'],
    },
    loading: { control: 'boolean' },
    disabled: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiButton },
    setup() {
      return { args };
    },
    template: '<UiButton v-bind="args">Click me</UiButton>',
  }),
  args: { variant: 'default', size: 'default' },
};

export const AllVariants: Story = {
  render: () => ({
    components: { UiButton },
    template: `
      <div class="flex flex-wrap gap-4">
        <UiButton variant="default">Default</UiButton>
        <UiButton variant="secondary">Secondary</UiButton>
        <UiButton variant="destructive">Destructive</UiButton>
        <UiButton variant="outline">Outline</UiButton>
        <UiButton variant="ghost">Ghost</UiButton>
        <UiButton variant="link">Link</UiButton>
        <UiButton variant="gradient">Gradient</UiButton>
        <UiButton variant="elevated">Elevated</UiButton>
        <UiButton variant="soft">Soft</UiButton>
        <UiButton variant="positive">Positive</UiButton>
      </div>
    `,
  }),
};

export const Sizes: Story = {
  render: () => ({
    components: { UiButton },
    template: `
      <div class="flex items-center gap-4">
        <UiButton size="sm">Small</UiButton>
        <UiButton size="default">Default</UiButton>
        <UiButton size="lg">Large</UiButton>
        <UiButton size="icon">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </UiButton>
      </div>
    `,
  }),
};

export const Loading: Story = {
  render: () => ({
    components: { UiButton },
    template: `
      <div class="flex gap-4">
        <UiButton loading>Loading</UiButton>
        <UiButton variant="outline" loading>Loading</UiButton>
        <UiButton variant="gradient" loading>Loading</UiButton>
      </div>
    `,
  }),
};

export const Disabled: Story = {
  render: () => ({
    components: { UiButton },
    template: `
      <div class="flex gap-4">
        <UiButton disabled>Disabled</UiButton>
        <UiButton variant="outline" disabled>Disabled</UiButton>
        <UiButton variant="ghost" disabled>Disabled</UiButton>
      </div>
    `,
  }),
};

export const WithIcon: Story = {
  render: () => ({
    components: { UiButton },
    template: `
      <div class="flex gap-4">
        <UiButton>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
          Continue
        </UiButton>
        <UiButton variant="soft">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 5v14M5 12h14"/>
          </svg>
          Add Item
        </UiButton>
        <UiButton variant="destructive">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2"/>
          </svg>
          Delete
        </UiButton>
      </div>
    `,
  }),
};

export const ClickFeedback: Story = {
  render: () => ({
    components: { UiButton },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-muted-foreground">Click the buttons to feel the feedback</p>
        <div class="flex gap-4">
          <UiButton variant="default">Press me</UiButton>
          <UiButton variant="gradient">Gradient press</UiButton>
          <UiButton variant="elevated">Elevated press</UiButton>
          <UiButton variant="soft">Soft press</UiButton>
        </div>
      </div>
    `,
  }),
};

export const AsyncStates: Story = {
  render: () => ({
    components: { UiButton },
    template: `
      <div class="flex gap-4">
        <UiButton state="idle">Idle</UiButton>
        <UiButton state="loading">Loading</UiButton>
        <UiButton state="success">Success</UiButton>
        <UiButton state="error">Error</UiButton>
      </div>
    `,
  }),
};

export const PaymentFlow: Story = {
  render: () => ({
    components: { UiButton },
    setup() {
      const paymentState = ref<'idle' | 'loading' | 'success' | 'error'>('idle');

      const simulatePayment = async () => {
        paymentState.value = 'loading';
        await new Promise((resolve) => setTimeout(resolve, 2000));
        paymentState.value = 'success';
      };

      const reset = () => {
        paymentState.value = 'idle';
      };

      return { paymentState, simulatePayment, reset };
    },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-muted-foreground">Click to simulate a payment process</p>
        <div class="flex items-center gap-4">
          <UiButton
            :state="paymentState"
            variant="gradient"
            size="lg"
            @click="simulatePayment"
            :reset-after="3000"
          >
            Pay $99.00
          </UiButton>
          <UiButton variant="ghost" size="sm" @click="reset" :disabled="paymentState === 'loading'">
            Reset
          </UiButton>
        </div>
        <p class="text-xs text-muted-foreground">State: {{ paymentState }}</p>
      </div>
    `,
  }),
};

export const PaymentError: Story = {
  render: () => ({
    components: { UiButton },
    setup() {
      const paymentState = ref<'idle' | 'loading' | 'success' | 'error'>('idle');

      const simulateError = async () => {
        paymentState.value = 'loading';
        await new Promise((resolve) => setTimeout(resolve, 1500));
        paymentState.value = 'error';
      };

      const reset = () => {
        paymentState.value = 'idle';
      };

      return { paymentState, simulateError, reset };
    },
    template: `
      <div class="space-y-4">
        <p class="text-sm text-muted-foreground">Click to simulate a payment error</p>
        <div class="flex items-center gap-4">
          <UiButton
            :state="paymentState"
            variant="default"
            @click="simulateError"
            :reset-after="3000"
          >
            Subscribe Now
          </UiButton>
          <UiButton variant="ghost" size="sm" @click="reset" :disabled="paymentState === 'loading'">
            Reset
          </UiButton>
        </div>
      </div>
    `,
  }),
};

export const FormSubmission: Story = {
  render: () => ({
    components: { UiButton },
    setup() {
      const formState = ref<'idle' | 'loading' | 'success' | 'error'>('idle');

      const submitForm = async () => {
        formState.value = 'loading';
        await new Promise((resolve) => setTimeout(resolve, 1800));
        formState.value = 'success';
      };

      return { formState, submitForm };
    },
    template: `
      <div class="space-y-4">
        <div class="rounded-lg border p-4 space-y-3 w-80">
          <div class="space-y-1">
            <label class="text-sm font-medium">Email</label>
            <input type="email" class="w-full rounded-md border px-3 py-2 text-sm" placeholder="you@example.com" />
          </div>
          <UiButton
            :state="formState"
            variant="default"
            class="w-full"
            @click="submitForm"
            :reset-after="2500"
          >
            Submit
          </UiButton>
        </div>
      </div>
    `,
  }),
};

export const SaveAction: Story = {
  render: () => ({
    components: { UiButton },
    setup() {
      const saveState = ref<'idle' | 'loading' | 'success' | 'error'>('idle');

      const save = async () => {
        saveState.value = 'loading';
        await new Promise((resolve) => setTimeout(resolve, 800));
        saveState.value = 'success';
      };

      return { saveState, save };
    },
    template: `
      <div class="flex items-center gap-3">
        <UiButton
          :state="saveState"
          variant="outline"
          @click="save"
          :reset-after="1500"
        >
          Save Changes
        </UiButton>
        <UiButton variant="ghost">Cancel</UiButton>
      </div>
    `,
  }),
};
