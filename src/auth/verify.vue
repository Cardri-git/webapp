<template>
  <div class="container-xxl">
    <Alert :alertstatus="alertstatus" :status="status" :message="message" />
    <div class="container">
      <img src="@/assets/images/logo.svg" alt="" />

      <div class="mybodytag">
        <h3>Verify your mobile number</h3>
        <p>To proceed registration, Kindly enter the OTP sent to {{ xconfig }}</p>
        <form action="" @submit.prevent="sendCode">
          <div class="row">
            <div class="col">
              <input
                type="password"
                maxlength="1"
                v-model="pin1"
                required
                autocomplete="off"
                @keyup="getvalidated"
              />
            </div>
            <div class="col">
              <input
                type="password"
                maxlength="1"
                v-model="pin2"
                required
                autocomplete="off"
                @keyup="getvalidated"
              />
            </div>
            <div class="col">
              <input
                type="password"
                maxlength="1"
                v-model="pin3"
                required
                autocomplete="off"
                @keyup="getvalidated"
              />
            </div>
            <div class="col">
              <input
                type="password"
                maxlength="1"
                v-model="pin4"
                required
                autocomplete="off"
                @keyup="getvalidated"
              />
            </div>
          </div>
          <button
            :disabled="filldata ? false : true"
            :style="filldata == true ? '  background: #4705af' : 'background:#6E7173'"
            class="btn w-100 mt-4"
            style="
              color: #fff;
              border: none;
              border-radius: 5px;
              outline: none;
              margin: 30px 0px;
            "
          >
            Send OTP
          </button>
          <p>
            Didn't receive OTP ?
            <a
              href="javascript:void()"
              @click="sendOtps"
              style="text-decoration: none; color: #4705af"
              >Click to resend</a
            >
          </p>
          <h5
            style="
              font-size: 12px;
              text-align: center;
              dispay: flex;
              align-items: center;
              cursor: pointer;
            "
            @click="getBack"
          >
            <span class="material-icons" style="font-size: 12px; margin: 5px"
              >arrow_back</span
            ><span>Go back</span>
          </h5>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Alert from "@/components/alert.vue";
export default {
  name: "myVerify",
  components: {
    Alert,
  },
  data() {
    return {
      xconfig: "",
      pin1: "",
      pin2: "",
      filldata: false,
      pin3: "",
      pin4: "",
      alertstatus: false,
      status: "",
      message: "",
    };
  },
  methods: {
    ...mapActions({
      sendCodes: "auth/sendCode",
      sendOtp: "auth/sendOtp",
    }),
    getvalidated() {
      if (this.pin1 != "" && this.pin2 != "" && this.pin3 != "" && this.pin4 != "") {
        this.filldata = true;
      } else {
        this.filldata = false;
      }
    },
    async sendOtps() {
      const data = {
        phone: this.xconfig,
      };
      this.sendOtp(data)
        .then(() => {
          this.alertstatus = true;
          this.status = "success";
          this.message = "Code sent, active for 30 minutes";
          this.$router.push("verify");
          setTimeout(() => {
            this.alertstatus = false;
          }, 5000);
        })
        .catch((e) => {
          console.log(e);
          (this.alertstatus = true),
            (this.status = "failed"),
            (this.message = "Error sending code");
          setTimeout(() => {
            this.alertstatus = false;
          }, 5000);
        });
    },
    getBack() {
      this.$router.go(-1);
    },
    sendCode() {
      this.filldata = false;
      const data = {
        code: this.pin1 + this.pin2 + this.pin3 + this.pin4,
        phone: this.xconfig,
      };
      this.sendCodes(data)
        .then(() => {
          this.alertstatus = true;
          this.status = "success";
          this.message = "Phone Number verified successfully";
          setTimeout(() => {
            this.$router.push("../auth/login");
            this.alertstatus = false;
          }, 5000);
        })
        .catch((e) => {
          this.alertstatus = true;
          this.status = "failed";
          this.message = e.response.data.errors;
          setTimeout(() => {
            this.alertstatus = false;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pi4 = "";
          }, 500);
        });
    },
  },
  mounted() {
    this.xconfig = localStorage.getItem("xconfig");
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
    input {
      width: 50px;
      padding: 10px;
      background: #f5f5f5;
      border-radius: 5px;
      text-align: center;
      border: none;
      outline: none;
    }
    input:focus {
      border: 1px solid #7e57ff;
      border-radius: 5px;
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
