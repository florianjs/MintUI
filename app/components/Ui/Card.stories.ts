import type { Meta, StoryObj } from '@storybook/vue3';
import UiCard from './Card.vue';
import UiCardHeader from './CardHeader.vue';
import UiCardTitle from './CardTitle.vue';
import UiCardDescription from './CardDescription.vue';
import UiCardContent from './CardContent.vue';
import UiCardFooter from './CardFooter.vue';
import UiCardImage from './CardImage.vue';
import UiButton from './Button.vue';
import UiBadge from '../Ui/Badge.vue';
import UiAvatar from '../Ui/Avatar.vue';
import UiInput from '../Ui/Input.vue';
import UiSeparator from '../Ui/Separator.vue';
import UiSwitch from '../Ui/Switch.vue';

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
    components: {
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
    },
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
    components: {
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
    },
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
    components: {
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
    },
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
    components: {
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
    },
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

export const PricingCard: Story = {
  name: 'Ready: Pricing',
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
      <UiCard v-bind="args" class="w-[350px] flex flex-col items-center text-center">
        <UiCardHeader class="pb-8 pt-6">
          <UiCardTitle class="text-2xl">Pro Plan</UiCardTitle>
          <UiCardDescription>Perfect for small teams</UiCardDescription>
        </UiCardHeader>
        <UiCardContent class="grid gap-6 pb-8 w-full">
          <div class="text-4xl font-bold">$29<span class="text-lg text-muted-foreground font-normal">/month</span></div>
          <ul class="text-sm space-y-3 text-left w-full text-muted-foreground">
            <li class="flex items-center gap-2">
              <span class="text-primary">✓</span> Up to 5 users
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">✓</span> 50GB storage
            </li>
            <li class="flex items-center gap-2">
              <span class="text-primary">✓</span> Priority support
            </li>
            <li class="flex items-center gap-2 opacity-50">
              <span class="text-muted-foreground">✗</span> Advanced analytics
            </li>
          </ul>
        </UiCardContent>
        <UiCardFooter class="w-full">
          <UiButton class="w-full" size="lg">Subscribe Now</UiButton>
        </UiCardFooter>
      </UiCard>
    `,
  }),
  args: { variant: 'default', interactive: false },
};

export const ProfileCard: Story = {
  name: 'Ready: Profile',
  render: (args) => ({
    components: {
      UiCard,
      UiCardHeader,
      UiCardContent,
      UiCardFooter,
      UiButton,
      UiAvatar,
    },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px] overflow-hidden">
        <div class="h-24 bg-gradient-to-r from-cyan-500 to-blue-500"></div>
        <UiCardHeader class="relative pb-0 pt-0 text-center">
          <div class="flex justify-center -mt-12 mb-2">
            <UiAvatar src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80" alt="Jane Doe" size="xl" class="border-4 border-background w-24 h-24" />
          </div>
          <h3 class="text-xl font-bold">Jane Doe</h3>
          <p class="text-sm text-muted-foreground">Senior UI/UX Designer</p>
        </UiCardHeader>
        <UiCardContent class="pt-6">
          <div class="flex justify-center gap-6 text-center text-sm">
            <div>
              <div class="font-bold text-lg">1,234</div>
              <div class="text-muted-foreground">Followers</div>
            </div>
            <div>
              <div class="font-bold text-lg">567</div>
              <div class="text-muted-foreground">Following</div>
            </div>
            <div>
              <div class="font-bold text-lg">89</div>
              <div class="text-muted-foreground">Projects</div>
            </div>
          </div>
        </UiCardContent>
        <UiCardFooter class="flex gap-2 justify-center">
          <UiButton class="w-full">Follow</UiButton>
          <UiButton variant="outline" class="w-full">Message</UiButton>
        </UiCardFooter>
      </UiCard>
    `,
  }),
  args: { variant: 'elevated', interactive: false },
};

