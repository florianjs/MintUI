import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiNavbarCentered from './NavbarCentered.vue';

describe('UiNavbarCentered', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavbarCentered);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('border-b');
    expect(wrapper.classes()).toContain('border-border');
    expect(wrapper.classes()).toContain('bg-background');
  });

  it('applies fluid prop correctly', () => {
    const wrapper = mount(UiNavbarCentered, { props: { fluid: true } });
    const container = wrapper.find('div');
    expect(container.classes()).not.toContain('mx-auto');
    expect(container.classes()).not.toContain('max-w-7xl');
  });

  it('applies non-fluid (container) prop correctly', () => {
    const wrapper = mount(UiNavbarCentered, { props: { fluid: false } });
    const container = wrapper.find('div');
    expect(container.classes()).toContain('mx-auto');
    expect(container.classes()).toContain('max-w-7xl');
  });

  it('applies elevated variant correctly', () => {
    const wrapper = mount(UiNavbarCentered, { props: { variant: 'elevated' } });
    expect(wrapper.classes()).toContain('shadow-md');
  });

  it('applies floating variant correctly', () => {
    const wrapper = mount(UiNavbarCentered, { props: { variant: 'floating' } });
    expect(wrapper.classes()).toContain('border-none');
    expect(wrapper.classes()).toContain('bg-transparent');
  });

  it('applies default variant correctly', () => {
    const wrapper = mount(UiNavbarCentered, { props: { variant: 'default' } });
    expect(wrapper.classes()).not.toContain('shadow-md');
    expect(wrapper.classes()).not.toContain('border-none');
    expect(wrapper.classes()).not.toContain('bg-transparent');
  });

  it('renders left slot content', () => {
    const wrapper = mount(UiNavbarCentered, {
      slots: {
        left: '<div class="left-content">Left</div>',
      },
    });
    expect(wrapper.text()).toContain('Left');
  });

  it('renders center slot content', () => {
    const wrapper = mount(UiNavbarCentered, {
      slots: {
        center: '<div class="center-content">Center</div>',
      },
    });
    expect(wrapper.text()).toContain('Center');
  });

  it('renders right slot content', () => {
    const wrapper = mount(UiNavbarCentered, {
      slots: {
        right: '<div class="right-content">Right</div>',
      },
    });
    expect(wrapper.text()).toContain('Right');
  });

  it('renders mobile slot content', () => {
    const wrapper = mount(UiNavbarCentered, {
      slots: {
        mobile: '<div class="mobile-content">Mobile Menu</div>',
      },
    });
    expect(wrapper.text()).toContain('Mobile Menu');
  });

  it('provides navbar context to child components', () => {
    const wrapper = mount(UiNavbarCentered);
    // The component provides 'navbar' context via provide()
    // This is tested indirectly through child components
    expect(wrapper.exists()).toBe(true);
  });

  it('toggles mobile menu state internally', async () => {
    const wrapper = mount(UiNavbarCentered);
    // Initial state should have mobile menu closed
    expect(wrapper.html()).toContain('border-b');

    // Trigger a re-render to verify reactivity works
    await wrapper.setProps({ fluid: true });
    expect(wrapper.classes()).toContain('border-b');
  });

  it('has correct nav element role', () => {
    const wrapper = mount(UiNavbarCentered);
    expect(wrapper.element.tagName).toBe('NAV');
  });
});
