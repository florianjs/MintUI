import UiButton from '~/components/Ui/Button.vue';
import UiAlert from '~/components/Ui/Alert.vue';
import UiBadge from '~/components/Ui/Badge.vue';
import UiAvatar from '~/components/Ui/Avatar.vue';
import UiSeparator from '~/components/Ui/Separator.vue';
import UiSwitch from '~/components/Ui/Switch.vue';
import UiAccordion from '~/components/Ui/Accordion.vue';
import UiInput from '~/components/Ui/Input.vue';
import UiCard from '~/components/Ui/Card.vue';
import UiPricingCard from '~/components/Ui/PricingCard.vue';
import UiStat from '~/components/Ui/Stat/Stat.vue';

export type Example = {
  title: string;
  code: string;
};

export type ControlDef = {
  prop: string;
  label?: string;
  type: 'select' | 'boolean' | 'text' | 'number';
  options?: string[];
  default: any;
  isSlot?: boolean;
};

export type Story = {
  title: string;
  description?: string;
  props?: Record<string, any>;
  slot?: string;
  code: string;
};

export type ComponentEntry = {
  slug: string;
  name: string;
  group: string;
  description: string;
  componentName?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any;
  controls?: ControlDef[];
  stories?: Story[];
  examples: Example[];
  previewHeight?: number;
  previewWidth?: number;
};

export type LandingEntry = {
  slug: string;
  name: string;
  description: string;
  previewHeight?: number;
  previewWidth?: number;
};

export const componentGroups = [
  'Primitives',
  'Feedback',
  'Inputs',
  'Navigation',
  'Dashboard',
  'Data',
  'Sections',
] as const;

