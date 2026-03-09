import { describe, it, expect, vi, beforeEach } from 'vitest';
import { mount } from '@vue/test-utils';
import Stat from './Stat.vue';

describe('UiStat', () => {
  beforeEach(() => {
    vi.useFakeTimers();
  });

  it('renders correctly with default props', async () => {
    const wrapper = mount(Stat, {
      props: {
        title: 'Total Revenue',
        value: 100,
        animated: false,
      },
    });

    expect(wrapper.text()).toContain('Total Revenue');
    expect(wrapper.text()).toContain('100');
  });

  it('formats currency correctly', async () => {
    const wrapper = mount(Stat, {
      props: {
        title: 'Total Revenue',
        value: 1234.56,
        format: 'currency',
        decimals: 2,
        animated: false,
      },
    });

    expect(wrapper.text()).toContain('$1,234.56');
  });

  it('formats compact numbers correctly', async () => {
    const wrapper = mount(Stat, {
      props: {
        title: 'Views',
        value: 1200000,
        format: 'compact',
        decimals: 1,
        animated: false,
      },
    });

    expect(wrapper.text()).toContain('1.2M');
  });

  it('renders trends correctly', async () => {
    const wrapper = mount(Stat, {
      props: {
        title: 'Users',
        value: 100,
        trend: 'up',
        trendValue: '+20%',
        animated: false,
      },
    });

    expect(wrapper.text()).toContain('+20%');
    // the green color indicates 'up'
    expect(wrapper.html()).toContain('text-green-600');
  });
});
