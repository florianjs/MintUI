export type Example = {
  title: string
  code: string
}

export type ComponentEntry = {
  slug: string
  name: string
  group: string
  description: string
  examples: Example[]
}

export type LandingEntry = {
  slug: string
  name: string
  description: string
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
    examples: [
      {
        title: 'Variants',
        code: `<UiButton>Default</UiButton>
<UiButton variant="secondary">Secondary</UiButton>
<UiButton variant="destructive">Destructive</UiButton>
<UiButton variant="outline">Outline</UiButton>
<UiButton variant="ghost">Ghost</UiButton>
<UiButton variant="soft">Soft</UiButton>
<UiButton variant="gradient">Gradient</UiButton>
<UiButton variant="elevated">Elevated</UiButton>
<UiButton variant="positive">Positive</UiButton>`,
      },
      {
        title: 'Tailles',
        code: `<UiButton size="sm">Small</UiButton>
<UiButton>Default</UiButton>
<UiButton size="lg">Large</UiButton>`,
      },
      {
        title: 'États',
        code: `<UiButton :loading="true">Loading</UiButton>
<UiButton :state="'success'" :reset-after="0">Success</UiButton>
<UiButton :state="'error'" :reset-after="0">Error</UiButton>
<UiButton :disabled="true">Disabled</UiButton>`,
      },
    ],
  },
  {
    slug: 'badge',
    name: 'Badge',
    group: 'Primitives',
    description: 'Étiquette inline pour catégories, statuts ou labels.',
    examples: [
      {
        title: 'Variants',
        code: `<UiBadge>Default</UiBadge>
<UiBadge variant="secondary">Secondary</UiBadge>
<UiBadge variant="destructive">Destructive</UiBadge>
<UiBadge variant="outline">Outline</UiBadge>`,
      },
    ],
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
    examples: [
      {
        title: 'Variants',
        code: `<UiAlert title="Info" description="Une information importante." />
<UiAlert variant="success" title="Succès" description="Opération réussie." />
<UiAlert variant="warning" title="Attention" description="Vérifiez avant de continuer." />
<UiAlert variant="destructive" title="Erreur" description="Une erreur est survenue." />`,
      },
    ],
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
  },
  {
    slug: 'app',
    name: 'App',
    description: 'Landing page SaaS/app moderne avec hero animé.',
  },
  {
    slug: 'saas',
    name: 'SaaS',
    description: 'Landing page SaaS complète avec pricing et features.',
  },
]
