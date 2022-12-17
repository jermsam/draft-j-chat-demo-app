<template>
  <text-input :type="show? 'text': 'password'" v-bind="$attrs">
    <template #label>
      Password
    </template>
    <template #append >

      <fab-icon :name="show ? 'fa-solid fa-eye-slash':'fas fa-eye'" clickable @click="show = !show"/>
    </template>

    <template v-for="(_,slot) in $slots" #[slot]="props" >
      <slot :name="slot" v-bind="{props}">
      </slot>
    </template>
  </text-input>
</template>

<script setup>
import TextInput from 'components/atoms/inputs/TextInput.vue';
import FabIcon from 'components/atoms/icons/FabIcon.vue';
import { ref } from 'vue';

let show= ref(false);


</script>

<style scoped lang="scss">

</style>
