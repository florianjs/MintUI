import type { Meta, StoryObj } from '@storybook/vue3';
import { fn, expect } from 'storybook/test';
import UiNavBar from './Navbar.vue';
import UiNavBarBrand from './NavbarBrand.vue';
import UiNavBarMenu from './NavbarMenu.vue';
import UiNavBarItem from './NavbarItem.vue';
import UiNavBarAvatar from './NavBarAvatar.vue';
import UiNavBarDropdownItem from './NavBarDropdownItem.vue';
import UiNavBarDropdownSeparator from './NavBarDropdownSeparator.vue';

const meta: Meta<typeof UiNavBar> = {
  title: 'Ui/NavBar',
  component: UiNavBar,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'glass', 'solid'],
    },
    fluid: { control: 'boolean' },
    sticky: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args: any) => ({
    components: {
      UiNavBar,
      UiNavBarBrand,
      UiNavBarMenu,
      UiNavBarItem,
    },
    setup() {
      return { args };
    },
    template: `
      <div class="min-h-[400px] bg-background">
        <UiNavBar v-bind="args">
          <UiNavBarBrand href="/">
            <span class="text-xl font-bold">MintUI</span>
          </UiNavBarBrand>
          <UiNavBarMenu>
            <UiNavBarItem href="#" :active="true">Home</UiNavBarItem>
            <UiNavBarItem href="#">Features</UiNavBarItem>
            <UiNavBarItem href="#">Pricing</UiNavBarItem>
            <UiNavBarItem href="#">About</UiNavBarItem>
          </UiNavBarMenu>
        </UiNavBar>
        <div class="container mx-auto px-6 lg:px-8 pt-24">
          <h1 class="text-3xl font-bold">Welcome to MintUI</h1>
          <p class="mt-4 text-muted-foreground">A modern UI component library with glassmorphism effects.</p>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'glass',
    fluid: false,
    sticky: true,
  },
  play: async ({ canvas, step }) => {
    await step('Renders navbar with brand and menu items', async () => {
      await expect(canvas.getByText('MintUI')).toBeInTheDocument();
      await expect(canvas.getByText('Home')).toBeInTheDocument();
      await expect(canvas.getByText('Features')).toBeInTheDocument();
      await expect(canvas.getByText('Pricing')).toBeInTheDocument();
      await expect(canvas.getByText('About')).toBeInTheDocument();
    });

    await step('Brand link has correct href', async () => {
      const brandLink = canvas.getByText('MintUI').closest('a');
      await expect(brandLink).toHaveAttribute('href', '/');
    });

    await step('Home item is marked as active', async () => {
      const homeItem = canvas.getByText('Home');
      await expect(homeItem).toBeInTheDocument();
    });
  },
};

export const WithAvatar: Story = {
  render: (args: any) => ({
    components: {
      UiNavBar,
      UiNavBarBrand,
      UiNavBarMenu,
      UiNavBarItem,
      UiNavBarAvatar,
      UiNavBarDropdownItem,
      UiNavBarDropdownSeparator,
    },
    setup() {
      return { args };
    },
    template: `
      <div class="min-h-[400px] bg-background">
        <UiNavBar v-bind="args">
          <UiNavBarBrand href="/">
            <span class="text-xl font-bold">MintUI</span>
          </UiNavBarBrand>
          <div class="flex flex-1 items-center justify-end gap-6">
            <UiNavBarMenu>
              <UiNavBarItem href="#" :active="true">Dashboard</UiNavBarItem>
              <UiNavBarItem href="#">Projects</UiNavBarItem>
              <UiNavBarItem href="#">Settings</UiNavBarItem>
            </UiNavBarMenu>
            <UiNavBarAvatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
              alt="John Doe"
            >
              <UiNavBarDropdownItem href="#">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
                <span>Profile</span>
              </UiNavBarDropdownItem>
              <UiNavBarDropdownItem href="#">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Settings</span>
              </UiNavBarDropdownItem>
              <UiNavBarDropdownSeparator />
              <UiNavBarDropdownItem href="#" variant="destructive">
                <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                </svg>
                <span>Logout</span>
              </UiNavBarDropdownItem>
            </UiNavBarAvatar>
          </div>
        </UiNavBar>
        <div class="container mx-auto px-6 lg:px-8 pt-24">
          <h1 class="text-3xl font-bold">Dashboard</h1>
          <p class="mt-4 text-muted-foreground">Welcome back, John! Here's your dashboard overview.</p>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'glass',
    fluid: false,
    sticky: true,
  },
  play: async ({ canvas, step, userEvent }) => {
    await step('Renders navbar with all components', async () => {
      await expect(canvas.getByText('MintUI')).toBeInTheDocument();
      await expect(canvas.getByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
      await expect(canvas.getByText('Projects')).toBeInTheDocument();
    });

    await step('Avatar is visible', async () => {
      const avatar = canvas.getByAltText('John Doe');
      await expect(avatar).toBeInTheDocument();
    });

    await step('Dropdown is initially hidden', async () => {
      const profileItem = canvas.queryByText('Profile');
      await expect(profileItem).not.toBeInTheDocument();
    });

    await step('Click avatar to open dropdown', async () => {
      const avatarButton = canvas.getByRole('button');
      await userEvent.click(avatarButton);
      
      await expect(canvas.getByText('Profile')).toBeInTheDocument();
      await expect(canvas.getByText('Logout')).toBeInTheDocument();
    });

    await step('Click avatar again to close dropdown', async () => {
      const avatarButton = canvas.getByRole('button');
      await userEvent.click(avatarButton);
    });
  },
};

export const Solid: Story = {
  render: (args: any) => ({
    components: {
      UiNavBar,
      UiNavBarBrand,
      UiNavBarMenu,
      UiNavBarItem,
      UiNavBarAvatar,
      UiNavBarDropdownItem,
      UiNavBarDropdownSeparator,
    },
    setup() {
      return { args };
    },
    template: `
      <div class="min-h-[400px] bg-background">
        <UiNavBar v-bind="args">
          <UiNavBarBrand href="/">
            <span class="text-xl font-bold">MintUI</span>
          </UiNavBarBrand>
          <div class="flex flex-1 items-center justify-end gap-6">
            <UiNavBarMenu>
              <UiNavBarItem href="#" :active="true">Home</UiNavBarItem>
              <UiNavBarItem href="#">About</UiNavBarItem>
              <UiNavBarItem href="#">Contact</UiNavBarItem>
            </UiNavBarMenu>
            <UiNavBarAvatar alt="Guest User" fallback="GU">
              <UiNavBarDropdownItem href="#">Sign In</UiNavBarDropdownItem>
              <UiNavBarDropdownItem href="#">Create Account</UiNavBarDropdownItem>
            </UiNavBarAvatar>
          </div>
        </UiNavBar>
        <div class="container mx-auto px-6 lg:px-8 pt-24">
          <h1 class="text-3xl font-bold">Solid Variant</h1>
          <p class="mt-4 text-muted-foreground">A navbar with solid background color.</p>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'solid',
    fluid: false,
    sticky: true,
  },
  play: async ({ canvas, step, userEvent }) => {
    await step('Renders solid variant navbar', async () => {
      await expect(canvas.getByText('MintUI')).toBeInTheDocument();
      await expect(canvas.getByText('Home')).toBeInTheDocument();
    });

    await step('Avatar shows fallback initials', async () => {
      const avatar = canvas.getByText('GU');
      await expect(avatar).toBeInTheDocument();
    });
  },
};

export const Fluid: Story = {
  render: (args: any) => ({
    components: {
      UiNavBar,
      UiNavBarBrand,
      UiNavBarMenu,
      UiNavBarItem,
    },
    setup() {
      return { args };
    },
    template: `
      <div class="min-h-[400px] bg-background">
        <UiNavBar v-bind="args">
          <UiNavBarBrand href="/">
            <span class="text-xl font-bold">MintUI</span>
          </UiNavBarBrand>
          <UiNavBarMenu>
            <UiNavBarItem href="#" :active="true">Home</UiNavBarItem>
            <UiNavBarItem href="#">Products</UiNavBarItem>
            <UiNavBarItem href="#">Services</UiNavBarItem>
          </UiNavBarMenu>
        </UiNavBar>
        <div class="px-6 lg:px-8 pt-24">
          <h1 class="text-3xl font-bold">Fluid Layout</h1>
          <p class="mt-4 text-muted-foreground">Full-width navbar with edge-to-edge padding.</p>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'glass',
    fluid: true,
    sticky: true,
  },
  play: async ({ canvas, step }) => {
    await step('Renders fluid layout navbar', async () => {
      await expect(canvas.getByText('MintUI')).toBeInTheDocument();
      await expect(canvas.getByText('Products')).toBeInTheDocument();
      await expect(canvas.getByText('Services')).toBeInTheDocument();
    });
  },
};

export const DropdownInteraction: Story = {
  render: (args: any) => ({
    components: {
      UiNavBar,
      UiNavBarBrand,
      UiNavBarMenu,
      UiNavBarItem,
      UiNavBarAvatar,
      UiNavBarDropdownItem,
      UiNavBarDropdownSeparator,
    },
    setup() {
      const handleProfileClick = fn();
      const handleSettingsClick = fn();
      const handleLogoutClick = fn();
      
      return { args, handleProfileClick, handleSettingsClick, handleLogoutClick };
    },
    template: `
      <div class="min-h-[400px] bg-background">
        <UiNavBar v-bind="args">
          <UiNavBarBrand href="/">
            <span class="text-xl font-bold">MintUI</span>
          </UiNavBarBrand>
          <div class="flex flex-1 items-center justify-end gap-6">
            <UiNavBarAvatar alt="Test User" fallback="TU">
              <UiNavBarDropdownItem href="#" @click="handleProfileClick">
                <span>Profile</span>
              </UiNavBarDropdownItem>
              <UiNavBarDropdownItem href="#" @click="handleSettingsClick">
                <span>Settings</span>
              </UiNavBarDropdownItem>
              <UiNavBarDropdownSeparator />
              <UiNavBarDropdownItem href="#" variant="destructive" @click="handleLogoutClick">
                <span>Logout</span>
              </UiNavBarDropdownItem>
            </UiNavBarAvatar>
          </div>
        </UiNavBar>
        <div class="container mx-auto px-6 lg:px-8 pt-24">
          <h1 class="text-3xl font-bold">Test Dropdown Interactions</h1>
          <p class="mt-4 text-muted-foreground">Click the avatar to test dropdown functionality.</p>
        </div>
      </div>
    `,
  }),
  args: {
    variant: 'glass',
    fluid: false,
    sticky: true,
  },
  play: async ({ canvas, step, userEvent }) => {
    await step('Open dropdown', async () => {
      const avatarButton = canvas.getByRole('button');
      await userEvent.click(avatarButton);
      await expect(canvas.getByText('Profile')).toBeInTheDocument();
    });

    await step('Click Profile item', async () => {
      const profileItem = canvas.getByText('Profile');
      await userEvent.click(profileItem);
    });

    await step('Reopen dropdown and click Settings', async () => {
      const avatarButton = canvas.getByRole('button');
      await userEvent.click(avatarButton);
      
      const settingsItem = canvas.getByText('Settings');
      await userEvent.click(settingsItem);
    });

    await step('Reopen dropdown and click Logout', async () => {
      const avatarButton = canvas.getByRole('button');
      await userEvent.click(avatarButton);
      
      const logoutItem = canvas.getByText('Logout');
      await expect(logoutItem).toBeInTheDocument();
    });
  },
};
