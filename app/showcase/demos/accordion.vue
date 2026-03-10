<template>
  <div class="divide-y divide-border rounded-lg border">
    <UiAccordion title="How to install MintUI?">
      Install via npm: <code class="bg-muted px-1 rounded text-sm">npm install @florianjs/mintui</code>
    </UiAccordion>
    <UiAccordion title="Does it support dark mode?" :default-open="true">
      Yes. Add the <code class="bg-muted px-1 rounded text-sm">dark</code> class to a parent element.
      MintUI uses TailwindCSS class-based strategy.
    </UiAccordion>
    <UiAccordion title="Is it compatible with Nuxt 4?">
      Absolutely. MintUI is designed specifically for Nuxt 4 with auto-import of components.
    </UiAccordion>
  </div>
</template>
