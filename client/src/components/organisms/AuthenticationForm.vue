<template>
<div class="column items-center">
  <chat-illustration style="width: 70%"/>
  <form-container :title=" !login ? 'Register'  : 'Login' " :description="`${!login ? 'Get a free': 'To use your'} Romio account`" @submit="signup">
    <template #form-fields>

        <text-input
          v-if="!login"
          v-model="user.name"
          lazy-rules
          :rules="[ val => val && val.length > 3 || 'Name should be at least 3 characters long']"
        >
          <template #label>
            Name
          </template>
        </text-input>
        <text-input
          v-model="user.email"
          lazy-rules
          :rules="[ val => validateEmail(val)|| 'Please enter a valid email']"
        >
          <template #label>
            Email
          </template>
        </text-input>
        <password-input
          v-model="user.password"
          lazy-rules
          :rules="[ val => validatePassword(val)|| 'Must have lower & upper case, a digit & at least 8 characters long']"
        />

    </template>
    <template #action-buttons>
      <div class="column items-center q-gutter-md">
        <primary-button type="submit">
          {{ !login ? 'Sign up ':'Sign in ' }}now
        </primary-button>
        <div>
        <a class="text-caption text-info cursor-pointer" @click="!login ? $emit('sign-in'): $emit('signup')">{{ !login ? 'sign in':'signup' }} </a>
        </div>
      </div>

    </template>
  </form-container>
</div>
</template>

<script setup>
import FormContainer from 'components/molecules/form/FormContainer.vue';
import PasswordInput from 'components/molecules/PasswordInput.vue';
import TextInput from 'components/atoms/inputs/TextInput.vue';
import { reactive } from 'vue';
import ChatIllustration from 'components/atoms/ChatIllustration.vue';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton.vue';
import {validateEmail, validatePassword} from 'src/utils'

const props = defineProps({
  login: Boolean
});
const $emit = defineEmits(['signup','sign-in'])

let user = reactive({
  name:'',
  email:'',
  password: ''
})


function signup(e) {
  e.preventDefault();
  $emit(!props.login ? 'signup': 'sign-in', user.value);
  user.value = {
    name:'',
    email:'',
    password: ''
  }
}

</script>

<style scoped>

</style>
