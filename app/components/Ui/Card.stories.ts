import type { Meta, StoryObj } from '@storybook/vue3';
import UiCard from './Card.vue';
import UiCardHeader from './CardHeader.vue';
import UiCardTitle from './CardTitle.vue';
import UiCardDescription from './CardDescription.vue';
import UiCardContent from './CardContent.vue';
import UiCardFooter from './CardFooter.vue';
import UiButton from './Button.vue';

const meta: Meta<typeof UiCard> = {
  title: 'Ui/Card',
  component: UiCard,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  render: () => ({
    components: {
      UiCard,
      UiCardHeader,
      UiCardTitle,
      UiCardDescription,
      UiCardContent,
      UiCardFooter,
      UiButton,
    },
    template: `
      <UiCard class="w-[350px]">
        <UiCardHeader>
          <UiCardTitle>Card Title</UiCardTitle>
          <UiCardDescription>Card description with supporting text.</UiCardDescription>
        </UiCardHeader>
        <UiCardContent>
          <p>Card content goes here. This is where the main information is displayed.</p>
        </UiCardContent>
        <UiCardFooter>
          <UiButton variant="outline" size="sm">Cancel</UiButton>
          <UiButton size="sm" class="ml-2">Save</UiButton>
        </UiCardFooter>
      </UiCard>
    `,
  }),
};

export const Simple: Story = {
  render: () => ({
    components: { UiCard, UiCardHeader, UiCardTitle, UiCardContent },
    template: `
      <UiCard class="w-[350px]">
        <UiCardHeader>
          <UiCardTitle>Notifications</UiCardTitle>
        </UiCardHeader>
        <UiCardContent>
          <p class="text-sm text-muted-foreground">You have 3 unread messages.</p>
        </UiCardContent>
      </UiCard>
    `,
  }),
};
