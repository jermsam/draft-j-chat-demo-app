<template>
  <q-infinite-scroll  @load="onLoad" class="column q-py-sm q-gutter-md" :reverse="false"  v-bind="$attrs">
   <contact-item
     v-for="(item, index) in items" :key="index"
     :avatar="item.avatar"
     :name="item.name"
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
import ContactItem from 'components/molecules/ContactItem.vue';


defineProps({
  group:Boolean
})

// the concept of conversations
const items = ref([
  {
    name: 'Musa Kavuma',
    avatar: 'https://fashionterest.com/wp-content/uploads/2018/10/black-guy-with-blonde-hairstyles-16.jpg'
  },
  {
    name: 'Felix Tumwebaze',
    avatar: 'https://cdn.theatlantic.com/thumbor/ICdBfMidLsUdM3OnFxr3ZaPEkok=/561x0:1713x1152/1080x1080/media/img/mt/2017/03/getout/original.jpg'
  },
  {
    name: 'JTeam',
    avatar: 'https://img.freepik.com/free-vector/high-school-concept-illustration_114360-8279.jpg?w=2000',
  },
  {
    name: 'Joane Bagonza',
    avatar:'https://i0.wp.com/blackandinbusiness.com/wp-content/uploads/2022/05/107046537-1649876304946-C5232F6E-9A24-44B7-B2DA-BDAFB6A8AEC3.jpg?fit=1824%2C1264'
  },
]);

function  onLoad (index, done) {
  setTimeout(() => {

    items.value.push(
      {
          name: Math.random() < 0.3?'Musa Kavuma': Math.random() < 0.4 ? 'Annet Basalirwa': 'Paul Okello',
          avatar: Math.random() < 0.3?'https://fashionterest.com/wp-content/uploads/2018/10/black-guy-with-blonde-hairstyles-16.jpg':
            Math.random() < 0.4 ? 'https://img.freepik.com/fotos-gratis/closeup-of-beautiful-black-woman-in-park_1262-6026.jpg':
              'https://media.gq.com/photos/58c6ff3f0197c220f4d9d72e/master/pass/daniel-kaluuya-q&a.jpg',
      },
    )
    done()
  }, 2000)
}
</script>

<style scoped>

</style>
