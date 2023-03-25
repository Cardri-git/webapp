<template>
  <div class="container-xxl">
    <img src="@/assets/images/loader.svg" alt="" />
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
    transition: 2s ease-out;
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
