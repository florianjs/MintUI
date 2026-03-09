<template>
  <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
    <UiCard>
      <UiCardHeader>
        <UiCardTitle>Titre de la carte</UiCardTitle>
        <UiCardDescription>Description courte du contenu.</UiCardDescription>
      </UiCardHeader>
      <UiCardContent>
        <p class="text-sm text-muted-foreground">Le corps principal de la carte peut contenir n'importe quel contenu.</p>
      </UiCardContent>
      <UiCardFooter>
        <UiButton size="sm">Action</UiButton>
        <UiButton size="sm" variant="ghost">Annuler</UiButton>
      </UiCardFooter>
    </UiCard>
    <UiCard>
      <UiCardImage src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=200&fit=crop" alt="Abstract" />
      <UiCardHeader>
        <UiCardTitle>Avec image</UiCardTitle>
        <UiCardDescription>Une carte avec image en header.</UiCardDescription>
      </UiCardHeader>
      <UiCardContent>
        <UiBadge>New</UiBadge>
      </UiCardContent>
    </UiCard>
  </div>
</template>
