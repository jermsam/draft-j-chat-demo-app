<template>
  <text-input  @focus="focused = true" @blur="focused=false" v-bind="attrs">
    <template #prepend >
      <fab-icon v-if="focused" name="fa-solid fa-arrow-left-long" clickable @click="search"/>
      <fab-icon v-else name="fas fa-search" clickable @click="search"/>
    </template>
    <template #append >

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
import { computed, ref, useAttrs } from 'vue';
const $attrs = useAttrs();

let focused = ref(false);

const attrs = computed(()=>{
  let attrs = { ...$attrs };
  attrs['label'] = focused.value ? '' :$attrs['label'] || 'Search...';
  return attrs;
})

function search() {
  focused.value = false;
  console.log('search');
}
</script>

<style scoped lang="scss">

</style>
