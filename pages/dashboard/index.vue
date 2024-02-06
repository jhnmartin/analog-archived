<template>
  <UPage>
    <p>dashboard</p>
    <UButton
      label="Add an organization"
      @click="toast.add({ title: 'Setting up your org' })"
    />
  </UPage>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'dashboard',
});

const toast = useToast();
</script>
