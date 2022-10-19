<template>
  <div>
    <nav-bar title="记一笔" @click-left="leftClickHandle">
      <template #leftIcon>
        <img :src="fanhuiSvg" alt="">
      </template>
    </nav-bar>
  </div>
</template>
<script lang="ts" setup>
import navBar from '../../components/navBar.vue'
import fanhuiSvg from '../../assets/icons/fanhui.svg'
import { useRouter } from 'vue-router'
const router = useRouter()
const leftClickHandle = () => {
  router.back()
}
</script>
<style lang="scss" scoped>
img {
  width:1.2em;
  height:1.2em;
}
</style>