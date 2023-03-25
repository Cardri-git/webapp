<template>
  <div class="container-xxl">
    <vue-loaders-line-scale-party
      color="#4705af"
      scale="1"
    ></vue-loaders-line-scale-party>
  </div>
</template>
<script>
export default {
  name: "myLoading",
};
</script>
<style lang="scss" scoped>
.container-xxl {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #fff;
  height: 100vh;
  img {
    animation: spin 2s linear infinite;
    width: 70px;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
}
</style>
