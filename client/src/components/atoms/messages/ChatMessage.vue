<template>
  <q-chat-message
    :text="text"
    id="ChatMessage"
    stamp="7 mins ago"
    sent
    v-bind="$attrs"
  >

  </q-chat-message>
</template>

<script setup>
import { computed } from 'vue';
import { useQuasar } from 'quasar';

const props = defineProps({
  text: {
    type: Array,
    default() {
      return ['hey, how are you?']
    }
  },
  sent: Boolean
})

const $q = useQuasar()

const borderRadius = computed(function(){
  return props.sent? '36px 0 36px 36px': '0 36px 36px 36px'
});

const color = computed(function(){
  return props.sent? 'var(--q-dark)': 'white'
})


const sentColor = computed(function(){
  return !$q.dark.mode? '#eeeeee': 'var(--q-secondary)'
})
const backgroundColor = computed(function(){
  return props.sent? sentColor.value: 'var(--q-primary)'
})




const stampXPosition = computed(function(){
  return props.sent? '': '7%'
})

</script>

<style scoped lang="scss">

#ChatMessage {

  &:deep(.q-message-text) {

    background: v-bind(backgroundColor);
    border-radius: v-bind(borderRadius);
    padding: 1rem 1rem 2rem;
    border: 1px solid var(--q-secondary);
    position: relative;
    &:before {
      content: none;
    }
  }

  &:deep(.q-message-text-content) {
    color: v-bind(color);
  }

  &:deep(.q-message-label) {
    margin: 0 1.8rem;
    text-align: start;
  }

  &:deep(.q-message-stamp) {
    margin-top: 0.5rem;
    position: absolute;
    right: v-bind(stampXPosition);
    bottom: 0.5rem;
  }


}

</style>
