<template>
  <div class="overlay" v-if="isOverlayVisible">
    <Alert :alertstatus="alertstatus" :message="message" :status="status" />

    <div class="overlay-content">
      <div style="">
        <h3 class="title">Bind your device.</h3>
        <span
          style="
            font-size: 14px;
            color: #212121;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          "
          >Kindly,enter the code sent to your phone number</span
        >
      </div>
      <div style="display: flex; flex-direction: column; gap: 40px; margin-top: 30px">
        <div class="code-inputs">
          <input
            v-for="(digit, index) in code"
            :key="index"
            type="text"
            maxlength="1"
            v-model="code[index]"
            @input="focusNext(index)"
            class="input-field"
          />
        </div>
        <button class="submit-btn" :disabled="isLoading" @click="submitCode">
          {{ isLoading ? "Binding..." : "Bind" }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import Alert from "./alert.vue";
//import store from "@/store";

export default {
  name: "VerrifyAuthLogin",
  components: {
    Alert,
  },

  props: {
    isOverlayVisible: {
      type: Boolean,
      required: true,
    },
    apiEndpoint: {
      type: String,
      required: true,
    },
    uid: {
      type: String,
      required: true,
    },
    id: {
      type: String,
      required: true,
    },
  },
  data() {
    return {
      code: ["", "", "", ""],
      isLoading: false,
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
      recapchatoken: null,
      error: false,
      clickme: false,
    };
  },
  methods: {
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
    focusNext(index) {
      if (this.code[index].length === 1 && index < this.code.length - 1) {
        this.$refs[`input-${index + 1}`]?.focus();
      }
    },
    async submitCode() {
      const enteredCode = this.code.join("");

      if (enteredCode.length !== 4) {
        alert("Please enter a valid 4-digit code.");
        return;
      }

      this.isLoading = true;

      try {
        const payload = {
          code: enteredCode,
          id: this.id,
          phone: this.uid,
          token: "",
        };

        const response = await axios.post(this.apiEndpoint, payload);

        if (response.status === 200) {
          const { token } = response.data;
          this.$store.dispatch("auth/attempt", token);

          this.alertstatus = true;
          this.message = "Your device has been successfully bound.Pls login";
          this.status = "success";

          // Notify the parent to hide the modal
          this.$emit("update:isOverlayVisible", false);

          this.$router.push("/dashboard/home");
        } else {
          alert("Invalid code. Please try again.");
        }
      } catch (error) {
        console.error("Error verifying code:", error);

        const errorMessage =
          error.response?.data?.message || "An error occurred while verifying the code.";
        alert(errorMessage);
      } finally {
        this.isLoading = false;
      }
    },
  },
};
</script>

<style scoped>
.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.overlay-content {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 90%;
  max-width: 400px;
}

.title {
  font-size: 1rem;
  font-weight: bold;
}

.code-inputs {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 20px;
}

.input-field {
  width: 50px;
  height: 50px;
  font-size: 1.5rem;
  text-align: center;
  border: 2px solid #ccc;
  border-radius: 5px;
  outline: none;
  transition: border-color 0.3s;
}

.input-field:focus {
  border-color: #7f55da;
}

.submit-btn {
  background: #d70d4a;
  color: white;
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s;
}

.submit-btn:hover {
  background: #d70d4a;
}

.submit-btn:disabled {
  background: #ccc;
  cursor: not-allowed;
}
</style>
