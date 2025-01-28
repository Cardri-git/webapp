<template>
  <div class="container-xxl" style="height: 100vh">
    <div class="row">
      <div class="col-md-6 col-lg-6 py-2 bg-white d-flex" style="height: 100vh">
        <div class="container byborder">
          <img src="@/assets/images/logo.svg" alt="" />
          <h3>What type of user are you?</h3>
          <div
            class="card"
            @click="getselectedbox(1)"
            :style="selectedbox == 1 ? 'border:1px solid #4705af !important' : ''"
          >
            <div class="card-body">
              <h4>Individuals</h4>
              <p>
                For Individuals, creators, Freelancers, Social media vendors (suitable for
                unregistered business)
              </p>
            </div>
          </div>
          <div class="card" @click="getselectedbox(2)">
            <div
              class="card-body"
              :style="
                selectedbox == 2
                  ? 'border:1px solid #4705af !important;border-radius:5px '
                  : ''
              "
            >
              <h4>Registered Business</h4>
              <p>
                For Business Name, Limited Limited Company(LTD), Public Limited Company
                (PLC), NGO (suitable for all type of registered business)
              </p>
            </div>
          </div>

          <button
            class="btn w-100 mt-4"
            style="
              background: #4705af;
              color: #fff;
              border: none;
              border-radius: 5px;
              outline: none;
            "
            @click="gotoForm"
            :disabled="selectedbox == 0 ? true : false"
          >
            Continue
          </button>
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
export default {
  name: "myRegistration",
  data() {
    return {
      selectedbox: 0,
    };
  },
  methods: {
    getselectedbox(id) {
      console.log(id);
      this.selectedbox = id;
    },
    gotoForm() {
      this.$router.push(`../auth/registerform/${this.selectedbox}`);
    },
  },
};
</script>
<style lang="scss" scoped>
.container-xxl {
  background-image: url("@/assets/images/Frame.svg");
}
.byborder {
  margin: 4rem;
  box-sizing: border-box !important;
  @media (max-width: 750px) {
    margin: 10px;
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
      font-size: 14px;
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
</style>
