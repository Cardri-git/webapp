<template>
  <div class="container-xxl" style="height: 100vh">
    <verifyAuthPin
      :isOverlayVisible="isOverlayVisible"
      :apiEndpoint="'api/auth/verifydevice'"
      :uid="uid"
      :id="userid"
      @code-verified="handleCodeVerified"
    />
    <div class="row">
      <div
        class="col-md-6 col-lg-6 py-2 bg-white d-flex position-relative"
        style="height: 100vh"
      >
        <Alert :alertstatus="alertstatus" :message="message" :status="status" />
        <div class="container byborder">
          <img src="@/assets/images/newlogocard.png" alt="" style="height: 46px" />
          <h3>LOGIN</h3>
          <p>Welcome back! Kindly enter your details</p>
          <form @submit.prevent="submitForm">
            <div class="form-group my-3">
              <input
                type="text"
                class="form-control"
                placeholder="Enter Email address"
                required
                v-model="id"
                @keyup="getvalidated"
                autocomplete="off"
              />
            </div>

            <div class="form-group my-3">
              <input
                type="password"
                class="form-control"
                placeholder="Password"
                required
                autocomplete="off"
                v-model="password"
                @keyup="getvalidated"
              />
            </div>

            <div
              style="
                text-align: right;
                font-weight: 400;
                color: #d70d4a;
                margin-top: 20px;
              "
            >
              <router-link
                to="../forget/reset"
                style="
                  text-align: right;
                  font-weight: 400;
                  color: #d70d4a;
                  text-decoration: none;
                "
              >
                Forget Password ?
              </router-link>
            </div>

            <button
              type="submit"
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                padding: 11px;
              "
              :style="filldata == true ? '  background:#D70D4A' : 'background:#6E7173'"
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>
            <div style="max-width: 200px">
              <vue-recaptcha
                @verify="mxVerify"
                style=""
                sitekey="6Lc9TsMkAAAAAL93BDipCVz5zqH9pawcYxldc74y"
              ></vue-recaptcha>
            </div>
            <small style="font-weight: 600; color: red" v-if="error">
              {{ errorcaptcha }}</small
            >
          </form>
        </div>
      </div>
      <div
        class="col-md-6 col-lg-6 py-2 d-none d-md-flex d-lg-flex mydownbg"
        style="
          background: #d70d4a;
          height: 100vh;
          opacity: 0.85;
          justify-content: center;

          align-items: center;
        "
      >
        <img src="@/assets/images/network2.svg" alt="" />
      </div>
    </div>
  </div>
</template>
<script>
import Alert from "@/components/alert.vue";
import { mapActions } from "vuex";
import { VueRecaptcha } from "vue-recaptcha";
import verifyAuthPin from "@/components/verifyAuthPin.vue";
import useBrowserUUID from "@/utilities/uniqueIndentifier";

