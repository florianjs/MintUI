import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiHeroCentric from './HeroCentric.vue';

describe('UiHeroCentric', () => {
  it('renders with title prop', () => {
    const wrapper = mount(UiHeroCentric, { props: { title: 'Amazing SaaS' } });
    expect(wrapper.text()).toContain('Amazing SaaS');
  });

  it('renders subtitle prop', () => {
    const wrapper = mount(UiHeroCentric, {
      props: { title: 'Hero', subtitle: 'The best platform.' },
    });
    expect(wrapper.text()).toContain('The best platform.');
  });

  it('renders slots correctly', () => {
    const wrapper = mount(UiHeroCentric, {
      props: { title: 'Test' },
      slots: {
        badge: '<span class="test-badge">New Feature</span>',
        actions: '<button class="test-btn">Start</button>',
        image: '<img src="/test.png" class="test-img" />',
      },
    });

    expect(wrapper.find('.test-badge').exists()).toBe(true);
    expect(wrapper.find('.test-btn').exists()).toBe(true);
    expect(wrapper.find('.test-img').exists()).toBe(true);
  });
});
