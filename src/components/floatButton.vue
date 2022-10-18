<template>
  <div class="eren-float-button">
    <img :src="addSvg" alt="">
  </div>
</template>
<script lang="ts" setup>
import addSvg from '../assets/icons/add.svg'
</script>
<style lang="scss" scoped>
$btn-bg:#3465e0;
$btn-bg-hover:#0433ab;
  .eren-float-button {
    display: inline-block;
    height:56px;
    width:56px;
    border-radius: 50%;
    background-color:$btn-bg ;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.4s ease;
    position:fixed;
    right:16px;
    bottom:16px;
    &:hover,&:active {
      background-color:$btn-bg-hover ;
    }
    img {
      width:2em;
      height:2em;
  }
}
</style>