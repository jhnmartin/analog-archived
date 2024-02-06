<template>
  <ULandingHero
    title="Supercharged Live Event Management for Artists, Venues, and Promoters"
    description="Real-time collaboration and communication tools for live events."
    orientation="vertical"
    :links="[
      {
        label: 'Get Started For Free',
        icon: 'i-heroicons-rocket-launch',
        color: 'gray',
        size: 'lg',
      },
    ]"
  >
    <template #headline>
      <UButton
        color="gray"
        to="https://volta.net/changelog"
        label="View the Road Map For Upcoming Features"
        trailing-icon="i-heroicons-arrow-right"
        size="xs"
        class="rounded-full"
      />
    </template>
    <template #default>
      <img
        src="/images/rock-band-on-stage.jpg"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </template>
  </ULandingHero>
</template>
