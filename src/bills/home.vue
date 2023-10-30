<template>
  <div
    class="app w-100 container-xxl"
    v-if="loading == false"
    style="padding: 0px !important"
  >
    <sidebar :firstname="fname" :lastname="lname" :username="username" />
    <div class="w-100">
      <!-- To Data -->
      <!-- The Modal -->
      <div id="mydata" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert :status="status" :alertstatus="alertstatus" :message="message" />

          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Mobile Data</h3>


            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendData">

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Service Provider</label>
              </div>
              <select
                type="tel"
                required
                v-model="service"
                class="form-control"
                id="Wallet"
                @change="getdataplan"
              >
                <option
                  v-for="item in airtimeprovider"
                  :key="item"
                  :value="{ name: item.name, id: item.id }"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Payment Plan</label>
              </div>

              <select
                type="tel"
                required
                v-model="plan"
                class="form-control"
                id="Wallet"
                @change="this.amount = plan.amount"
              >
                <option
                  v-for="item in (mtnapi === '1' && id === '1') ? filterplans.slice(0,6) : (mtnapi === '3' && id === '1')  ? filtermtnplan : (mtnapi === '2' && id === '1') ? plansdata2[1] : (airtelapi === '2' && id === '4') ? filterplans : (airtelapi === '3' && id === '4') ?  filterairtelplan : (gloapi === '2' && id === '2') ? filterplans  : (gloapi === '3' && id == '2') ?  filterglolan  : (mobileapi === '1' && id === '3') ? airtimeplans : filtermobileplan"
                 
                  :key="item"
                  :value="{
                    id:
                      mtnapi == '1' && service.id == '1'
                        ? item.plan
                        : (airtelapi == '2' && service.id == '2') ||
                          (gloapi == '2' && service.id == '4')
                        ? item.planid
                        : item.id,
                    amount: item.price,
                    name: item.name,
                    planname: item.plan,
                    plan:
                      mtnapi == '1' && service.id == '1'
                        ? item.plan
                        : (airtelapi == '2' && service.id == '2') ||
                          (gloapi == '2' && service.id == '4')
                        ? item.forx
                        : item.id,
                  }"
                >
                  {{ item.name }} {{ item.plan }} &#8358;{{ item.price }}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Recipient</label>
              </div>
              <input type="tel" required v-model="number" class="form-control" />
              <div class="d-flex" style="align-items: center" v-if="loader">
                <div class="loader" style="margin-right: 20px" v-if="mainloader"></div>
                <span
                  style="font-size: 12px; color: #202020"
                  :style="error ? 'color:red;font-weight:600' : 'color:green;font-weight'"
                >
                  {{ loadermessage }}
                  {{ name }} <br />
                  {{ address }}
                </span>
              </div>
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Amount </label>
              </div>
              <input type="tel" required readonly v-model="amount" class="form-control"  @keydown="$event.key === '-' ? $event.preventDefault() : null"
 />
            </div>

            <button type="submit" class="btn">Continue</button>
          </form>
        </div>
      </div>

      <!--End To Data -->
      <!-- To Electricity -->
      <!-- The Modal -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert :status="status" :alertstatus="alertstatus" :message="message" />

          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Electricity</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendBill">
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Service Provider</label>
              </div>
              <select
                type="tel"
                required
                v-model="service"
                class="form-control"
                id="Wallet"
                @change="getvariation"
              >
                <option
                  v-for="item in provider"
                  :key="item"
                  :value="{ name: item.name, id: item.id }"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Payment Plan</label>
              </div>
              <select type="tel" required v-model="plan" class="form-control" id="Wallet">
                <option v-for="item in plans" :key="item" :value="item.variation_code">
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Meter Number</label>
              </div>
              <input
                type="tel"
                required
                v-model="meterNumber"
                class="form-control"
                @blur="verify"
              />
              <div class="d-flex" style="align-items: center" v-if="loader">
                <div class="loader" style="margin-right: 20px" v-if="mainloader"></div>
                <span
                  style="font-size: 12px; color: #202020"
                  :style="error ? 'color:red;font-weight:600' : 'color:green;font-weight'"
                >
                  {{ loadermessage }}
                  {{ name }} <br />
                  {{ address }}
                </span>
              </div>
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Amount </label>
              </div>
              <input type="tel" required v-model="amount" class="form-control"    @keydown="$event.key === '-' ? $event.preventDefault() : null"
