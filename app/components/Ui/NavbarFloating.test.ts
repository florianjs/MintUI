import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiNavbarFloating from './NavbarFloating.vue';

describe('UiNavbarFloating', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavbarFloating);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('nav').classes()).toContain('rounded-2xl');
  });

  it('applies default variant class', () => {
    const wrapper = mount(UiNavbarFloating, { 
      props: { variant: 'default' } 
    });
    expect(wrapper.find('nav').classes()).toContain('bg-background');
    expect(wrapper.find('nav').classes()).toContain('border');
    expect(wrapper.find('nav').classes()).toContain('border-border');
  });

  it('applies bordered variant class', () => {
    const wrapper = mount(UiNavbarFloating, { 
      props: { variant: 'bordered' } 
    });
    expect(wrapper.find('nav').classes()).toContain('bg-card');
    expect(wrapper.find('nav').classes()).toContain('border-2');
  });

  it('applies sticky positioning when sticky is true', () => {
    const wrapper = mount(UiNavbarFloating, { 
      props: { sticky: true } 
    });
    expect(wrapper.find('nav').classes()).toContain('fixed');
    expect(wrapper.find('nav').classes()).toContain('top-8');
  });

  it('applies relative positioning when sticky is false', () => {
    const wrapper = mount(UiNavbarFloating, { 
      props: { sticky: false } 
    });
    expect(wrapper.find('nav').classes()).toContain('relative');
    expect(wrapper.find('nav').classes()).not.toContain('fixed');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiNavbarFloating, {
      slots: { default: 'Logo' }
    });
    expect(wrapper.text()).toContain('Logo');
  });

  it('renders mobile slot', () => {
    const wrapper = mount(UiNavbarFloating, {
      slots: { mobile: 'Mobile Menu' }
    });
    expect(wrapper.text()).toContain('Mobile Menu');
  });

  it('has proper padding classes', () => {
    const wrapper = mount(UiNavbarFloating);
    expect(wrapper.find('nav > div').classes()).toContain('px-8');
    expect(wrapper.find('nav > div').classes()).toContain('py-5');
  });
});
