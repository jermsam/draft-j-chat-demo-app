<template>
  <q-input
    square
    standout
    :outlined="$q.dark.mode"
    :filled="!$q.dark.mode"
    :bg-color="$q.dark.mode? 'transparent' : 'white'"
    dense
    v-bind="$attrs"
    label-slot
    :model-value="modelValue"
    @update:model-value="$emit('update:model-value', $event)"
  >
    <!--    <template #prepend>
          <q-btn round size="sm" flat>
          <slot name="prepend">
          </slot>
          </q-btn>
        </template>

        <template #append>
          <q-btn round size="sm" flat>
          <slot name="append">
          </slot>
          </q-btn>
        </template>-->

    <template v-for="(_,slot) in $slots" #[slot]="props" :key="slot">
      <slot :name="slot" v-bind="{props}">
      </slot>
    </template>

  </q-input>
</template>

<script setup lang="ts">
// import { useAttrs, computed } from 'vue';
import { useQuasar } from 'quasar';

defineProps(['modelValue']);
defineEmits(['update:model-value']);
// const $attrs = useAttrs();
const $q = useQuasar();


// const attrs = computed(() => {
//   let attrs = { ...$attrs };
//
//   return attrs;
// });
</script>

<style scoped lang="scss">

</style>
