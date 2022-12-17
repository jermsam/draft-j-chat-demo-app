<template>
  <div class="image-uploader-wrapper">
  <dashboard :uppy="uppy" :plugins="['Webcam']"  :props="{theme: $q.dark.mode ?'dark':'light'}" id="ImageUploader"/>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import Uppy from '@uppy/core';
import { Dashboard } from '@uppy/vue'
import Webcam from '@uppy/webcam'
import ThumbnailGenerator from '@uppy/thumbnail-generator'
import '@uppy/core/dist/style.css'
import '@uppy/dashboard/dist/style.css'
import '@uppy/webcam/dist/style.css'
import { useQuasar } from 'quasar';

const $q = useQuasar();

const uppy = computed(()=>new Uppy().use(Webcam,{
  mirror: true,
  showRecordingLength: true
}).use(ThumbnailGenerator, {
  thumbnailWidth: 200,
  // thumbnailHeight: 200 // optional, use either width or height,
  waitForThumbnailsBeforeUpload: true,
}))

// const borderRadius = computed(function(){
//   return props.sent? '36px 0 36px 36px': '0 36px 36px 36px'
// });
//
const color = computed(function(){
  return $q.dark.mode? 'var(--q-color-white)': 'var(--q-dark)'
})
//
//
const backgroundColor = computed(function(){
  return $q.dark.mode ? 'var(--q-dark)': 'var(--q-color-white)'
})
</script>

<style scoped lang="scss">
#ImageUploader{
  height:80vh;
  &:deep(.uppy-Root) {
    font-family: unset;
    width: 100% !important;;
    height: 100% !important;;
  }

  &:deep(.uppy-DashboardContent-bar){
    background: v-bind(backgroundColor);
    border-bottom:0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    .uppy-DashboardContent-title{
      color: v-bind(color);
      text-align: center;

    }

    .uppy-DashboardContent-back, .uppy-DashboardContent-addMore {
      color: v-bind(color);
      font-weight: bold;
      border: 1px  solid;
    }
  }
  &:deep(.uppy-Dashboard){
    width: 100% !important;;
    height: 100% !important;;
  }
  &:deep(.uppy-DashboardTab:hover){
    .uppy-DashboardTab-name{
     color: v-bind(color);
    }
  }

  &:deep(.uppy-Dashboard-Item-name){
    color: v-bind(color);
  }

  &:deep(.uppy-Dashboard-inner){
    width: 100% !important;;
    height: 100% !important;
    background:  v-bind(backgroundColor) !important;
    color: $white;
  }


  &:deep(.uppy-Webcam-footer){
    padding: 0.5em;
    min-height: 10%;
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    gap: 1em;
    background-color: v-bind(backgroundColor);
    .uppy-Webcam-recordingLength{
      padding-top: 0.5em;
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  }

  &:deep(.uppy-Dashboard-AddFiles-title){
    padding: 0.5em;
    min-height: 30%;
    //min-width: 80%;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1em;
    background-color: v-bind(backgroundColor) !important;
  }

  &:deep(.uppy-Dashboard-AddFiles){
    background-color: v-bind(backgroundColor) !important;
    margin: 0;
  }

  &:deep(.uppy-StatusBar){

  }

  &:deep(.uppy-StatusBar-actions){
    background-color: v-bind(backgroundColor) !important;
    margin: 0;
  }


  &:deep(.uppy-Dashboard-browse){
    &:hover  {
      border: 1px dashed v-bind(color);
      color: v-bind(color);
      background: var(--q-color-transparent) !important;
    }
  }

  &:deep(.uppy-Webcam-buttonContainer ){
    width: 100%;
    text-align: center;
    margin: 0.5em;
    .uppy-Webcam-button  {
      background-color: var(--q-primary);
      min-height: 10%;
    }
  }
  &:deep(.uppy-StatusBar-actions){
    display: flex;
    flex-direction: row;
    align-items: center !important;
    justify-content: center !important;
  }

  &:deep(.uppy-StatusBar.is-waiting .uppy-StatusBar-actionBtn--upload ){
    background-color: var(--q-primary);
    min-height: 10%;
  }

  &:deep(.uppy-c-btn){
    padding: 1em;
    min-height: 10%;
    &:hover {
      background: var(--q-color-transparent);
      border: 1px dotted var(--q-primary);
      color: v-bind(color);
    }
  }
  &:deep(.uppy-Webcam-videoContainer){
    background: v-bind(backgroundColor) !important;
    position: relative;
    padding: 0;
    .uppy-Webcam-video{
      //height: 100%;
      //width: 100%;
      margin: 0;

      //left: 50%;
      min-height: 100%;
      min-width: 100%;
      //position: absolute;
      //top: 50%;
      //transform: translate(-50%, -50%);
    }
  }
  &:deep(.uppy-Dashboard-files){
    padding: 0 !important;
    background: v-bind(backgroundColor);
  }
}



.image-uploader-wrapper{
  padding: 0.5em;
  width: 100%;
  display: block;
  position: relative;
  &:after {
    content: '';
    display: block;
  }
}
</style>
