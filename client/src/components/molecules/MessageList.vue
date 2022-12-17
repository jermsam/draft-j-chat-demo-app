<template>
  <q-infinite-scroll  @load="onLoad" class="column q-pa-sm q-gutter-md" reverse  v-bind="$attrs">

     <chat-message
       v-for="(item, index) in items" :key="index"
       :sent="!!item.sent" style="max-width:90%;"
       :label="group && !!item.sent? item?.sender?.name:''"
        :class="!item.sent? 'self-end': 'self-start'"
       :text="['Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus iet porro. Rerum blandabore']"
     />

    <template v-slot:loading>
     <slot name="loading">
       <div class="row justify-center q-my-md">
         <q-spinner-dots color="primary" size="40px" />
       </div>
     </slot>
    </template>
  </q-infinite-scroll>
</template>

<script setup>
import { ref } from 'vue';
import ChatMessage from 'components/atoms/messages/ChatMessage.vue';

defineProps({
  group:Boolean
})

const items = ref([ {sent: true, sender:{name: 'Musa Kavuma'} }, {}, {}, {sent: true, sender:{name: 'Felix Tumwebaze'}}, {sent: true, sender:{name: 'Joane Bagonza'}}, {}, {} ]);

function  onLoad (index, done) {
  setTimeout(() => {
    let sent  = Math.random() < 0.5;
    items.value.unshift(
      {sent,  sender: {name: Math.random() < 0.3?'Musa Kavuma': Math.random() < 0.4 ? 'Annet Basalirwa': 'Paul Okello'}},
      {sent:Math.random() < 0.7 ,  sender: {name: Math.random() < 0.3?'Musa Kavuma': Math.random() < 0.4 ? 'Annet Basalirwa': 'Paul Okello'}},
      {sent:Math.random() < 0.4 ,  sender: {name: Math.random() < 0.1?'Musa Kavuma': Math.random() < 0.3 ? 'Annet Basalirwa': 'Paul Okello'}},
    )
    done()
  }, 2000)
}
</script>

<style scoped>

</style>
