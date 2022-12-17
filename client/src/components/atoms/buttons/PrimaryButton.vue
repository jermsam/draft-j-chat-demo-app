<template>
  <q-btn   color="primary"  no-caps id="PrimaryButton">
    <slot>
      Button
    </slot>
  </q-btn>
</template>

<script setup>

</script>

<style scoped lang="scss">
#PrimaryButton{
  width: 9.375em;
  height: 2.813em;
  border: 1 solid var(--q-primary);
  border-radius: 0.938em;
  :deep(.block) {
    font-size: 0.938em;
   }
}
</style>
