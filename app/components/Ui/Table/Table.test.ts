import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import Table from './Table.vue';

describe('UiTable', () => {
  const columns = [
    { key: 'name', label: 'Name', sortable: true },
    { key: 'role', label: 'Role', sortable: true },
  ];
  const data = [
    { id: 1, name: 'Alice', role: 'Dev' },
    { id: 2, name: 'Bob', role: 'Designer' },
  ];

  it('renders columns and data correctly', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data,
      },
    });

    expect(wrapper.html()).toContain('Name');
    expect(wrapper.html()).toContain('Role');
    expect(wrapper.html()).toContain('Alice');
    expect(wrapper.html()).toContain('Bob');
    expect(wrapper.html()).toContain('Designer');
  });

  it('shows empty state when no data provided', () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data: [],
      },
    });

    expect(wrapper.html()).toContain('No data available');
  });

  it('sorts data when clicking a sortable column header', async () => {
    const wrapper = mount(Table, {
      props: {
        columns,
        data: [
          { id: 1, name: 'Zach', role: 'Dev' },
          { id: 2, name: 'Alice', role: 'Designer' },
        ],
      },
    });

    // Click the "Name" column header
    const ths = wrapper.findAll('th');
    await ths[0].trigger('click');

    // Check if sorted data changed order
    const tds = wrapper.findAll('td');
    expect(tds[0].text()).toContain('Alice'); // Alice should come before Zach now
  });
});
