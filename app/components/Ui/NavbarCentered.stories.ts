import type { Meta, StoryObj } from '@storybook/vue3';
import UiNavbarCentered from './NavbarCentered.vue';
import UiNavbarBrand from './NavbarBrand.vue';
import UiNavbarMenu from './NavbarMenu.vue';
import UiNavbarItem from './NavbarItem.vue';
import UiNavbarToggle from './NavbarToggle.vue';
import UiButton from './Button.vue';

const meta: Meta<typeof UiNavbarCentered> = {
  title: 'Ui/NavbarCentered',
  component: UiNavbarCentered,
  tags: ['autodocs'],
  argTypes: {
    fluid: { control: 'boolean' },
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'floating'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {
      UiNavbarCentered,
      UiNavbarBrand,
      UiNavbarMenu,
      UiNavbarItem,
      UiNavbarToggle,
      UiButton,
    },
    setup() {
      return { args };
    },
    template: `
      <UiNavbarCentered v-bind="args">
        <template #left>
          <UiNavbarMenu class="hidden lg:flex">
            <UiNavbarItem href="#">Features</UiNavbarItem>
            <UiNavbarItem href="#">Solutions</UiNavbarItem>
            <UiNavbarItem href="#">Resources</UiNavbarItem>
          </UiNavbarMenu>
        </template>
        <template #center>
          <UiNavbarBrand href="/">
            MyApp
          </UiNavbarBrand>
        </template>
        <template #right>
          <UiNavbarMenu class="hidden lg:flex">
            <UiNavbarItem href="#">Pricing</UiNavbarItem>
            <UiNavbarItem href="#">About</UiNavbarItem>
          </UiNavbarMenu>
          <div class="hidden items-center gap-2 lg:flex">
            <UiButton variant="ghost" size="sm">Log in</UiButton>
            <UiButton size="sm">Sign up</UiButton>
          </div>
          <UiNavbarToggle />
        </template>
        <template #mobile>
          <UiNavbarMenu mobile class="lg:hidden">
            <UiNavbarItem href="#">Features</UiNavbarItem>
            <UiNavbarItem href="#">Solutions</UiNavbarItem>
            <UiNavbarItem href="#">Resources</UiNavbarItem>
            <UiNavbarItem href="#">Pricing</UiNavbarItem>
            <UiNavbarItem href="#">About</UiNavbarItem>
            <div class="mt-4 flex flex-col gap-2">
              <UiButton variant="outline" size="sm">Log in</UiButton>
              <UiButton size="sm">Sign up</UiButton>
            </div>
          </UiNavbarMenu>
        </template>
      </UiNavbarCentered>
    `,
  }),
  args: {
    fluid: false,
    variant: 'default',
  },
};

export const Elevated: Story = {
  render: (args) => ({
    components: {
      UiNavbarCentered,
      UiNavbarBrand,
      UiNavbarMenu,
      UiNavbarItem,
      UiNavbarToggle,
      UiButton,
    },
    setup() {
      return { args };
    },
    template: `
      <UiNavbarCentered v-bind="args">
        <template #left>
          <UiNavbarMenu class="hidden lg:flex">
            <UiNavbarItem href="#">Features</UiNavbarItem>
            <UiNavbarItem href="#">Solutions</UiNavbarItem>
          </UiNavbarMenu>
        </template>
        <template #center>
          <UiNavbarBrand href="/">
            MyApp
          </UiNavbarBrand>
        </template>
        <template #right>
          <UiNavbarMenu class="hidden lg:flex">
            <UiNavbarItem href="#">Pricing</UiNavbarItem>
            <UiNavbarItem href="#">About</UiNavbarItem>
          </UiNavbarMenu>
          <div class="hidden items-center gap-2 lg:flex">
            <UiButton variant="ghost" size="sm">Log in</UiButton>
            <UiButton size="sm">Sign up</UiButton>
          </div>
          <UiNavbarToggle />
        </template>
      </UiNavbarCentered>
    `,
  }),
  args: {
    fluid: false,
    variant: 'elevated',
  },
};

