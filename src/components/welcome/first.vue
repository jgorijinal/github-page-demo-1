<template>
    <card>
      <div class="first">
        <img :src="pig" alt="">
      <span class="text">
        你会挣钱
      </span>
      <span class="text">
        还要会省钱
      </span>
      </div>
    </card>
</template>

<script lang="ts" setup>
import Card from './components/card.vue'
import pig from '../../assets/icons/pig.svg'
</script>
<style scoped lang="scss">
.first {
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
</style>