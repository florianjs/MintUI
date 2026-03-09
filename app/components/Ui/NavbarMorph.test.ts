import { describe, it, expect, vi } from 'vitest';
import { mount } from '@vue/test-utils';
import UiNavbarMorph from './NavbarMorph.vue';

describe('UiNavbarMorph', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavbarMorph);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('nav').classes()).toContain('fixed');
  });

  it('has border-b class initially', () => {
    const wrapper = mount(UiNavbarMorph);
    expect(wrapper.find('nav').classes()).toContain('border-b');
  });

  it('has rounded-2xl class when scrolled', async () => {
    const wrapper = mount(UiNavbarMorph);
    
    Object.defineProperty(window, 'scrollY', { 
      writable: true, 
      configurable: true, 
      value: 100 
    });
    window.dispatchEvent(new Event('scroll'));
    
    await wrapper.vm.$nextTick();
    expect(wrapper.find('nav').classes()).toContain('rounded-2xl');
  });

  it('applies different padding when scrolled', async () => {
    const wrapper = mount(UiNavbarMorph);
    
    const initialClasses = wrapper.find('nav').classes();
    expect(initialClasses).toContain('py-6');
    
    Object.defineProperty(window, 'scrollY', { 
      writable: true, 
      configurable: true, 
      value: 100 
    });
    window.dispatchEvent(new Event('scroll'));
    
    await wrapper.vm.$nextTick();
    const scrolledClasses = wrapper.find('nav').classes();
    expect(scrolledClasses).toContain('py-5');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiNavbarMorph, {
      slots: { default: 'Logo' }
    });
    expect(wrapper.text()).toContain('Logo');
  });

  it('renders mobile slot', () => {
    const wrapper = mount(UiNavbarMorph, {
      slots: { mobile: 'Mobile Menu' }
    });
    expect(wrapper.text()).toContain('Mobile Menu');
  });

  it('cleans up scroll listener on unmount', () => {
    const removeEventListenerSpy = vi.spyOn(window, 'removeEventListener');
    const wrapper = mount(UiNavbarMorph);
    wrapper.unmount();
    expect(removeEventListenerSpy).toHaveBeenCalledWith('scroll', expect.any(Function));
    removeEventListenerSpy.mockRestore();
  });

  it('uses custom scrollThreshold', () => {
    const wrapper = mount(UiNavbarMorph, {
      props: { scrollThreshold: 200 }
    });
    expect(wrapper.exists()).toBe(true);
  });

  it('has shadow-lg when scrolled', async () => {
    const wrapper = mount(UiNavbarMorph);
    
    Object.defineProperty(window, 'scrollY', { 
      writable: true, 
      configurable: true, 
      value: 100 
    });
    window.dispatchEvent(new Event('scroll'));
    
    await wrapper.vm.$nextTick();
    expect(wrapper.find('nav').classes()).toContain('shadow-lg');
  });
});
