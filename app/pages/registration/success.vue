<template>
  <provet-card class="n-align-center">
    <provet-icon size="xl" name="interface-checked-circle" color="green"/>
    <h2>Registration Successful</h2>
    <h4>Welcome {{ user.email }}</h4>
    <span v-if="user.receiveNewsletter">Thank you for subscribing to our newsletter!</span>
  </provet-card>
</template>

<script setup>
import {useUserStore} from '@/stores/user';

const userStore = useUserStore();
const {user} = storeToRefs(userStore);

onMounted(() => {
  if (user.isSuccess === false) {
    user.isSuccess = true;
  }
})

useHead({
  title: 'Registration Successful'
})
definePageMeta({
  layout: "auth",
  middleware: "auth-success"
})

</script>