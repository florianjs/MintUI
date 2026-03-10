<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="w-64">
        <UiPricingCard
          title="Starter"
          price="$9"
          description="Perfect for small projects"
          :features="[
            '5 projects',
            '10 GB storage',
            'Basic analytics',
            'Email support',
          ]"
        />
      </div>
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="flex flex-wrap gap-6 items-start">
        <div class="w-64">
          <UiPricingCard
            title="Pro"
            price="$29"
            description="For growing teams"
            :features="[
              'Unlimited projects',
              '100 GB storage',
              'Advanced analytics',
              'Priority support',
              'Custom domains',
            ]"
            :is-popular="true"
          />
        </div>
      </div>
    </div>
  </div>
</template>
