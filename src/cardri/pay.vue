<template>
  <div
    class="app w-100 container-xxl"
    v-if="loading == false"
    style="padding: 0px !important"
  >
    <sidebar :firstname="fname" :lastname="lname" :username="username" />
    <div class="w-100">
      <!-- To Cardri -->
      <!-- The Modal -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert :status="status" :alertstatus="alertstatus" :message="message" />

          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Receive Money</h3>
            {{ user }}

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendData">
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Bank</label>
              </div>
              <input
                type="tel"
                required
                v-model="bankName"
                class="form-control"
                id="Wallet"
              />
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Account Number</label>
              </div>
              <input type="tel" required v-model="accountNumber" class="form-control" />
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Account Name</label>
              </div>
              <input type="tel" required v-model="accountName" class="form-control" />
            </div>

            <button class="btn" type="button" @click="copyURL(accountNumber)">
              Copy Account Number
            </button>
          </form>
        </div>
      </div>

      <!--End To Cardrri -->
      <headers :firstname="fname" :lastname="lname" />

      <div class="bgbig">
        <div class="backtag">
          <img src="@/assets/images/back.svg" alt="" @click="this.$router.go(-1)" />
          <span style="text-transform: capitalize">{{ this.$route.name }}</span>
        </div>
        <div class="balamcebar">
          <div class="row" style="margin-top: 20px">
            <div class="col-md-6 col-lg-6">
              <div
                class="card"
                :style="
                  selectedbox == 1
                    ? 'background:#05CB6F !important;color:#fff'
                    : 'background:#f5f5f5 !important'
                "
                @click="checkselected(1)"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/ellipse6.svg"
                    alt=""
                    style="
                      float: left;
                      position: relative;
                      width: 30px;
                      margin-right: 20px;
                    "
                  />
                  <img
                    src="@/assets/images/send3.svg"
                    alt=""
                    style="
                      width: 17px;
                      position: absolute;
                      left: 0;
                      margin-left: 22px;
                      margin-top: 6px;
                    "
                  />
                  <div style="overflow: hidden">
                    <div
                      class="d-flex justify-content-between"
                      style="align-items: center"
                    >
                      <h3
                        :style="
                          selectedbox == 1 ? 'color:#fff' : 'color:#202020 !important'
                        "
                      >
                        Send Money
                      </h3>
                      <span class="material-icons">chevron_right</span>
                    </div>

                    <p>
                      Instantly send money to self or anyone in the world with no stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 20px">
            <div class="col-md-6 col-lg-6">
              <div
                class="card"
                @click="checkselected(2)"
                :style="
                  selectedbox == 2
                    ? 'background:#05CB6F !important;color:#fff'
                    : 'background:#f5f5f5 !important'
                "
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/ellipse7.svg"
                    alt=""
                    style="
                      float: left;
                      position: relative;
                      width: 30px;
                      margin-right: 20px;
                    "
                  />
                  <img
                    src="@/assets/images/withdraw3.svg"
                    alt=""
                    style="
                      width: 17px;
                      position: absolute;
                      left: 0;
                      margin-left: 22px;
                      margin-top: 5px;
                    "
                  />
                  <div style="overflow: hidden">
                    <div
                      class="d-flex justify-content-between"
                      style="align-items: center"
                    >
                      <h3
                        :style="
                          selectedbox == 2 ? 'color:#fff' : 'color:#202020 !important'
                        "
                      >
                        Recieve Money
                      </h3>
                      <span class="material-icons">chevron_right</span>
                    </div>

                    <p>
                      Receive money to your Cardri Wallet; other registered wallets with
                      no stress.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div v-else>
    <Loader />
  </div>
</template>
<script>
import axios from "axios";
import moment from "moment";
import sidebar from "@/components/sidebar.vue";
import headers from "@/components/header.vue";
import Loader from "@/components/loading.vue";
import { mapGetters } from "vuex";
import alert from "@/components/alert.vue";

