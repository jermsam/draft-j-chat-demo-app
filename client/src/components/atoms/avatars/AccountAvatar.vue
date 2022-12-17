<template>
  <q-avatar  size="2.5rem" v-bind="$attrs">
    <img :src="avatar" :alt="alt" style="object-fit: cover" />
  </q-avatar>
</template>

<script setup>
defineProps({
  avatar: {
    type: String,
    required: true
  },
  alt: {
    type: String,
    default: 'profile image'
  }
})
</script>

<style scoped>

</style>
