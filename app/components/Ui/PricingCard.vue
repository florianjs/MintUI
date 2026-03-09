<script setup lang="ts">
import { computed } from 'vue';
import UiCard from './Card.vue';
import UiCardHeader from './CardHeader.vue';
import UiCardTitle from './CardTitle.vue';
import UiCardDescription from './CardDescription.vue';
import UiCardContent from './CardContent.vue';
import UiCardFooter from './CardFooter.vue';
import UiButton from './Button.vue';

defineOptions({ name: 'UiPricingCard' });

interface Props {
  title: string;
  description?: string;
  price: string;
  period?: string;
  features?: string[];
  isPopular?: boolean;
  popularText?: string;
  buttonText?: string;
  buttonVariant?:
    | 'default'
    | 'destructive'
    | 'outline'
    | 'secondary'
    | 'ghost'
    | 'link';
}

const props = withDefaults(defineProps<Props>(), {
  description: '',
  period: '/month',
  features: () => [],
  isPopular: false,
  popularText: 'Most Popular',
  buttonText: 'Get Started',
  buttonVariant: 'default',
});

const emit = defineEmits<{
  click: [Event];
}>();

const cardVariant = computed(() => {
  return props.isPopular ? 'elevated' : 'default';
});

const appliedButtonVariant = computed(() => {
  if (props.buttonVariant !== 'default') return props.buttonVariant;
  return props.isPopular ? 'default' : 'outline';
});
</script>

<template>
  <UiCard
    :variant="cardVariant"
    :class="[
      'relative flex h-full flex-col justify-between transition-all duration-300',
      isPopular
        ? 'border-primary ring-2 ring-primary ring-offset-2 ring-offset-background'
        : 'border-border',
    ]"
  >
    <div
      v-if="isPopular"
      class="absolute -top-4 left-0 right-0 mx-auto w-max rounded-full bg-primary px-3 py-1 text-xs font-semibold text-primary-foreground shadow-sm"
    >
      {{ popularText }}
    </div>

    <div>
      <UiCardHeader class="pb-8 pt-6">
        <UiCardTitle class="text-xl">{{ title }}</UiCardTitle>
        <UiCardDescription v-if="description" class="pt-1.5">{{
          description
        }}</UiCardDescription>
      </UiCardHeader>

      <UiCardContent class="pb-8">
        <div
          class="mb-4 flex items-baseline text-5xl font-extrabold tracking-tight"
        >
          {{ price }}
          <span
            v-if="period"
            class="ml-1 text-xl font-medium text-muted-foreground"
            >{{ period }}</span
          >
        </div>

        <ul class="space-y-3 pt-6">
          <li
            v-for="(feature, index) in features"
            :key="index"
            class="flex items-start"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="mr-3 h-5 w-5 shrink-0 text-primary"
            >
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span class="text-sm text-muted-foreground">{{ feature }}</span>
          </li>
        </ul>
      </UiCardContent>
    </div>

    <UiCardFooter>
      <UiButton
        class="w-full"
        :variant="appliedButtonVariant"
        @click="emit('click', $event)"
      >
        {{ buttonText }}
      </UiButton>
    </UiCardFooter>
  </UiCard>
</template>
