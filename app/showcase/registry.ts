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
    description: 'Bouton interactif avec 10 variants, 4 tailles et états loading/success/error.',
    componentName: 'UiButton',
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
    description: 'Étiquette inline pour catégories, statuts ou labels.',
    componentName: 'UiBadge',
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
    description: 'Avatar avec image, fallback initiales et 3 tailles.',
    examples: [
      {
        title: 'Avec image',
        code: `<UiAvatar src="https://github.com/github.png" alt="GitHub" />`,
      },
      {
        title: 'Fallback initiales',
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
    description: 'Ligne de séparation horizontale ou verticale.',
    examples: [
      {
        title: 'Horizontal',
        code: `<UiSeparator />`,
      },
      {
        title: 'Vertical',
        code: `<div class="flex h-8 items-center gap-4">
  <span>Gauche</span>
  <UiSeparator orientation="vertical" />
  <span>Droite</span>
</div>`,
      },
    ],
  },
  {
    slug: 'switch',
    name: 'Switch',
    group: 'Primitives',
    description: 'Toggle on/off avec label optionnel.',
    examples: [
      {
        title: 'Basique',
        code: `<UiSwitch label="Activer les notifications" />`,
      },
    ],
  },
  {
    slug: 'alert',
    name: 'Alert',
    group: 'Feedback',
    description: 'Message d\'alerte avec 4 variants sémantiques.',
    componentName: 'UiAlert',
    controls: [
      { prop: 'title', type: 'text', default: 'Information' },
      { prop: 'description', type: 'text', default: 'Un message important à afficher.' },
      { prop: 'variant', type: 'select', options: ['default', 'success', 'warning', 'destructive'], default: 'default' },
    ],
    stories: [
      { title: 'Default', props: { title: 'Info', description: 'Une information importante.' }, code: `<UiAlert title="Info" description="Une information importante." />` },
      { title: 'Success', props: { variant: 'success', title: 'Succès', description: 'Opération réussie.' }, code: `<UiAlert variant="success" title="Succès" description="Opération réussie." />` },
      { title: 'Warning', props: { variant: 'warning', title: 'Attention', description: 'Vérifiez avant de continuer.' }, code: `<UiAlert variant="warning" title="Attention" description="Vérifiez avant de continuer." />` },
      { title: 'Destructive', props: { variant: 'destructive', title: 'Erreur', description: 'Une erreur est survenue.' }, code: `<UiAlert variant="destructive" title="Erreur" description="Une erreur est survenue." />` },
    ],
    examples: [],
  },
  {
    slug: 'accordion',
    name: 'Accordion',
    group: 'Feedback',
    description: 'Panneau dépliable avec animation fluide.',
    examples: [
      {
        title: 'Basique',
        code: `<UiAccordion title="Comment installer MintUI ?">
  Installez via npm : <code>npm install @florianjs/mintui</code>
</UiAccordion>
<UiAccordion title="Supporte le dark mode ?">
  Oui, ajoutez la classe <code>dark</code> à un ancêtre.
</UiAccordion>`,
      },
    ],
  },
  {
    slug: 'input',
    name: 'Input',
    group: 'Inputs',
    description: 'Champ de saisie avec label, hint, erreur et états.',
    examples: [
      {
        title: 'Basique',
        code: `<UiInput label="Email" placeholder="vous@exemple.com" type="email" />`,
      },
      {
        title: 'Avec hint et erreur',
        code: `<UiInput label="Mot de passe" type="password" hint="8 caractères minimum" />
<UiInput label="Nom" error="Ce champ est requis" />`,
      },
    ],
  },
  {
    slug: 'card',
    name: 'Card',
    group: 'Primitives',
    description: 'Carte de contenu avec header, body et footer composables.',
    examples: [
      {
        title: 'Complète',
        code: `<UiCard>
  <UiCardHeader>
    <UiCardTitle>Titre de la carte</UiCardTitle>
    <UiCardDescription>Description courte du contenu.</UiCardDescription>
  </UiCardHeader>
  <UiCardContent>
    <p>Le contenu principal de votre carte.</p>
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
    description: 'Carte de tarification prête à l\'emploi.',
    examples: [
      {
        title: 'Basique',
        code: `<UiPricingCard />`,
      },
    ],
  },
  {
    slug: 'navbar',
    name: 'Navbar',
    group: 'Navigation',
    description: 'Barre de navigation standard avec menu et avatar.',
    previewHeight: 120,
    examples: [
      {
        title: 'Basique',
        code: `<UiNavbar />`,
      },
    ],
  },
  {
    slug: 'navbar-centered',
    name: 'NavbarCentered',
    group: 'Navigation',
    description: 'Navbar avec logo centré et liens de navigation.',
    previewHeight: 120,
    examples: [
      {
        title: 'Basique',
        code: `<UiNavbarCentered />`,
      },
    ],
  },
  {
    slug: 'navbar-floating',
    name: 'NavbarFloating',
    group: 'Navigation',
    description: 'Navbar flottante avec effet glassmorphism.',
    previewHeight: 160,
    examples: [
      {
        title: 'Basique',
        code: `<UiNavbarFloating />`,
      },
    ],
  },
  {
    slug: 'navbar-morph',
    name: 'NavbarMorph',
    group: 'Navigation',
    description: 'Navbar qui se transforme au scroll.',
    previewHeight: 160,
    examples: [
      {
        title: 'Basique',
        code: `<UiNavbarMorph />`,
      },
    ],
  },
  {
    slug: 'hero-centric',
    name: 'HeroCentric',
    group: 'Sections',
    description: 'Section hero centrée avec CTA.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basique',
        code: `<UiHeroCentric />`,
      },
    ],
  },
  {
    slug: 'hero-glow',
    name: 'HeroGlow',
    group: 'Sections',
    description: 'Section hero avec effet de glow gradient.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basique',
        code: `<UiHeroGlow />`,
      },
    ],
  },
  {
    slug: 'hero-split',
    name: 'HeroSplit',
    group: 'Sections',
    description: 'Section hero en deux colonnes texte + visuel.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basique',
        code: `<UiHeroSplit />`,
      },
    ],
  },
  {
    slug: 'faq',
    name: 'Faq',
    group: 'Sections',
    description: 'Section FAQ avec accordéons.',
    previewHeight: 500,
    examples: [
      {
        title: 'Basique',
        code: `<UiFaq />`,
      },
    ],
  },
  {
    slug: 'stat',
    name: 'Stat',
    group: 'Data',
    description: 'Carte de statistique avec valeur et tendance.',
    examples: [
      {
        title: 'Basique',
        code: `<UiStat />`,
      },
    ],
  },
  {
    slug: 'table',
    name: 'Table',
    group: 'Data',
    description: 'Tableau de données avec tri et styles.',
    examples: [
      {
        title: 'Basique',
        code: `<UiTable />`,
      },
    ],
  },
  {
    slug: 'chart',
    name: 'Chart',
    group: 'Data',
    description: 'Graphiques via ApexCharts (line, bar, donut...).',
    examples: [
      {
        title: 'Basique',
        code: `<UiChart />`,
      },
    ],
  },
  {
    slug: 'dash-layout',
    name: 'DashLayout',
    group: 'Dashboard',
    description: 'Layout de dashboard avec sidebar et navbar.',
    previewHeight: 600,
    examples: [
      {
        title: 'Basique',
        code: `<UiDashLayout />`,
      },
    ],
  },
  {
    slug: 'dash-navbar',
    name: 'DashNavbar',
    group: 'Dashboard',
    description: 'Navbar de dashboard avec recherche et actions.',
    previewHeight: 120,
    examples: [
      {
        title: 'Basique',
        code: `<UiDashNavbar />`,
      },
    ],
  },
  {
    slug: 'dash-content',
    name: 'DashContent',
    group: 'Dashboard',
    description: 'Zone de contenu principale du dashboard.',
    examples: [
      {
        title: 'Basique',
        code: `<UiDashContent />`,
      },
    ],
  },
  {
    slug: 'dash-sidebar',
    name: 'DashSidebar',
    group: 'Dashboard',
    description: 'Sidebar de navigation du dashboard.',
    examples: [
      {
        title: 'Basique',
        code: `<UiDashSidebar />`,
      },
    ],
  },
]

export const landingPages: LandingEntry[] = [
  {
    slug: 'agency',
    name: 'Agency',
    description: 'Landing page agence créative, style éditorial noir & blanc.',
    previewHeight: 900,
  },
  {
    slug: 'app',
    name: 'App',
    description: 'Landing page SaaS/app moderne avec hero animé.',
    previewHeight: 900,
  },
  {
    slug: 'saas',
    name: 'SaaS',
    description: 'Landing page SaaS complète avec pricing et features.',
    previewHeight: 900,
  },
]
