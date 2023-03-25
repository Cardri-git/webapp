<template>
  <div class="container-xxl">
    <Alert :alertstatus="alertstatus" :message="message" :status="status" />
    <div class="container">
      <img src="@/assets/images/logo.svg" alt="" />

      <div class="mybodytag">
        <h3>Available Soon</h3>
        <p>This feature you are tying to access will be available soon.</p>
        <img
          src="@/assets/images/emoji.svg"
          alt=""
          style="margin: 0px auto; display: flex; justify-self: center; width: 100px"
        />

        <button
          type="submit"
          class="btn w-100 mt-4"
          style="
            color: #fff;
            border: none;
            border-radius: 5px;
            outline: none;
            margin: 30px 0px;
            background: #4705af;
          "
          @click="this.$router.push('../../dashboard/home')"
        >
          Go Home
        </button>
      </div>
    </div>
  </div>
</template>
<script>
import Alert from "@/components/alert.vue";
import { mapActions } from "vuex";
export default {
  name: "mySoon",
  components: {
    Alert,
  },
  data() {
    return {
      config: "",
      alertstatus: false,
      status: "",
      message: "",
      phone: "",
    };
  },
  methods: {
    ...mapActions({
      sendOtp: "auth/sendOtp",
    }),
    async sendOtps() {
      const data = {
        phone: this.config,
      };
      this.sendOtp(data)
        .then(() => {
          this.alertstatus = true;
          this.status = "success";
          this.message = "Code sent, active for 30 minutes";
          this.$router.push("verify");
        })
        .catch((e) => {
          console.log(e);
          (this.alertstatus = true),
            (this.status = "failed"),
            (this.message = "Error sending code");
        });
    },
    getback() {
      this.$router.push("../auth/registerform/1");
    },
  },
  mounted() {
    this.config = localStorage.getItem("xconfig");
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin: 2rem auto;
  padding: 1rem;

  .mybodytag {
    max-width: 400px;

    padding: 13px;
    width: 100%;
    margin: 100px auto;
    .row {
      margin-top: 50px;
    }
    img {
      @media (max-width: 750px) {
        width: 100px;
        margin-top: 30px;
      }
    }

    h3 {
      text-align: center;
      font-weight: 700;
      color: #202020;
      @media (max-width: 750px) {
        font-size: 14px;
      }
    }
    p {
      font-weight: 400;
      font-size: 12px;
      text-align: center;
    }
  }
}
.containers {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 12px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  align-items: center;
}

/* Hide the browser's default checkbox */
.containers input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

/* Create a custom checkbox */
.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #eee;
}

/* On mouse-over, add a grey background color */
.containers:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.containers input:checked ~ .checkmark {
  background-color: #fff;
  border: 1px solid #202020;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.containers input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.containers .checkmark:after {
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #202020;
  border-width: 0 3px 3px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
</style>
