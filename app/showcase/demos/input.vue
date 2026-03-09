<template>
  <div class="space-y-4 max-w-sm">
    <UiInput label="Email" placeholder="vous@exemple.com" type="email" />
    <UiInput label="Mot de passe" type="password" hint="8 caractères minimum" />
    <UiInput label="Nom d'utilisateur" error="Ce nom est déjà pris." />
    <UiInput label="Champ désactivé" placeholder="Non modifiable" :disabled="true" />
  </div>
</template>
