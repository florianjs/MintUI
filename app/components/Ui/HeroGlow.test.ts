import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiHeroGlow from './HeroGlow.vue';

describe('UiHeroGlow', () => {
  it('renders with title prop', () => {
    const wrapper = mount(UiHeroGlow, { props: { title: 'Glow Hero' } });
    expect(wrapper.text()).toContain('Glow Hero');
  });

  it('renders subtitle prop', () => {
    const wrapper = mount(UiHeroGlow, {
      props: { title: 'Hero', subtitle: 'The glow hero description.' },
    });
    expect(wrapper.text()).toContain('The glow hero description.');
  });

  it('renders slots correctly', () => {
    const wrapper = mount(UiHeroGlow, {
      props: { title: 'Test' },
      slots: {
        badge: '<span class="test-badge">Badge</span>',
        actions: '<button class="test-btn">Start</button>',
      },
    });

    expect(wrapper.find('.test-badge').exists()).toBe(true);
    expect(wrapper.find('.test-btn').exists()).toBe(true);
  });
});
