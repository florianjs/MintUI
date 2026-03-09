import type { Meta, StoryObj } from '@storybook/vue3';
import UiChart from './Chart.vue';
import UiCard from '../Card.vue';
import UiCardHeader from '../CardHeader.vue';
import UiCardTitle from '../CardTitle.vue';
import UiCardDescription from '../CardDescription.vue';
import UiCardContent from '../CardContent.vue';

const meta: Meta<typeof UiChart> = {
  title: 'Ui/Chart',
  component: UiChart,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: [
        'line',
        'area',
        'bar',
        'pie',
        'donut',
        'radar',
        'scatter',
        'heatmap',
      ],
    },
  },
};
export default meta;
type Story = StoryObj<typeof meta>;

// An aesthetic wrapper to display the chart nicely inside a Card like in actual dashboards
const ChartCardWrapper = {
  components: {
    UiChart,
    UiCard,
    UiCardHeader,
    UiCardTitle,
    UiCardDescription,
    UiCardContent,
  },
  setup(props: any, { attrs }: any) {
    return { args: attrs };
  },
  template: `
    <div class="max-w-3xl">
      <UiCard class="border-border/50 shadow-sm">
        <UiCardHeader>
          <div class="flex items-center justify-between">
            <div>
              <UiCardTitle class="text-xl">{{ args._title || 'Analytics Overview' }}</UiCardTitle>
              <UiCardDescription>{{ args._subtitle || 'Performances throughout the year' }}</UiCardDescription>
            </div>
            <div v-if="args._stat" class="text-right">
              <div class="text-2xl font-bold tracking-tight text-foreground">{{ args._stat }}</div>
              <div class="text-xs font-medium text-emerald-500">+{{ args._increase }}% from last month</div>
            </div>
          </div>
        </UiCardHeader>
        <UiCardContent>
          <UiChart v-bind="args" />
        </UiCardContent>
      </UiCard>
    </div>
  `,
};

export const Line: Story = {
  render: (args) => ({
    components: { ChartCardWrapper },
    setup() {
      return { args };
    },
    template:
      '<ChartCardWrapper v-bind="args" _title="Revenue Over Time" _stat="$45,231" _increase="12.5" />',
  }),
  args: {
    type: 'line',
    height: 380,
    series: [
      {
        name: 'Revenue',
        data: [30, 40, 35, 50, 49, 60, 70, 91, 125, 140, 160, 180],
      },
    ],
    options: {
      xaxis: {
        categories: [
          'Jan',
          'Feb',
          'Mar',
          'Apr',
          'May',
          'Jun',
          'Jul',
          'Aug',
          'Sep',
          'Oct',
          'Nov',
          'Dec',
        ],
      },
    },
  },
};

export const Area: Story = {
  render: (args) => ({
    components: { ChartCardWrapper },
    setup() {
      return { args };
    },
    template:
      '<ChartCardWrapper v-bind="args" _title="Active Users" _stat="12,450" _increase="8.2" _subtitle="Daily active users over the last 7 days" />',
  }),
  args: {
    type: 'area',
    height: 350,
    series: [
      { name: 'Returning', data: [310, 400, 280, 510, 420, 1090, 1000] },
      { name: 'New Users', data: [110, 320, 450, 320, 340, 520, 410] },
    ],
    options: {
      xaxis: {
        type: 'category',
        categories: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      },
      colors: ['#8b5cf6', '#14b8a6'],
    },
  },
};

export const Bar: Story = {
  render: (args) => ({
    components: { ChartCardWrapper },
    setup() {
      return { args };
    },
    template:
      '<ChartCardWrapper v-bind="args" _title="Quarterly Sales" _subtitle="Comparison across regions" _stat="$1.2M" _increase="4.1" />',
  }),
  args: {
    type: 'bar',
    height: 350,
    series: [
      { name: 'North America', data: [44, 55, 57, 56] },
      { name: 'Europe', data: [76, 85, 101, 98] },
      { name: 'Asia', data: [35, 41, 36, 26] },
    ],
    options: {
      plotOptions: {
        bar: { horizontal: false, columnWidth: '55%', borderRadius: 4 },
      },
      xaxis: { categories: ['Q1', 'Q2', 'Q3', 'Q4'] },
      stroke: { show: true, width: 3, colors: ['transparent'] },
    },
  },
};

export const Donut: Story = {
  render: (args) => ({
    components: { ChartCardWrapper },
    setup() {
      return { args };
    },
    template:
      '<ChartCardWrapper v-bind="args" _title="Traffic Sources" _subtitle="Where your users are coming from" _stat="402.1K" _increase="15.3" />',
  }),
  args: {
    type: 'donut',
    height: 380,
    series: [44, 55, 41, 17],
    options: {
      labels: ['Direct', 'Social', 'Organic', 'Referral'],
      plotOptions: {
        pie: {
          donut: {
            size: '75%',
            labels: {
              show: true,
              name: { show: true },
              value: { show: true },
              total: {
                show: true,
                showAlways: true,
                label: 'Total',
                color: '#888',
              },
            },
          },
        },
      },
    },
  },
};
