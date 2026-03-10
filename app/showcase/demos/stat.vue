<script setup lang="ts">
import { ref } from 'vue';

const revenue = ref(45231);
const users = ref(2843);
const conversion = ref(24.8);
</script>

<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="max-w-xs">
        <UiStat
          title="Total Revenue"
          :value="revenue"
          prefix="$"
          format="compact"
          trend="up"
          trend-value="+12.5%"
        />
      </div>
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-2xl">
        <UiStat
          title="Active Users"
          :value="users"
          format="compact"
          trend="up"
          trend-value="+8.2%"
        />
        <UiStat
          title="Conversion Rate"
          :value="conversion"
          suffix="%"
          :decimals="1"
          trend="down"
          trend-value="-2.1%"
        />
      </div>
    </div>
  </div>
</template>
