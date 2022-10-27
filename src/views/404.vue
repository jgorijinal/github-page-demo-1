<template>
  <div class="container">
    <div class="content">
      <div class="title">404 很抱歉，您查看的页面找不到了！</div>
      <van-button @click="$router.back()" type="primary">返回到上一页</van-button>
    </div>
  </div>
</template>
<script lang="ts" setup></script>
<style lang="scss" scoped>
.container {
  text-align: center;
  display: table-cell;
  vertical-align: middle;
}

.content {
  text-align: center;
  display: inline-block;
}

.title {
  font-size: 30px;
  margin-bottom: 40px;
}
</style>
