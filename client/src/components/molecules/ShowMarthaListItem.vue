<template>
  <q-item class="q-my-sm" clickable v-ripple>
    <q-item-section avatar>
      <account-avatar :avatar="avatar"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption lines="1">{{ status }}</q-item-label>
    </q-item-section>

    <q-item-section side>
      <div class="row q-gutter-sm">
        <fab-icon name="o_chat_bubble" @click="$emit('open-chat')"/>
        <fab-icon name="sym_o_more_vert" @click="$emit('open-menu')"/>
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>

import AccountAvatar from '../atoms/avatars/AccountAvatar.vue';
import FabIcon from '../atoms/icons/FabIcon.vue';

defineProps({
  avatar: {
    type: String,
    require: true
  },
  name: {
    type: String,
    require: true
  },
 status: {
    type: String,
    require: true
  },
});

defineEmits(['open-chat', 'open-menu'])

</script>

<style scoped>

</style>