export const components: ComponentEntry[] = [
  {
    slug: 'button',
    name: 'Button',
    group: 'Primitives',
    description:
      'Interactive button with 10 variants, 4 sizes and loading/success/error states.',
    componentName: 'UiButton',
    component: UiButton,
    controls: [
      {
        prop: 'label',
        label: 'Label',
        type: 'text',
        default: 'Button',
        isSlot: true,
      },
      {
        prop: 'variant',
        type: 'select',
        options: [
          'default',
          'secondary',
          'destructive',
          'outline',
          'ghost',
          'link',
          'soft',
          'gradient',
          'elevated',
          'positive',
        ],
        default: 'default',
      },
      {
        prop: 'size',
        type: 'select',
        options: ['sm', 'default', 'lg', 'icon'],
        default: 'default',
      },
      { prop: 'disabled', type: 'boolean', default: false },
      { prop: 'loading', type: 'boolean', default: false },
    ],
    stories: [
      {
        title: 'Default',
        props: {},
        slot: 'Button',
        code: `<UiButton>Button</UiButton>`,
      },
      {
        title: 'Secondary',
        props: { variant: 'secondary' },
        slot: 'Secondary',
        code: `<UiButton variant="secondary">Secondary</UiButton>`,
      },
      {
        title: 'Destructive',
        props: { variant: 'destructive' },
        slot: 'Destructive',
        code: `<UiButton variant="destructive">Destructive</UiButton>`,
      },
      {
        title: 'Outline',
        props: { variant: 'outline' },
        slot: 'Outline',
        code: `<UiButton variant="outline">Outline</UiButton>`,
      },
      {
        title: 'Ghost',
        props: { variant: 'ghost' },
        slot: 'Ghost',
        code: `<UiButton variant="ghost">Ghost</UiButton>`,
      },
      {
        title: 'Soft',
        props: { variant: 'soft' },
        slot: 'Soft',
        code: `<UiButton variant="soft">Soft</UiButton>`,
      },
      {
        title: 'Gradient',
        props: { variant: 'gradient' },
        slot: 'Gradient',
        code: `<UiButton variant="gradient">Gradient</UiButton>`,
      },
      {
        title: 'Elevated',
        props: { variant: 'elevated' },
        slot: 'Elevated',
        code: `<UiButton variant="elevated">Elevated</UiButton>`,
      },
      {
        title: 'Positive',
        props: { variant: 'positive' },
        slot: 'Positive',
        code: `<UiButton variant="positive">Positive</UiButton>`,
      },
      {
        title: 'Small',
        props: { size: 'sm' },
        slot: 'Small',
        code: `<UiButton size="sm">Small</UiButton>`,
      },
      {
        title: 'Large',
        props: { size: 'lg' },
        slot: 'Large',
        code: `<UiButton size="lg">Large</UiButton>`,
      },
      {
        title: 'Disabled',
        props: { disabled: true },
        slot: 'Disabled',
        code: `<UiButton :disabled="true">Disabled</UiButton>`,
      },
      {
        title: 'Loading',
        props: { loading: true },
        slot: 'Loading',
        code: `<UiButton :loading="true">Loading</UiButton>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'badge',
    name: 'Badge',
    group: 'Primitives',
    description: 'Inline label for categories, statuses or tags.',
    componentName: 'UiBadge',
    component: UiBadge,
    controls: [
      {
        prop: 'label',
        label: 'Label',
        type: 'text',
        default: 'Badge',
        isSlot: true,
      },
      {
        prop: 'variant',
        type: 'select',
        options: ['default', 'secondary', 'destructive', 'outline'],
        default: 'default',
      },
    ],
    stories: [
      {
        title: 'Default',
        props: {},
        slot: 'Badge',
        code: `<UiBadge>Badge</UiBadge>`,
      },
      {
        title: 'Secondary',
        props: { variant: 'secondary' },
        slot: 'Secondary',
        code: `<UiBadge variant="secondary">Secondary</UiBadge>`,
      },
      {
        title: 'Destructive',
        props: { variant: 'destructive' },
        slot: 'Destructive',
        code: `<UiBadge variant="destructive">Destructive</UiBadge>`,
      },
      {
        title: 'Outline',
        props: { variant: 'outline' },
        slot: 'Outline',
        code: `<UiBadge variant="outline">Outline</UiBadge>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    group: 'Primitives',
    description: 'Avatar with image, initials fallback and 3 sizes.',
    componentName: 'UiAvatar',
    component: UiAvatar,
    controls: [
      {
        prop: 'src',
        label: 'Image URL',
        type: 'text',
        default: 'https://github.com/github.png',
      },
      {
        prop: 'alt',
        label: 'Alt text',
        type: 'text',
        default: 'GitHub',
      },
      {
        prop: 'fallback',
        label: 'Fallback initials',
        type: 'text',
        default: '',
      },
      {
        prop: 'size',
        type: 'select',
        options: ['sm', 'default', 'lg'],
        default: 'default',
      },
    ],
    stories: [
      {
        title: 'Default',
        props: { src: 'https://github.com/github.png', alt: 'GitHub' },
        code: `<UiAvatar src="https://github.com/github.png" alt="GitHub" />`,
      },
      {
        title: 'Small',
        props: {
          src: 'https://github.com/github.png',
          alt: 'GitHub',
          size: 'sm',
        },
        code: `<UiAvatar src="https://github.com/github.png" alt="GitHub" size="sm" />`,
      },
      {
        title: 'Large',
        props: {
          src: 'https://github.com/github.png',
          alt: 'GitHub',
          size: 'lg',
        },
        code: `<UiAvatar src="https://github.com/github.png" alt="GitHub" size="lg" />`,
      },
      {
        title: 'Fallback',
        props: { fallback: 'JD', alt: 'John Doe' },
        code: `<UiAvatar fallback="JD" alt="John Doe" />`,
      },
    ],
    examples: [],
  },
  {
    slug: 'separator',
    name: 'Separator',
    group: 'Primitives',
    description: 'Horizontal or vertical separator line.',
    componentName: 'UiSeparator',
    component: UiSeparator,
    controls: [
      {
        prop: 'orientation',
        type: 'select',
        options: ['horizontal', 'vertical'],
        default: 'horizontal',
      },
    ],
    stories: [
      {
        title: 'Default',
        props: { orientation: 'horizontal' },
        code: `<UiSeparator />`,
      },
      {
        title: 'Vertical',
        props: { orientation: 'vertical' },
        code: `<div class="flex h-8 items-center gap-4">
  <span>Left</span>
  <UiSeparator orientation="vertical" />
  <span>Right</span>
</div>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'switch',
    name: 'Switch',
    group: 'Primitives',
    description: 'Toggle on/off with optional label.',
    componentName: 'UiSwitch',
    component: UiSwitch,
    controls: [
      { prop: 'modelValue', label: 'Checked', type: 'boolean', default: false },
      { prop: 'disabled', type: 'boolean', default: false },
    ],
    stories: [
      {
        title: 'Default',
        props: { modelValue: false },
        code: `<UiSwitch />`,
      },
      {
        title: 'Checked',
        props: { modelValue: true },
        code: `<UiSwitch :model-value="true" />`,
      },
      {
        title: 'Disabled',
        props: { disabled: true },
        code: `<UiSwitch :disabled="true" />`,
      },
    ],
    examples: [],
  },
  {
    slug: 'card',
    name: 'Card',
    group: 'Primitives',
    description: 'Content card with composable header, body and footer.',
    componentName: 'UiCard',
    component: UiCard,
    controls: [
      {
        prop: 'variant',
        type: 'select',
        options: ['default', 'elevated', 'outline', 'glass', 'gradient'],
        default: 'default',
      },
      { prop: 'interactive', type: 'boolean', default: false },
    ],
    stories: [
      {
        title: 'Default',
        props: { variant: 'default' },
        code: `<UiCard>
  <UiCardHeader>
    <UiCardTitle>Card Title</UiCardTitle>
    <UiCardDescription>Short description.</UiCardDescription>
  </UiCardHeader>
  <UiCardContent>
    <p>Card content goes here.</p>
  </UiCardContent>
</UiCard>`,
      },
      {
        title: 'Elevated',
        props: { variant: 'elevated' },
        code: `<UiCard variant="elevated">
  <UiCardHeader>
    <UiCardTitle>Elevated Card</UiCardTitle>
  </UiCardHeader>
  <UiCardContent>
    <p>With shadow effect.</p>
  </UiCardContent>
</UiCard>`,
      },
      {
        title: 'Outline',
        props: { variant: 'outline' },
        code: `<UiCard variant="outline">
  <UiCardHeader>
    <UiCardTitle>Outline Card</UiCardTitle>
  </UiCardHeader>
</UiCard>`,
      },
      {
        title: 'Interactive',
        props: { interactive: true },
        code: `<UiCard :interactive="true">
  <UiCardHeader>
    <UiCardTitle>Clickable Card</UiCardTitle>
  </UiCardHeader>
</UiCard>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'pricing-card',
    name: 'PricingCard',
    group: 'Primitives',
    description: 'Ready-to-use pricing card.',
    componentName: 'UiPricingCard',
    component: UiPricingCard,
    controls: [
      { prop: 'title', type: 'text', default: 'Pro' },
      { prop: 'price', type: 'text', default: '$29' },
      { prop: 'description', type: 'text', default: 'For growing teams' },
      {
        prop: 'isPopular',
        label: 'Popular badge',
        type: 'boolean',
        default: false,
      },
    ],
    stories: [
      {
        title: 'Default',
        props: {
          title: 'Starter',
          price: '$9',
          description: 'For small projects',
        },
        code: `<UiPricingCard title="Starter" price="$9" description="For small projects" />`,
      },
      {
        title: 'Popular',
        props: {
          title: 'Pro',
          price: '$29',
          description: 'For growing teams',
          isPopular: true,
        },
        code: `<UiPricingCard title="Pro" price="$29" description="For growing teams" :is-popular="true" />`,
      },
    ],
    examples: [],
    previewHeight: 400,
  },
  {
    slug: 'alert',
    name: 'Alert',
    group: 'Feedback',
    description: 'Alert message with 4 semantic variants.',
    componentName: 'UiAlert',
    component: UiAlert,
    controls: [
      { prop: 'title', type: 'text', default: 'Information' },
      {
        prop: 'description',
        type: 'text',
        default: 'Important information to display.',
      },
      {
        prop: 'variant',
        type: 'select',
        options: ['default', 'success', 'warning', 'destructive'],
        default: 'default',
      },
    ],
    stories: [
      {
        title: 'Default',
        props: { title: 'Info', description: 'Important information.' },
        code: `<UiAlert title="Info" description="Important information." />`,
      },
      {
        title: 'Success',
        props: {
          variant: 'success',
          title: 'Success',
          description: 'Operation completed.',
        },
        code: `<UiAlert variant="success" title="Success" description="Operation completed." />`,
      },
      {
        title: 'Warning',
        props: {
          variant: 'warning',
          title: 'Warning',
          description: 'Check before continuing.',
        },
        code: `<UiAlert variant="warning" title="Warning" description="Check before continuing." />`,
      },
      {
        title: 'Destructive',
        props: {
          variant: 'destructive',
          title: 'Error',
          description: 'An error occurred.',
        },
        code: `<UiAlert variant="destructive" title="Error" description="An error occurred." />`,
      },
    ],
    examples: [],
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    group: 'Feedback',
    description: 'Collapsible panel with smooth animation.',
    componentName: 'UiAccordion',
    component: UiAccordion,
    controls: [
      { prop: 'title', type: 'text', default: 'Question?' },
      {
        prop: 'defaultOpen',
        label: 'Open by default',
        type: 'boolean',
        default: false,
      },
    ],
    stories: [
      {
        title: 'Default',
        props: { title: 'What is MintUI?' },
        slot: 'A modern UI component library.',
        code: `<UiAccordion title="What is MintUI?">
  A modern UI component library.
</UiAccordion>`,
      },
      {
        title: 'Open by default',
        props: { title: 'Expanded panel', defaultOpen: true },
        slot: 'This panel starts expanded.',
        code: `<UiAccordion title="Expanded panel" :default-open="true">
  This panel starts expanded.
</UiAccordion>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'input',
    name: 'Input',
    group: 'Inputs',
    description: 'Input field with label, hint, error and states.',
    componentName: 'UiInput',
    component: UiInput,
    controls: [
      { prop: 'placeholder', type: 'text', default: 'Enter text...' },
      {
        prop: 'type',
        type: 'select',
        options: ['text', 'email', 'password', 'number'],
        default: 'text',
      },
      { prop: 'disabled', type: 'boolean', default: false },
    ],
    stories: [
      {
        title: 'Default',
        props: { placeholder: 'Enter text...' },
        code: `<UiInput placeholder="Enter text..." />`,
      },
      {
        title: 'Email',
        props: { type: 'email', placeholder: 'you@example.com' },
        code: `<UiInput type="email" placeholder="you@example.com" />`,
      },
      {
        title: 'Password',
        props: { type: 'password', placeholder: '••••••••' },
        code: `<UiInput type="password" placeholder="••••••••" />`,
      },
      {
        title: 'Disabled',
        props: { disabled: true, placeholder: 'Disabled input' },
        code: `<UiInput :disabled="true" placeholder="Disabled input" />`,
      },
    ],
    examples: [],
  },
  {
    slug: 'stat',
    name: 'Stat',
    group: 'Data',
    description: 'Statistics card with value and trend.',
    componentName: 'UiStat',
    component: UiStat,
    controls: [
      { prop: 'title', type: 'text', default: 'Total Revenue' },
      { prop: 'value', type: 'number', default: 45231 },
      { prop: 'prefix', type: 'text', default: '$' },
      {
        prop: 'format',
        type: 'select',
        options: ['number', 'currency', 'compact'],
        default: 'compact',
      },
      {
        prop: 'trend',
        type: 'select',
        options: ['none', 'up', 'down'],
        default: 'up',
      },
      {
        prop: 'trendValue',
        label: 'Trend value',
        type: 'text',
        default: '+12.5%',
      },
    ],
    stories: [
      {
        title: 'Default',
        props: {
          title: 'Total Revenue',
          value: 45231,
          prefix: '$',
          format: 'compact',
          trend: 'up',
          trendValue: '+12.5%',
        },
        code: `<UiStat title="Total Revenue" :value="45231" prefix="$" format="compact" trend="up" trend-value="+12.5%" />`,
      },
      {
        title: 'Down trend',
        props: {
          title: 'Bounce Rate',
          value: 24.8,
          suffix: '%',
          trend: 'down',
          trendValue: '-2.1%',
        },
        code: `<UiStat title="Bounce Rate" :value="24.8" suffix="%" trend="down" trend-value="-2.1%" />`,
      },
    ],
    examples: [],
  },
  {
    slug: 'navbar',
    name: 'Navbar',
    group: 'Navigation',
    description: 'Standard navigation bar with menu and avatar.',
    previewHeight: 120,
    stories: [
      {
        title: 'Default',
        code: `<UiNavbar :sticky="false">
  <span class="font-bold">MintUI</span>
  <nav class="flex items-center gap-6 text-sm">
    <a href="#">Products</a>
    <a href="#">Docs</a>
  </nav>
  <UiButton size="sm">Get Started</UiButton>
</UiNavbar>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'navbar-centered',
    name: 'NavbarCentered',
    group: 'Navigation',
    description: 'Navbar with centered logo and navigation links.',
    previewHeight: 120,
    stories: [
      {
        title: 'Default',
        code: `<UiNavbarCentered>
  <template #left>
    <span class="font-bold">MintUI</span>
  </template>
  <template #center>
    <nav class="flex items-center gap-6 text-sm">
      <a href="#">Products</a>
      <a href="#">Docs</a>
    </nav>
  </template>
  <template #right>
    <UiButton size="sm">Get Started</UiButton>
  </template>
</UiNavbarCentered>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'navbar-floating',
    name: 'NavbarFloating',
    group: 'Navigation',
    description: 'Floating navbar with glassmorphism effect.',
    previewHeight: 180,
    stories: [
      {
        title: 'Default',
        code: `<UiNavbarFloating>
  <span class="font-bold">MintUI</span>
  <nav class="flex items-center gap-4 text-sm">
    <a href="#">Products</a>
    <a href="#">Docs</a>
  </nav>
  <UiButton size="sm">Sign in</UiButton>
</UiNavbarFloating>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'navbar-morph',
    name: 'NavbarMorph',
    group: 'Navigation',
    description: 'Navbar that transforms on scroll.',
    previewHeight: 180,
    stories: [
      {
        title: 'Default',
        code: `<UiNavbarMorph>
  <span class="font-bold">MintUI</span>
  <nav class="flex items-center gap-4 text-sm">
    <a href="#">Products</a>
    <a href="#">Pricing</a>
  </nav>
  <UiButton size="sm">Get Started</UiButton>
</UiNavbarMorph>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'hero-centric',
    name: 'HeroCentric',
    group: 'Sections',
    description: 'Centered hero section with CTA.',
    previewHeight: 500,
    stories: [
      {
        title: 'Default',
        code: `<UiHeroCentric title="Build Beautiful UIs">
  <template #subtitle>
    Create stunning interfaces with our modern component library
  </template>
  <template #actions>
    <UiButton>Get Started</UiButton>
    <UiButton variant="outline">Learn More</UiButton>
  </template>
</UiHeroCentric>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'hero-glow',
    name: 'HeroGlow',
    group: 'Sections',
    description: 'Hero section with gradient glow effect.',
    previewHeight: 500,
    stories: [
      {
        title: 'Default',
        code: `<UiHeroGlow title="Build Beautiful UIs">
  <template #subtitle>
    Create stunning interfaces with our modern component library
  </template>
  <template #actions>
    <UiButton>Get Started</UiButton>
    <UiButton variant="outline">Learn More</UiButton>
  </template>
</UiHeroGlow>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'hero-split',
    name: 'HeroSplit',
    group: 'Sections',
    description: 'Two-column hero section with text + visual.',
    previewHeight: 500,
    stories: [
      {
        title: 'Default',
        code: `<UiHeroSplit title="Build Beautiful UIs">
  <template #subtitle>
    Create stunning interfaces with our modern component library
  </template>
  <template #actions>
    <UiButton>Get Started</UiButton>
    <UiButton variant="outline">Learn More</UiButton>
  </template>
</UiHeroSplit>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'faq',
    name: 'Faq',
    group: 'Sections',
    description: 'FAQ section with accordions.',
    previewHeight: 500,
    stories: [
      {
        title: 'Default',
        code: `<UiFaq :items="[
  { question: 'What is MintUI?', answer: 'A modern UI component library.' },
  { question: 'How to install?', answer: 'Run npm install @florianjs/mintui' },
]" />`,
      },
    ],
    examples: [],
  },
  {
    slug: 'table',
    name: 'Table',
    group: 'Data',
    description: 'Data table with sorting and styles.',
    stories: [
      {
        title: 'Default',
        code: `<UiTable
  :columns="[
    { key: 'name', label: 'Name', sortable: true },
    { key: 'email', label: 'Email' },
    { key: 'role', label: 'Role' },
  ]"
  :data="[
    { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
    { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
  ]"
  row-key="id"
/>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'chart',
    name: 'Chart',
    group: 'Data',
    description: 'Charts via ApexCharts (line, bar, donut...).',
    stories: [
      {
        title: 'Default',
        code: `<UiChart
  type="area"
  :series="[{ name: 'Revenue', data: [3100, 4000, 2800, 5100] }]"
  :options="{ xaxis: { categories: ['Jan', 'Feb', 'Mar', 'Apr'] } }"
/>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'dash-layout',
    name: 'DashLayout',
    group: 'Dashboard',
    description: 'Dashboard layout with sidebar and navbar.',
    previewHeight: 500,
    stories: [
      {
        title: 'Default',
        code: `<UiDashLayout>
  <template #sidebar>
    <UiDashSidebar>
      <!-- logo + nav items -->
    </UiDashSidebar>
  </template>
  <template #navbar>
    <UiDashNavbar>
      <span class="font-semibold">Dashboard</span>
    </UiDashNavbar>
  </template>
  <UiDashContent>
    <!-- page content -->
  </UiDashContent>
</UiDashLayout>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'dash-navbar',
    name: 'DashNavbar',
    group: 'Dashboard',
    description: 'Dashboard navbar with search and actions.',
    previewHeight: 120,
    stories: [
      {
        title: 'Default',
        code: `<UiDashNavbar>
  <span class="font-semibold">Dashboard</span>
  <UiButton size="sm">+ New</UiButton>
</UiDashNavbar>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'dash-content',
    name: 'DashContent',
    group: 'Dashboard',
    description: 'Main dashboard content area.',
    previewHeight: 300,
    stories: [
      {
        title: 'Default',
        code: `<UiDashContent>
  <!-- your page content here -->
</UiDashContent>`,
      },
    ],
    examples: [],
  },
  {
    slug: 'dash-sidebar',
    name: 'DashSidebar',
    group: 'Dashboard',
    description: 'Dashboard navigation sidebar.',
    stories: [
      {
        title: 'Default',
        code: `<UiDashSidebar>
  <div class="flex h-14 items-center border-b px-4">
    <span class="font-bold">MintUI</span>
  </div>
  <nav class="p-3">
    <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm">Dashboard</a>
    <a href="#" class="flex items-center rounded-md px-3 py-2 text-sm">Analytics</a>
  </nav>
</UiDashSidebar>`,
      },
    ],
    examples: [],
  },
];

export const landingPages: LandingEntry[] = [
  {
    slug: 'agency',
    name: 'Agency',
    description: 'Creative agency landing page, editorial black & white style.',
    previewHeight: 900,
  },
  {
    slug: 'app',
    name: 'App',
    description: 'Modern SaaS/app landing page with animated hero.',
    previewHeight: 900,
  },
  {
    slug: 'saas',
    name: 'SaaS',
    description: 'Complete SaaS landing page with pricing and features.',
    previewHeight: 900,
  },
  {
    slug: 'portfolio',
    name: 'Portfolio',
    description: 'A sleek, highly artistic portfolio template for creators.',
    previewHeight: 900,
  },
  {
    slug: 'event',
    name: 'Event',
    description: 'Dynamic and glassmorphic landing page for conferences.',
    previewHeight: 900,
  },
  {
    slug: 'dashboard-data',
    name: 'Dashboard Data',
    description: 'A highly technical, data-heavy analytics dashboard.',
    previewHeight: 900,
  },
  {
    slug: 'dashboard-crm',
    name: 'Dashboard CRM',
    description:
      'A clean, bright, and highly organized Project Management / CRM dashboard.',
    previewHeight: 900,
  },
  {
    slug: 'artisan',
    name: 'Artisan',
    description:
      'Craftsman and ceramics studio landing page with earthy tones.',
    previewHeight: 900,
  },
  {
    slug: 'organic',
    name: 'Organic Shop',
    description: 'Fresh farm-to-table organic shop with natural colors.',
    previewHeight: 900,
  },
  {
    slug: 'hairdresser',
    name: 'Hairdresser',
    description: 'Modern, chic hair salon landing page with booking emphasis.',
    previewHeight: 900,
  },
  {
    slug: 'chef',
    name: 'Home Chef',
    description: 'Elegant, dark-themed fine dining personal chef experience.',
    previewHeight: 900,
  },
];
