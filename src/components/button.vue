<template>
  <div :class="$attrs" class="eren-button-wrapper">
    <button class="eren-button">
    <slot></slot>
  </button>
  </div>
</template>
<script lang="ts" setup>
</script>
<style lang="scss" scoped>
$btn-bg:#3465e0;
$btn-bg-hover:#0433ab;
$btn-fs:18px;
.eren-button-wrapper{
  display: inline-block;
  .eren-button{
    width: 100%;
    height: 48px;
    border:1px solid $btn-bg;
    padding:8px 16px; 
    font-size:$btn-fs;
    color:white;
    background-color:$btn-bg;
    border-radius:4px;
    transition: all 0.3s ease;
    &:hover,&:active {
      background-color:$btn-bg-hover;
      border:1px solid $btn-bg-hover;
    }
  }
}
</style>