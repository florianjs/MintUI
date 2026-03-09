import type { Meta, StoryObj } from '@storybook/vue3';
import UiNavbar from './Navbar.vue';
import UiNavbarBrand from './NavbarBrand.vue';
import UiNavbarMenu from './NavbarMenu.vue';
import UiNavbarItem from './NavbarItem.vue';
import UiNavbarToggle from './NavbarToggle.vue';

const meta: Meta<typeof UiNavbar> = {
  title: 'Ui/Navbar',
  component: UiNavbar,
  tags: ['autodocs'],
  argTypes: {
    fluid: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarMenu,
      UiNavbarItem,
      UiNavbarToggle,
    },
    setup() {
      return { args };
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarBrand href="/">
          MyApp
        </UiNavbarBrand>
        <div class="flex flex-1 items-center justify-end gap-4">
          <UiNavbarMenu class="hidden md:flex">
            <UiNavbarItem href="#" :active="true">Home</UiNavbarItem>
            <UiNavbarItem href="#">Features</UiNavbarItem>
            <UiNavbarItem href="#">Pricing</UiNavbarItem>
            <UiNavbarItem href="#">About</UiNavbarItem>
          </UiNavbarMenu>
          <UiNavbarMenu :mobile="true">
            <UiNavbarItem href="#" :active="true">Home</UiNavbarItem>
            <UiNavbarItem href="#">Features</UiNavbarItem>
            <UiNavbarItem href="#">Pricing</UiNavbarItem>
            <UiNavbarItem href="#">About</UiNavbarItem>
          </UiNavbarMenu>
          <UiNavbarToggle />
        </div>
      </UiNavbar>
    `,
  }),
  args: {
    fluid: false,
  },
};

export const Fluid: Story = {
  render: (args) => ({
    components: {
      UiNavbar,
      UiNavbarBrand,
      UiNavbarMenu,
      UiNavbarItem,
      UiNavbarToggle,
    },
    setup() {
      return { args };
    },
    template: `
      <UiNavbar v-bind="args">
        <UiNavbarBrand href="/">
          MyApp
        </UiNavbarBrand>
        <div class="flex flex-1 items-center justify-end gap-4">
          <UiNavbarMenu class="hidden md:flex">
            <UiNavbarItem href="#" :active="true">Home</UiNavbarItem>
            <UiNavbarItem href="#">Features</UiNavbarItem>
            <UiNavbarItem href="#">Pricing</UiNavbarItem>
            <UiNavbarItem href="#">About</UiNavbarItem>
          </UiNavbarMenu>
          <UiNavbarMenu :mobile="true">
            <UiNavbarItem href="#" :active="true">Home</UiNavbarItem>
            <UiNavbarItem href="#">Features</UiNavbarItem>
            <UiNavbarItem href="#">Pricing</UiNavbarItem>
            <UiNavbarItem href="#">About</UiNavbarItem>
          </UiNavbarMenu>
          <UiNavbarToggle />
        </div>
      </UiNavbar>
    `,
  }),
  args: {
    fluid: true,
  },
};