export const Floating: Story = {
  render: (args) => ({
    components: {
      UiNavbarCentered,
      UiNavbarBrand,
      UiNavbarMenu,
      UiNavbarItem,
      UiNavbarToggle,
      UiButton,
    },
    setup() {
      return { args };
    },
    template: `
      <div class="relative min-h-[400px] bg-gradient-to-b from-muted/50 to-background">
        <UiNavbarCentered v-bind="args">
          <template #left>
            <UiNavbarMenu class="hidden lg:flex">
              <UiNavbarItem href="#">Features</UiNavbarItem>
              <UiNavbarItem href="#">Solutions</UiNavbarItem>
            </UiNavbarMenu>
          </template>
          <template #center>
            <UiNavbarBrand href="/">
              MyApp
            </UiNavbarBrand>
          </template>
          <template #right>
            <UiNavbarMenu class="hidden lg:flex">
              <UiNavbarItem href="#">Pricing</UiNavbarItem>
              <UiNavbarItem href="#">About</UiNavbarItem>
            </UiNavbarMenu>
            <div class="hidden items-center gap-2 lg:flex">
              <UiButton variant="ghost" size="sm">Log in</UiButton>
              <UiButton size="sm">Sign up</UiButton>
            </div>
            <UiNavbarToggle />
          </template>
        </UiNavbarCentered>
      </div>
    `,
  }),
  args: {
    fluid: false,
    variant: 'floating',
  },
};

export const Fluid: Story = {
  render: (args) => ({
    components: {
      UiNavbarCentered,
      UiNavbarBrand,
      UiNavbarMenu,
      UiNavbarItem,
      UiNavbarToggle,
      UiButton,
    },
    setup() {
      return { args };
    },
    template: `
      <UiNavbarCentered v-bind="args">
        <template #left>
          <UiNavbarMenu class="hidden lg:flex">
            <UiNavbarItem href="#">Features</UiNavbarItem>
            <UiNavbarItem href="#">Solutions</UiNavbarItem>
          </UiNavbarMenu>
        </template>
        <template #center>
          <UiNavbarBrand href="/">
            MyApp
          </UiNavbarBrand>
        </template>
        <template #right>
          <UiNavbarMenu class="hidden lg:flex">
            <UiNavbarItem href="#">Pricing</UiNavbarItem>
            <UiNavbarItem href="#">About</UiNavbarItem>
          </UiNavbarMenu>
          <div class="hidden items-center gap-2 lg:flex">
            <UiButton variant="ghost" size="sm">Log in</UiButton>
            <UiButton size="sm">Sign up</UiButton>
          </div>
          <UiNavbarToggle />
        </template>
      </UiNavbarCentered>
    `,
  }),
  args: {
    fluid: true,
    variant: 'default',
  },
};

export const Minimal: Story = {
  render: (args) => ({
    components: {
      UiNavbarCentered,
      UiNavbarBrand,
      UiNavbarMenu,
      UiNavbarItem,
      UiNavbarToggle,
    },
    setup() {
      return { args };
    },
    template: `
      <UiNavbarCentered v-bind="args">
        <template #left>
          <UiNavbarMenu class="hidden lg:flex">
            <UiNavbarItem href="#">Products</UiNavbarItem>
          </UiNavbarMenu>
        </template>
        <template #center>
          <UiNavbarBrand href="/">
            MyApp
          </UiNavbarBrand>
        </template>
        <template #right>
          <UiNavbarMenu class="hidden lg:flex">
            <UiNavbarItem href="#">Contact</UiNavbarItem>
          </UiNavbarMenu>
          <UiNavbarToggle />
        </template>
      </UiNavbarCentered>
    `,
  }),
  args: {
    fluid: false,
    variant: 'default',
  },
};
