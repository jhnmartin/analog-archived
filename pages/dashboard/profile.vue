<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});

const loading = ref(true);
const username = ref('');
const website = ref('');
const avatar_path = ref('');

loading.value = true;
const user = useSupabaseUser();
</script>

<template>
  <p>add profile form</p>
</template>
