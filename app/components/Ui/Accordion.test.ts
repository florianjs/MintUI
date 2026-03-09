import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiAccordion from './Accordion.vue';

describe('UiAccordion', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiAccordion, {
      props: { title: 'Test Accordion' },
    });
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.text()).toContain('Test Accordion');
  });

  it('is closed by default', () => {
    const wrapper = mount(UiAccordion, {
      props: { title: 'Closed' },
    });
    const gridDiv = wrapper.find('.grid');
    expect(gridDiv.classes()).toContain('grid-rows-[0fr]');
  });

  it('is open when defaultOpen is true', () => {
    const wrapper = mount(UiAccordion, {
      props: {
        title: 'Open',
        defaultOpen: true,
      },
    });
    const gridDiv = wrapper.find('.grid');
    expect(gridDiv.classes()).toContain('grid-rows-[1fr]');
  });

  it('toggles when button is clicked', async () => {
    const wrapper = mount(UiAccordion, {
      props: { title: 'Toggle Me' },
    });
    const button = wrapper.find('button');
    const gridDiv = wrapper.find('.grid');

    // Initially closed
    expect(gridDiv.classes()).toContain('grid-rows-[0fr]');

    // Click to open
    await button.trigger('click');
    expect(gridDiv.classes()).toContain('grid-rows-[1fr]');

    // Click to close
    await button.trigger('click');
    expect(gridDiv.classes()).toContain('grid-rows-[0fr]');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiAccordion, {
      props: { title: 'Slot Test' },
      slots: { default: 'Slot Content' },
    });
    expect(wrapper.text()).toContain('Slot Content');
  });
});
