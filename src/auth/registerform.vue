<template>
  <div class="container-xxl" style="height: 100vh; : 1px solid red">
    <div class="row">
      <div
        class="col-md-6 col-lg-6 py-2 bg-white d-flex position-relative"
        style="height: 100vh"
      >
        <Alert :alertstatus="alertstatus" :message="message" :status="status" />
        <div class="container byborder">
          <img src="@/assets/images/logo.svg" alt="" />
          <h3>Create a new account</h3>
          <p>Start seamless transaction on Cardri</p>
          <form @submit.prevent="submitForm" autocomplete="off">
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="First name"
                  required
                  v-model="fname"
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Last name"
                  required
                  v-model="lname"
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Enter Email address"
                  required
                  v-model="email"
                  @keyup="getvalidated"
                  autocomplete="off"
                  pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2, 4}$"
                />
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Enter Cardri tag"
                  required
                  autocomplete="off"
                  v-model="username"
                  @keyup="getvalidated"
                />
                <small style="font-weight: 600; color: #12bd89; font-size: 10px"
                  >Your Cardri tag is your username</small
                >
              </div>
            </div>
            <div class="row">
              <div class="col">
                <input
                  type="tel"
                  class="form-control"
                  placeholder="Phone Number"
                  required
                  autocomplete="off"
                  v-model="phone"
                  @keyup="getvalidated"
                  maxlength="11"
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
                  @keyup="trigger"
                />
              </div>
              <div class="indicator">
                <span class="weak"></span>
                <span class="medium"></span>
                <span class="strong"></span>
              </div>
            </div>
            <div class="text">text</div>
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
              :disabled="filldata ? true : true"
            >
              Continue
            </button>
          </form>

          <h5>
            Already have an account ?
            <router-link to="/auth/login">Login</router-link>
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

export default {
  name: "myRegistrationForm",
  components: {
    Alert,
  },
  data() {
    return {
      selectedbox: 0,
      filldata: false,
      fname: "",
      lname: "",
      email: "",
      phone: "",
      alertstatus: false,
      message: "",
      username: "",
      password: "",
      status: "",
      level: 0,
      strength: false,
    };
  },
  methods: {
    ...mapActions({
      signUp: "auth/signUp",
    }),
    trigger() {
      let regExpWeak = /[a-z]/;
      let regExpmdium = /\d+/;
      let regExpStrong = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

      const indicator = document.querySelector(".indicator");
      // const input = document.querySelector('input[type="password"]');

      const weak = document.querySelector(".weak");
      const medium = document.querySelector(".medium");
      const strong = document.querySelector(".strong");
      const text = document.querySelector(".text");
      //let level = 0

      if (this.password != "") {
        indicator.style.display = "block";
        indicator.style.display = "flex";
        if (
          this.password.match(regExpWeak) ||
          this.password.match(regExpmdium) ||
          this.password.match(regExpStrong)
        ) {
          this.level = 1;
        }
        if (
          this.password.match(regExpWeak) &&
          this.password.match(regExpmdium) &&
          this.password.match(regExpmdium) &&
          this.password.match(regExpStrong) &&
          this.password.match(regExpWeak) &&
          this.password.match(regExpStrong)
        ) {
          this.level = 2;
        }

        if (
          this.password.match(regExpWeak) &&
          this.password.match(regExpmdium) &&
          this.password.match(regExpStrong)
        ) {
          this.level = 3;
        }
        if (this.level == 1) {
          weak.classList.add("active");
          text.style.display = "block";
          text.textContent =
            "Your password is too weak(password must contain upper & lower case letter,number and special character)";
          text.classList.add("weak");
        }
        if (this.level == 2) {
          medium.classList.add("active");
          text.style.display = "block";
          text.textContent = "Your password is medium";
          text.classList.add("medium");
        } else {
          medium.classList.remove("active");
          text.classList.remove("medium");
        }

        if (this.level == 3) {
          medium.classList.add("active");

          strong.classList.add("active");
          text.style.display = "block";
          text.textContent = "Your password is strong";
          text.classList.add("strong");
          this.filldata = true;
          this.strength = true;
        } else {
          strong.classList.remove("active");
          text.classList.remove("strong");
        }
      } else {
        indicator.style.display = "none";
        text.style.display = "none";
      }
    },
    getselectedbox(id) {
      console.log(id);
      this.selectedbox = id;
    },
    /*
    getvalidated() {
      if (
        this.fname != "" &&
        this.lname != "" &&
        this.email != "" &&
        this.phone != "" &&
        this.username != "" &&
        this.strength == true
      ) {
        this.filldata = true;
      } else {
        this.filldata = false;
      }
    },
    */
    async submitForm() {
      this.filldata = false;
      const data = {
        fname: this.fname,
        lname: this.lname,
        email: this.email,
        username: this.username,
        phone: "234" + this.phone.slice(1),
        password: this.password,
        rusername: "",
        m: "web",
      };
      this.signUp(data)
        .then(() => {
          this.alertstatus = true;
          this.message = "Registration Succesful";
          this.status = "success";
          localStorage.setItem("xconfig", data.phone);
          setTimeout(() => {
            this.alertstatus = false;
            this.$router.push("../type");
          }, 3000);
        })
        .catch((e) => {
          console.log(e);
          this.alertstatus = true;
          setTimeout(() => {
            this.alertstatus = false;
            this.filldata = true;
          }, 3000);
          console.log(e);
          this.status = "failed";
          this.message = e.response.data.errors;
        });
    },
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
.indicator {
  height: 10px;
  display: none;
  align-items: center;
  justify-content: space-between;
  margin: 10px 0;

  span {
    width: 100%;
    height: 100%;
    background: lightgray;
    position: relative;

    &:before {
      position: absolute;

      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 5px !important;
      content: "";
    }
  }
  .medium {
    margin: 0 3px;
  }
}
.indicator span.active.weak {
  &:before {
    background: #ff4757;
  }
}
.indicator span.active.medium {
  &:before {
    background: orange;
  }
}
.indicator span.active.strong {
  &:before {
    background: #23ad5c;
  }
}
.text {
  font-size: 12px;
  font-weight: 500;
  display: none;
}
.text.weak {
  color: #ff4757;
}
.text.medium {
  color: orange;
}
.text.strong {
  color: #23ad5c;
}
</style>