export default {
  name: "myRegistrationForm",
  components: {
    Alert,
    VueRecaptcha,
    verifyAuthPin,
  },
  data() {
    return {
      selectedbox: 0,
      filldata: false,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      id: "",
      alertstatus: false,
      message: "",
      username: "",
      password: "",
      status: "",
      recapchatoken: null,
      error: false,
      clickme: false,
      isOverlayVisible: false,
      uid: "",
      userid: "",
    };
  },
  created() {
    const { getUUID } = useBrowserUUID();
    this.uid = getUUID();
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    handleVerificationFailure(field, value, message, route) {
      localStorage.setItem("xconfig", value);

      this.alertstatus = true;
      this.status = "failed";
      this.clickme = false;
      this.message = message;

      setTimeout(() => {
        this.alertstatus = false;
        this.$router.push(route);
      }, 3000);
    },
    mxVerify(response) {
      this.error = false;
      this.recapchatoken = response;
    },
    submit() {
      document.getElementById("demo-form").submit();
      // console.log(token);
    },

    onloadCallback() {
      alert("grecaptcha is ready!");
    },
    getselectedbox(id) {
      // console.log(id);
      this.selectedbox = id;
    },
    getvalidated() {
      if (this.id != "" && this.password != "") {
        this.filldata = true;
      } else {
        this.filldata = false;
      }
    },
    async submitForm() {
      this.clickme = true;
      //if (this.recapchatoken != null) {
      this.filldata = false;
      const data = {
        id: this.id,
        password: this.password,
        // medium: "web",
        uid: this.uid,
      };
      this.signIn(data)
        .then((res) => {
          console.log(res);
          const { p_status, e_status, phone, email } = res.data.data;

          this.clickme = false;
          this.alertstatus = true;
          this.message = "Login Successful";
          this.status = "success";
          this.$router.push("../dashboard/home");

          if (p_status === "false") {
            this.handleVerificationFailure(
              "phone",
              phone,
              "Your phone number has not been verified.",
              "../auth/type"
            );
            return;
          }

          if (e_status === "false") {
            this.handleVerificationFailure(
              "email",
              email,
              "Your email has not been verified.",
              "../auth/verifyemail"
            );
            return;
          }

          setTimeout(() => {
            this.alertstatus = false;
            this.$router.push("../dashboard/home");
          }, 3000);
        })
        .catch((e) => {
          console.log(e);

          this.alertstatus = true;

          if (e.response.status === 401) {
            this.alertstatus = true;
            this.status = "success";
            this.message = "Verification code has been sent.";
            this.isOverlayVisible = !this.isOverlayVisible;
            this.clickme = false;
            this.userid = e.response.data.userid;
          }

          if (e.response.status === 400) {
            this.alertstatus = true;
            this.status = "failed";
            this.message = "Incorrect Credentials.";
            // this.isOverlayVisible = !this.isOverlayVisible;
            this.clickme = false;
            // this.userid = e.resmponse.data.userid;
          }
          if (e.response.status == 403) {
            this.status = "failed";
            this.clickme = false;

            this.message =
              "Your  account has been deleted or suspended, kindly contact customer care.";
          }
          if (e.response.status == 409) {
            this.status = "failed";
            this.clickme = false;

            this.message = "Error while trying to login. pls try again later";
          }
          setTimeout(() => {
            this.alertstatus = false;
            this.filldata = true;
          }, 3000);
        });
      /***
      } else {
        this.clickme = false;

        this.errorcaptcha = "Kindly check the recaptcha ";
        this.error = true;
      }
        */
    },
  },
  mounted() {
    let recaptchaScript = document.createElement("script");
    recaptchaScript.setAttribute(
      "src",

      "https://www.google.com/recaptcha/api.js?onload=onloadCallback&render=explicit"
    );
    document.head.appendChild(recaptchaScript);
  },
};
</script>
<style lang="scss" scoped>
.container-xxl {
  background-image: url("@/assets/images/Frame.svg");
}
.byborder {
  margin: 3rem;
  box-sizing: border-box !important;
  @media (max-width: 750px) {
    margin: 10px;
  }
  p {
    color: #202020;
    font-size: 12px;
    @media (max-width: 750px) {
      margin-bottom: 25px;
    }
  }
  .row {
    margin-top: 20px;
    .col {
      position: relative;
    }
  }
  input {
    border: none !important;
    background: #f5f5ff;
    position: relative;
    @media (max-width: 750px) {
      padding: 10px;
      font-size: 12px;
      line-height: 30px;
    }
  }
  input:focus {
    border: none;
    outline: none !important;
    position: relative;
  }
  input:required:invalid {
    border: 1px solid red;
  }
  .mycheck {
    position: absolute;
    right: 0;
    top: -5;
    bottom: auto;
  }
  .card {
    margin-top: 20px;
    cursor: pointer;
    background: #f5f5ff;
    border: none;
    .card-body {
      h4 {
        font-size: 12px;
      }
      p {
        font-size: 12px;
      }
    }
  }
  h3 {
    color: #202020;
    font-weight: 700;
    margin-top: 50px;
    @media (max-width: 750px) {
      margin-top: 80px;
      font-size: 20px;
    }
  }
  img {
    @media (max-width: 750px) {
      width: 100px;
      margin-top: 30px;
    }
  }
  h5 {
    font-size: 14px;
    text-align: center;
    margin-top: 20px;
    margin-bottom: 20px;
    a {
      color: #d70d4a;
      font-size: 12px;
    }
  }
}
.mydownbg {
  @media (max-width: 750px) {
    display: none !important;
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
[contenteditable].form-control:focus {
  box-shadow: inset 0 -1px 0 #ddd;
}
.center {
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
}
.rc-anchor-container {
  width: 200px;
}
</style>