/>
            </div>

            <button type="submit" class="btn">Continue</button>
          </form>
        </div>
      </div>

      <!--End To Electricity -->

      <!-- To cabletv -->
      <!-- The Modal -->
      <div id="mycabletv" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert :status="status" :alertstatus="alertstatus" :message="message" />

          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Cable Tv</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendCableTv">
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Service Provider</label>
              </div>
              <select
                type="tel"
                required
                v-model="service"
                class="form-control"
                id="Wallet"
                @change="getvariation"
              >
                <option
                  v-for="item in tvprovider"
                  :key="item"
                  :value="{ name: item.name, id: item.id }"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Payment Plan</label>
              </div>
              <select
                type="tel"
                required
                v-model="plan"
                class="form-control"
                id="Wallet"
                @change="this.amount = plan.amount"
              >
                <option
                  v-for="item in plans"
                  :key="item"
                  :value="{
                    amount: item.variation_amount,
                    variation_code: item.variation_code,
                    ename: item.name,
                  }"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Meter Number</label>
              </div>
              <input
                type="tel"
                required
                v-model="meterNumber"
                class="form-control"
                @blur="verify"
              />
              <div class="d-flex" style="align-items: center" v-if="loader">
                <div class="loader" style="margin-right: 20px" v-if="mainloader"></div>
                <span
                  style="font-size: 12px; color: #202020"
                  :style="error ? 'color:red;font-weight:600' : 'color:green;font-weight'"
                >
                  {{ loadermessage }}
                  {{ name }} <br />
                  {{ address }}
                </span>
              </div>
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Amount </label>
              </div>
              <input type="tel" required readonly v-model="amount" class="form-control"                 @keydown="$event.key === '-' ? $event.preventDefault() : null"
 />
            </div>

            <button type="submit" class="btn">Continue</button>
          </form>
        </div>
      </div>

      <!--End To  CableTv -->

      <!-- To Airtime -->
      <!-- The Modal -->
      <div id="myairtime" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert :status="status" :alertstatus="alertstatus" :message="message" />

          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Airtime</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendAirtime">
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Service Provider</label>
              </div>
              <select
                type="tel"
                required
                v-model="service"
                class="form-control"
                id="Wallet"
                @change="getvariation"
              >
                <option
                  v-for="item in airtimeprovider"
                  :key="item"
                  :value="{ name: item.name, id: item.id }"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Phone Number</label>
              </div>
              <input
                type="tel"
                required
                v-model="number"
                class="form-control"
                maxlength="11"
                minlength="11"
              />
              <div class="d-flex" style="align-items: center" v-if="loader">
                <div class="loader" style="margin-right: 20px" v-if="mainloader"></div>
                <span
                  style="font-size: 12px; color: #202020"
                  :style="error ? 'color:red;font-weight:600' : 'color:green;font-weight'"
                >
                  {{ loadermessage }}
                  {{ name }} <br />
                  {{ address }}
                </span>
              </div>
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Amount </label>
              </div>
              <input type="tel" required v-model="amount" class="form-control"                 @keydown="$event.key === '-' ? $event.preventDefault() : null"
