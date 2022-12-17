<template>
  <q-btn   color="secondary"  no-caps id="FabButton">
    <slot>
      <q-icon name="fa-regular fa-message"/>
    </slot>
  </q-btn>
</template>

<script setup>

</script>

<style scoped lang="scss">
#FabButton{
  width: 3.75em;
  height: 3.75em;
  border: 1 solid var(--q-primary);
  border-radius: 0.938em;
  :deep(.block) {
    font-size: 0.938em;
   }
}
</style>
