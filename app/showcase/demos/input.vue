<template>
  <div class="space-y-4 max-w-sm">
    <UiInput label="Email" placeholder="you@example.com" type="email" />
    <UiInput label="Password" type="password" hint="Minimum 8 characters" />
    <UiInput label="Username" error="This name is already taken." />
    <UiInput label="Disabled field" placeholder="Not editable" :disabled="true" />
  </div>
</template>