/>
            </div>

            <button type="submit" class="btn">Continue</button>
          </form>
        </div>
      </div>

      <!--End To  Airtime -->
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
                style="background: rgba(242, 238, 255, 0.1)"
                @click="toairtime"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/airtime.svg"
                    alt=""
                    style="
                      float: left;

                      width: 30px;
                      margin-right: 20px;
                    "
                  />

                  <div style="overflow: hidden">
                    <div
                      class="d-flex justify-content-between"
                      style="align-items: center"
                    >
                      <h3 style="color: #202020">Airtime</h3>
                    </div>

                    <p>Buy airtime for self and others in seconds.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div
                class="card"
                @click="todata"
                style="background: rgba(0, 124, 238, 0.1)"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/data.svg"
                    alt=""
                    style="
                      float: left;

                      width: 30px;
                      margin-right: 20px;
                    "
                  />

                  <div style="overflow: hidden">
                    <div
                      class="d-flex justify-content-between"
                      style="align-items: center"
                    >
                      <h3 style="color: #202020">Mobile Data</h3>
                    </div>

                    <p>Buy mobile data subscription and get connected.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 20px">
            <div class="col-md-6 col-lg-6">
              <div class="card" style="background: #f5f5ff" @click="toelectricity">
                <div class="card-body">
                  <img
                    src="@/assets/images/electricity.svg"
                    alt=""
                    style="
                      float: left;

                      width: 30px;
                      margin-right: 20px;
                    "
                  />

                  <div style="overflow: hidden">
                    <div
                      class="d-flex justify-content-between"
                      style="align-items: center"
                    >
                      <h3 style="color: #202020">Electricity</h3>
                    </div>

                    <p>Pay for electricity subscription with your meter code.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div
                class="card"
                style="background: rgba(18, 189, 137, 0.1)"
                @click="tocabletv"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/cabletv.svg"
                    alt=""
                    style="
                      float: left;
                      position: relative;
                      width: 30px;
                      margin-right: 20px;
                    "
                  />

                  <div style="overflow: hidden">
                    <div
                      class="d-flex justify-content-between"
                      style="align-items: center"
                    >
                      <h3 style="color: #202020">Cable TV</h3>
                    </div>

                    <p>Pay for cable tv subscription Dstv, Gotv and more.</p>
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
  name: "myBill",
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
      datacharges: 0,
      ledger: 0,
      mainbalance: 0,
      number: 0,
      lname: "",
      amount: 0,
      selectedbox: 1,
      mtnapi: "",
      mobileapi:'',
      fname: "",
      username: "",
      moment: moment,
      transaction: [],
      meterNumber: "",
      plans: [],
      accountName: "",
      accountNumber: "",
      loader: false,
      loadermessage: "Please wait",
      mainloader: false,
      airtimeplans:[],
      name: "",
      address: "",
      phone: "",
      cbill: 0,

      bankName: "",
      alertstatus: false,
      status: "",
      plan: "",
      charges: 0,
      message: "",
      service: [],
      myplans2: [],
      gloplas:[],
      provider: [
        {
          name: "Ikeja Electric Payment - IKEDC",
          id: "ikeja-electric",
        },
        {
          name: "Eko Electric Payment - EKEDC",
          id: "eko-electric",
        },
        {
          name: "Abuja Electricity Distribution Company- AEDC",
          id: "abuja-electric",
        },
        {
          name: "KEDCO - Kano Electric",
          id: "kano-electric",
        },
        {
          name: "PHED - Port Harcourt Electric",
          id: "portharcourt-electric",
        },
        {
          name: "Jos Electric - JED",
          id: "jos-electric",
        },
        {
          name: "Kaduna Electric - KAEDCO",
          id: "kaduna-electric",
        },
        {
          name: "Enugu Electric - EEDC",
          id: "enugu-electric",
        },
        {
          name: "IBEDC - Ibadan Electricity Distribution Company",
          id: "ibadan-electric",
        },
        {
          name: "Benin Electricity - BEDC",
          id: "benin-electric",
        },
      ],

      tvprovider: [
        {
          name: "DSTV Subscription",
          id: "dstv",
        },
        {
          name: "Gotv Payment",
          id: "gotv",
        },
        {
          name: "Startimes Subscription",
          id: "startimes",
        },
        {
          name: "ShowMax",
          id: "showmax",
        },
      ],
      airtimeprovider: [
        {
          name: "MTN",
          id: "1",
        },
        {
          name: "Airtel",
          id: "2",
        },
        {
          name: "9moblie",
          id: "3",
        },
        {
          name: "Glo",
          id: "4",
        },
      ],
      airtimecharges: 0,
      plansdata: [],
      plansdata2: [],
      myplans: [],
      id: "",
    };
  },
  methods: {
    getdataplan() {
      const id = this.service.id;
      this.id = this.service.id
      
      this.airtimeplans = this.plansdata2[this.id]
    

      
     
        if (this.mtnapi == "1") {
          this.myplans2 = this.plansdata;
         // this.id = "1";
        } else {
          this.myplans = this.plansdata2[id];
        }
      
      
      
      if (id == "2") {
       
          this.id = "4";
      }
      if(id == '4'){
        this.id = '2'
      }
      if(id == '3'){
        this.id = '3'
        
      }
      /*
      if (id == "4") {
        if (this.gloapi == "1") {
          this.myplans = this.plansdata2[id];
        } else {
          this.myplans2 = this.plansdata;
          this.id = "2";
        }
      }
      if (id == "3") {
        this.myplans = this.plansdata2[id];
      }
      console.log(this.id)
      */
      
    },
    sendData() {
      var current = new Date();
      const data = {
        type: 2,
        status: 1,
        ref: moment(current).format("YYYYMMDDHHm"),
        am: this.plan.amount,
        plan: this.plan.plan,
        planid: this.plan.plan,
        network: this.service.id,
        reciever: this.number,
        amount:
          parseFloat(this.plan.amount) -
          parseFloat(this.plan.amount) * parseFloat(this.datacharges),
        name: this.service.name,
        charges: parseFloat(this.plan.amount) * parseFloat(this.datacharges),
        mtn: this.mtnapi == 1 && this.service.id == 1 ? "mtn" : "",
        m: "web",
        planname: this.plan.planname,
      };
      localStorage.setItem("form", JSON.stringify(data));
      this.$router.push("../transaction/payment/7fthnkTYvbRtKLu&");
    },
    sendAirtime() {
      const data = {
        charges: parseFloat(this.airtimecharges) * parseFloat(this.amount),
        type: 1,
        status: 1,
        ref: this.service.name,
        amount: parseFloat(this.amount),
        plan: "",
        planid: "",
        network: this.service.id,
        reciever: this.number,
        name: this.service.name,
        mtn: "mtn",
        m: "web",
        am: parseFloat(this.amount),
      };
      localStorage.setItem("form", JSON.stringify(data));
      this.$router.push("../transaction/payment/7fthnkTYvbRtKLu&");
    },
    sendCableTv() {
      const current = new Date();

      const data = {
        /*
        serviceID: this.service.id,
        billersCode: this.meterNumber,
        variation_code: this.plan.variation_code,
        amount: this.plan.amount,
        phone: this.phone,
        service: this.service.name,
        metername: this.name,
        ename: this.service.name,
        type: 3,
        address: "",
        charges: this.charges,
        */

        reciever: this.meterNumber,
        type: 3,
        status: 1,
        ref: moment(current).format("YYYYMMDDHHm") + Math.random() * 1000,
        amount: this.plan.amount,
        plan: this.plan.variation_code,
        name: this.name,
        network: this.service.name,
        cref: moment(current).format("YYYYMMDDHHm"),
        serveid: this.service.id,
        ph: this.phone,
        am: this.plan.amount,
        bi: this.meterNumber,
        variationcode: this.plan.variation_code,
        requestid: moment(current).format("YYYYMMDDHHm") + Math.random() * 1000,
        fr: "",
        st: this.service.name,
        m: "web",
      };
      localStorage.setItem("form", JSON.stringify(data));
      this.$router.push("../transaction/payment/75dgagTvdjRESvd&");
    },
    tocabletv() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      var tv = document.getElementById("mycabletv");
      tv.style.display = "block";
    },
    toairtime() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      var tv = document.getElementById("mycabletv");
      tv.style.display = "none";
      var airtime = document.getElementById("myairtime");
      airtime.style.display = "block";
    },
    todata() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      var tv = document.getElementById("mycabletv");
      tv.style.display = "none";
      var airtime = document.getElementById("myairtime");
      airtime.style.display = "none";
      var data = document.getElementById("mydata");
      data.style.display = "block";
    },
    toelectricity() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      var data = document.getElementById("mydata");
      data.style.display = "none";
      modal.style.display = "none";
      var tv = document.getElementById("mycabletv");
      tv.style.display = "none";
      var airtime = document.getElementById("myairtime");
      airtime.style.display = "none";
    },
    async getvariation() {
      await axios
        .get(`api/getcableorbillplan?serviceid=${this.service.id}`)
        .then((res) => {
          this.plans = res.data.content.variations;
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async verify() {
      this.loader = true;
      this.mainloader = true;
      const data = {
        serviceID: this.service.id,
        billersCode: this.meterNumber,
        type: this.variation_code,
      };
      await axios
        .post("api/getmearchant", data)
        .then((res) => {
          if (res.data.content.Customer_Name) {
            this.name = res.data.content.Customer_Name;
            this.address = res.data.content.Address;
            this.loadermessage = "";
            this.mainloader = false;
          } else {
            this.name = res.data.content.error;
            this.error = true;
            this.loadermessage = "";
            this.mainloader = false;
          }
        })
        .catch((e) => {
          console.log(e);
        });
    },
    sendBill() {
      var current = new Date();

      const data = {
        /*
        serviceID: this.service.id,
        billersCode: this.meterNumber,
        variation_code: this.plan,
        amount: this.amount,
        phone: this.phone,
        service: this.service,
        metername: this.name,
        ename: this.service.name,
        type: 5,
        address: this.address,
        charges: this.charges,
        */

        reciever: this.meterNumber,
        type: 5,
        status: 1,
        clubkonnectdata:[],
        ref: moment(current).format("YYYYMMDDHHm") + Math.random() * 1000,
        amount: this.amount,
        plan: this.plan.variation_code,
        name: this.name,
        network: this.service.name,
        cref: moment(current).format("YYYYMMDDHHm"),
        serveid: this.service.id,
        ph: this.phone,
        am: this.amount,
        bi: this.meterNumber,
        variationcode: this.plan.variation_code,
        requestid: moment(current).format("YYYYMMDDHHm") + Math.random() * 1000,
        fr: "",
        st: this.service.name,
        m: "web",
        charges: this.cbill,
      };
      localStorage.setItem("form", JSON.stringify(data));
      this.$router.push("../transaction/payment/75dgagTvdjRESvd&");
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
        this.accountNumber = response.data.data.bank;
        this.phone = response.data.data.phone;
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
      .get("api/getmanagement")
      .then((res) => {
        this.charges = res.data.data.cbill;
        this.airtimecharges = res.data.data.caitime;
        this.mtnapi = res.data.data.mtnapi;
        this.airtelapi = res.data.data.airtelapi;
        this.gloapi = res.data.data.gloapi;
        this.datacharges = res.data.data.cdata;
        this.mobileapi = res.data.data.mobileapi

        this.loading = false;
      })
      .catch((e) => {
        console.log(e);
      });
    await axios
      .get("api/smeplans?type=data")
      .then((res) => {
        this.plansdata2 = res.data.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
    await axios
      .get("/api/getmtnplans")
      .then((res) => {
     //  console.log(res)
        this.plansdata = res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
      await axios
      .get("/api/getclubconnectdata")
      .then((res) => {
       // console.log(res)
       this.clubkonnectdata =   res.data.data;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  computed: {
    ...mapGetters(["user"]),
    filterplans: function () {
      return this.plansdata.filter((item) => {
        return item.planid.match(this.id);
      });
    },
    filtermtnplan : function(){
      return this.clubkonnectdata?.filter((item)=>{
        return item.network.match('01')
      })
    },
    filterglolan : function(){
      return this.clubkonnectdata?.filter((item)=>{
        return item.network.match('02')
      })
    },
    filtermobileplan : function(){
      return this.clubkonnectdata?.filter((item)=>{
        return item.network.match('03')
      })
    },
    filterairtelplan : function(){
      return this.clubkonnectdata?.filter((item)=>{
        return item.network.match('04')
      })
    }
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
    @media (max-width: 750px) {
      margin-top: 20px;
    }
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
  max-width: 500px;
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
</style>
