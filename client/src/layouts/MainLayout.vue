<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar :class="dark ? 'bg-dark' : 'bg-primary'" >
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title header>
          Romio Chats
        </q-toolbar-title>

        <div>
          <q-toggle
            :color="dark? 'white':'primary'"
            :icon-color="!dark? 'white':'primary'"
          v-model="dark"
          :icon="dark ? 'fas fa-sun': 'fas fa-moon'"
        />
        </div>
      </q-toolbar>
    </q-header>

    <q-footer>
      <message-input/>
<!--    <q-toolbar :class="$q.dark.mode ? 'bg-dark' : 'bg-primary'">
      <q-btn
        flat
        dense
        round
        icon="fa-solid fa-face-smile"
        aria-label="Open Emoji"
      />
      <q-toolbar-title class="q-py-md">
        <text-input
          model-value=""
          placeholder="Type your message ..."
          autogrow
          autofocus
        />
      </q-toolbar-title>
      <q-btn
        flat
        dense
        round
        icon="fa-solid fa-paper-plane"
        aria-label="Send Message"
      />
    </q-toolbar>-->
    </q-footer>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          :dark="dark"
          v-for="link in essentialLinks"
          :key="link.title"
           v-bind="link"
          @click="active = link.title"
          :active="active === link.title"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue';
import EssentialLink from 'components/EssentialLink.vue';
import {useQuasar} from 'quasar';
// import TextInput from '../components/atoms/inputs/TextInput.vue';
import MessageInput from '../components/molecules/MessageInput.vue';

let dark = ref(false);
let active = ref('');

const $q = useQuasar();

watch(dark, function(newVal) {
    $q.dark.set(newVal)
},{immediate: true})

const essentialLinks = [
  {
    title: 'Docs',
    caption: 'quasar.dev',
    icon: 'school',
    link: 'https://quasar.dev'
  },
  {
    title: 'Github',
    caption: 'github.com/quasarframework',
    icon: 'code',
    link: 'https://github.com/quasarframework'
  },
  {
    title: 'Discord Chat Channel',
    caption: 'chat.quasar.dev',
    icon: 'chat',
    link: 'https://chat.quasar.dev'
  },
  {
    title: 'Forum',
    caption: 'forum.quasar.dev',
    icon: 'record_voice_over',
    link: 'https://forum.quasar.dev'
  },
  {
    title: 'Twitter',
    caption: '@quasarframework',
    icon: 'rss_feed',
    link: 'https://twitter.quasar.dev'
  },
  {
    title: 'Facebook',
    caption: '@QuasarFramework',
    icon: 'public',
    link: 'https://facebook.quasar.dev'
  },
  {
    title: 'Quasar Awesome',
    caption: 'Community Quasar projects',
    icon: 'favorite',
    link: 'https://awesome.quasar.dev'
  }
];

const leftDrawerOpen = ref(false)

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value
}
</script>
