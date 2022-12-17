<template>
<q-form v-bind="$attrs"  class="column q-gutter-md items-center" >
  <q-card flat style="max-width: 50em; min-width: 35vw;" class="q-pa-md bg-transparent">
    <div class="column items-center q-gutter-sm">
      <q-toolbar-title>{{title}}</q-toolbar-title>
      <p class="text-caption" >{{description}}</p>
    </div>
    <q-card-section>

      <div class="column q-gutter-md">
       <slot name="form-fields">

       </slot>
     </div>

    </q-card-section>
    <q-card-actions align="center" class="q-mt-sm">
      <slot name="action-buttons">
        <primary-button :label="submitBtnLabel" type="submit" />
      </slot>
    </q-card-actions>
  </q-card>
</q-form>
</template>

<script setup>
import PrimaryButton from 'components/atoms/buttons/PrimaryButton.vue';

defineProps({
  title: {
    type: String,
    default: 'Title Here'
  },
  description: {
    type: String,
    default: 'Some description here'
  },
  submitBtnLabel: {
    type: String,
    default: 'Send'
  },
})
</script>

<style scoped>

</style>