export const ProductCard: Story = {
  name: 'Ready: Product',
  render: (args) => ({
    components: {
      UiCard,
      UiCardImage,
      UiCardHeader,
      UiCardTitle,
      UiCardContent,
      UiCardFooter,
      UiButton,
      UiBadge,
    },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px] overflow-hidden flex flex-col hidden-border group">
        <div class="relative overflow-hidden aspect-square bg-muted">
          <UiCardImage src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=800&q=80" alt="Running Shoes" class="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105" />
          <UiBadge class="absolute top-3 right-3" variant="destructive">Sale</UiBadge>
        </div>
        <UiCardHeader class="p-4 pb-0">
          <div class="flex justify-between items-start">
            <div>
              <p class="text-xs text-muted-foreground mb-1">Footwear</p>
              <UiCardTitle class="text-lg">Nike Air Max</UiCardTitle>
            </div>
            <div class="text-right">
              <span class="text-lg font-bold text-primary">$120</span>
              <span class="text-sm text-muted-foreground line-through block">$150</span>
            </div>
          </div>
        </UiCardHeader>
        <UiCardContent class="p-4 pt-2 flex-grow">
          <div class="flex items-center gap-1 text-yellow-400 text-sm">
            ★★★★☆ <span class="text-muted-foreground text-xs ml-1">(128 reviews)</span>
          </div>
        </UiCardContent>
        <UiCardFooter class="p-4 pt-0">
          <UiButton class="w-full">Add to Cart</UiButton>
        </UiCardFooter>
      </UiCard>
    `,
  }),
  args: { variant: 'default', interactive: true },
};

export const ArticleCard: Story = {
  name: 'Ready: Article',
  render: (args) => ({
    components: {
      UiCard,
      UiCardImage,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
      UiCardFooter,
      UiBadge,
    },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px] overflow-hidden flex flex-col group cursor-pointer hover:border-primary/50 transition-colors">
        <div class="relative aspect-video overflow-hidden">
          <UiCardImage src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&q=80" alt="Workspace" class="object-cover h-full w-full transition-transform duration-500 group-hover:scale-110" />
        </div>
        <UiCardHeader class="pt-4">
          <div class="flex gap-2 mb-2">
            <UiBadge variant="secondary" class="rounded-sm">Design</UiBadge>
            <UiBadge variant="secondary" class="rounded-sm">Inspiration</UiBadge>
          </div>
          <UiCardTitle class="line-clamp-2 text-xl group-hover:text-primary transition-colors">How to design better UI components in 2024</UiCardTitle>
          <UiCardDescription class="mt-2 text-xs flex items-center justify-between">
            <span>By Alex Smith</span>
            <span>Oct 12, 2023 • 5 min read</span>
          </UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm text-muted-foreground line-clamp-3">Discover the latest trends and techniques to improve your user interface designs. We explore new paradigms in component architecture and styling methodologies.</p>
        </UiCardContent>
      </UiCard>
    `,
  }),
  args: { variant: 'default', interactive: false },
};

export const FormCard: Story = {
  name: 'Ready: Login Form',
  render: (args) => ({
    components: {
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
      UiCardFooter,
      UiButton,
      UiInput,
      UiSeparator,
    },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px]">
        <UiCardHeader class="text-center">
          <UiCardTitle class="text-2xl">Welcome back</UiCardTitle>
          <UiCardDescription>Enter your credentials to access your account</UiCardDescription>
        </UiCardHeader>
        <UiCardContent class="grid gap-4">
          <div class="grid gap-2">
            <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="email">Email</label>
            <UiInput id="email" type="email" placeholder="m@example.com" />
          </div>
          <div class="grid gap-2">
            <div class="flex items-center">
              <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" for="password">Password</label>
              <a href="#" class="ml-auto inline-block text-sm underline text-muted-foreground hover:text-foreground">Forgot password?</a>
            </div>
            <UiInput id="password" type="password" />
          </div>
          <UiButton class="w-full mt-2">Login</UiButton>
        </UiCardContent>
        <UiCardFooter class="flex flex-col gap-4">
          <div class="relative w-full mb-3 mt-1 cursor-default">
            <div class="absolute inset-0 flex items-center">
              <UiSeparator class="w-full" />
            </div>
            <div class="relative flex justify-center text-xs uppercase">
              <span class="bg-card px-2 text-muted-foreground !bg-card text-muted-foreground relative z-10 transition-colors hover:text-foreground">Or continue with</span>
            </div>
          </div>
          <UiButton variant="outline" class="w-full">GitHub</UiButton>
          <div class="text-center text-sm text-muted-foreground mt-2">
            Don't have an account? <a href="#" class="underline hover:text-foreground">Sign up</a>
          </div>
        </UiCardFooter>
      </UiCard>
    `,
  }),
  args: { variant: 'default', interactive: false },
};

export const MetricCard: Story = {
  name: 'Ready: Metric',
  render: (args) => ({
    components: { UiCard, UiCardHeader, UiCardTitle, UiCardContent },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[300px]">
        <UiCardHeader class="flex flex-row items-center justify-between space-y-0 pb-2">
          <UiCardTitle class="text-sm font-medium">Total Revenue</UiCardTitle>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="h-4 w-4 text-muted-foreground"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        </UiCardHeader>
        <UiCardContent>
          <div class="text-2xl font-bold">$45,231.89</div>
          <p class="text-xs text-muted-foreground mt-1">
            <span class="text-emerald-500 font-medium">+20.1%</span> from last month
          </p>
        </UiCardContent>
      </UiCard>
    `,
  }),
  args: { variant: 'default', interactive: false },
};

