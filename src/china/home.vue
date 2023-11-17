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
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Alipay</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendData(35)">
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">User ID</label>
              </div>
              <input
                type="text"
                required
                v-model="userid"
                min="0"
                step="0.1"
                class="form-control"
                id="Wallet"
                placeholder="Enter User ID "
              />
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Account Name</label>
              </div>
              <input
                type="text"
                required
                v-model="accountName"
                class="form-control"
                id="Wallet"
                @keyup="verifybank"
                placeholder="Account Number"
              />
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Amount(RMB/Yuan)</label>
              </div>
              <input
                type="number"
                required
                v-model="amount"
                @keyup="getAddAmount"
                min="0"
                step="0.1"
                class="form-control"
                id="Wallet"
                placeholder="Enter Amount(RMB/Yuan)"
              />
              <span style="color: crimson; font-size: 14px" v-show="messageerror"
                >Invalid amount</span
              >
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Converted Amount(In Naira)</label>
              </div>
              <input
                type="number"
                required
                v-model="convertedAmount"
                min="0"
                step="0.1"
                class="form-control"
                id="Wallet"
                readonly
              />
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Fee(In Naira)</label>
              </div>
              <input
                type="number"
                required
                v-model="fee"
                min="0"
                step="0.1"
                class="form-control"
                id="Wallet"
                readonly
                placeholder="Enter Amount"
              />
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Total Amount (In Naira)</label>
              </div>
              <input
                type="text"
                required
                v-model="totalAmount"
                class="form-control"
                id="Wallet"
                placeholder="Enter Amount"
              />
            </div>

            <button class="btn" type="submit">Continue</button>
          </form>
        </div>
      </div>

      <!--End To Cardrri -->
      <!-- Foreign beneficiary -->
      <div id="myforeignBeneficiary" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert :status="status" :message="message" :alertstatus="alertstatus" />
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Add Beneficiary</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="addForbeneficiarys">
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px"></div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; margin-bottom: 10px"
                >
                  <label for="Wallet">Entity</label>
                </div>
                <select
                  type="text"
                  class="form-control"
                  v-model="entity"
                  required
                  @change="selectentity"
                  placeholder="Select Entity"
                >
                  <option selected>Select Entity</option>
                  <option value="Individual">Individual</option>
                  <option value="Company">Company</option>
                </select>
              </div>
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
              v-if="entity == 'Individual'"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">First Name </label>
              </div>
              <input
                type="text"
                required
                v-model="benfirstname"
                class="form-control"
                id="Wallet"
                placeholder="Enter beneficiary First Name"
              />
            </div>
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
              v-if="entity == 'Individual'"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Last Name </label>
              </div>
              <input
                type="text"
                required
                v-model="benlastname"
                class="form-control"
                id="Wallet"
                placeholder="Enter beneficiary Last Name"
              />
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
              v-if="entity == 'Company'"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Company Name </label>
              </div>
              <input
                type="text"
                required
                v-model="bencompany"
                class="form-control"
                id="Wallet"
                placeholder="Enter beneficiary Company Name"
              />
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Select Currency</label>
              </div>
              <select
                type="text"
                class="form-control"
                v-model="selectedcurrency"
                @change="getselectcountry"
                required
                placeholder="Beneficiary Bank"
              >
                <option
                  :value="{ currency: item.currencyName, country: item.countryName }"
                  v-for="item in listcurrency"
                  :key="item"
                >
                  {{ item.currencyName }}
                </option>
              </select>
            </div>
            <div
              class="d-flex justify-content-between"
              style="align-items: center; margin-bottom: 10px"
            >
              <label for="Wallet">Select Country (readonly)</label>
            </div>
            <input
              type="text"
              class="form-control"
              v-model="selectedcountry"
              readonly
              required
              placeholder="Select Country"
            />

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Account Number</label>
              </div>
              <input
                type="tel"
                required
                v-model="benAccountNumber"
                class="form-control"
                id="Wallet"
                placeholder="Account Number"
                maxlength="11"
              />
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">National ID number</label>
              </div>
              <input
                type="tel"
                required
                v-model="nationalId"
                class="form-control"
                id="Wallet"
                placeholder="Enter National ID"
              />
            </div>

            <button class="btn" type="submit">Add Beneficiary</button>
          </form>
        </div>
      </div>
      <!-- End Foreign beneficiary -->

      <!--- to Foreign -->
      <div id="myForeign" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Wechat pay</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendData(36)">
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">User ID</label>
              </div>
              <input
                type="text"
                required
                v-model="userid"
                min="0"
                step="0.1"
                class="form-control"
                id="Wallet"
                placeholder="Enter User ID "
              />
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Account Name</label>
              </div>
              <input
                type="text"
                required
                v-model="accountName"
                class="form-control"
                id="Wallet"
                @keyup="verifybank"
                placeholder="Account Number"
              />
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Amount(RMB/Yuan)</label>
              </div>
              <input
                type="number"
                required
                v-model="amount"
                @keyup="getAddAmount"
                min="0"
                step="0.1"
                class="form-control"
                id="Wallet"
                placeholder="Enter Amount(RMB/Yuan)"
              />
              <span style="color: crimson; font-size: 14px" v-show="messageerror"
                >Invalid amount</span
              >
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Converted Amount(In Naira)</label>
              </div>
              <input
                type="number"
                required
                v-model="convertedAmount"
                min="0"
                step="0.1"
                class="form-control"
                id="Wallet"
                readonly
              />
            </div>

            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Fee(In Naira)</label>
              </div>
              <input
                type="number"
                required
                v-model="fee"
                min="0"
                step="0.1"
                class="form-control"
                id="Wallet"
                readonly
                placeholder="Enter Amount"
              />
            </div>
            <div class="form-group" style="margin-top: 20px; margin-bottom: 20px">
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Total Amount (In Naira)</label>
              </div>
              <input
                type="text"
                required
                v-model="totalAmount"
                class="form-control"
                id="Wallet"
                placeholder="Enter Amount"
              />
            </div>

            <button class="btn" type="submit">Continue</button>
          </form>
        </div>
      </div>

      <!-- End foreign -->

      <div id="myBeneficiary" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div>
            <div class="w-100 d-flex justify-content-start">
              <div
                class="d-flex border"
                style="
                  align-items: center;
                  padding: 5px;
                  border-radius: 5px;
                  cursor: pointer;
                "
                @click="closeModal"
              >
                <span class="material-icons" style="font-size: 12px">arrow_back</span>
                <span style="font-size: 12px">Back</span>
              </div>
            </div>
            <div class="w-100 d-flex justify-content-end">
              <div
                class="d-flex border"
                style="
                  align-items: center;
                  padding: 5px;
                  border-radius: 5px;
                  background: #f5f5ff;
                  color: #4705af;
                  font-weight: 600;
                  cursor: pointer;
                "
                @click="showaddbneficiary"
              >
                <span class="material-icons" style="font-size: 12px; margin-right: 5px"
                  >person</span
                >
                <span style="font-size: 12px">Add</span>
              </div>
            </div>
            <h3 style="margin-bottom: 0px !important; font-size: 12px; font-weight: 700">
              Beneficiaries
            </h3>
            <span style="font-size: 10px">Choose a recipient</span>
            <div class="w-100 mybene">
              <!-- <span class="material-icons">search</span> -->
              <input
                type="text"
                class="form-control"
                placeholder="Search beneficiary"
                style="margin-top: 20px"
                v-model="search"
              />

              <div class="py-2 mt-3">
                <div v-for="item in filterBeneficiary" :key="item">
                  <div
                    class="d-flex justify-content-between"
                    style="align-items: center; margin-top: 14px"
                  >
                    <h3>{{ item.fname }} {{ item.lname }}</h3>
                    <span
                      class="material-icons"
                      style="font-size: 12px; cursor: pointer"
                      @click="deletebene(item)"
                      >delete</span
                    >
                  </div>
                  <span
                    style="
                      margin-top: -10px;
                      display: block !important;
                      font-size: 10px;
                      color: rgba(74, 78, 80, 1);
                    "
                    >{{ item.accountNumber }}</span
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="myaddbeneficiary" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div>
            <div class="w-100 d-flex justify-content-start">
              <div
                class="d-flex border"
                style="align-items: center; padding: 5px; border-radius: 5px"
              >
                <span class="material-icons" style="font-size: 12px">arrow_back</span>
                <span style="font-size: 12px">Back</span>
              </div>
            </div>
            <h3 style="margin-bottom: 0px !important; font-size: 700; margin-top: 20px">
              Beneficiaries
            </h3>
            <span style="font-size: 10px">Fill this sections to add beneficiaries </span>
            <div class="w-100 mybene">
              <!-- <span class="material-icons">search</span> -->

              <div class="py-2 mt-3">
                <form @submit.prevent="addbeneficiary">
                  <div class="form-group">
                    <label for="exampleInputPassword1">Bank</label>
                    <select class="form-control" v-model="bankCode" required>
                      <option
                        v-for="item in banks"
                        :key="item.bankCode"
                        :value="{ name: item.bankName, code: item.bankCode }"
                      >
                        {{ item.bankName }}
                      </option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Account Number</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="accountNumber"
                      required
                    />
                  </div>
                  <div class="form-group">
                    <label for="exampleInputPassword1">Account Name</label>
                    <input
                      type="text"
                      class="form-control"
                      v-model="accountName"
                      required
                    />
                  </div>

                  <button type="submit" class="btn btn-primary" :disabled="fillData">
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <headers :firstname="fname" :lastname="lname" />

      <div class="bgbig">
        <div class="backtag">
          <img src="@/assets/images/back.svg" alt="" @click="this.$router.go(-1)" />
          <span style="text-transform: capitalize">{{ this.$route.name }}</span>
        </div>
        <div class="balamcebar">
          <div class="row" style="margin-top: 20px">
            <!--
              <div class="col-md-6 col-lg-6">
               
                <div class="card" style="background: #f5f5ff" @click="tocardri('cardri')">
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
                      src="@/assets/images/sendblack.svg"
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
                        <h3>Cardri Wallet</h3>
                      </div>
  
                      <p>Send money to a cardri directly from your cardri wallet</p>
                    </div>
                  </div>
                </div>
              </div>
              -->

            <div class="col-md-6 col-lg-6">
              <div
                class="card"
                style="background: rgba(18, 189, 137, 0.1)"
                @click="tocardri('bank')"
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
                    src="@/assets/images/bank2.svg"
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
                      <h3>Alipay</h3>
                    </div>

                    <p>Pay with Alipay with ease.</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div
                class="card mycard2"
                @click="toForeign"
                style="background: rgba(249, 115, 22, 0.1)"
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
                    src="@/assets/images/foreign.svg"
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
                      <h3>Wechat Pay</h3>
                    </div>

                    <p>Wechat pay with ease.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="row" style="margin-top: 20px"></div>
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
import alert from "@/components/alert.vue";

