<template>
  <div>
    <button @click="changeQuery"> {{mode}} </button>
    <WujieVue
      ref="wujieRef"
      id="wujie"
      class="wujie-wrapper"
      :url="url"
      name="wujie"
      :plugins="[
        EventTargetPlugin(),
      ]"
    ></WujieVue>
  </div>
</template>

<script lang="ts" setup>
import WujieVue from 'wujie-vue3'
import { EventTargetPlugin } from 'wujie-polyfill'
import { ref, computed } from 'vue'

const wujieRef = ref<any>(null)

const mode = ref('create')
const url = computed(() => {
  return `/ckeditor/sample/index.html?mode=${mode.value}`
})

const changeQuery = async () => {
  new Promise((resolve) => {
    setTimeout(() => {
      mode.value = mode.value === 'edit' ? 'create' : 'edit'
      resolve(void 0)
    }, 300)
  })
}
</script>

<style>
.wujie-wrapper {
  position: relative;
  width: 100%;
}
</style>
