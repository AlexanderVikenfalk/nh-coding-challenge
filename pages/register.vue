<template>
  <provet-banner v-if="showAlert" :variant="variant">{{ message }}</provet-banner>
  <provet-card>
    <h1 slot="header" class="header">Create Nord Account</h1>
    <RegistrationForm/>
  </provet-card>
  <provet-card class="n-align-center">
    Already have a Nord Account?
    <NuxtLink to="/login">Login</NuxtLink>
    .
  </provet-card>
</template>

<script setup lang="ts">

import RegistrationForm from "~/components/RegistrationForm.vue";

const alert = useAlertStore();

const {message, showAlert, variant} = storeToRefs(alert);

useHead({
  title: 'Register'
})
definePageMeta({
  layout: "auth"
})
</script>
