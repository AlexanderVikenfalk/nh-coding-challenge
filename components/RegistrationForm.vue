<template>
  <form id="registration_form" class="n-stack n-gap-m" @submit.prevent="onSubmit" novalidate>
    <provet-stack gap="l" direction="vertical" align-items="stretch">
      <provet-input
          name="email"
          type="email"
          label="Email"
          v-model="email"
          autocomplete="email"
          expand
          required
          :error="errors.email"
          :disabled="isPending"
      />

      <provet-input
          name="password"
          :type="showPassword ? 'text' : 'password'"
          label="Password"
          v-model="password"
          autocomplete="off"
          expand
          required
          :error="errors.password"
          :disabled="isPending"
          hint="Has to be at least 6 characters"
      >
        <provet-button
            @click="showPassword = !showPassword"
            aria-describedby="password-tooltip"
            type="button"
            slot="end"
            :disabled="isPending"
        >
          <provet-icon :name="showPassword ? 'interface-edit-on' : 'interface-edit-off'"/>
        </provet-button>
      </provet-input>

      <provet-tooltip id="password-tooltip">
        <span>{{ showPassword ? 'hide password' : 'show password' }}</span>
      </provet-tooltip>

      <provet-input
          name="confirmPassword"
          :type="showPassword ? 'text' : 'password'"
          label="Confirm Password"
          v-model="confirmPassword"
          autocomplete="off"
          expand
          required
          :disabled="isPending"
          :error="errors.confirmPassword"
      />
      <provet-checkbox
          name="receiveNewsletter"
          type="checkbox"
          label="I would like to receive product updates and announcements"
          :disabled="isPending"
          v-model="receiveNewsletter"
      />

      <provet-button
          variant="primary"
          type="submit"
          expand
          :aria-label="isPending ? 'Loading' : ''"
          :disabled="!meta.valid || isPending"
      >
        <provet-spinner v-if="isPending"></provet-spinner>
        <span v-else>Register</span>
      </provet-button>
    </provet-stack>
  </form>
</template>

<script setup lang="ts">
import {useForm} from "vee-validate";
import {toTypedSchema} from "@vee-validate/zod";
import {userSchema} from "~/utils/userSchema"
import {useUserStore} from '~/stores/user'

const {errors, defineField, meta, handleSubmit} = useForm({validationSchema: toTypedSchema(userSchema)})
const user = useUserStore();

const [email] = defineField('email')
const [password] = defineField('password')
const [confirmPassword] = defineField('confirmPassword')
const [receiveNewsletter] = defineField('receiveNewsletter')

const showPassword = ref<boolean>(false);
const {isPending} = storeToRefs(user);

const onSubmit = handleSubmit((userData: UserData) => {
  user.register(userData)
})
</script>
