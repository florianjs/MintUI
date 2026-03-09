import type { Meta, StoryObj } from '@storybook/vue3';
import UiAccordion from './Accordion.vue';

const meta: Meta<typeof UiAccordion> = {
  title: 'Ui/Accordion',
  component: UiAccordion,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    defaultOpen: { control: 'boolean' },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: { UiAccordion },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-md">
        <UiAccordion v-bind="args">
          Yes. It adheres to the design tokens and structure defined in MintUI.
        </UiAccordion>
      </div>
    `,
  }),
  args: {
    title: 'Is it accessible?',
    defaultOpen: false,
  },
};

export const OpenByDefault: Story = {
  render: (args) => ({
    components: { UiAccordion },
    setup() {
      return { args };
    },
    template: `
      <div class="w-full max-w-md">
        <UiAccordion v-bind="args">
          Yes. It comes with default styles that matches the other components' aesthetic.
        </UiAccordion>
      </div>
    `,
  }),
  args: {
    title: 'Is it styled?',
    defaultOpen: true,
  },
};

export const Multiple: Story = {
  render: () => ({
    components: { UiAccordion },
    template: `
      <div class="w-full max-w-md">
        <UiAccordion title="What is MintUI?">
          MintUI is a compact, modern UI component library for Nuxt 4 + TailwindCSS.
        </UiAccordion>
        <UiAccordion title="How do I use it?">
          Just import the components from the library and use them in your Vue templates.
        </UiAccordion>
        <UiAccordion title="Is it customizable?">
          Yes, you can customize the design tokens in your Tailwind configuration.
        </UiAccordion>
      </div>
    `,
  }),
};
