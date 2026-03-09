import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiHeroSplit from './HeroSplit.vue';

describe('UiHeroSplit', () => {
  it('renders with title prop', () => {
    const wrapper = mount(UiHeroSplit, { props: { title: 'Split Hero' } });
    expect(wrapper.text()).toContain('Split Hero');
  });

  it('renders subtitle prop', () => {
    const wrapper = mount(UiHeroSplit, {
      props: { title: 'Hero', subtitle: 'The split hero description.' },
    });
    expect(wrapper.text()).toContain('The split hero description.');
  });

  it('applies reversed layout class properly', () => {
    const wrapper = mount(UiHeroSplit, {
      props: { title: 'Reversed', reversed: true },
    });
    expect(wrapper.find('.lg\\:grid-flow-col-dense').exists()).toBe(true);
  });

  it('renders slots correctly', () => {
    const wrapper = mount(UiHeroSplit, {
      props: { title: 'Test' },
      slots: {
        badge: '<span class="test-badge">Badge</span>',
        actions: '<button class="test-btn">Start</button>',
        features: '<div class="test-feat">Feature</div>',
        image: '<img src="/test.png" class="test-img" />',
      },
    });

    expect(wrapper.find('.test-badge').exists()).toBe(true);
    expect(wrapper.find('.test-btn').exists()).toBe(true);
    expect(wrapper.find('.test-feat').exists()).toBe(true);
    expect(wrapper.find('.test-img').exists()).toBe(true);
  });
});
