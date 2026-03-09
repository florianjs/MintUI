import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiButton from './Button.vue';

describe('UiButton', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiButton);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('button').exists()).toBe(true);
  });

  it('applies default variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'default' } });
    expect(wrapper.classes()).toContain('bg-primary');
    expect(wrapper.classes()).toContain('text-primary-foreground');
  });

  it('applies secondary variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'secondary' } });
    expect(wrapper.classes()).toContain('bg-secondary');
    expect(wrapper.classes()).toContain('text-secondary-foreground');
  });

  it('applies destructive variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'destructive' } });
    expect(wrapper.classes()).toContain('bg-destructive');
    expect(wrapper.classes()).toContain('text-destructive-foreground');
  });

  it('applies outline variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'outline' } });
    expect(wrapper.classes()).toContain('border-2');
    expect(wrapper.classes()).toContain('border-input');
  });

  it('applies ghost variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'ghost' } });
    expect(wrapper.classes()).toContain('hover:bg-accent');
  });

  it('applies link variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'link' } });
    expect(wrapper.classes()).toContain('text-primary');
    expect(wrapper.classes()).toContain('underline-offset-4');
  });

  it('applies gradient variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'gradient' } });
    expect(wrapper.classes()).toContain('bg-gradient-to-r');
  });

  it('applies elevated variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'elevated' } });
    expect(wrapper.classes()).toContain('shadow-lg');
    expect(wrapper.classes()).toContain('shadow-black/5');
  });

  it('applies soft variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'soft' } });
    expect(wrapper.classes()).toContain('bg-primary/10');
    expect(wrapper.classes()).toContain('text-primary');
  });

  it('applies positive variant classes', () => {
    const wrapper = mount(UiButton, { props: { variant: 'positive' } });
    expect(wrapper.classes()).toContain('bg-emerald-500');
  });

  it('applies size sm classes', () => {
    const wrapper = mount(UiButton, { props: { size: 'sm' } });
    expect(wrapper.classes()).toContain('h-8');
    expect(wrapper.classes()).toContain('px-3');
  });

  it('applies size default classes', () => {
    const wrapper = mount(UiButton, { props: { size: 'default' } });
    expect(wrapper.classes()).toContain('h-10');
    expect(wrapper.classes()).toContain('px-4');
  });

  it('applies size lg classes', () => {
    const wrapper = mount(UiButton, { props: { size: 'lg' } });
    expect(wrapper.classes()).toContain('h-12');
    expect(wrapper.classes()).toContain('px-6');
  });

  it('applies size icon classes', () => {
    const wrapper = mount(UiButton, { props: { size: 'icon' } });
    expect(wrapper.classes()).toContain('h-10');
    expect(wrapper.classes()).toContain('w-10');
  });

  it('applies click feedback classes', () => {
    const wrapper = mount(UiButton);
    expect(wrapper.classes()).toContain('active:scale-[0.97]');
    expect(wrapper.classes()).toContain('active:shadow-inner');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiButton, {
      slots: { default: 'Click me' },
    });
    expect(wrapper.text()).toContain('Click me');
  });

  it('applies disabled state', () => {
    const wrapper = mount(UiButton, { props: { disabled: true } });
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain('disabled:pointer-events-none');
  });

  it('shows loading spinner when loading', () => {
    const wrapper = mount(UiButton, { props: { loading: true } });
    expect(wrapper.find('svg.animate-spin').exists()).toBe(true);
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
  });

  it('does not show loading spinner when not loading', () => {
    const wrapper = mount(UiButton, { props: { loading: false } });
    expect(wrapper.find('svg.animate-spin').exists()).toBe(false);
  });

  it('has focus-visible styles', () => {
    const wrapper = mount(UiButton);
    expect(wrapper.classes()).toContain('focus-visible:outline-none');
    expect(wrapper.classes()).toContain('focus-visible:ring-2');
  });

  it('shows loading state with state prop', () => {
    const wrapper = mount(UiButton, { props: { state: 'loading' } });
    expect(wrapper.find('svg.animate-spin').exists()).toBe(true);
    expect(wrapper.find('button').attributes('disabled')).toBeDefined();
    expect(wrapper.classes()).toContain('cursor-wait');
  });

  it('shows success state with checkmark icon', () => {
    const wrapper = mount(UiButton, { props: { state: 'success' } });
    const svg = wrapper.find('svg');
    expect(svg.exists()).toBe(true);
    expect(svg.classes()).toContain('animate-in');
    expect(wrapper.classes()).toContain('bg-emerald-500');
    expect(wrapper.text()).toContain('Success');
  });

  it('shows error state with X icon', () => {
    const wrapper = mount(UiButton, { props: { state: 'error' } });
    const svg = wrapper.find('svg');
    expect(svg.exists()).toBe(true);
    expect(svg.classes()).toContain('animate-in');
    expect(wrapper.classes()).toContain('bg-destructive');
    expect(wrapper.text()).toContain('Error');
  });

  it('shows idle state content', () => {
    const wrapper = mount(UiButton, {
      props: { state: 'idle' },
      slots: { default: 'Click me' },
    });
    expect(wrapper.text()).toContain('Click me');
  });

  it('emits click event when clicked', async () => {
    const wrapper = mount(UiButton);
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });

  it('does not emit click when disabled', async () => {
    const wrapper = mount(UiButton, { props: { disabled: true } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('does not emit click when loading', async () => {
    const wrapper = mount(UiButton, { props: { state: 'loading' } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });

  it('does not emit click when loading prop is true', async () => {
    const wrapper = mount(UiButton, { props: { loading: true } });
    await wrapper.find('button').trigger('click');
    expect(wrapper.emitted('click')).toBeFalsy();
  });
});
