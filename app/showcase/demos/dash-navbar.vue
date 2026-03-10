<template>
  <div class="space-y-6">
    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Default
      </p>
      <div class="rounded-lg border overflow-hidden">
        <UiDashNavbar>
          <div class="flex items-center gap-2">
            <span class="text-sm font-semibold">Dashboard</span>
            <span class="text-muted-foreground">/</span>
            <span class="text-sm text-muted-foreground">Analytics</span>
          </div>
          <div class="flex items-center gap-2">
            <UiButton size="sm" variant="outline">Export</UiButton>
            <UiButton size="sm">+ New Report</UiButton>
          </div>
        </UiDashNavbar>
      </div>
    </div>

    <div>
      <p
        class="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3"
      >
        Variants
      </p>
      <div class="space-y-4">
        <div>
          <p class="text-xs text-muted-foreground mb-2">With search</p>
          <div class="rounded-lg border overflow-hidden">
            <UiDashNavbar>
              <div class="flex items-center gap-4">
                <span class="text-sm font-semibold">Products</span>
                <div
                  class="bg-muted rounded-md px-3 py-1.5 text-sm text-muted-foreground w-48"
                >
                  Search products...
                </div>
              </div>
              <UiButton size="sm">+ Add Product</UiButton>
            </UiDashNavbar>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">With avatar</p>
          <div class="rounded-lg border overflow-hidden">
            <UiDashNavbar>
              <span class="text-sm font-semibold">Settings</span>
              <div class="flex items-center gap-3">
                <UiButton size="sm" variant="ghost">Help</UiButton>
                <UiAvatar fallback="JD" size="sm" />
              </div>
            </UiDashNavbar>
          </div>
        </div>
        <div>
          <p class="text-xs text-muted-foreground mb-2">Minimal</p>
          <div class="rounded-lg border overflow-hidden">
            <UiDashNavbar>
              <span class="text-sm font-semibold">Overview</span>
              <UiButton size="sm" variant="outline">Refresh</UiButton>
            </UiDashNavbar>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
