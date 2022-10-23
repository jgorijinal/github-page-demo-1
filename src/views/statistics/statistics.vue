<template>
  <nav-bar title="统计图标">
    <template #leftIcon>
      <img :src="fanhuiSvg" alt="" class="fanhui">
    </template>
  </nav-bar>
</template>
<script lang="ts" setup>
import fanhuiSvg from '../../assets/icons/fanhui.svg'
import NavBar from '../../components/navBar.vue'
</script>
<style lang="scss" scoped>
img{
  width:1.2em;
  height:1.2em;
}
</style>