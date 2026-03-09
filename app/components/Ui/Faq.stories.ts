import type { Meta, StoryObj } from '@storybook/vue3';
import UiFaq from './Faq.vue';

const meta: Meta<typeof UiFaq> = {
  title: 'Ui/Faq',
  component: UiFaq,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    description: { control: 'text' },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

const sampleItems = [
  {
    question: 'How do I install MintUI?',
    answer:
      'MintUI can be installed simply by dropping the components in your Nuxt 4 application. Alternatively, clone the repository and run npm install.',
    defaultOpen: true,
  },
  {
    question: 'Is MintUI compatible with Nuxt 4?',
    answer:
      'Absolutely. MintUI is specifically built bearing Nuxt 4 structure and conventions in mind.',
  },
  {
    question: 'Can I use this without Tailwind CSS?',
    answer:
      'No, MintUI heavily relies on Tailwind CSS for all of its styling and design token architecture.',
  },
  {
    question: 'How do I report a bug?',
    answer:
      'You can create an issue in the GitHub repository and make sure to read the troubleshooting documents.',
  },
];

export const Default: Story = {
  render: (args) => ({
    components: { UiFaq },
    setup() {
      return { args };
    },
    template: '<UiFaq v-bind="args" />',
  }),
  args: {
    title: 'Frequently Asked Questions',
    description:
      'Find answers to common questions about MintUI. If you cannot find what you are looking for, please contact our support team.',
    items: sampleItems,
  },
};

export const WithoutDescription: Story = {
  render: (args) => ({
    components: { UiFaq },
    setup() {
      return { args };
    },
    template: '<UiFaq v-bind="args" />',
  }),
  args: {
    title: 'Questions?',
    items: sampleItems,
  },
};
