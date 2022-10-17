<template>
  <div class="welcome">
    <header>
      <img :src="logo" alt="" />
      <h1>日常记账</h1>
    </header>
    <main ref="mainRef">
      <router-view v-slot="{ Component }">
        <transition name="fade">
          <component :is="Component" />
        </transition>
      </router-view>
    </main>
    <footer v-if="$route.path !== '/welcome/4'">
      <div class="fake">fake</div>
      <div class="pass" @click="$router.push('/start')">跳过</div>
      <div class="next" @click="nextPageClick">下一页</div>
    </footer>
    <footer v-else>
      <div class="fake">fake</div>
      <div class="fake">跳过</div>
      <div class="pass" @click="$router.push('/start')">完成</div>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import logo from "../assets/icons/mangosteen.svg";
import { useRoute, useRouter } from "vue-router";
import { useSwipe } from "../hooks/useSwipe";
import {ref ,watch} from "vue";

const route = useRoute();
const router = useRouter();
const nextPageClick = () => {
  const path = route.path;
  const pathNum = Number(path.split("/").pop());
  const newPath = path.slice(0, path.length - 1) + (pathNum + 1).toString();
  if (pathNum === 4) {
    return
  }
  router.push(newPath);
};

const mainRef = ref<HTMLElement | null>(null);
const { direction, swiping, distance } = useSwipe(mainRef);
watch(direction, () => {
  if (direction.value === 'left') {
    nextPageClick()
  }
})
</script>
<style scoped lang="scss">
.welcome {
  height: 100vh;
  display: flex;
  flex-direction: column;
  background-image: linear-gradient(to bottom, #002ea6, #3667e3);
  header {
    > img {
      width: 60px;
      height: 60px;
    }
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 66px;
    color: #d4d4ee;
  }
  main {
    flex-grow: 1;
    position: relative;
    margin-bottom: 20px;
  }
  footer {
    flex-shrink: 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: white;
    font-size: 22px;
    font-weight: 600;
    margin: 0 20px;
    .fake {
      visibility: hidden;
    }
    .fake,
    .pass,
    .next {
      padding: 20px;
      border-radius: 4px;
      &:active {
        background-color: #2054d7;
      }
    }
  }
}
.fade-move,
.fade-enter-active,
.fade-leave-active {
  transition: all 0.25s ease-in;
  width: 100%;
  height: 100%;
}
.fade-enter-from {
  transform: translateX(100vw);
  opacity: 0;
}
.fade-leave-to {
  transform: translateX(-100vw);
  opacity: 0;
}
.fade-leave-active {
  position: absolute;
  left: 0;
  top: 0;
}
</style>
