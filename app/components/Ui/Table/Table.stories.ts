import type { Meta, StoryObj } from '@storybook/vue3';
import Table from './Table.vue';
import { vAutoAnimate } from '@formkit/auto-animate/vue';

const sampleData = [
  {
    id: 1,
    name: 'Alex Johnson',
    role: 'Developer',
    status: 'Active',
    lastLogin: '2023-10-24',
  },
  {
    id: 2,
    name: 'Sarah Williams',
    role: 'Designer',
    status: 'Offline',
    lastLogin: '2023-10-22',
  },
  {
    id: 3,
    name: 'Michael Brown',
    role: 'Manager',
    status: 'Active',
    lastLogin: '2023-10-25',
  },
  {
    id: 4,
    name: 'Jessica Davis',
    role: 'Developer',
    status: 'On Leave',
    lastLogin: '2023-10-15',
  },
  {
    id: 5,
    name: 'David Miller',
    role: 'QA',
    status: 'Active',
    lastLogin: '2023-10-25',
  },
];

const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'role', label: 'Role', sortable: true },
  { key: 'status', label: 'Status', sortable: true },
  {
    key: 'lastLogin',
    label: 'Last Login',
    sortable: true,
    align: 'right' as const,
  },
];

const meta = {
  title: 'Ui/Table',
  component: Table,
  tags: ['autodocs'],
  argTypes: {
    data: { control: 'object' },
    columns: { control: 'object' },
    defaultSortKey: { control: 'text' },
    defaultSortOrder: { control: 'radio', options: ['asc', 'desc'] },
  },
} satisfies Meta<typeof Table>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    columns,
    data: sampleData,
    rowKey: 'id',
    defaultSortKey: 'name',
    defaultSortOrder: 'asc',
  },
};

export const CustomCells: Story = {
  render: (args) => ({
    components: { Table },
    setup() {
      return { args };
    },
    // We register the directive here if needed, but it's used inside the component
    template: `
      <Table v-bind="args">
        <template #cell-status="{ value }">
          <span :class="[
            'inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium',
            value === 'Active' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' :
            value === 'Offline' ? 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400' :
            'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400'
          ]">
            {{ value }}
          </span>
        </template>
        <template #cell-name="{ value }">
          <div class="font-medium text-gray-900 dark:text-white">{{ value }}</div>
        </template>
      </Table>
    `,
  }),
  args: {
    columns,
    data: sampleData,
    rowKey: 'id',
  },
};
