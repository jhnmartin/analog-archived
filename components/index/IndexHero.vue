<template>
  <ULandingHero
    title="Supercharged GitHub experience"
    description="Work in real-time with your team on open-source and private repositories, all in one place. Working on GitHub issues and notifications has never been that fun."
    orientation="vertical"
    :links="[
      {
        label: 'Continue with GitHub',
        icon: 'i-simple-icons-github',
        color: 'gray',
        size: 'lg',
      },
    ]"
  >
    <template #headline>
      <UButton
        color="gray"
        to="https://volta.net/changelog"
        label="See what's new in v1.17.0"
        trailing-icon="i-heroicons-arrow-right"
        size="xs"
        class="rounded-full"
      />
    </template>
    <template #default>
      <img
        src="https://picsum.photos/640/360"
        class="w-full rounded-md shadow-xl ring-1 ring-gray-300 dark:ring-gray-700"
      />
    </template>
  </ULandingHero>
</template>
