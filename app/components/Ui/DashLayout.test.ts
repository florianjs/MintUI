import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiDashLayout from './DashLayout.vue';

describe('UiDashLayout', () => {
  it('renders correctly', () => {
    const wrapper = mount(UiDashLayout);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders main slot content', () => {
    const wrapper = mount(UiDashLayout, {
      slots: {
        default: '<div class="main-content">Main</div>',
      },
    });
    expect(wrapper.html()).toContain('main-content');
  });

  it('renders sidebar and navbar slots', () => {
    const wrapper = mount(UiDashLayout, {
      slots: {
        sidebar: '<div class="sidebar-slot">Sidebar</div>',
        navbar: '<div class="navbar-slot">Navbar</div>',
      },
    });
    expect(wrapper.html()).toContain('sidebar-slot');
    expect(wrapper.html()).toContain('navbar-slot');
  });
});
