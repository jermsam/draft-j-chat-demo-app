<template>
  <q-infinite-scroll  @load="onLoad" class="column q-py-sm q-gutter-md" :reverse="false"  v-bind="$attrs">
    <message-item
      v-for="(item, index) in items" :key="index"
      :avatar="item.sender.avatar"
      :name="item.sender.name"
      :text="item.text.join(' ')"
      :stamp="item.stamp"
    >
      <template #indicators>

        <fab-icon name="fa-solid fa-volume-off"/>
        <q-badge v-if=" item.status === 'read'" rounded color="positive" :label="item.text.length" size="1rem"/>
      </template>
    </message-item>

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
import MessageItem from 'components/molecules/MessageItem.vue';
import FabIcon from 'components/atoms/icons/FabIcon.vue';

defineProps({
  group:Boolean
})

// the concept of conversations
const items = ref([
  {
  sent: true,
    status: 'sent',
  sender:{name: 'Musa Kavuma', avatar: 'https://fashionterest.com/wp-content/uploads/2018/10/black-guy-with-blonde-hairstyles-16.jpg'},
    text:['Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus iet porro. Rerum blandabore'],
    stamp:'now'
  },
  {
    sent: true,
    read: true,
    status: 'read',
    sender:{name: 'Felix Tumwebaze', avatar: 'https://cdn.theatlantic.com/thumbor/ICdBfMidLsUdM3OnFxr3ZaPEkok=/561x0:1713x1152/1080x1080/media/img/mt/2017/03/getout/original.jpg'},
    text:['Hello there...'],
    stamp: 'yesterday'
  },
  {
    sent: true,
    read: true,
    status: 'read',
    sender: {
      name: 'JTeam',
      avatar: 'https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=2000',
    },
    text:['Said something about the team','Who knows what','or when'],
    stamp: '12/12/22'
  },
  {
    sent: true,
    read: false,
    status: 'delivered',
    sender:{name: 'Joane Bagonza', avatar:'https://i0.wp.com/blackandinbusiness.com/wp-content/uploads/2022/05/107046537-1649876304946-C5232F6E-9A24-44B7-B2DA-BDAFB6A8AEC3.jpg?fit=1824%2C1264'},
    text:['Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum repellendus iet porro. Rerum blandabore'],
    stamp: 'yesterday'
  },
]);

function  onLoad (index, done) {
  setTimeout(() => {

    // let sent = Math.random() < 0.5;
    let status = Math.random() < 0.3 ? 'sent' : Math.random() < 0.6 ? 'read' : 'delivered';
    items.value.push(
      {
        status,
        sender: {
          name: Math.random() < 0.3?'Musa Kavuma': Math.random() < 0.4 ? 'Annet Basalirwa': 'Paul Okello',
          avatar: Math.random() < 0.3?'https://fashionterest.com/wp-content/uploads/2018/10/black-guy-with-blonde-hairstyles-16.jpg':
            Math.random() < 0.4 ? 'https://img.freepik.com/fotos-gratis/closeup-of-beautiful-black-woman-in-park_1262-6026.jpg':
              'https://media.gq.com/photos/58c6ff3f0197c220f4d9d72e/master/pass/daniel-kaluuya-q&a.jpg',
        },
        text:['What exactly is the meaning of paranoid!'],
        stamp: '12/12/22'
      },
    )
    done()
  }, 2000)
}
</script>

<style scoped>

</style>
