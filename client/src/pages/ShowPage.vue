<template>
<q-page>
  <div class="column items-center">
    <image-uploader/>
  </div>
  <div class="column items-center">
<show-martha-list-item
avatar="https://stvp.stanford.edu/wp-content/uploads/sites/3/2020/07/Johnson-Bryce_STVP_PEAK-Fellow_2020-1.jpg"
name="Bryce Johnson"
status="Online"
/>
    <show-martha-list/>
  </div>
</q-page>
</template>

<script setup>
import ImageUploader from 'components/atoms/ImageUploader.vue';
import ShowMarthaListItem from '../components/molecules/ShowMarthaListItem.vue';
import ShowMarthaList from '../components/organisms/ShowMarthaList.vue';

</script>

<style scoped>



</style>
