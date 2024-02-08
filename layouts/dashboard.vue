<template>
  <div>
    <DashboardHeader />
    <UMain>
      <UPage class="p-4">
        <template #left>
          <UAside :links="links">
            <template #top>
              <UVerticalNavigation
                :links="vertLinks"
                class="mb-6"
              />
            </template>
            <UDivider
              type="dashed"
              class="my-6"
            />

            <div class="h-60">test</div>
            <UDivider
              type="dashed"
              class="my-6"
            />
          </UAside>
        </template>

        <UPageBody>
          <slot />
        </UPageBody>
      </UPage>
    </UMain>
    <ClientOnly>
      <LazyUDocsSearch
        :files="files"
        :navigation="navigation"
        :links="links"
      />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">
const { data: navigation } = await useAsyncData('navigation', () =>
  fetchContentNavigation()
);
const { data: files } = useLazyFetch<ParsedContent[]>('/api/search.json', {
  default: () => [],
  server: false,
});

const links = [
  {
    label: 'Docs',
    icon: 'i-heroicons-book-open',
    to: '/getting-started',
  },
  {
    label: 'Pro',
    icon: 'i-heroicons-square-3-stack-3d',
    to: '/pro',
  },
  {
    label: 'Pricing',
    to: '/pro/pricing',
    icon: 'i-heroicons-credit-card',
  },
  {
    label: 'Templates',
    icon: 'i-heroicons-computer-desktop',
    to: '/pro/templates',
  },
  {
    label: 'Releases',
    icon: 'i-heroicons-rocket-launch',
    to: '/releases',
  },
];

const vertLinks = [
  [
    {
      label: 'Profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
      },
      to: '/dashboard/profile',
    },
    {
      label: 'Dashboard',
      icon: 'i-heroicons-home',
      to: '/dashboard',
    },
  ],
  [
    {
      label: 'Messages',
      icon: 'i-heroicons-chat-bubble-left',
      to: '/dashboard',
    },
    {
      label: 'Teams',
      icon: 'i-heroicons-user-group',
      to: '/dashboard',
    },
  ],
  [
    {
      label: 'Files',
      icon: 'i-heroicons-folder',
      to: '/dashboard',
    },
    {
      label: 'Projects',
      icon: 'i-heroicons-squares-plus',
      to: '/dashboard',
    },
  ],
];

provide('navigation', navigation);
provide('files', files);
</script>
