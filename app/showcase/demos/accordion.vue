<template>
  <div class="divide-y divide-border rounded-lg border">
    <UiAccordion title="Comment installer MintUI ?">
      Installez via npm : <code class="bg-muted px-1 rounded text-sm">npm install @florianjs/mintui</code>
    </UiAccordion>
    <UiAccordion title="Supporte le dark mode ?" :default-open="true">
      Oui. Ajoutez la classe <code class="bg-muted px-1 rounded text-sm">dark</code> à un élément parent.
      MintUI utilise la stratégie class-based de TailwindCSS.
    </UiAccordion>
    <UiAccordion title="Compatible avec Nuxt 4 ?">
      Absolument. MintUI est conçu spécifiquement pour Nuxt 4 avec auto-import des composants.
    </UiAccordion>
  </div>
</template>
