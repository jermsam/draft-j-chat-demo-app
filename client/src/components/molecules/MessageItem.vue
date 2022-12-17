<template>
  <q-item>
    <q-item-section top avatar class="column items-center">
     <account-avatar :avatar="avatar" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ name }}</q-item-label>
      <q-item-label caption  v-snip="{ lines: 1, mode: 'js', midWord: false }">
        {{text}}
      </q-item-label>
    </q-item-section>

    <q-item-section side top>
      <q-item-label caption>{{ stamp }}</q-item-label>
      <q-item-label caption class="row justify-between no-wrap">
        <slot name="indicators"></slot>
      </q-item-label>


    </q-item-section>
  </q-item>
</template>

<script setup>
import AccountAvatar from 'components/atoms/avatars/AccountAvatar.vue';
defineProps({
  avatar: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  text: {
    type: String,
    required: true
  },
  stamp: {
    type: String,
    required: true
  },
})
</script>

<style scoped lang="scss">
.q-item__section {
  min-width: 2em;
  &.q-item__section--side{
    padding: 0;
  }
  &.q-item__section--main{
    padding: 0 0.5em;
  }
}

</style>
