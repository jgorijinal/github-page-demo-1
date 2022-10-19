<template>
  <transition name="fade">
    <div v-if="visible" class="eren-overlay">
    <!--遮罩层-->
    <div class="eren-overlay-mask" @click="clickOverlay"></div> 
    <!--内容-->
    <div class="eren-overlay-content">
      <section class="eren-overlay-content-login">
          <span class="text-login1">未登录用户</span>
          <span class="text-login2">点击此处登录</span> 
      </section>
      <!--插槽-->
        <slot></slot>
    </div>
  </div>
  </transition>
</template>
<script setup lang="ts">
export interface OverlayProps {
  visible:boolean
}
const props = defineProps<OverlayProps>()

const emits = defineEmits(['closeOverlay'])
// 点击了遮罩层区域
const clickOverlay = () => {
  emits('closeOverlay')
}
</script>
<style lang="scss" scoped>
.eren-overlay {
  &-mask {
    position:fixed;
    background-color: gray;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    opacity: 0.4 ;
    z-index:8;
  }
  &-content {
    position:fixed;
    left: 0;
    top: 0;
    width:14em;
    background-color: white;
    height: 100%;
    z-index:16;
    &-login {
      background-color: #0c3bb4;
      color:white;
      padding:26px;
      display: flex;
      flex-direction: column;
      .text-login1{
        font-size:20px;
      }
      .text-login2{
        margin-top:16px;
        color:rgb(176, 172, 172);
      }
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: all 0.15s ease;
}
.fade-enter-from,.fade-leave-to {
  opacity:0;
}

</style>