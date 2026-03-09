import type { Meta, StoryObj } from '@storybook/vue3';
import Stat from './Stat.vue';

const meta = {
  title: 'Ui/Stat',
  component: Stat,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text' },
    value: { control: 'number' },
    prefix: { control: 'text' },
    suffix: { control: 'text' },
    description: { control: 'text' },
    trend: { control: 'select', options: ['up', 'down', 'none'] },
    trendValue: { control: 'text' },
    animated: { control: 'boolean' },
    duration: { control: 'number' },
    format: { control: 'select', options: ['number', 'currency', 'compact'] },
    decimals: { control: 'number' },
  },
} satisfies Meta<typeof Stat>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Total Revenue',
    value: 45231.89,
    format: 'currency',
    decimals: 2,
    trend: 'up',
    trendValue: '+20.1% from last month',
  },
};

export const ActiveUsers: Story = {
  args: {
    title: 'Active Users',
    value: 2350,
    prefix: '+',
    trend: 'up',
    trendValue: '+180 today',
    description: 'Users active in the last 24 hours',
  },
};

export const BounceRate: Story = {
  args: {
    title: 'Bounce Rate',
    value: 42.3,
    suffix: '%',
    format: 'number',
    decimals: 1,
    trend: 'down',
    trendValue: '-4.1% from last week',
    description: 'Average bounce rate across all pages',
  },
};

export const CompactNumber: Story = {
  args: {
    title: 'Total Views',
    value: 1250000,
    format: 'compact',
    decimals: 1,
    trend: 'up',
    trendValue: '+150k today',
  },
};

export const NonAnimated: Story = {
  args: {
    title: 'Static Value',
    value: 1337,
    animated: false,
  },
};
