<template>
  <div class="n-align-center">
    <provet-icon size="xxl" name="interface-checked-circle" color="green"/>
    <section class="n-padding-m">
      <h1 class="n-typescale-xxl">Registration Successful</h1>
      <h4>Welcome, {{ user?.email }}</h4>
      <p v-if="user?.receiveNewsletter" class="n-color-text-weaker">Thank you for subscribing to our newsletter!</p>
    </section>
    <NuxtLink to="/">
      <provet-button @click="resetCurrentUser" variant="primary">Home</provet-button>
    </NuxtLink>
  </div>
</template>

<script setup>
const userStore = useUserStore();
const user = computed(() => userStore.user);

useHead({
  title: 'Registration Successful'
})
definePageMeta({
  middleware: "redirect-to-register"
})

function resetCurrentUser() {
  userStore.reset();
}

</script>