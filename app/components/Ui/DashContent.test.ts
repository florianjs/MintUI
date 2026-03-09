import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiDashContent from './DashContent.vue';

describe('UiDashContent', () => {
  it('renders correctly', () => {
    const wrapper = mount(UiDashContent);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders slot content', () => {
    const wrapper = mount(UiDashContent, {
      slots: {
        default: '<div class="test-content">Main Content Area</div>',
      },
    });
    expect(wrapper.html()).toContain('test-content');
  });

  it('has correct classes', () => {
    const wrapper = mount(UiDashContent);
    expect(wrapper.classes()).toContain('flex-1');
    expect(wrapper.classes()).toContain('overflow-y-auto');
  });
});
