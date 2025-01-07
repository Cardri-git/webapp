<template>
  <router-view />
</template>

<script>
import { mapActions } from "vuex";
//import axios from "axios";
export default {
  name: "App",
  components: {},
  data: function () {
    return {
      events: ["click", "mousemove", "mousedown", "scroll", "keypress", "load"],
      logoutTimer: null,
      start: false,
      username: "",
      timer: 0,
      showLogoutMessage: false,
      logoutMessage: "",
      showTimer: false,
      timerMinutes: 0,
      timerSeconds: 0,
    };
  },
  async mounted() {
    this.startTimer();
    this.bindEvents();

    if (navigator.onLine) {
      // console.log("true");
    } else {
      if (this.$route.path !== "/")
        this.$swal({
          title: `<h4 style='font-size:14x;color:#202020'>Network Error</h4>`,
          text: "Please, check your connection",
          type: "error",
          icon: "error",
          width: "300",
        });
    }

    /*
    await axios
      .get("api/getdatils")
      .then((response) => {
        this.username = response.data.data.username;
      })
      .catch((e) => {
        console.log(e);
      });
      */
    /*
    this.events.forEach(function (event) {
      window.addEventListener(event, this.resetTimer);
    }, this);
    this.setTimers();
    */
  },
  methods: {
    ...mapActions({
      signOut: "auth/signOut",
    }),
    startTimer() {
      setInterval(() => {
        this.timer++;
        if (this.timer === 8) {
          this.showLogoutMessage = true;

          if (
            this.$route.name != "Login" &&
            this.$route.name != "Register" &&
            this.$route.name != "Verify Type" &&
            this.$route.name != "Verify Registration" &&
            this.$route.name != "Registers" &&
            this.$route.name != "Home"
          ) {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Hi ${this.username}</h4>`,
              text: `You Will Get Timed Out. You want to stay? `,
              type: "warning",
              showCancelButton: true,
              confirmButtonColor: "#F82738",
              cancelButtonColor: "#4A4E50",
              confirmButtonText: "Logout",
              width: "300",
            }).then((result) => {
              if (result.value) {
                this.signOut().then(() => {
                  this.$router.push("../auth/login");
                });
              } else {
                this.timer = 0;
              }
            });
          }
        }
        if (this.timer === 10) {
          this.logout();
        }
        if (this.timer >= 7 && this.timer <= 9) {
          this.showTimer = true;
          let remainingSeconds = (10 - this.timer) * 60;
          this.timerMinutes = Math.floor(remainingSeconds / 60);
          this.timerSeconds = remainingSeconds % 60;
        } else {
          this.showTimer = false;
          this.timerMinutes = 0;
          this.timerSeconds = 0;
        }
      }, 60000);
    },
    bindEvents() {
      window.addEventListener("mousemove", this.resetTimer);
      window.addEventListener("keypress", this.resetTimer);
      window.addEventListener("touchstart", this.resetTimer);
    },
    resetTimer() {
      this.timer = 0;
      if (this.showLogoutMessage) {
        this.showLogoutMessage = false;
      }
    },
    logout() {
      // perform logout logic here
      this.signOut().then(() => {
        if (
          this.$route.path !== "/auth/login" &&
          this.$route.path !== "/auth/register"
        )
          this.$router.push("../auth/login");
        location.reload();
      });
    },
    /*

    setTimers: function () {
      this.logoutTimer = setTimeout(this.logoutUser, 2000000);
    },
    logoutUser: function () {
      if (
        this.$route.name != "Login" &&
        this.$route.name != "Register" &&
        this.$route.name != "Verify Type" &&
        this.$route.name != "Verify Registration" &&
        this.$route.name != "Registers" &&
        this.$route.name != "Home"
      ) {
        this.$swal({
          title: `<h4 style='font-size:14x;color:#202020'>Hi ${this.username}</h4>`,
          text: "You Will Get Timed Out. You want to stay? ",
          type: "warning",
          showCancelButton: true,
          confirmButtonColor: "#F82738",
          cancelButtonColor: "#4A4E50",
          confirmButtonText: "Logout",
        }).then((result) => {
          if (result.value) {
            this.signOut().then(() => {
              this.$router.push("../auth/login");
            });
          } else {
            this.logoutTimer = null;
          }
        });
      }
    },
    resetTimer: function () {
      clearTimeout(this.logoutTimer);
      this.setTimers();
    },
    */
  },
};
</script>

<style lang="scss">
.frm_form_field .grecaptcha-badge {
  display: none;
}
:root {
  --primary: #d70d4a;
  --sidebar-width: 250px;
  --menu-title: #3f4254;
}
.app {
  display: flex;

  main {
    flex: 1 1 1;
    padding: 1rem;
    @media (max-width: 769px) {
      padding-left: 0rem;
      padding: 10px;
    }
  }
}
textarea:focus,
textarea.form-control:focus,
input.form-control:focus,
input[type="text"]:focus,
input[type="password"]:focus,
input[type="email"]:focus,
input[type="number"]:focus,
[type="text"].form-control:focus,
[type="password"].form-control:focus,
[type="email"].form-control:focus,
[type="tel"].form-control:focus,
select:focus,
[contenteditable].form-control:focus {
  box-shadow: inset 0 -1px 0 #ddd;
  background: #f5f5f5;
}
.modal {
  display: none; /* Hidden by default */
  position: fixed; /* Stay in place */
  z-index: 10000;
  z-index: 1; /* Sit on top */
  left: 0;
  top: 0;
  width: 100%; /* Full width */
  height: 100%; /* Full height */
  overflow: auto; /* Enable scroll if needed */
  background-color: rgb(0, 0, 0); /* Fallback color */
  background-color: rgba(0, 0, 0, 0.4); /* Black w/ opacity */
  padding: 10px;
}

/* Modal Content/Box */
.modal-content {
  background-color: #fff;
  margin: 5% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 100%;
  border-radius: 10px;
  max-width: 500px;
  .close {
    color: #aaa;
    float: right;
    font-size: 18px;
    font-weight: bold;
  }
  h3 {
    font-size: 14px;
  }
}
.container-xxl {
  max-width: 2000px !important;
  width: 100% !important;
  margin: 0px auto !important;
}
button {
  padding: 10px 20px 10px 20px !important;
  font-size: 16px !important;
  font-weight: 600 !important;
}
input,
select {
  height: 42px;
  font-size: 1rem;
  line-height: 24px;
  font-weight: 500px;
  border-radius: 8px;
}
</style>
