<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="max-w-sm">
        <UiInput label="Email" placeholder="you@example.com" type="email" />
      </div>
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="space-y-4 max-w-sm">
        <UiInput label="Password" type="password" hint="Minimum 8 characters" />
        <UiInput label="Username" error="This name is already taken." />
        <UiInput
          label="Disabled field"
          placeholder="Not editable"
          :disabled="true"
        />
      </div>
    </div>
  </div>
</template>
