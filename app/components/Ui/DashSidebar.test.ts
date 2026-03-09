import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiDashSidebar from './DashSidebar.vue';

describe('UiDashSidebar', () => {
  it('renders correctly', () => {
    const wrapper = mount(UiDashSidebar);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders slot content', () => {
    const wrapper = mount(UiDashSidebar, {
      slots: {
        default: '<div class="test-content">Content</div>',
      },
    });
    expect(wrapper.html()).toContain('test-content');
  });

  it('has correct classes', () => {
    const wrapper = mount(UiDashSidebar);
    expect(wrapper.classes()).toContain('w-64');
    expect(wrapper.classes()).toContain('bg-card');
  });
});
