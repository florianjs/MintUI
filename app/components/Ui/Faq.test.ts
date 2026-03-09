import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiFaq from './Faq.vue';
import UiAccordion from './Accordion.vue';

describe('UiFaq', () => {
  const sampleItems = [
    { question: 'Q1', answer: 'A1', defaultOpen: true },
    { question: 'Q2', answer: 'A2' },
  ];

  it('renders with default props', () => {
    const wrapper = mount(UiFaq, {
      props: { items: [] },
    });
    expect(wrapper.exists()).toBe(true);
    // Should render the default title
    expect(wrapper.text()).toContain('Frequently Asked Questions');
    expect(wrapper.text()).toContain('No questions available.');
  });

  it('renders a list of UiAccordion components', () => {
    const wrapper = mount(UiFaq, {
      props: { items: sampleItems },
    });

    const accordions = wrapper.findAllComponents(UiAccordion);
    expect(accordions.length).toBe(2);

    // Check first accordion props
    expect(accordions[0]!.props('title')).toBe('Q1');
    expect(accordions[0]!.props('defaultOpen')).toBe(true);

    // Check second accordion props
    expect(accordions[1]!.props('title')).toBe('Q2');
    expect(accordions[1]!.props('defaultOpen')).toBe(false);
  });

  it('renders custom title and description', () => {
    const wrapper = mount(UiFaq, {
      props: {
        title: 'Custom Title',
        description: 'Custom Description',
        items: sampleItems,
      },
    });

    expect(wrapper.find('h2').text()).toBe('Custom Title');
    expect(wrapper.find('p').text()).toBe('Custom Description');
  });

  it('hides header entirely if title and description are empty', () => {
    const wrapper = mount(UiFaq, {
      props: {
        title: '',
        description: '',
        items: [],
      },
    });

    expect(wrapper.find('h2').exists()).toBe(false);
    expect(wrapper.find('p').exists()).toBe(false);
  });
});
