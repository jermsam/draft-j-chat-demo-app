<template>
  <q-btn outline color="primary"  no-caps id="SecondaryButton">
    <slot name="default">
      Button
    </slot>
  </q-btn>
</template>

<script setup>

</script>

<style scoped lang="scss">
#SecondaryButton {
  width: 9.375em;
  height: 2.813em;
  border: 1 solid var(--q-primary);
  border-radius: 0.938em;
  :deep(.block) {
    font-size: 0.938em;
   }
}
</style>
