<template>
  <div class="container-xxl" style="height: 100vh">
    <div class="row">
      <div
        class="col-md-6 col-lg-6 py-2 bg-white d-flex position-relative"
        style="height: 100vh"
      >
        <Alert :alertstatus="alertstatus" :message="message" :status="status" />
        <div class="container byborder">
          <img src="@/assets/images/logo.svg" alt="" />
          <h3>LOGIN</h3>
          <p>Welcome back! Kindly enter your details</p>
          <form @submit.prevent="submitForm">
            <div class="row">
              <div class="col">
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
            </div>

            <div class="row">
              <div class="col">
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
            </div>
            <div
              style="
                text-align: right;
                gont-weight: 400;
                color: #4705af;
                margin-top: 20px;
              "
            >
              <router-link
                to="../forget/reset"
                style="
                  text-align: right;
                  gont-weight: 400;
                  color: #4705af;
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
              :style="filldata == true ? '  background: #4705af' : 'background:#6E7173'"
              :disabled="filldata ? false : true"
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <vue-recaptcha
              @verify="mxVerify"
              sitekey="6Lc9TsMkAAAAAL93BDipCVz5zqH9pawcYxldc74y"
            ></vue-recaptcha>
            <small style="font-weight: 600; color: red" v-if="error">
              {{ errorcaptcha }}</small
            >
          </form>

          <h5>
            Don't have an account ?
            <router-link
              to="/auth/registerform/1"
              style="text-decoration: none; font-weight: 600"
              >Sign Up</router-link
            >
          </h5>
        </div>
      </div>
      <div
        class="col-md-6 col-lg-6 py-2 d-none d-md-flex d-lg-flex mydownbg"
        style="
          background: #4705af;
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

export default {
  name: "myRegistrationForm",
  components: {
    Alert,
    VueRecaptcha,
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
    };
  },
  methods: {
    ...mapActions({
      signIn: "auth/signIn",
    }),
    mxVerify(response) {
      this.error = false;
      this.recapchatoken = response;
    },
    submit(token) {
      document.getElementById("demo-form").submit();
      console.log(token);
    },

    onloadCallback() {
      alert("grecaptcha is ready!");
    },
    getselectedbox(id) {
      console.log(id);
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
      if (this.recapchatoken != null) {
        this.filldata = false;
        const data = {
          id: this.id,

          password: this.password,
        };
        this.signIn(data)
          .then((res) => {
            this.clickme = false;

            this.alertstatus = true;
            this.message = "Login Succesful";
            this.status = "success";
            this.$router.push("../dashboard/home");

            if (res.data.data.p_status == "false") {
              localStorage.setItem("xconfig", res.data.data.phone);

              this.alertstatus = true;
              this.status = "failed";
              this.clickme = false;

              this.message = "Your phone Number has not been verified.";
              setTimeout(() => {
                this.alertstatus = false;
                this.$router.push("../auth/type");
              }, 3000);
            } else if (res.data.data.e_status == "false") {
              localStorage.setItem("xconfig", res.data.data.email);

              this.alertstatus = true;
              this.status = "failed";
              this.clickme = false;

              this.message = "Your email Number has not been verified.";
              setTimeout(() => {
                this.alertstatus = false;
                this.$router.push("../auth/verifyemail");
              }, 3000);
            } else {
              setTimeout(() => {
                this.alertstatus = false;
                this.$router.push("../dashboard/home");
              }, 3000);
            }
          })
          .catch((e) => {
            this.alertstatus = true;

            if (e.response.status == 403) {
              this.status = "failed";
              this.clickme = false;

              this.message =
                "Your  account has been deleted or suspended, kindly contact customer care.";
            } else {
              this.status = "failed";
              this.message =
                e.code == "ERR_NETWORK" ? "Network Error" : e.response.data.message;
              this.clickme = false;
            }
            setTimeout(() => {
              this.alertstatus = false;
              this.filldata = true;
            }, 3000);
          });
      } else {
        this.clickme = false;

        this.errorcaptcha = "Kindly check the recaptcha ";
        this.error = true;
      }
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
      color: #4705af;
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
</style>