export default {
  name: "chinaPay",
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
      amount: 0,
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
      fee: 0,
      totalAmount: 0,
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
      convertedAmount: 0,
      wallet: "",
      alertstatus: false,
      status: "",
      message: "",
      purposeid: "",
      purposes: [],
      foreignAccountNumber: "",
      foreigncountry: "",
      foreigncurrency: "",
      userid: "",
      messageerror: false,
    };
  },
  methods: {
    valididty(event) {
      console.log(event);
      if (event.key == "-") {
        event.preventDefault();
        return false;
      }
    },
    async deletebene(item) {
      // console.log(item);
      const data = {
        id: item.id,
      };

      await axios
        .delete(`api/deleteben?id=${data.id}`)
        .then(() => {
          //  console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async sendData(ty) {
      if (this.amount > 0) {
        this.messageerror = false;

        const data = {
          amount: this.amount,
          mainNairaamount: this.totalAmount,
          accountname: this.accountName,
          userid: this.userid,
          m: "web",
          type: ty,
          fee: this.fee,
          convertedAmount: this.convertedAmount,
        };
        console.log(data);
        localStorage.setItem("form", JSON.stringify(data));
        this.$router.push("../transaction/payment/TYYSbqjdh89fiw273&");
      } else {
        this.messageerror = true;
      }
    },
    getAddAmount() {
      if (this.amount > 0) {
        this.convertedAmount = parseFloat(this.rate) * parseFloat(this.amount);
        this.totalAmount = parseFloat(this.convertedAmount) + parseFloat(this.fee);
      }
    },
    async verifybank() {
      if (this.accountNumber.length === 10 && this.bankCode.length !== 0) {
        this.loader = true;
        this.mainloader = true;
        await axios
          .get(`api/getname?bank=${this.accountNumber}&code=${this.bankCode.code}`)
          .then((res) => {
            //  console.log(res);

            this.sesid = res.data.Data.SessionID;
            this.charges = res.data.Data.TransferCharge;
            this.mainloader = false;
            const errorme = res.data.Status;
            if (errorme == false) {
              this.loadermessage = res.data.Message;
              this.error = true;
            } else {
              this.loadermessage = res.data.Data.BeneficiaryName;
            }
          })
          .catch((e) => {
            console.log(e);
          });
      }
    },
    tobeneificiary() {
      var modals = document.getElementById("myModal");
      modals.style.display = "none";
      var modal = document.getElementById("myBeneficiary");
      modal.style.display = "block";
    },
    showaddbneficiary() {
      var modal = document.getElementById("myBeneficiary");
      modal.style.display = "none";
      var x = document.getElementById("myaddbeneficiary");
      x.style.display = "block";
    },
    addForbeneficiary() {
      var modal = document.getElementById("myForeign");
      modal.style.display = "none";
      var modals = document.getElementById("myforeignBeneficiary");
      modals.style.display = "block";
    },
    tocardri(bank) {
      this.benbank = bank;
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    toForeign() {
      var modal = document.getElementById("myForeign");
      modal.style.display = "block";
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      var modalsss = document.getElementById("myForeign");

      var modals = document.getElementById("myBeneficiary");
      var modalss = document.getElementById("myaddbeneficiary");
      var modalssss = document.getElementById("myforeignBeneficiary");

      modal.style.display = "none";
      modals.style.display = "none";
      modalss.style.display = "none";
      modalsss.style.display = "none";
      modalssss.style.display = "none";
    },
    async addbeneficiary() {
      this.fillData = true;
      const data = {
        accountName: this.accountName,
        accountNumber: this.accountNumber,
        code: this.bankCode,
      };
      console.log(data);
      await axios.post("");
    },
    getselectcountry() {
      this.selectedcountry = this.selectedcurrency.country;
    },
    geteachbeneficiary() {
      this.foreignAccountNumber = this.myben.accountNumber;
      (this.foreigncountry = this.myben.beneficiaryCountryCode),
        (this.foreigncurrency = this.myben.currency);
    },
    async addForbeneficiarys() {
      const data = {
        entity: this.entity,
        c_name: this.bencompany,
        fname: this.benfirstname,
        lname: this.benlastname,
        currency: this.selectedcurrency.currency,
        accountNumber: this.benAccountNumber,
        nationalId: this.nationalId,
        country: this.selectedcurrency.country,
        beneficiaryCountryCode: this.selectedcurrency.currency.substring(
          0,
          this.selectedcurrency.currency.length - 1
        ),
      };
      // console.log(data);
      await axios
        .post("api/createbeneficiary", data)
        .then(() => {
          this.alertstatus = true;
          this.status = "success";
          this.message = "Beneficiary Added";
          setTimeout(() => {
            this.alertstatus = false;
          });
        })
        .catch(() => {
          this.alertstatus = true;
          this.status = "failed";
          this.message = "Failed";
          setTimeout(() => {
            this.alertstatus = false;
          });
        });
    },

    calculate() {
      this.amountto = parseFloat(this.rate) * parseFloat(this.amountfrom);
    },
    sendForeign() {
      const data = {
        beneficiaryId: this.myben.id,
        purposeId: this.purposeid,
        currencyfrom: this.wallet,
        amount: this.amountfrom,
        rate: this.rate,
        entity: this.myben.entity,
        amountto: this.amountto,
        naration: "",
        charges: 0,
        bencurrency: this.myben.currency,
        benconntry: this.myben.country,
        fname: this.myben.fname,
        lname: this.myben.lname,
        c_name: this.myben.c_name,
      };
      // console.log(data);
      localStorage.setItem("form", JSON.stringify(data));
      this.$router.push("../transaction/payment/kjGstevshaidTTY&");
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
    await axios
      .get("api/getmanagement")
      .then((res) => {
        //console.log(res);
        this.fee = res.data.data.chinapafee;
        this.rate = res.data.data.chinapayrate;
        // this.successloading = false;
        this.amountto = parseFloat(this.rate) * parseFloat(this.amountfrom);
      })
      .catch((e) => {
        console.log(e);
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
</style>
