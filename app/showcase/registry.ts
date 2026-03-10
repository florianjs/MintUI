import UiButton from '~/components/Ui/Button.vue'
import UiAlert from '~/components/Ui/Alert.vue'
import UiBadge from '~/components/Ui/Badge.vue'

export type Example = {
  title: string
  code: string
}

export type ControlDef = {
  prop: string
  label?: string
  type: 'select' | 'boolean' | 'text' | 'number'
  options?: string[]
  default: any
  isSlot?: boolean
}

export type Story = {
  title: string
  description?: string
  props?: Record<string, any>
  slot?: string
  code: string
}

export type ComponentEntry = {
  slug: string
  name: string
  group: string
  description: string
  componentName?: string
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  component?: any
  controls?: ControlDef[]
  stories?: Story[]
  examples: Example[]
  previewHeight?: number
  previewWidth?: number
}

export type LandingEntry = {
  slug: string
  name: string
  description: string
  previewHeight?: number
  previewWidth?: number
}

export const componentGroups = [
  'Primitives',
  'Feedback',
  'Inputs',
  'Navigation',
  'Dashboard',
  'Data',
  'Sections',
] as const

export const components: ComponentEntry[] = [
  {
    slug: 'button',
    name: 'Button',
    group: 'Primitives',
    description: 'Interactive button with 10 variants, 4 sizes and loading/success/error states.',
    componentName: 'UiButton',
    component: UiButton,
    controls: [
      { prop: 'label', label: 'Label', type: 'text', default: 'Button', isSlot: true },
      { prop: 'variant', type: 'select', options: ['default', 'secondary', 'destructive', 'outline', 'ghost', 'link', 'soft', 'gradient', 'elevated', 'positive'], default: 'default' },
      { prop: 'size', type: 'select', options: ['sm', 'default', 'lg', 'icon'], default: 'default' },
      { prop: 'disabled', type: 'boolean', default: false },
      { prop: 'loading', type: 'boolean', default: false },
    ],
    stories: [
      { title: 'Default', props: {}, slot: 'Button', code: `<UiButton>Button</UiButton>` },
      { title: 'Secondary', props: { variant: 'secondary' }, slot: 'Secondary', code: `<UiButton variant="secondary">Secondary</UiButton>` },
      { title: 'Destructive', props: { variant: 'destructive' }, slot: 'Destructive', code: `<UiButton variant="destructive">Destructive</UiButton>` },
      { title: 'Outline', props: { variant: 'outline' }, slot: 'Outline', code: `<UiButton variant="outline">Outline</UiButton>` },
      { title: 'Ghost', props: { variant: 'ghost' }, slot: 'Ghost', code: `<UiButton variant="ghost">Ghost</UiButton>` },
      { title: 'Soft', props: { variant: 'soft' }, slot: 'Soft', code: `<UiButton variant="soft">Soft</UiButton>` },
      { title: 'Gradient', props: { variant: 'gradient' }, slot: 'Gradient', code: `<UiButton variant="gradient">Gradient</UiButton>` },
      { title: 'Elevated', props: { variant: 'elevated' }, slot: 'Elevated', code: `<UiButton variant="elevated">Elevated</UiButton>` },
      { title: 'Positive', props: { variant: 'positive' }, slot: 'Positive', code: `<UiButton variant="positive">Positive</UiButton>` },
      { title: 'Small', props: { size: 'sm' }, slot: 'Small', code: `<UiButton size="sm">Small</UiButton>` },
      { title: 'Large', props: { size: 'lg' }, slot: 'Large', code: `<UiButton size="lg">Large</UiButton>` },
      { title: 'Disabled', props: { disabled: true }, slot: 'Disabled', code: `<UiButton :disabled="true">Disabled</UiButton>` },
      { title: 'Loading', props: { loading: true }, slot: 'Loading', code: `<UiButton :loading="true">Loading</UiButton>` },
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
      { prop: 'label', label: 'Label', type: 'text', default: 'Badge', isSlot: true },
      { prop: 'variant', type: 'select', options: ['default', 'secondary', 'destructive', 'outline'], default: 'default' },
    ],
    stories: [
      { title: 'Default', props: {}, slot: 'Badge', code: `<UiBadge>Badge</UiBadge>` },
      { title: 'Secondary', props: { variant: 'secondary' }, slot: 'Secondary', code: `<UiBadge variant="secondary">Secondary</UiBadge>` },
      { title: 'Destructive', props: { variant: 'destructive' }, slot: 'Destructive', code: `<UiBadge variant="destructive">Destructive</UiBadge>` },
      { title: 'Outline', props: { variant: 'outline' }, slot: 'Outline', code: `<UiBadge variant="outline">Outline</UiBadge>` },
    ],
    examples: [],
  },
  {
    slug: 'avatar',
    name: 'Avatar',
    group: 'Primitives',
    description: 'Avatar with image, initials fallback and 3 sizes.',
    examples: [
      {
        title: 'With image',
        code: `<UiAvatar src="https://github.com/github.png" alt="GitHub" />`,
      },
      {
        title: 'Initials fallback',
        code: `<UiAvatar fallback="FJ" size="sm" />
<UiAvatar fallback="FJ" />
<UiAvatar fallback="FJ" size="lg" />`,
      },
    ],
  },
  {
    slug: 'separator',
    name: 'Separator',
    group: 'Primitives',
    description: 'Horizontal or vertical separator line.',
    examples: [
      {
        title: 'Horizontal',
        code: `<UiSeparator />`,
      },
      {
        title: 'Vertical',
        code: `<div class="flex h-8 items-center gap-4">
  <span>Left</span>
  <UiSeparator orientation="vertical" />
  <span>Right</span>
</div>`,
      },
    ],
  },
  {
    slug: 'switch',
    name: 'Switch',
    group: 'Primitives',
    description: 'Toggle on/off with optional label.',
    examples: [
      {
        title: 'Basic',
        code: `<UiSwitch label="Enable notifications" />`,
      },
    ],
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
      { prop: 'description', type: 'text', default: 'Un message important à afficher.' },
      { prop: 'variant', type: 'select', options: ['default', 'success', 'warning', 'destructive'], default: 'default' },
    ],
    stories: [
      { title: 'Default', props: { title: 'Info', description: 'Important information.' }, code: `<UiAlert title="Info" description="Important information." />` },
      { title: 'Success', props: { variant: 'success', title: 'Success', description: 'Operation completed.' }, code: `<UiAlert variant="success" title="Success" description="Operation completed." />` },
      { title: 'Warning', props: { variant: 'warning', title: 'Warning', description: 'Check before continuing.' }, code: `<UiAlert variant="warning" title="Warning" description="Check before continuing." />` },
      { title: 'Destructive', props: { variant: 'destructive', title: 'Error', description: 'An error occurred.' }, code: `<UiAlert variant="destructive" title="Error" description="An error occurred." />` },
    ],
    examples: [],
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    group: 'Feedback',
    description: 'Collapsible panel with smooth animation.',
    examples: [
      {
        title: 'Basic',
        code: `<UiAccordion title="How to install MintUI?">
  Install via npm: <code>npm install @florianjs/mintui</code>
</UiAccordion>
<UiAccordion title="Does it support dark mode?">
  Yes, add the <code>dark</code> class to an ancestor element.
</UiAccordion>`,
      },
    ],
  },
  {
    slug: 'input',
    name: 'Input',
    group: 'Inputs',
    description: 'Input field with label, hint, error and states.',
    examples: [
      {
        title: 'Basic',
        code: `<UiInput label="Email" placeholder="you@example.com" type="email" />`,
      },
      {
        title: 'With hint and error',
        code: `<UiInput label="Password" type="password" hint="Minimum 8 characters" />
<UiInput label="Name" error="This field is required" />`,
      },
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    group: 'Primitives',
    description: 'Content card with composable header, body and footer.',
    examples: [
      {
        title: 'Complete',
        code: `<UiCard>
  <UiCardHeader>
    <UiCardTitle>Card Title</UiCardTitle>
    <UiCardDescription>Short description of the content.</UiCardDescription>
  </UiCardHeader>
  <UiCardContent>
    <p>The main content of your card.</p>
  </UiCardContent>
  <UiCardFooter>
    <UiButton size="sm">Action</UiButton>
  </UiCardFooter>
</UiCard>`,
      },
    ],
  },
  {
    slug: 'pricing-card',
    name: 'PricingCard',
    group: 'Primitives',
    description: 'Ready-to-use pricing card.',
    previewHeight: 440,
    examples: [
      {
        title: 'Basic',
        code: `<UiPricingCard
  title="Pro"
  price="$29"
  description="For growing teams"
  :features="['Unlimited projects', '100 GB storage', 'Priority support']"
  :is-popular="true"
/>`,
      },
    ],
  },
  {
    slug: 'navbar',
    name: 'Navbar',
    group: 'Navigation',
    description: 'Standard navigation bar with menu and avatar.',
    previewHeight: 120,
    examples: [
      {
        title: 'Basic',
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
  },
  {
    slug: 'navbar-centered',
    name: 'NavbarCentered',
    group: 'Navigation',
    description: 'Navbar with centered logo and navigation links.',
    previewHeight: 120,
    examples: [
      {
        title: 'Basic',
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
  },
  {
    slug: 'navbar-floating',
    name: 'NavbarFloating',
    group: 'Navigation',
    description: 'Floating navbar with glassmorphism effect.',
    previewHeight: 180,
    examples: [
      {
        title: 'Basic',
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
  },
  {
    slug: 'navbar-morph',
    name: 'NavbarMorph',
    group: 'Navigation',
    description: 'Navbar that transforms on scroll.',
    previewHeight: 180,
    examples: [
      {
        title: 'Basic',
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
  },
  {
    slug: 'hero-centric',
    name: 'HeroCentric',
    group: 'Sections',
    description: 'Centered hero section with CTA.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basic',
        code: `<UiHeroCentric />`,
      },
    ],
  },
  {
    slug: 'hero-glow',
    name: 'HeroGlow',
    group: 'Sections',
    description: 'Hero section with gradient glow effect.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basic',
        code: `<UiHeroGlow />`,
      },
    ],
  },
  {
    slug: 'hero-split',
    name: 'HeroSplit',
    group: 'Sections',
    description: 'Two-column hero section with text + visual.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basic',
        code: `<UiHeroSplit />`,
      },
    ],
  },
  {
    slug: 'faq',
    name: 'Faq',
    group: 'Sections',
    description: 'FAQ section with accordions.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basic',
        code: `<UiFaq />`,
      },
    ],
  },
  {
    slug: 'stat',
    name: 'Stat',
    group: 'Data',
    description: 'Statistics card with value and trend.',
    examples: [
      {
        title: 'Basic',
        code: `<UiStat
  title="Total Revenue"
  :value="45231"
  prefix="$"
  format="compact"
  trend="up"
  trend-value="+12.5%"
/>`,
      },
    ],
  },
  {
    slug: 'table',
    name: 'Table',
    group: 'Data',
    description: 'Data table with sorting and styles.',
    examples: [
      {
        title: 'Basic',
        code: `<UiTable
  :columns="columns"
  :data="data"
  row-key="id"
  default-sort-key="name"
/>

<script setup>
const columns = [
  { key: 'name', label: 'Name', sortable: true },
  { key: 'email', label: 'Email', sortable: true },
  { key: 'role', label: 'Role' },
]
const data = [
  { id: 1, name: 'John Doe', email: 'john@example.com', role: 'Admin' },
  { id: 2, name: 'Jane Smith', email: 'jane@example.com', role: 'User' },
]
<\/script>`,
      },
    ],
  },
  {
    slug: 'chart',
    name: 'Chart',
    group: 'Data',
    description: 'Charts via ApexCharts (line, bar, donut...).',
    examples: [
      {
        title: 'Basic',
        code: `<UiChart
  type="area"
  :series="series"
  :options="{ xaxis: { categories: ['Jan', 'Feb', 'Mar'] } }"
/>

<script setup>
const series = [
  { name: 'Revenue', data: [3100, 4000, 2800] },
]
<\/script>`,
      },
    ],
  },
  {
    slug: 'dash-layout',
    name: 'DashLayout',
    group: 'Dashboard',
    description: 'Dashboard layout with sidebar and navbar.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basic',
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
  },
  {
    slug: 'dash-navbar',
    name: 'DashNavbar',
    group: 'Dashboard',
    description: 'Dashboard navbar with search and actions.',
    previewHeight: 120,
    examples: [
      {
        title: 'Basic',
        code: `<UiDashNavbar>
  <span class="font-semibold">Dashboard</span>
  <UiButton size="sm">+ New</UiButton>
</UiDashNavbar>`,
      },
    ],
  },
  {
    slug: 'dash-content',
    name: 'DashContent',
    group: 'Dashboard',
    description: 'Main dashboard content area.',
    previewHeight: 300,
    examples: [
      {
        title: 'Basic',
        code: `<UiDashContent>
  <!-- your page content here -->
</UiDashContent>`,
      },
    ],
  },
  {
    slug: 'dash-sidebar',
    name: 'DashSidebar',
    group: 'Dashboard',
    description: 'Dashboard navigation sidebar.',
    examples: [
      {
        title: 'Basic',
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
  },
]

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
]
