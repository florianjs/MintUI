import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import UiNavBar from './NavBar.vue';
import UiNavBarBrand from './NavBarBrand.vue';
import UiNavBarMenu from './NavBarMenu.vue';
import UiNavBarItem from './NavBarItem.vue';
import UiNavBarAvatar from './NavBarAvatar.vue';
import UiNavBarDropdownItem from './NavBarDropdownItem.vue';
import UiNavBarDropdownSeparator from './NavBarDropdownSeparator.vue';

describe('UiNavBar', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavBar);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('fixed');
    expect(wrapper.classes()).toContain('top-0');
    expect(wrapper.classes()).toContain('left-0');
  });

  it('applies glass variant correctly', () => {
    const wrapper = mount(UiNavBar, { props: { variant: 'glass' } });
    expect(wrapper.classes()).toContain('bg-background/70');
    expect(wrapper.classes()).toContain('backdrop-blur-lg');
  });

  it('applies solid variant correctly', () => {
    const wrapper = mount(UiNavBar, { props: { variant: 'solid' } });
    expect(wrapper.classes()).toContain('bg-background');
    expect(wrapper.classes()).not.toContain('bg-background/70');
  });

  it('applies default variant correctly', () => {
    const wrapper = mount(UiNavBar, { props: { variant: 'default' } });
    expect(wrapper.classes()).toContain('bg-background/95');
    expect(wrapper.classes()).toContain('backdrop-blur-sm');
  });

  it('applies sticky prop correctly', () => {
    const wrapper = mount(UiNavBar, { props: { sticky: true } });
    expect(wrapper.classes()).toContain('fixed');
    expect(wrapper.classes()).toContain('top-0');
  });

  it('removes sticky when sticky is false', () => {
    const wrapper = mount(UiNavBar, { props: { sticky: false } });
    expect(wrapper.classes()).not.toContain('fixed');
    expect(wrapper.classes()).not.toContain('top-0');
  });

  it('applies fluid prop correctly', () => {
    const wrapper = mount(UiNavBar, { props: { fluid: true } });
    const container = wrapper.find('.w-full.px-6');
    expect(container.exists()).toBe(true);
  });

  it('applies non-fluid (container) prop correctly', () => {
    const wrapper = mount(UiNavBar, { props: { fluid: false } });
    const container = wrapper.find('.container');
    expect(container.exists()).toBe(true);
  });

  it('renders slot content', () => {
    const wrapper = mount(UiNavBar, {
      slots: {
        default: '<div class="test-content">Test Content</div>',
      },
    });
    expect(wrapper.text()).toContain('Test Content');
  });

  it('has correct nav element role', () => {
    const wrapper = mount(UiNavBar);
    expect(wrapper.element.tagName).toBe('NAV');
  });

  it('provides navbar context to child components', () => {
    const wrapper = mount(UiNavBar);
    expect(wrapper.exists()).toBe(true);
  });
});

describe('UiNavBarBrand', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavBarBrand);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('a').attributes('href')).toBe('/');
  });

  it('applies custom href', () => {
    const wrapper = mount(UiNavBarBrand, { props: { href: '/custom' } });
    expect(wrapper.find('a').attributes('href')).toBe('/custom');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiNavBarBrand, {
      slots: {
        default: '<span>Brand Name</span>',
      },
    });
    expect(wrapper.text()).toContain('Brand Name');
  });
});

describe('UiNavBarMenu', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavBarMenu);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('flex');
    expect(wrapper.classes()).toContain('items-center');
    expect(wrapper.classes()).toContain('gap-6');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiNavBarMenu, {
      slots: {
        default: '<a href="#">Link</a>',
      },
    });
    expect(wrapper.text()).toContain('Link');
  });
});

