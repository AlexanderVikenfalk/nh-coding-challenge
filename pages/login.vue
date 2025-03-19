<template>
  <provet-card class="n-align-center">
    <h1 slot="header" class="header">Login Mock</h1>
    <NuxtLink to="/">
      <provet-button variant="primary">Home</provet-button>
    </NuxtLink>
  </provet-card>
</template>

<script setup lang="ts">
useHead({
  title: 'Login'
})
definePageMeta({
  layout: "auth"
})
</script>
