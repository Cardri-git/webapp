<template>
  <div class="container-xxl">
    <Alert :alertstatus="alertstatus" :message="message" :status="status" />
    <div class="container">
      <img src="@/assets/images/logo.svg" alt="" />

      <div class="mybodytag">
        <h3>Forgot Password?</h3>
        <form @submit.prevent="sendOtps">
          <div class="row d-flex justify-content-center">
            <div class="form-group">
              <input
                type="password"
                class="form-control"
                placeholder="Enter your New Password"
                v-model="password"
                required
                @keyup="trigger"
              />
            </div>
            <div class="indicator">
              <span class="weak"></span>
              <span class="medium"></span>
              <span class="strong"></span>
            </div>
            <div class="text"></div>

            <div class="form-group">
              <input
                type="password"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Confirm Password"
                v-model="cpassword"
                required
                @keyup="checkpassword"
              />
              <span
                style="
                  color: red;
                  font-weight: 500;
                  text-align: center;
                  font-size: 12px;
                  display: block;
                "
                v-show="error"
                >Password Doesn't match</span
              >
              <div class="form-group">
                <input
                  type="tel"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter code "
                  v-model="code"
                  required
                  maxlength="4"
                />
              </div>
            </div>
          </div>
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
            :disabled="clickme"
          >
            <span v-if="clickme2 == false">Continue</span>
            <vue-loaders-ball-clip-rotate
              color="#fff"
              scale="1"
              v-if="clickme2 == true"
            ></vue-loaders-ball-clip-rotate>
          </button>
          <h5
            style="
              font-size: 12px;
              text-align: center;
              display: flex;
              align-items: center;
            "
            @click="getback"
          >
            <span class="material-icons">arrow_back</span>Back to login
          </h5>
        </form>
      </div>
    </div>
  </div>
</template>
<script>
import Alert from "@/components/alert.vue";
import { mapActions } from "vuex";
export default {
  name: "myType",
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
      email: "",
      textContent: "",
      clickme: true,
      cpassword: "",

      password: "",
      code: "",
      error: false,
      error2: false,
      clickme2: false,
      x: "",
    };
  },
  methods: {
    checkpassword() {
      if (this.password.match(this.cpassword)) {
        this.error = false;
        this.clickme = false;
      } else {
        this.error = true;
        this.clickme = true;
      }
    },
    trigger() {
      let regExpWeak = /[a-zA-Z]/;
      let regExpmdium = /\d+[a-zA-Z0-9]/;
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
          this.clickme = true;
        }
      } else {
        indicator.style.display = "none";
        text.style.display = "none";
      }
    },
    ...mapActions({
      confirmpasswordbyemail: "auth/confirmpasswordbyemail",
    }),
    async sendOtps() {
      this.clickme = true;
      this.clickme2 = true;
      const data = {
        phone: this.x,
        code: this.code,
        password: this.password,
      };
      this.confirmpasswordbyemail(data)
        .then((res) => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
            text: `${res.data.message}`,
            type: "success",
            icon: "success",

            width: 300,
          }).then((result) => {
            if (result.value) {
              this.$router.push("../../auth/login");
            }
          });
        })
        .catch((e) => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Error</h4>`,
            text: `${e.response.data.message}`,
            type: "error",
            icon: "error",

            width: 300,
          }).then((result) => {
            this.clickme = false;
            this.clickme2 = false;
            if (result.value) {
              location.reload();
            }
          });
        });
    },
    getback() {
      this.$router.push("../auth/login");
    },
  },
  mounted() {
    this.x = localStorage.getItem("xconfig");
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
.form-group {
  margin-top: 20px;
}
</style>
