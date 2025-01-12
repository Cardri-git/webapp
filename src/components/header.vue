<template>
  <div class="myhead">
    <div class="p-3 d-flex justify-content-between" style="align-items: center">
      <router-link to="" style="text-decoration: none">
        <div
          style="
            font-weight: 600;
            color: #d70d4a;
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
        <div
          class="material-icons ml-3"
          style="font-size: 16px; cursor: pointer"
          @click="logout"
        >
          logout
        </div>

        <div
          class="material-icons"
          style="
            border-radius: 100%;
            align-items: center;
            font-size: 6px;
            display: flex;
            height: 16px;
            width: 16px;
            justify-content: center;

            background: #7e57ff;
            color: #fff;

            padding: 2px;
            margin-left: 20px;
            text-align: center;
          "
        >
          <span style="text-transform: capitalize; font-size: 7px"
            >{{ firstname.substring(0, 1) }} {{ lastname.substring(0, 1) }}</span
          >
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";

export default {
  name: "myHead",
  props: ["firstname", "lastname"],
  methods: {
    ...mapActions({
      signOut: "auth/signOut",
    }),
    setTab() {
      const myElement = document.getElementById("demo2");
      myElement.click();
    },
    logout() {
      this.signOut().then(() => {
        this.$router.push("/");
      });
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
