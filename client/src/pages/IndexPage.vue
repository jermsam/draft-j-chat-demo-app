<template>
  <q-page class="row items-center justify-evenly">
    <div>
<!--      <message-list :debounce="300"/>-->
      <message-list group :debounce="300"/>
<!--      <q-img src="~assets/illustration-bro.svg"/>-->
      <chat-illustration/>
      <div style="padding: 10px;">
        <secondary-button />
      </div>
      <div style="padding: 10px;">
        <primary-button />
      </div>
      <div style="padding: 10px;">
        <primary-button @click="goToShow">
          Open
        </primary-button >
      </div>
      <div style="padding: 10px;">
        <fab-button />
      </div>
      <div style="padding: 10px;">
        <fab-button>
          <q-icon name="mdi-phone"></q-icon>
        </fab-button>
      </div>
      <div style="padding: 10px;">
        <chat-message/>
      </div>
      <div style="padding: 10px;">
        <chat-message sent />
      </div>
      <div style="padding: 10px;">
        <chat-message sent label="Sam" :text="text"/>
      </div>
      <div style="padding: 10px;">
        <chat-message  :text="['In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the']"/>
      </div>
     <div style="padding: 10px;">
       <text-input>
         <template #label>
           Email
         </template>
       </text-input>
     </div>

      <div style="padding: 10px;">
{{password}}
     <password-input v-model="password"/>
      </div>


      <div style="padding: 10px;">

       <search-input/>
      </div>
<authentication-form/>
<authentication-form login/>
      <div style="padding: 10px;">
      <account-avatar avatar="https://images.pexels.com/photos/1006195/pexels-photo-1006195.png?auto=compress&cs=tinysrgb&w=1600"/>
      </div>
      <div style="padding: 10px;">
<message-item
  avatar="https://images.pexels.com/photos/1685955/pexels-photo-1685955.jpeg?auto=compress&cs=tinysrgb&w=1600"
  name="Jesicca Atim"
  text="It was not enough what we saw, it was  more ..."
  stamp="Yesterday"
  >
  <template #indicators>

      <fab-icon name="fa-solid fa-volume-off"/>
      <q-badge  rounded color="positive" :label="1" size="1rem"/>
  </template>
</message-item>
      </div>
      <message-log/>
      <div style="padding: 10px;">
        <contact-item
          avatar="https://images.pexels.com/photos/1685955/pexels-photo-1685955.jpeg?auto=compress&cs=tinysrgb&w=1600"
          name="Jesicca Atim"
        />
      </div>
      <contact-list/>

      </div>
  </q-page>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import SecondaryButton from 'components/atoms/buttons/SecondaryButton.vue';
import PrimaryButton from 'components/atoms/buttons/PrimaryButton.vue';
import FabButton from 'components/atoms/buttons/FabButton.vue';
import ChatMessage from 'components/atoms/messages/ChatMessage.vue';
import ChatIllustration from 'components/atoms/ChatIllustration.vue';
import TextInput from 'components/atoms/inputs/TextInput.vue';
import PasswordInput from 'components/molecules/PasswordInput.vue';
import SearchInput from 'components/molecules/SearchInput.vue';
import MessageList from 'components/molecules/MessageList.vue';
import AuthenticationForm from 'components/organisms/AuthenticationForm.vue';
import AccountAvatar from 'components/atoms/avatars/AccountAvatar.vue';
import MessageItem from 'components/molecules/MessageItem.vue';
import FabIcon from 'components/atoms/icons/FabIcon.vue';
import MessageLog from 'components/organisms/MessageLog.vue';
import ContactItem from 'components/molecules/ContactItem.vue';
import ContactList from 'components/organisms/ContactList.vue';


let password = ref('');

let text = ref(['In publishing and graphic design  Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of',
  'a document or a typeface without relying ' +
  'on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available.'])

const router = useRouter();

function goToShow(){
  router.push('/abc')
}
</script>

<style scoped lang="scss">

</style>
