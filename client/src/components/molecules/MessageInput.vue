<template>
  <q-toolbar :class="$q.dark.mode ? 'bg-dark' : 'bg-primary'" v-bind="$attrs">


    <q-toolbar-title class="q-py-md">
      <text-input
        model-value=""
        placeholder="Type your message ..."
        autogrow
        autofocus
      >
        <template #prepend>

            <fab-icon name="fa-solid fa-face-smile"/>

        </template>
        <template #append>
              <fab-icon name="fa-solid fa-paper-plane"/>
        </template>
      </text-input>
    </q-toolbar-title>

  </q-toolbar>

</template>

<script setup lang="ts">

import TextInput from '../atoms/inputs/TextInput.vue';
import FabIcon from 'components/atoms/icons/FabIcon.vue';
</script>

<style scoped lang="scss">
.q-field {
  &:deep(.fa-paper-plane){
    transform: rotate(45deg) ;
  }
}
</style>
