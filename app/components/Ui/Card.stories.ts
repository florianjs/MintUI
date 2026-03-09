import type { Meta, StoryObj } from '@storybook/vue3';
import UiCard from './Card.vue';
import UiCardHeader from './CardHeader.vue';
import UiCardTitle from './CardTitle.vue';
import UiCardDescription from './CardDescription.vue';
import UiCardContent from './CardContent.vue';
import UiCardFooter from './CardFooter.vue';
import UiCardImage from './CardImage.vue';
import UiButton from './Button.vue';

const meta: Meta<typeof UiCard> = {
  title: 'Ui/Card',
  component: UiCard,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'outline', 'glass', 'gradient'],
    },
    interactive: { control: 'boolean' },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: (args) => ({
    components: {
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
      UiCardFooter,
      UiButton,
    },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px]">
        <UiCardHeader>
          <UiCardTitle>Card Title</UiCardTitle>
          <UiCardDescription>Card description with supporting text.</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p>Card content goes here. This is where the main information is displayed.</p>
        </UiCardContent>
        <UiCardFooter>
          <UiButton variant="outline" size="sm">Cancel</UiButton>
          <UiButton size="sm">Save</UiButton>
        </UiCardFooter>
      </UiCard>
    `,
  }),
  args: { variant: 'default', interactive: false },
};

export const Elevated: Story = {
  render: (args) => ({
    components: { UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardContent },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px]">
        <UiCardHeader>
          <UiCardTitle>Elevated Card</UiCardTitle>
          <UiCardDescription>More prominent shadow for visual hierarchy.</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm">Perfect for highlighting important content.</p>
        </UiCardContent>
      </UiCard>
    `,
  }),
  args: { variant: 'elevated', interactive: false },
};

export const Outline: Story = {
  render: (args) => ({
    components: { UiCard, UiCardHeader, UiCardTitle, UiCardContent },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px]">
        <UiCardHeader>
          <UiCardTitle>Outline Card</UiCardTitle>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm text-muted-foreground">Minimal style with emphasis on borders.</p>
        </UiCardContent>
      </UiCard>
    `,
  }),
  args: { variant: 'outline', interactive: false },
};

export const Glass: Story = {
  render: (args) => ({
    components: { UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardContent },
    setup() {
      return { args };
    },
    template: `
      <div class="p-8 rounded-xl bg-gradient-to-br from-violet-500 to-purple-600">
        <UiCard v-bind="args" class="w-[350px]">
          <UiCardHeader>
            <UiCardTitle>Glass Card</UiCardTitle>
            <UiCardDescription>Beautiful glassmorphism effect.</UiCardDescription>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-sm">Works best on colorful backgrounds.</p>
          </UiCardContent>
        </UiCard>
      </div>
    `,
  }),
  args: { variant: 'glass', interactive: false },
};

export const Gradient: Story = {
  render: (args) => ({
    components: { UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardContent },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px]">
        <UiCardHeader>
          <UiCardTitle>Gradient Border</UiCardTitle>
          <UiCardDescription>Premium look with gradient accent.</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm">Perfect for highlighting premium features.</p>
        </UiCardContent>
      </UiCard>
    `,
  }),
  args: { variant: 'gradient', interactive: false },
};

export const Interactive: Story = {
  render: (args) => ({
    components: { UiCard, UiCardHeader, UiCardTitle, UiCardDescription, UiCardContent },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px]">
        <UiCardHeader>
          <UiCardTitle>Clickable Card</UiCardTitle>
          <UiCardDescription>Hover and click for interaction.</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm">Scale effect on hover with focus states.</p>
        </UiCardContent>
      </UiCard>
    `,
  }),
  args: { variant: 'elevated', interactive: true },
};

export const WithImage: Story = {
  render: (args) => ({
    components: {
      UiCard,
      UiCardImage,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
      UiCardFooter,
      UiButton,
    },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px] overflow-hidden">
        <UiCardImage src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&q=80" alt="Abstract art" />
        <UiCardHeader>
          <UiCardTitle>Card with Image</UiCardTitle>
          <UiCardDescription>Beautiful cover image support.</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm">Perfect for blog posts, products, or portfolios.</p>
        </UiCardContent>
        <UiCardFooter>
          <UiButton size="sm">Read More</UiButton>
        </UiCardFooter>
      </UiCard>
    `,
  }),
  args: { variant: 'default', interactive: false },
};

export const AllVariants: Story = {
  render: () => ({
    components: {
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardContent,
    },
    template: `
      <div class="flex flex-wrap gap-6">
        <UiCard variant="default" class="w-[200px]">
          <UiCardHeader>
            <UiCardTitle>Default</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-sm text-muted-foreground">Standard card</p>
          </UiCardContent>
        </UiCard>
        
        <UiCard variant="elevated" class="w-[200px]">
          <UiCardHeader>
            <UiCardTitle>Elevated</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-sm text-muted-foreground">Prominent shadow</p>
          </UiCardContent>
        </UiCard>
        
        <UiCard variant="outline" class="w-[200px]">
          <UiCardHeader>
            <UiCardTitle>Outline</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-sm text-muted-foreground">Border focus</p>
          </UiCardContent>
        </UiCard>
        
        <UiCard variant="gradient" class="w-[200px]">
          <UiCardHeader>
            <UiCardTitle>Gradient</UiCardTitle>
          </UiCardHeader>
          <UiCardContent>
            <p class="text-sm text-muted-foreground">Premium look</p>
          </UiCardContent>
        </UiCard>
      </div>
    `,
  }),
};
