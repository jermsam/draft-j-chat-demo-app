<template>
  <q-item
    clickable
    tag="a"
    target="_blank"
    :active="active"
    active-class="activeClass"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" :color="$q.dark.mode || active ? 'white': 'primary'"/>
    </q-item-section>

    <q-item-section >
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption :class="active? 'text-white': 'text-primary'">{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import {computed} from 'vue';

interface EssentialLinkProps {
  title: string;
  caption?: string;
  link?: string;
  icon?: string;
  active?: boolean;
  dark?: boolean;
}
const props = withDefaults(defineProps<EssentialLinkProps>(), {
  caption: '',
  link: '#',
  icon: '',
  active: false,
});

const activeBackgroundColor = computed(()=> props.dark ? 'var(--q-primary)': 'var(--q-primary)')

</script>
<style scoped lang="scss">
.activeClass {
  background: v-bind(activeBackgroundColor);
  color: white
}
</style>
