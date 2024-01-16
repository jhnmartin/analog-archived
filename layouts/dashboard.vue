<template>
  <div>
    <div>logo<a href="/">Home</a></div>

    <slot />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'dashboard',
});
</script>
