<template>
  <div>
    {{count}}
  </div>
  <button @click="onClick">+1</button>
</template>
<script setup lang="ts">
import {ref} from 'vue'
const count = ref<number>(0)
const onClick = () =>{
  count.value += 1
}
</script>