<template>
  <div
    v-if="alertstatus"
    class="alert d-flex justify-content-between"
    role="alert"
    style="
      position: absolute;
      right: 0;
      margin-right: 10px;
      max-width: 320px;
      width: 100%;
      box-sizing: border-box;
    "
    :style="
      status == 'success'
        ? 'background:#05CB6F;color:#fff'
        : 'background:#F82738;color:#fff'
    "
  >
    <div style="align-items: center">
      <span
        class="material-icons"
        style="font-size: 20px; color: #fff; margin-right: 10px"
        v-if="status == 'failed'"
      >
        warning</span
      >
      <span
        class="material-icons"
        style="font-size: 20px; color: #fff; margin-right: 10px"
        v-if="status == 'success'"
      >
        done</span
      >

      <span style="font-size: 16px" v-for="item in message" :key="item">{{
        item[0]
      }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "myAlert",
  props: ["alertstatus", "message", "status"],
};
</script>
<style lang="scss" scoped>
.alert {
  transition: 2s ease-out;
}
</style>
