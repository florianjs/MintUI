import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import UiChart from './Chart.vue';

// Mock apexcharts globally to avoid undefined references or complex canvas rendering in vitest
vi.mock('vue3-apexcharts', () => ({
  default: {
    name: 'VueApexCharts',
    template: '<div class="mock-apexchart"></div>',
    props: ['type', 'series', 'options', 'height', 'width'],
  },
}));

describe('UiChart', () => {
  it('renders with default props and handles mount state', async () => {
    const wrapper = mount(UiChart, {
      props: {
        series: [{ name: 'Test', data: [10, 20] }],
        animateOnScroll: false, // bypass intersection observer for jsdom tests
      },
    });

    expect(wrapper.exists()).toBe(true);

    // As `isMounted` is false initially, the fallback renders
    expect(wrapper.find('.bg-muted\\/10').exists()).toBe(true);

    await wrapper.vm.$nextTick();

    // Once mounted and visible, it renders the chart
    expect(wrapper.findComponent({ name: 'VueApexCharts' }).exists()).toBe(
      true,
    );
    expect(wrapper.find('.mock-apexchart').exists()).toBe(true);
  });

  it('passes the correct defaults and type', async () => {
    const wrapper = mount(UiChart, {
      props: {
        type: 'bar',
        series: [{ name: 'Test Bar', data: [15] }],
        animateOnScroll: false,
      },
    });

    await wrapper.vm.$nextTick();

    const chart = wrapper.findComponent({ name: 'VueApexCharts' });
    expect(chart.props('type')).toBe('bar');
    expect(chart.props('series')).toEqual([{ name: 'Test Bar', data: [15] }]);
  });
});