export default {
  name: "myPay",
  components: {
    sidebar,
    headers,
    Loader,
    alert,
  },
  data() {
    return {
      showdrop: false,
      selecteds: "",
      loading: true,
      ledger: 0,
      mainbalance: 0,
      lname: "",
      selectedbox: 1,
      fname: "",
      username: "",
      moment: moment,
      transaction: [],
      accountName: "",
      accountNumber: "",
      bankName: "",
      alertstatus: false,
      status: "",
      message: "",
    };
  },
  methods: {
    checkselected(id) {
      this.selectedbox = id;
      if (id == 1) {
        this.$router.push("../cardri/send");
      } else {
        var modal = document.getElementById("myModal");
        modal.style.display = "block";
      }
    },
    closeModal() {
      var modal = document.getElementById("myModal");

      modal.style.display = "none";
    },
    async copyURL(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        this.alertstatus = true;
        (this.status = "success"), (this.message = "Copied to clipboard");
        setTimeout(() => {
          this.alertstatus = false;
        }, 3000);
      } catch ($e) {
        this.alertstatus = true;
        (this.status = "failed"), (this.message = "Failed to copy");
        setTimeout(() => {
          this.alertstatus = false;
        }, 3000);
      }
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },

  async mounted() {
    await axios
      .get("api/getdatils")
      .then((response) => {
        console.log(response);
        this.mainbalance = response.data.data.ngn_ld;
        this.ledger = response.data.data.NGN;
        this.username = response.data.data.username;
        this.fname = response.data.data.fname;
        this.lname = response.data.data.lname;
        this.accountNumber = response.data.data.bank;
        this.accountName = response.data.data.accountName;
        this.bankName = response.data.data.bankname;
        if (response.data.data.bank == null) {
          axios
            .get("api/createbank")
            .then(() => {})
            .catch((err) => {
              console.log(err);
            });
        }
        if (response.data.data.p_status == "false") {
          this.$router.push("../auth/type");
        }
      })
      .catch((e) => {
        console.log(e);
      });

    await axios
      .get("api/gettransaction")
      .then((res) => {
        this.transaction = res.data.data.reverse();
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
};
</script>
<style scoped lang="scss">
.bgbig {
  background: #fff;
  overflow: hidden;
  padding: 10px;
  position: relative;
  margin-top: 10px;

  .backtag {
    padding: 5px;
    margin: 5px;

    align-items: center;
    display: flex;
    img {
      margin-right: 2rem;
      font-size: 2rem;
    }
    span {
      font-weight: 600;
      color: #4a4e50;
    }
  }
  .balamcebar {
    padding: 5px;
    margin: 5px;

    img {
      position: relative;
      max-width: 503px;
      width: 100%;
    }
  }
  .card {
    border: none !important;
    background: #f5f5f5;
    border-radius: 10px;
    cursor: pointer;
    .card-body {
      h3 {
        color: #202020;
        font-size: 14px;
      }
      p {
        font-size: 14px;
      }
    }
  }
  .mycard2 {
    @media (max-width: 750px) {
      margin-top: 20px;
    }
  }
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
}

/* Modal Content/Box */
.modal-content {
  background-color: #fff;
  margin: 5% auto; /* 15% from the top and centered */
  padding: 20px;
  border: 1px solid #888;
  width: 100%;
  border-radius: 10px;
  max-width: 320px;
  .close {
    color: #aaa;
    float: right;
    font-size: 18px;
    font-weight: bold;
  }
  /* Could be more or less, depending on screen size */
  h3 {
    font-size: 14px;
  }
}

/* The Close Button */

.close:hover,
.close:focus {
  color: black;
  text-decoration: none;
  cursor: pointer;
}
input,
select,
textarea {
  border: none !important;
  background: #f5f5f5;
  border-radius: 5px;
  padding: 8px;
  font-size: 12px;
}
label {
  font-size: 12px !important;
}

.containerss {
  display: block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 22px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

/* Hide the browser's default checkbox */
.containerss input {
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
  height: 20px;
  width: 20px;
  border-radius: 5px;
  background-color: #eee;
  border: 1px solid #4a4e50;
}

/* On mouse-over, add a grey background color */
.containerss:hover input ~ .checkmark {
  background-color: #ccc;
}

/* When the checkbox is checked, add a blue background */
.containerss input:checked ~ .checkmark {
  background-color: #fff;
}

/* Create the checkmark/indicator (hidden when not checked) */
.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

/* Show the checkmark when checked */
.containerss input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.containerss .checkmark:after {
  left: 7px;
  top: 0px;
  width: 6px;
  height: 15px;
  border: solid #000;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}
form {
  .btn {
    background: #4705af;
    color: #fff;
    border-radius: 8px;
    outline: none;
    width: 100%;
    font-size: 12px;
    margin-top: 10px;
  }
}
.loader {
  border: 16px solid #f3f3f3; /* Light grey */
  border-top: 16px solid #4705af; /* Blue */
  border-radius: 50%;
  width: 10px;
  height: 10px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
.mybene {
  position:relative span {
    position: absolute;
    top: 0;
  }
}
</style>
