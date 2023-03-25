<template>
  <div
    class="app w-100 container-xxl"
    v-if="loading == false"
    style="padding: 0px !important"
  >
    <sidebar :firstname="fname" :lastname="lname" :username="username" />
    <div class="w-100">
      <headers :firstname="fname" :lastname="lname" />

      <div class="bgbig">
        <div class="backtag">
          <img src="@/assets/images/back.svg" alt="" @click="this.$route.go(-1)" />
          <span style="text-transform: capitalize">{{ this.$route.name }}</span>
        </div>
        <div class="balamcebar">
          <div class="img-down">
            <div class="d-flex justify-content-center">
              <img src="@/assets/images/referral.svg" alt="" />
            </div>
            <h4>Refer and Earn</h4>
            <div class="invite">
              Invite your friends to cardri and earn N500.00 once they start transacting.
            </div>
            <div
              class="d-flex justify-content-between align-center"
              style="align-items: center; width: 100%; max-width: 250px; margin: 0px auto"
            >
              <div class="m-2">
                <span style="font-size: 12px; font-weight: 500">Referral link</span><br />
                <span
                  style="font-size: 11px"
                  @click="copyURL(`https://www.cardri.ng/${username}`)"
                  >https://www.cardri.ng/{{ username }}</span
                >
              </div>
              <span
                class="material-icons"
                style="color: #12bd89; font-size: !2px; cursor: pointer"
                @click="copyURL(username)"
                >content_copy</span
              >
            </div>
            <div
              class="d-flex justify-content-between align-center"
              style="align-items: center; width: 100%; max-width: 250px; margin: 0px auto"
            >
              <div class="m-2">
                <span style="font-size: 12px; font-weight: 500">Referral Code</span><br />
                <span style="font-size: 11px">{{ username }}</span>
              </div>
              <span class="material-icons" style="color: #12bd89; cursor: pointer"
                >content_copy</span
              >
            </div>
            <button
              class="btn w-100"
              style="
                background: #4705af;
                font-size: 12px;
                color: #fff;
                margin-top: 10px;
                box-sizing: border-box;
              "
            >
              Refer Now
            </button>

            <a
              href="javascript:void()"
              type="button"
              style="
                text-decoration: none;
                color: #4a4e50;
                width: 100%;
                text-align: center;
                font-size: 12px;
                margin-top: 10px;
              "
              >View Earn</a
            >
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
//import alert from "@/components/alert.vue";

export default {
  name: "myReferral",
  components: {
    sidebar,
    headers,
    Loader,
  },
  data() {
    return {
      showdrop: false,
      selecteds: "",
      loading: true,
      ledger: 0,
      mainbalance: 0,
      benfirstname: "",
      benlastname: "",
      bencompany: "",
      eror: false,
      rate: 0,
      amountfrom: 0,
      amountto: 0,
      selectedcurrency: "",
      selectedcountry: "",
      lname: "",
      selectedbox: 1,
      myben: [],
      success: false,
      fname: "",
      mainloader: false,
      username: "",
      moment: moment,
      transaction: [],
      benbank: "Cardri",
      accountNumber: "",
      bankCode: [],
      source: "",
      description: "",
      loader: false,
      beneficiary: [],
      listcurrency: [],
      successloading: false,

      error: false,
      loadermessage: "Please wait",
      accountName: "",
      fillData: false,
      benAccountNumber: "",
      bns: false,
      sesid: "",
      nationalId: "",
      charges: 0,
      search: "",
      banks: [],
      entity: "",
      wallet: "",
      alertstatus: false,
      status: "",
      message: "",
      purposeid: "",
      purposes: [],
      foreignAccountNumber: "",
      foreigncountry: "",
      foreigncurrency: "",
    };
  },
  methods: {
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

  async mounted() {
    await axios
      .get("api/getdatils")
      .then((response) => {
        this.mainbalance = response.data.data.ngn_ld;
        this.ledger = response.data.data.NGN;
        this.username = response.data.data.username;
        this.fname = response.data.data.fname;
        this.lname = response.data.data.lname;
        this.loading = false;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  computed: {
    filterBeneficiary: function () {
      return this.beneficiary.filter((item) => {
        return item.fname;
      });
    },
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
    .img-down {
      width: 100%;
      max-width: 350px;
      margin: 10px auto;
      img {
        margin: 0px auto;
      }
      h4 {
        font-weight: 600;
        text-align: center;
        margin-top: 20px;
      }
      .invite {
        text-align: center;
        font-size: 0.9rem;
      }
    }
  }
}
</style>
