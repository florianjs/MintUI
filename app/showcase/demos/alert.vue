<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <UiAlert
        title="Information"
        description="Important information to read."
      />
    </div>
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="space-y-3">
        <UiAlert
          variant="success"
          title="Success"
          description="The operation completed successfully."
        />
        <UiAlert
          variant="warning"
          title="Warning"
          description="Check settings before continuing."
        />
        <UiAlert
          variant="destructive"
          title="Error"
          description="An error occurred, please try again."
        />
      </div>
    </div>
  </div>
</template>
