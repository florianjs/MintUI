import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiPricingCard from './PricingCard.vue';
import UiButton from './Button.vue';

describe('UiPricingCard', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiPricingCard, {
      props: {
        title: 'Basic Plan',
        price: '$10',
      },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Basic Plan');
    expect(wrapper.text()).toContain('$10');
    expect(wrapper.text()).toContain('/month'); // default period
  });

  it('renders features list', () => {
    const wrapper = mount(UiPricingCard, {
      props: {
        title: 'Basic',
        price: '$10',
        features: ['Feature 1', 'Feature 2'],
      },
    });
    const listItems = wrapper.findAll('li');
    expect(listItems.length).toBe(2);
    expect(wrapper.text()).toContain('Feature 1');
    expect(wrapper.text()).toContain('Feature 2');
  });

  it('applies popular styling when isPopular is true', () => {
    const wrapper = mount(UiPricingCard, {
      props: {
        title: 'Pro',
        price: '$20',
        isPopular: true,
      },
    });
    // Should show "Most Popular" badge
    expect(wrapper.text()).toContain('Most Popular');
    expect(wrapper.getComponent(UiButton).props('variant')).toBe('default');
  });

  it('allows custom button text and variant', () => {
    const wrapper = mount(UiPricingCard, {
      props: {
        title: 'Pro',
        price: '$20',
        buttonText: 'Buy Now',
        buttonVariant: 'secondary',
      },
    });
    const button = wrapper.getComponent(UiButton);
    expect(button.text()).toBe('Buy Now');
    expect(button.props('variant')).toBe('secondary');
  });

  it('emits click event on button click', async () => {
    const wrapper = mount(UiPricingCard, {
      props: {
        title: 'Basic',
        price: '$10',
      },
    });
    await wrapper.getComponent(UiButton).trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});
