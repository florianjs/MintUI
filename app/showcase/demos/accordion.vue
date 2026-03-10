<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="divide-y divide-border rounded-lg border">
        <UiAccordion title="How to install MintUI?">
          Install via npm:
          <code class="bg-muted px-1 rounded text-sm"
            >npm install @florianjs/mintui</code
          >
        </UiAccordion>
        <UiAccordion title="Does it support dark mode?">
          Yes. Add the
          <code class="bg-muted px-1 rounded text-sm">dark</code> class to a
          parent element. MintUI uses TailwindCSS class-based strategy.
        </UiAccordion>
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
          <p class="text-xs text-muted-foreground mb-2">Open by default</p>
          <div class="divide-y divide-border rounded-lg border">
            <UiAccordion title="Expanded panel" :default-open="true">
              This panel is expanded by default using the
              <code class="bg-muted px-1 rounded text-sm">default-open</code>
              prop.
            </UiAccordion>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Multiple panels</p>
          <div class="divide-y divide-border rounded-lg border">
            <UiAccordion title="Question 1">
              Answer to the first question with detailed information.
            </UiAccordion>
            <UiAccordion title="Question 2">
              Answer to the second question with more context.
            </UiAccordion>
            <UiAccordion title="Question 3">
              Answer to the third question with examples.
            </UiAccordion>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
