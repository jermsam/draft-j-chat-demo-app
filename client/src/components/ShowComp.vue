<template>
  <div>
    <h1>{{name}}</h1>
 <q-btn label="Rename" @click="changeName"/>
    <q-btn :color="color" label="colourful button" @click="$emit('stuff-changed')"/>
    <q-btn outline :color="color" label="colourful button" @click="doSomeThing"/>
    <q-input v-model="name"/>
    <q-input :model-value="booo" @update:model-value="$emit('@update:booo',$event)"/>
  </div>
</template>

<script setup>


import { ref } from 'vue';

let name = ref('Viola');
let color = ref('primary');

defineProps(['booo'])

const $emit = defineEmits(['stuff-changed','@update:booo'])

function changeName(){
  console.log('Fn ran',name);
  name.value = 'Martha';
  console.log('Fn finished', name);
  color.value='red'
}

function doSomeThing(){
  $emit('stuff-changed',name.value)
}

</script>

<style scoped>

</style>
