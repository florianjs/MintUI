import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiDashNavbar from './DashNavbar.vue';

describe('UiDashNavbar', () => {
  it('renders correctly', () => {
    const wrapper = mount(UiDashNavbar);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders slot content', () => {
    const wrapper = mount(UiDashNavbar, {
      slots: {
        default: 'Navbar Items',
      },
    });
    expect(wrapper.text()).toContain('Navbar Items');
  });

  it('has correct classes', () => {
    const wrapper = mount(UiDashNavbar);
    expect(wrapper.classes()).toContain('border-b');
    expect(wrapper.classes()).toContain('h-14');
  });
});
