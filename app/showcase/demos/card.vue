<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <UiCard class="max-w-sm">
        <UiCardHeader>
          <UiCardTitle>Card Title</UiCardTitle>
          <UiCardDescription
            >Short description of the content.</UiCardDescription
          >
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm text-muted-foreground">
            The main body of the card can contain any content.
          </p>
        </UiCardContent>
        <UiCardFooter>
          <UiButton size="sm">Action</UiButton>
          <UiButton size="sm" variant="ghost">Annuler</UiButton>
        </UiCardFooter>
      </UiCard>
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <UiCard>
          <UiCardImage
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop"
            alt="Abstract"
          />
          <UiCardHeader>
            <UiCardTitle>Avec image</UiCardTitle>
            <UiCardDescription>A card with header image.</UiCardDescription>
          </UiCardHeader>
          <UiCardContent>
            <UiBadge>New</UiBadge>
          </UiCardContent>
        </UiCard>
      </div>
    </div>
  </div>
</template>
