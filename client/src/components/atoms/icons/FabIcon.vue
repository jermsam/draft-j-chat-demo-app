<template>
  <a
    class="cursor-pointer"
    v-if="clickable"
    @click="$emit('click')"
  >
    <q-icon dark :name="name" :size="size" :color="$q.dark.mode ? 'white': 'primary'" v-bind="$attrs"/>
  </a>
  <q-icon v-else dark :name="name" :size="size" :color="$q.dark.mode ? 'white': 'primary'" v-bind="$attrs"/>
</template>

<script setup>
defineProps( {
  name: {
    type: String,
    required: true,
  },
  size: {
    type: String,
    default: '1rem',
  },
  clickable: Boolean,
})
defineEmits(['click'])
</script>

<style scoped lang="scss">

</style>
