<template>
  <div
    class="container-xxl"
    style="color: rgb(71, 5, 175); font-weight: 500; font-size: 1rem"
  >
    Loading...
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
