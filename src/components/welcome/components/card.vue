<template>
  <div class="welcome-card">
    <div class="card">
        <img :src="imgSrc" alt="">
      <span class="text">
        {{textUp}}
      </span>
      <span class="text">
        {{textDown}}
      </span>
      </div>
  </div>
</template>
<script setup lang="ts">
export interface CardProps {
  imgSrc?: string,
  textUp?: string
  textDown?:string
}
const props = defineProps<CardProps>()
</script>
<style lang="scss" scoped>
.welcome-card {
  background-color:#feedb0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  border-radius: 6px;
  .card {
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 22px;
  font-weight: 500;
  .text {
    margin-top: 10px;
  }
  img {
    width:128px;
    height:130px;
  }
}
}
</style>