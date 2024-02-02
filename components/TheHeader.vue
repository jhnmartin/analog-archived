<script setup lang="ts">
const links = [
  {
    label: 'Docs',
    icon: 'i-heroicons-book-open',
    to: '/getting-started',
  },
  {
    label: 'Pricing',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/pricing',
  },
  {
    label: 'Resources',
    icon: 'i-heroicons-rocket-launch',
    to: '/resources',
  },
];
</script>

<template>
  <UHeader
    :links="links"
    :ui="{ container: 'max-w-none' }"
  >
    <template #logo></template>

    <template #right>
      <UButton label="Sign Up" />
      <UButton label="Login" />
      <UColorModeButton />
    </template>

    <template #panel>
      <UVerticalNavigation :links="links" />
    </template>
  </UHeader>
</template>
