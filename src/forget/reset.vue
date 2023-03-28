<template>
  <div class="container-xxl">
    <Alert :alertstatus="alertstatus" :message="message" :status="status" />
    <div class="container">
      <img src="@/assets/images/logo.svg" alt="" />

      <div class="mybodytag">
        <h3>Forgot Password?</h3>
        <p>Noworries, we will send you rest instructions.</p>
        <form @submit.prevent="sendOtps">
          <div class="row d-flex justify-content-center">
            <div class="form-group">
              <input
                type="email"
                class="form-control"
                id="exampleFormControlInput1"
                placeholder="Enter your email"
                v-model="email"
                required
              />
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
      clickme: false,
      clickme2: false,
    };
  },
  methods: {
    ...mapActions({
      sendEmail: "auth/sendEmail",
    }),
    async sendOtps() {
      this.clickme = true;
      this.clickme2 = true;
      const data = {
        id: this.email,
      };
      this.sendEmail(data)
        .then((res) => {
          localStorage.setItem("xconfig", res.data.message.phone);
          this.$router.push(`openemail/`);
        })
        .catch((e) => {
          console.log(e.response);
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Error</h4>`,
            text: `${
              e.response == "" || e.response == undefined
                ? "An error occur"
                : e.response.data.message
            }`,
            type: "error",
            icon: "error",

            width: 300,
          }).then(() => {
            this.clickme = false;
            this.clickme2 = false;
          });
        });
    },
    getback() {
      this.$router.push("../auth/login");
    },
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