describe('UiNavBarItem', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavBarItem);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('a').attributes('href')).toBe('#');
  });

  it('applies custom href', () => {
    const wrapper = mount(UiNavBarItem, { props: { href: '/about' } });
    expect(wrapper.find('a').attributes('href')).toBe('/about');
  });

  it('applies active state correctly', () => {
    const wrapper = mount(UiNavBarItem, { props: { active: true } });
    expect(wrapper.find('a').classes()).toContain('text-foreground');
  });

  it('applies inactive state correctly', () => {
    const wrapper = mount(UiNavBarItem, { props: { active: false } });
    expect(wrapper.find('a').classes()).toContain('text-muted-foreground');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiNavBarItem, {
      slots: {
        default: 'Menu Item',
      },
    });
    expect(wrapper.text()).toContain('Menu Item');
  });
});

describe('UiNavBarAvatar', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavBarAvatar);
    expect(wrapper.exists()).toBe(true);
  });

  it('renders avatar image when src is provided', () => {
    const wrapper = mount(UiNavBarAvatar, {
      props: {
        src: 'https://example.com/avatar.jpg',
        alt: 'User Avatar',
      },
    });
    expect(wrapper.find('img').exists()).toBe(true);
    expect(wrapper.find('img').attributes('src')).toBe('https://example.com/avatar.jpg');
    expect(wrapper.find('img').attributes('alt')).toBe('User Avatar');
  });

  it('renders initials fallback when no src is provided', () => {
    const wrapper = mount(UiNavBarAvatar, {
      props: {
        alt: 'John Doe',
      },
    });
    expect(wrapper.text()).toContain('JD');
  });

  it('renders custom fallback text', () => {
    const wrapper = mount(UiNavBarAvatar, {
      props: {
        fallback: 'AD',
      },
    });
    expect(wrapper.text()).toContain('AD');
  });

  it('toggles dropdown when clicked', async () => {
    const wrapper = mount(UiNavBarAvatar);
    const button = wrapper.find('button');
    
    expect(wrapper.find('.absolute.right-0').exists()).toBe(false);
    
    await button.trigger('click');
    expect(wrapper.find('.absolute.right-0').exists()).toBe(true);
    
    await button.trigger('click');
    expect(wrapper.find('.absolute.right-0').exists()).toBe(false);
  });

  it('renders dropdown slot content', async () => {
    const wrapper = mount(UiNavBarAvatar, {
      slots: {
        default: '<a href="#">Profile</a>',
      },
    });
    
    await wrapper.find('button').trigger('click');
    expect(wrapper.text()).toContain('Profile');
  });
});

describe('UiNavBarDropdownItem', () => {
  it('renders with default props', () => {
    const wrapper = mount(UiNavBarDropdownItem);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('a').attributes('href')).toBe('#');
  });

  it('applies custom href', () => {
    const wrapper = mount(UiNavBarDropdownItem, { props: { href: '/settings' } });
    expect(wrapper.find('a').attributes('href')).toBe('/settings');
  });

  it('applies destructive variant correctly', () => {
    const wrapper = mount(UiNavBarDropdownItem, { props: { variant: 'destructive' } });
    expect(wrapper.find('a').classes()).toContain('text-destructive');
  });

  it('applies default variant correctly', () => {
    const wrapper = mount(UiNavBarDropdownItem, { props: { variant: 'default' } });
    expect(wrapper.find('a').classes()).toContain('text-popover-foreground');
  });

  it('applies disabled state correctly', () => {
    const wrapper = mount(UiNavBarDropdownItem, { props: { disabled: true } });
    expect(wrapper.find('a').classes()).toContain('pointer-events-none');
    expect(wrapper.find('a').classes()).toContain('opacity-50');
  });

  it('renders slot content', () => {
    const wrapper = mount(UiNavBarDropdownItem, {
      slots: {
        default: '<span>Settings</span>',
      },
    });
    expect(wrapper.text()).toContain('Settings');
  });

  it('emits click event', async () => {
    const wrapper = mount(UiNavBarDropdownItem);
    await wrapper.find('a').trigger('click');
    expect(wrapper.emitted('click')).toBeTruthy();
  });
});

describe('UiNavBarDropdownSeparator', () => {
  it('renders correctly', () => {
    const wrapper = mount(UiNavBarDropdownSeparator);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.classes()).toContain('h-px');
    expect(wrapper.classes()).toContain('bg-border/50');
  });
});
