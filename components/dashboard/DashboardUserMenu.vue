import type { UAvatar } from '#build/components';
<script setup lang="ts">
const items = [
  [
    {
      label: 'Profile',
      to: '/dashboard/profile',
      avatar: {
        src: 'https://avatars.githubusercontent.com/u/739984?v=4',
      },
    },
  ],
  [
    {
      label: 'Settings',
      to: '/dashboard/settings',
      icon: 'i-heroicons-cog-20-solid',
    },
    {
      label: 'Notifications',
      to: '/dashboard/notification-preferences',
      icon: 'i-heroicons-bell-20-solid',
    },
  ],
  [
    {
      label: 'Upgrade',
      to: '/dashboard/upgrade',
      icon: 'i-heroicons-bolt-20-solid',
    },
    {
      label: 'Billing',
      to: '/dashboard/billing',
      icon: 'i-heroicons-credit-card-20-solid',
    },
  ],
  [
    {
      label: 'Logout',
      icon: 'i-heroicons-arrow-right-on-rectangle-20-solid',
      shortcuts: ['⌘', 'D'],
      click: () => {
        signOut();
      },
    },
  ],
];

const supabase = useSupabaseClient();
const router = useRouter();
const signOut = async () => {
  const { error } = await supabase.auth.signOut();
  if (error) console.log(error);
  else router.push('/login');
};
</script>

<template>
  <UDropdown
    :items="items"
    :popper="{ placement: 'bottom-start' }"
  >
    <UAvatar src="https://avatars.githubusercontent.com/u/739984?v=4" />
  </UDropdown>
  <UButton
    icon="i-heroicons-arrow-right-on-rectangle"
    variant="ghost"
    color="white"
    @click="signOut"
  />
</template>
