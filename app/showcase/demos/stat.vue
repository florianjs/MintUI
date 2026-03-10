<script setup lang="ts">
import { ref } from 'vue'

const revenue = ref(45231)
const users = ref(2843)
const conversion = ref(24.8)
</script>

<template>
  <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
    <UiStat
      title="Total Revenue"
      :value="revenue"
      prefix="$"
      format="compact"
      trend="up"
      trend-value="+12.5%"
    />
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
</template>
