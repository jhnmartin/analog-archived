<template>
  <UPageHeader title="Dashboard" />
  <UPageGrid class="py-12">
    <UPageCard
      title="Tailwind CSS"
      description="Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS."
      icon="i-simple-icons-tailwindcss"
      to="https://nuxt.com/modules/tailwindcss"
      target="_blank"
    />
    <UPageCard
      title="Tailwind CSS"
      description="Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS."
      icon="i-simple-icons-tailwindcss"
      to="https://nuxt.com/modules/tailwindcss"
      target="_blank"
    />
    <UPageCard
      title="Tailwind CSS"
      description="Add Tailwind CSS to your Nuxt application in seconds with PurgeCSS included for minimal CSS."
      icon="i-simple-icons-tailwindcss"
      to="https://nuxt.com/modules/tailwindcss"
      target="_blank"
    />
    <UButton
      label="Add an organization"
      @click="isOpen = true"
    />
  </UPageGrid>

  <p>dashboard</p>
  <UModal v-model="isOpen">
    <div class="p-4">
      <UForm
        :validate="validate"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup
          label="Organization Name"
          name="name"
        >
          <UInput
            v-model="state.name"
            type="text"
          />
        </UFormGroup>

        <UButton
          type="submit"
          @click="toast.add({ title: 'Setting up your org' })"
        >
          Submit
        </UButton>
      </UForm>
    </div>
  </UModal>
</template>

<script setup lang="ts">
import type { FormError, FormSubmitEvent } from '#ui/types';

definePageMeta({
  layout: 'dashboard',
});

const state = reactive({
  name: undefined,
});

const validate = (state: any): FormError[] => {
  const errors = [];
  if (!state.name) errors.push({ path: 'name', message: 'Required' });
  return errors;
};

const supabase = useSupabaseClient();
async function onSubmit(event: FormSubmitEvent<any>) {
  // Do something with data

  const { data, error } = await supabase
    .from('organizations')
    .insert([{ name: event.data.name }])
    .select();

  console.log(event.data);
}
const toast = useToast();
const isOpen = ref(false);
</script>
