import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiAlert from './Alert.vue';

describe('UiAlert', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiAlert, {
      props: {
        title: 'Info',
        description: 'Some info',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Info');
    expect(wrapper.text()).toContain('Some info');
    expect(wrapper.classes()).toContain('border-border');
  });

  it('applies destructive classes', () => {
    const wrapper = mount(UiAlert, {
      props: {
        title: 'Error',
        variant: 'destructive',
      },
    });
    expect(wrapper.classes()).toContain('border-destructive/50');
    expect(wrapper.classes()).toContain('text-destructive');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiAlert, {
      slots: {
        default: 'Custom Slot Content',
        icon: '<span class="custom-icon">Icon</span>',
      },
    });
    expect(wrapper.text()).toContain('Custom Slot Content');
    // Check if default icon is replaced
    expect(wrapper.find('svg').exists()).toBe(false);
    expect(wrapper.find('.custom-icon').exists()).toBe(true);
  });
});
