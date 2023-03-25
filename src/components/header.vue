<template>
  <div class="myhead">
    <div class="p-3 d-flex justify-content-between" style="align-items: center">
      <router-link to="" style="text-decoration: none">
        <div
          style="
            font-weight: 600;
            color: #4705af;
            align-items: center;
            text-transform: capitalize;
          "
          class="d-flex"
        >
          <span
            class="material-icons d-lg-none"
            id="demo"
            style="margin-right: 10px"
            @click="setTab()"
            >menu</span
          >
          {{ this.$route.name }}
        </div>
      </router-link>
      <div class="d-flex justify-content-around" style="align-items: center">
        <div class="material-icons mr-3">
          <img
            src="@/assets/images/sun.svg"
            alt=""
            style="width: 13px; margin-right: 10px"
          />
        </div>
        <div class="material-icons ml-3">
          <img
            src="@/assets/images/ri_notification-line.svg"
            alt=""
            style="width: 13px; margin-left: 10px"
          />
        </div>

        <div
          style="
            border-radius: 100%;
            align-items: center;
            font-size: 6px;

            background: #7e57ff;
            color: #fff;
            margin-top: 10px;
            padding: 2px;
            margin-left: 20px;
            text-align: center;
          "
        >
          <span style="text-transform: capitalize"
            >{{ firstname.substring(0, 1) }} {{ lastname.substring(0, 1) }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "myHead",
  props: ["firstname", "lastname"],
  methods: {
    setTab() {
      const myElement = document.getElementById("demo2");
      myElement.click();
    },
  },
};
</script>
<style>
.myhead {
  background: #fff;
  box-shadow: 12px 3px 20px 3px rgba(71, 5, 175, 0.07);
  padding: 10px;
  width: 100%;
  z-index: 1000000;
}
</style>
