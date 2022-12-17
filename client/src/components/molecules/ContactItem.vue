<template>
  <q-item class="q-my-sm" clickable v-ripple v-bind="$attrs">
    <q-item-section avatar>
      <account-avatar :avatar="avatar" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{name }}</q-item-label>
      <q-item-label caption lines="1">
        <slot name="detail">

      </slot>
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <slot name="side">

      </slot>
    </q-item-section>
  </q-item>

</template>

<script setup>
import AccountAvatar from 'components/atoms/avatars/AccountAvatar.vue';

defineProps({
  avatar:{
    type: String,
    required: true
  },
  name:{
    type: String,
    required: true
  },
})

</script>

<style scoped>

</style>