export const MusicPlayerCard: Story = {
  name: 'Ready: Music Player',
  render: (args) => ({
    components: { UiCard, UiCardContent, UiButton, UiCardImage },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px] overflow-hidden p-0">
        <UiCardContent class="p-0 flex flex-col">
          <div class="relative">
            <UiCardImage src="https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=800&q=80" alt="Album Cover" class="w-full aspect-square object-cover" />
            <div class="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 pb-2">
              <h4 class="text-white font-bold text-lg">Neon Nights</h4>
              <p class="text-white/70 text-sm">Synthwave Radio</p>
            </div>
          </div>
          <div class="p-4 pt-4 bg-card">
            <div class="flex items-center justify-between mb-2">
              <span class="text-xs text-muted-foreground">1:45</span>
              <div class="flex-1 mx-3 h-1.5 bg-secondary rounded-full overflow-hidden">
                <div class="h-full bg-primary w-1/3 rounded-full"></div>
              </div>
              <span class="text-xs text-muted-foreground">4:20</span>
            </div>
            <div class="flex items-center justify-center gap-4 mt-4">
              <UiButton variant="ghost" size="icon" class="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 21-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"/></svg>
              </UiButton>
              <UiButton variant="ghost" size="icon" class="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="19 20 9 12 19 4 19 20"/><line x1="5" x2="5" y1="19" y2="5"/></svg>
              </UiButton>
              <UiButton size="icon" class="h-12 w-12 rounded-full shadow-md">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><polygon points="5 3 19 12 5 21 5 3"/></svg>
              </UiButton>
              <UiButton variant="ghost" size="icon" class="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="5 4 15 12 5 20 5 4"/><line x1="19" x2="19" y1="5" y2="19"/></svg>
              </UiButton>
              <UiButton variant="ghost" size="icon" class="text-muted-foreground hover:text-foreground">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/></svg>
              </UiButton>
            </div>
          </div>
        </UiCardContent>
      </UiCard>
    `,
  }),
  args: { variant: 'elevated', interactive: false },
};

export const EventCard: Story = {
  name: 'Ready: Event',
  render: (args) => ({
    components: {
      UiCard,
      UiCardHeader,
      UiCardContent,
      UiCardFooter,
      UiButton,
      UiBadge,
      UiCardImage,
    },
    setup() {
      return { args };
    },
    template: `
      <UiCard v-bind="args" class="w-[350px] overflow-hidden flex flex-col group">
        <div class="h-32 bg-primary relative overflow-hidden">
          <UiCardImage src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=800&q=80" alt="Event cover" class="w-full h-full object-cover opacity-80 mix-blend-overlay transition-transform duration-700 group-hover:scale-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
          <div class="absolute bottom-4 left-4 text-white">
            <UiBadge variant="default" class="bg-primary hover:bg-primary/90 text-primary-foreground mb-2 shadow-sm border-0 border-transparent">Music Festival</UiBadge>
            <h3 class="font-bold text-xl leading-none shadow-sm">Summer Vibes 2024</h3>
          </div>
        </div>
        <UiCardContent class="p-4 grid gap-4 flex-grow pt-5">
          <div class="flex items-start gap-3">
            <div class="bg-muted p-2 rounded-md text-center min-w-[3rem] shadow-sm">
              <div class="text-xs font-medium text-destructive uppercase">Jul</div>
              <div class="text-lg font-bold">24</div>
            </div>
            <div>
              <h4 class="font-medium text-sm">Friday, 8:00 PM EST</h4>
              <p class="text-sm text-muted-foreground leading-tight mt-1">Central Park Main Stage, NY</p>
            </div>
          </div>
          <div class="flex -space-x-2 overflow-hidden mt-1">
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80" alt=""/>
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80" alt=""/>
            <img class="inline-block h-8 w-8 rounded-full ring-2 ring-background object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80" alt=""/>
            <div class="inline-flex h-8 w-8 items-center justify-center rounded-full ring-2 ring-background bg-muted text-xs font-medium">+42</div>
          </div>
        </UiCardContent>
        <UiCardFooter class="p-4 pt-0 border-t flex items-center justify-between">
          <span class="font-bold text-lg">$45.00</span>
          <UiButton size="sm">Get Tickets</UiButton>
        </UiCardFooter>
      </UiCard>
    `,
  }),
  args: { variant: 'elevated', interactive: true },
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
