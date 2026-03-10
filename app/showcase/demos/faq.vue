<script setup lang="ts">
const defaultItems = [
  {
    question: 'What is MintUI?',
    answer:
      'MintUI is a modern UI component library for Nuxt 4 with TailwindCSS.',
  },
  {
    question: 'How do I install MintUI?',
    answer: 'Run npm install @florianjs/mintui in your Nuxt project.',
  },
  {
    question: 'Does it support dark mode?',
    answer:
      'Yes, all components support dark mode via the TailwindCSS class-based strategy.',
  },
];

const customItems = [
  {
    question: 'What payment methods do you accept?',
    answer:
      'We accept all major credit cards, PayPal, and bank transfers for enterprise customers.',
  },
  {
    question: 'Can I cancel my subscription anytime?',
    answer:
      'Yes, you can cancel your subscription at any time. Your access will continue until the end of your billing period.',
  },
  {
    question: 'Do you offer refunds?',
    answer: 'We offer a 30-day money-back guarantee for all new subscriptions.',
  },
];

const compactItems = [
  {
    question: 'How to get started?',
    answer: 'Simply sign up and follow the onboarding guide.',
  },
  {
    question: 'Is there a free trial?',
    answer: 'Yes, 14 days free with no credit card required.',
  },
];
</script>

<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden">
        <UiFaq :items="defaultItems" />
      </div>
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="space-y-4">
        <div>
          <p class="text-xs text-muted-foreground mb-2">
            With title and description
          </p>
          <div class="rounded-lg border overflow-hidden">
            <UiFaq
              title="Common Questions"
              description="Find answers to frequently asked questions about our service."
              :items="customItems"
            />
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Compact</p>
          <div class="rounded-lg border overflow-hidden max-w-md">
            <UiFaq :items="compactItems" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
