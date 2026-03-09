import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiCard from './Card.vue';
import UiCardHeader from './CardHeader.vue';
import UiCardTitle from './CardTitle.vue';
import UiCardDescription from './CardDescription.vue';
import UiCardContent from './CardContent.vue';
import UiCardFooter from './CardFooter.vue';
import UiCardImage from './CardImage.vue';

describe('UiCard', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiCard);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('rounded-xl');
  });

  it('applies default variant classes', () => {
    const wrapper = mount(UiCard, { props: { variant: 'default' } });
    expect(wrapper.classes()).toContain('border');
    expect(wrapper.classes()).toContain('bg-card');
    expect(wrapper.classes()).toContain('shadow-sm');
  });

  it('applies elevated variant classes', () => {
    const wrapper = mount(UiCard, { props: { variant: 'elevated' } });
    expect(wrapper.classes()).toContain('shadow-lg');
    expect(wrapper.classes()).toContain('shadow-black/5');
  });

  it('applies outline variant classes', () => {
    const wrapper = mount(UiCard, { props: { variant: 'outline' } });
    expect(wrapper.classes()).toContain('border-2');
    expect(wrapper.classes()).toContain('bg-card/50');
  });

  it('applies glass variant classes', () => {
    const wrapper = mount(UiCard, { props: { variant: 'glass' } });
    expect(wrapper.classes()).toContain('backdrop-blur-xl');
    expect(wrapper.classes()).toContain('bg-white/5');
  });

  it('applies gradient variant classes', () => {
    const wrapper = mount(UiCard, { props: { variant: 'gradient' } });
    expect(wrapper.classes()).toContain('overflow-hidden');
  });

  it('applies interactive classes when interactive is true', () => {
    const wrapper = mount(UiCard, { props: { interactive: true } });
    expect(wrapper.classes()).toContain('cursor-pointer');
    expect(wrapper.classes()).toContain('hover:scale-[1.02]');
    expect(wrapper.attributes('role')).toBe('button');
    expect(wrapper.attributes('tabindex')).toBe('0');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiCard, {
      slots: { default: '<div class="test-content">Test Content</div>' },
    });
    expect(wrapper.html()).toContain('Test Content');
  });
});

describe('UiCardHeader', () => {
  it('renders with correct classes', () => {
    const wrapper = mount(UiCardHeader);
    expect(wrapper.classes()).toContain('flex');
    expect(wrapper.classes()).toContain('flex-col');
    expect(wrapper.classes()).toContain('p-6');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiCardHeader, {
      slots: { default: '<span>Header Content</span>' },
    });
    expect(wrapper.html()).toContain('Header Content');
  });
});

describe('UiCardTitle', () => {
  it('renders as h3 element', () => {
    const wrapper = mount(UiCardTitle);
    expect(wrapper.find('h3').exists()).toBe(true);
  });

  it('renders with correct classes', () => {
    const wrapper = mount(UiCardTitle);
    expect(wrapper.classes()).toContain('text-xl');
    expect(wrapper.classes()).toContain('font-semibold');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiCardTitle, {
      slots: { default: 'Card Title' },
    });
    expect(wrapper.text()).toBe('Card Title');
  });
});

describe('UiCardDescription', () => {
  it('renders as p element', () => {
    const wrapper = mount(UiCardDescription);
    expect(wrapper.find('p').exists()).toBe(true);
  });

  it('renders with correct classes', () => {
    const wrapper = mount(UiCardDescription);
    expect(wrapper.classes()).toContain('text-sm');
    expect(wrapper.classes()).toContain('text-muted-foreground');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiCardDescription, {
      slots: { default: 'Description text' },
    });
    expect(wrapper.text()).toBe('Description text');
  });
});

describe('UiCardContent', () => {
  it('renders with correct classes', () => {
    const wrapper = mount(UiCardContent);
    expect(wrapper.classes()).toContain('p-6');
    expect(wrapper.classes()).toContain('pt-0');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiCardContent, {
      slots: { default: '<p>Content</p>' },
    });
    expect(wrapper.html()).toContain('Content');
  });
});

describe('UiCardFooter', () => {
  it('renders with correct classes', () => {
    const wrapper = mount(UiCardFooter);
    expect(wrapper.classes()).toContain('flex');
    expect(wrapper.classes()).toContain('items-center');
    expect(wrapper.classes()).toContain('gap-3');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiCardFooter, {
      slots: { default: '<button>Action</button>' },
    });
    expect(wrapper.html()).toContain('Action');
  });
});

describe('UiCardImage', () => {
  it('renders img element with src and alt', () => {
    const wrapper = mount(UiCardImage, {
      props: { src: 'https://example.com/image.jpg', alt: 'Test image' },
    });
    const img = wrapper.find('img');
    expect(img.exists()).toBe(true);
    expect(img.attributes('src')).toBe('https://example.com/image.jpg');
    expect(img.attributes('alt')).toBe('Test image');
  });

  it('applies correct classes to image', () => {
    const wrapper = mount(UiCardImage, {
      props: { src: 'https://example.com/image.jpg' },
    });
    const img = wrapper.find('img');
    expect(img.classes()).toContain('w-full');
    expect(img.classes()).toContain('h-48');
    expect(img.classes()).toContain('object-cover');
  });
});
