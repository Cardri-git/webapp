<template>
  <div
    class="app w-100 container-xxl"
    v-if="loading == false"
    style="padding: 0px !important"
  >
    <sidebar :firstname="fname" :lastname="lname" :username="username" />
    <div class="w-100">
      <!-- To Cardri -->
      <div id="myModals" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Transaction Details</h3>

            <span
              class="close material-icons cursor-pointer"
              @click="closeModal"
              style="cursor: pointer !important"
              >close</span
            >
          </div>
          <div
            class="card"
            style="border: none; margin-top: 30px; padding: 0px !important"
          >
            <div
              class="card-body"
              style="padding: 5px !important; margin: 0px !important; cursor: pointer"
            >
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="
                  selectedItem.type != 16 &&
                  selectedItem.type != 15 &&
                  selectedItem.type != 17 &&
                  selectedItem.type != 18 &&
                  selectedItem.type != 20
                "
              >
                <span>Receiver</span>
                <span style="font-weight: 600; font-size: 14px">{{
                  selectedItem.reciever
                }}</span>
              </div>
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="selectedItem.type == 16 && selectedItem.reciever != username"
              >
                <span>Bought from</span>
                <span style="font-weight: 600; font-size: 14px">{{
                  selectedItem.reciever
                }}</span>
              </div>
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="selectedItem.type == 16 && selectedItem.reciever == username"
              >
                <span>Buyer</span>
                <span style="font-weight: 600; font-size: 14px">{{
                  selectedItem.user
                }}</span>
              </div>
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="selectedItem.type == 15"
              >
                <span>Rate</span>
                <span style="font-weight: 600; font-size: 14px"
                  >1{{ selectedItem.network }} = {{ selectedItem.plan }}
                  {{ selectedItem.name }}
                </span>
              </div>
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="selectedItem.type == 5"
              >
                <span>Token</span>
                <span style="font-weight: 600; font-size: 14px">{{
                  selectedItem.eletoken
                }}</span>
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Service</span>
                <span
                  v-if="selectedItem.type == 1"
                  style="font-weight: 600; font-size: 14px; text-transform: uppercase"
                >
                  {{
                    selectedItem.name == 1
                      ? "MTN"
                      : selectedItem.name == "2"
                      ? "Airtel"
                      : selectedItem.name == 4
                      ? "GLO"
                      : selectedItem.name == "3"
                      ? "Etisalat"
                      : selectedItem.name
                  }}
                  Data subscription
                </span>
                <span
                  v-if="selectedItem.type == 2"
                  style="font-weight: 600; font-size: 14px; text-transform: uppercase"
                >
                  {{
                    selectedItem.name == 1
                      ? "MTN"
                      : selectedItem.name == "2"
                      ? "Airtel"
                      : selectedItem.name == 4
                      ? "GLO"
                      : selectedItem.name == "3"
                      ? "Etisalat"
                      : selectedItem.name
                  }}
                  Data subscription
                </span>
                <span
                  v-if="selectedItem.type == 20"
                  style="font-weight: 600; font-size: 14px"
                  >You unload a card</span
                >
                <span
                  v-if="selectedItem.type == 18"
                  style="font-weight: 600; font-size: 14px"
                  >You created a card</span
                >
                <span
                  v-if="selectedItem.type == 12"
                  style="font-weight: 600; font-size: 14px"
                  >Bank Transfer</span
                >
                <span
                  v-if="selectedItem.type == 3"
                  style="font-weight: 600; font-size: 14px"
                  >Cable Tv</span
                >
                <span
                  v-if="selectedItem.type == 4"
                  style="font-weight: 600; font-size: 14px"
                  >Intra Transfer</span
                >
                <span
                  v-if="selectedItem.type == 5"
                  style="font-weight: 600; font-size: 14px"
                  >Electricity</span
                >

                <span
                  v-if="selectedItem.type == 6"
                  style="font-weight: 600; font-size: 14px"
                  >Account Funding</span
                >
                <span
                  v-if="selectedItem.type == 35"
                  style="font-weight: 600; font-size: 14px"
                  >Alipay Payment</span
                >
                <span
                  v-if="selectedItem.type == 36"
                  style="font-weight: 600; font-size: 14px"
                  >Wechat Payment</span
                >
                <span
                  v-if="selectedItem.type == 10"
                  style="font-weight: 600; font-size: 14px"
                  >Upgrade Account</span
                >
                <span
                  v-if="selectedItem.type == 17"
                  style="font-weight: 600; font-size: 14px"
                  >Card Funding</span
                >

                <span
                  v-if="selectedItem.type == 15"
                  style="font-weight: 600; font-size: 14px"
                >
                  Currency swap
                  <span>({{ selectedItem.cref }})</span>
                </span>
                <span
                  v-if="selectedItem.type == 16"
                  style="font-weight: 600; font-size: 14px"
                >
                  Currency swap(P2P)
                  <span>({{ selectedItem.cref }})</span>
                </span>
              </div>
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="selectedItem.type == 12"
              >
                <span>Receiver Bank</span>
                <span style="font-weight: 600; font-size: 14px">{{
                  selectedItem.plan
                }}</span>
              </div>
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="selectedItem.type == 12"
              >
                <span>Receiver Name</span>
                <span
                  style="font-weight: 600; font-size: 14px; text-transform: lowercase"
                  >{{ selectedItem.network }}</span
                >
              </div>
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="selectedItem.type == 2"
              >
                <span>Plan</span>
                <span
                  style="font-weight: 600; font-size: 14px; text-transform: lowercase"
                  >{{ selectedItem.plan }}</span
                >
              </div>
              <div
                class="d-flex justify-content-between align-center mt-2"
                v-if="selectedItem.type != 20"
              >
                <span>Amount Paid</span>
                <span
                  style="font-weight: 600; font-size: 14px"
                  v-if="selectedItem.type != 17"
                  >&#8358;{{ selectedItem.amount }}</span
                >
                <span
                  style="font-weight: 600; font-size: 14px"
                  v-if="selectedItem.type == 17"
                  >&#36;{{ selectedItem.amount / 100 }}</span
                >
              </div>
              <!--
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Amount Before</span>
                <span style="font-weight: 600; font-size: 14px"
                  >&#8358;{{ selectedItem.bbefore }}</span
                >
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Amount After</span>
                <span style="font-weight: 600; font-size: 14px"
                  >&#8358;{{ selectedItem.bafter }}</span
                >
              </div>
              -->

              <div class="d-flex justify-content-between align-center mt-2">
                <span>Date</span>
                <span style="font-weight: 600; font-size: 14px">{{
                  moment(selectedItem.created_at).format("DD-MM-YYYY h:ma")
                }}</span>
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span> Transaction Ref </span>
                <span style="font-weight: 600; font-size: 14px">{{
                  selectedItem.ref
                }}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Wallet -->

      <!-- To Cardri -->
      <div id="mywallet" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Wallet</h3>

            <span
              class="close material-icons cursor-pointer"
              @click="closeModal"
              style="cursor: pointer !important"
              >close</span
            >
          </div>
          <div
            class="card"
            style="border: none; margin-top: 30px; padding: 0px !important"
          >
            <div
              class="card-body"
              style="padding: 5px !important; margin: 0px !important; cursor: pointer"
            >
              <div
                class="justify-content-between align-center mt-2"
                :class="item.status == 1 ? 'd-flex' : 'd-none'"
                v-for="(item, index) in currency"
                :key="item"
                @click="getIndex(index)"
              >
                <div class="d-flex mr-2">
                  <img
                    src="../assets/images/GBP.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'GBP'"
                  />
                  <img
                    src="../assets/images/NGNs.svg"
                    alt=""
                    style="
                      width: 20px;
                      height: 20px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'NGN'"
                  />
                  <img
                    src="../assets/images/Euro.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'EUR'"
                  />
                  <img
                    src="../assets/images/cedis.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'ZAR'"
                  />
                  <img
                    src="../assets/images/CFA.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'XAF'"
                  />
                  <img
                    src="../assets/images/CNY.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'CAD'"
                  />
                  <img
                    src="../assets/images/yuan.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'CNY'"
                  />
                  <img
                    src="../assets/images/US.svg"
                    alt=""
                    style="
                      width: 20px;
                      height: 20px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'USD'"
                  />
                  <img
                    src="../assets/images/Aus.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'AUD'"
                  />
                  <img
                    src="../assets/images/shilling.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'GHS'"
                  />
                  <img
                    src="../assets/images/shilling.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'KES'"
                  />
                  <img
                    src="../assets/images/GBP.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'cedis'"
                  />
                  <img
                    src="../assets/images/UAE.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'AED'"
                  />
                  <span style="font-size: 12px; font-weight: 600">{{ item.name }}</span>
                </div>

                <div>
                  <span v-if="item.currency == 'USD'">&#36;</span>
                  <span v-if="item.currency == 'NGN'">&#8358;</span>
                  <span v-if="item.currency == 'EUR'">&euro;</span>
                  <span v-if="item.currency == 'AUD'">&#8371;</span>
                  <span v-if="item.currency == 'AED'">'&#1583;</span>
                  <span v-if="item.currency == 'CNY'">&#20803;</span>
                  <span v-if="item.currency == 'CAD'">&#162;</span>
                  <span v-if="item.currency == 'GHS'">'&#8373;</span>
                  <span v-if="item.currency == 'GBP'">&#163;</span>
                  <span v-if="item.currency == 'ZAR'">&#8373;</span>
                  <span v-if="item.currency == 'KES'">&#404;</span>

                  <span style="font-weight: 600; font-size: 14px">
                    {{ item.balance }}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Wallet -->

      <!-- add Wallet -->

      <!-- To Cardri -->
      <div id="myaddwallet" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Add Foreign Wallet</h3>

            <span
              class="close material-icons cursor-pointer"
              @click="closeModal"
              style="cursor: pointer !important"
              >close</span
            >
          </div>
          <div
            class="card"
            style="border: none; margin-top: 30px; padding: 0px !important"
          >
            <div
              class="card-body"
              style="padding: 5px !important; margin: 0px !important; cursor: pointer"
            >
              <div
                class="justify-content-between align-center mt-2"
                :class="item.status == 0 || item.status == 'good' ? 'd-flex' : 'd-none'"
                v-for="(item, index) in currency"
                :key="item"
              >
                <div class="d-flex mr-2">
                  <img
                    src="../assets/images/GBP.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'GBP'"
                  />
                  <img
                    src="../assets/images/NGNs.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'NGN'"
                  />
                  <img
                    src="../assets/images/Euro.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'EUR'"
                  />
                  <img
                    src="../assets/images/cedis.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'ZAR'"
                  />
                  <img
                    src="../assets/images/CFA.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'XAF'"
                  />
                  <img
                    src="../assets/images/CNY.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'CAD'"
                  />
                  <img
                    src="../assets/images/yuan.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'CNY'"
                  />
                  <img
                    src="../assets/images/US.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'USD'"
                  />
                  <img
                    src="../assets/images/Aus.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'AUD'"
                  />
                  <img
                    src="../assets/images/shilling.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'GHS'"
                  />
                  <img
                    src="../assets/images/GBP.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'cedis'"
                  />
                  <img
                    src="../assets/images/UAE.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'AED'"
                  />
                  <img
                    src="../assets/images/shilling.svg"
                    alt=""
                    style="
                      width: 30px;
                      height: 30px;
                      border-radius: 10%;
                      margin-right: 10px;
                    "
                    v-if="item.currency == 'KES'"
                  />
                  <span style="font-size: 12px; font-weight: 600">{{ item.name }}</span>
                </div>

                <input
                  type="checkbox"
                  v-model="mywallet"
                  @change="getmyindex($event, index)"
                  id="checkbox"
                  style="accent-color: #4705af"
                  :value="item.currency"
                />
              </div>

              <button
                :disabled="mywallet != '' ? false : true"
                :style="mywallet != '' ? '  background: #4705af' : 'background:#6E7173'"
                class="btn w-100 mt-4"
                style="
                  color: #fff;
                  border: none;
                  border-radius: 5px;
                  outline: none;
                  margin: 30px 0px;
                "
                @click="submitcurrency"
              >
                <span style="color: #fff" v-if="clickme == false">Add wallet</span>
                <vue-loaders-ball-clip-rotate
                  color="#fff"
                  scale="1"
                  v-if="clickme == true"
                ></vue-loaders-ball-clip-rotate>
              </button>
            </div>
          </div>
        </div>
      </div>
      <!-- End Wallet -->
      <headers :firstname="fname" :lastname="lname" />

      <div class="bgbig">
        <div class="backtag">
          <img src="@/assets/images/back.svg" alt="" @click="this.$router.go(-1)" />
          <span style="text-transform: capitalize">{{ this.$route.name }}</span>
        </div>
        <div class="balamcebar">
          <div class="main_balance">
            <img src="@/assets/images/balance.svg" alt="" />
            <div class="ballg">
              <div class="main-text-bal">
                <div class="myngn">
                  <div class="ngnimg">
                    <img
                      src="../assets/images/GBP.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'GBP'"
                    />
                    <img
                      src="../assets/images/NGNs.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'NGN'"
                    />
                    <img
                      src="../assets/images/Euro.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'EUR'"
                    />
                    <img
                      src="../assets/images/cedis.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'ZAR'"
                    />
                    <img
                      src="../assets/images/CFA.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'XAF'"
                    />
                    <img
                      src="../assets/images/CNY.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'CAD'"
                    />
                    <img
                      src="../assets/images/yuan.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'CNY'"
                    />
                    <img
                      src="../assets/images/US.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'USD'"
                    />
                    <img
                      src="../assets/images/Aus.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'AUD'"
                    />
                    <img
                      src="../assets/images/shilling.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'GHS'"
                    />
                    <img
                      src="../assets/images/GBP.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'cedis'"
                    />
                    <img
                      src="../assets/images/UAE.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'AED'"
                    />
                    <img
                      src="../assets/images/shilling.svg"
                      alt=""
                      style="
                        width: 30px;
                        height: 30px;
                        border-radius: 10%;
                        margin-right: 10px;
                      "
                      v-if="defaultcurrenct == 'KES'"
                    />
                  </div>
                  <span class="text_ngn">{{ defaultname }} </span>
                </div>
                <div class="eyef" style="align-items: center">
                  <span
                    class="material-icons"
                    @click="clickeye"
                    style="cursor: pointer"
                    >{{ hidemybalance == true ? "visibility_off" : "visibility" }}</span
                  >
                  <span
                    class="material-icons d-lg-none"
                    style="font-size: 40px; margin-left: 15px; cursor: pointer"
                    @click="toadddedwallet"
                    >expand_more</span
                  >
                </div>
              </div>
              <div class="mybalance">
                <h5 style="margin-left: 40px !important" v-if="hidemybalance == false">
                  <span v-if="defaultcurrenct == 'USD'">&#36;</span>
                  <span v-if="defaultcurrenct == 'NGN'">&#8358;</span>
                  <span v-if="defaultcurrenct == 'EUR'">&euro;</span>
                  <span v-if="defaultcurrenct == 'AUD'">&#8371;</span>
                  <span v-if="defaultcurrenct == 'AED'">'&#1583;</span>
                  <span v-if="defaultcurrenct == 'CNY'">&#20803;</span>
                  <span v-if="defaultcurrenct == 'CAD'">&#162;</span>
                  <span v-if="defaultcurrenct == 'GHS'">'&#8373;</span>
                  <span v-if="defaultcurrenct == 'GBP'">&#163;</span>
                  <span v-if="defaultcurrenct == 'ZAR'">&#8373;</span>
                  <span v-if="defaultcurrenct == 'KES'">&#404;</span>
                  {{ new Intl.NumberFormat().format(defaultbalance) }}
                </h5>
                <h5
                  style="
                    margin-left: 40px !important;
                    padding: 0px;
                    margin-top: 0px;
                    margin-bottom: 0px;
                  "
                  v-if="hidemybalance == true"
                >
                  ********
                </h5>

                <div
                  class="myledger"
                  style="margin-left: 40px !important"
                  v-if="hidemybalance == false"
                >
                  Available:<span v-if="defaultcurrenct == 'USD'">&#36;</span>
                  <span v-if="defaultcurrenct == 'NGN'">&#8358;</span>
                  <span v-if="defaultcurrenct == 'EUR'">&euro;</span>
                  <span v-if="defaultcurrenct == 'AUD'">&#8371;</span>
                  <span v-if="defaultcurrenct == 'AED'">'&#1583;</span>
                  <span v-if="defaultcurrenct == 'CNY'">&#20803;</span>
                  <span v-if="defaultcurrenct == 'CAD'">&#162;</span>
                  <span v-if="defaultcurrenct == 'GHS'">'&#8373;</span>
                  <span v-if="defaultcurrenct == 'GBP'">&#163;</span>
                  <span v-if="defaultcurrenct == 'ZAR'">&#8373;</span>
                  <span v-if="defaultcurrenct == 'KES'">&#404;</span
                  >{{ Intl.NumberFormat().format(defaultavailable) }}
                </div>
                <div
                  class="myledger"
                  style="margin-left: 40px !important"
                  v-if="hidemybalance == true"
                >
                  ******
                </div>
              </div>
            </div>
          </div>
          <div class="drop d-lg-flex" style="cursor: pointer">
            <img src="@/assets/images/drop.svg" alt="" @click="toadddedwallet" />
          </div>
        </div>
        <div class="row">
          <div class="col-lg-6 col-md-6">
            <div class="row">
              <div class="col-lg-6 col-md-6">
                <div class="myaddcurrency" @click="adddedwallet" style="cursor: pointer">
                  <div class="d-flex addcurrency">
                    <img src="@/assets/images/fund.svg" alt="" />
                    <span> Add Foreign Currency Wallet </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-md-6"></div>
        </div>
        <div class="table">
          <div class="row d-flex" style="align-items: center">
            <div class="col-lg-3 col-md-3">
              <h6>Transaction History</h6>
            </div>
            <!--
            <div class="col-lg-9 col-md-9 py-2">
              <div class="row">
                <div class="col-6 d-flex justify-content-center">
                  <div class="form-group">
                    <label for="" style="position: relative">
                      <span
                        class="material-icons mysearchicon"
                        style="margin-right: 20px"
                        >search</span
                      >
                      <input
                        type="search"
                        style="
                          border: none;
                          border-radius: 5px;
                          font-size: 14px;
                        "
                        placeholder="Search Transaction"
                        v-model="search"
                      />
                    </label>
                  </div>
                </div>
                <div class="col-6">
                  <div class="row">
                    <div class="col-6 d-flex justify-content-end">
                      <div class="dropdown mydropdown">
                        <button
                          class="btn dropdown-toggle"
                          type="button"
                          id="dropdownMenuButton"
                          data-toggle="dropdown"
                          aria-haspopup="true"
                          aria-expanded="false"
                          style="background: #f5f5f5; outline: none"
                          @click="dropmenu"
                        >
                          Filter
                        </button>
                        <div
                          class="dropdown-menu"
                          aria-labelledby="dropdownMenuButton"
                          id="dropmenu"
                        >
                          <div class="form-group">
                            <label for="exampleFormControlInput1">From</label>
                            <input
                              type="date"
                              class="form-control"
                              v-model="from"
                            />
                          </div>
                          <div class="form-group">
                            <label for="exampleFormControlInput1">To</label>
                            <input
                              type="date"
                              class="form-control"
                              v-model="to"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-6 d-flex justify-content-end">
                      <button
                        style="
                          background: #4705af;
                          border: none;
                          color: #fff;
                          width: 30px;
                          height: 30px;
                          font-size: 14px;
                          padding: 7px;
                          margin-right: 20px;
                          border-radius: 5px;
                        "
                        @click="download"
                      >
                        <span class="material-icons" style="font-size: 14px"
                          >download</span
                        >
                      </button>
                      <button
                        style="
                          background: #4705af;
                          border: none;
                          color: #fff;
                          width: 30px;
                          height: 30px;
                          font-size: 14px;
                          padding: 7px;
                          border-radius: 5px;
                        "
                        @click="reload"
                      >
                        <span class="material-icons" style="font-size: 14px"
                          >refresh</span
                        >
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            -->
          </div>
          <div class="table_section" id="content">
            <table>
              <thead>
                <tr>
                  <th>TRX ID</th>
                  <th>Amount</th>
                  <th>Beneficiary</th>

                  <th>PYMT Type</th>
                  <th>Status</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in filtertransaction.slice(0, 4)"
                  :key="item.id"
                  @click="todetails(item)"
                >
                  <td>{{ item.ref }}</td>

                  <td v-if="item.type != 20 && item.type != 17">
                    &#8358;
                    {{ Intl.NumberFormat().format(item.amount) }}
                  </td>
                  <td v-if="item.type == 20">
                    &#36;
                    {{ Intl.NumberFormat().format(item.amount) }}
                  </td>
                  <td v-if="item.type == 17">
                    &#36;
                    {{ Intl.NumberFormat().format(item.amount / 100) }}
                  </td>

                  <td v-if="item.type == 16">{{ item.user }}</td>
                  <td v-if="item.type == 18">{{ item.plan }}</td>
                  <td v-if="item.type == 20">Dollar Card</td>
                  <td v-if="item.type == 12">{{ item.reciever }}</td>
                  <td
                    v-if="
                      item.type != 20 &&
                      item.type != 16 &&
                      item.type != 12 &&
                      item.type != 18
                    "
                  >
                    {{ item.reciever }}
                  </td>

                  <td v-if="item.type == 1">
                    {{
                      item.name == 1
                        ? "MTN"
                        : item.name == "2"
                        ? "Airtel"
                        : item.name == 4
                        ? "GLO"
                        : item.name == "3"
                        ? "Etisalat"
                        : item.name
                    }}
                    Airtime
                  </td>
                  <td v-if="item.type == 2">
                    {{
                      item.name == 1
                        ? "MTN"
                        : item.name == "2"
                        ? "Airtel"
                        : item.name == 4
                        ? "GLO"
                        : item.name == "3"
                        ? "Etisalat"
                        : item.name
                    }}
                    Data subscription
                  </td>
                  <td v-if="item.type == 20">You unload a card</td>
                  <td v-if="item.type == 18">Virtual Card Creation</td>
                  <td v-if="item.type == 12">Bank Transfer</td>
                  <td v-if="item.type == 3">Cable Tv</td>
                  <td v-if="item.type == 5">Electricity</td>
                  <td v-if="item.type == 4">Intra Transfer</td>

                  <td v-if="item.type == 6">Account Funding</td>
                  <td v-if="item.type == 10">Upgrade Account</td>
                  <td v-if="item.type == 17">Card Funding</td>
                  <td v-if="item.type == 15">Currency Swap</td>
                  <td v-if="item.type == 19">Stamp Duty</td>

                  <td v-if="item.type == 16">Currency swap(P2P)</td>
                  <td v-if="item.type == 30">API Transfer</td>
                  <td v-if="item.type == 35">Alipay Payment</td>
                  <td v-if="item.type == 36">Wechat Payment</td>

                  <td>
                    <span
                      style="
                        padding: 3px;
                        padding-right: 5px;
                        padding-left: 5px;
                        color: #fff;
                        background: #12bd89;
                        border-radius: 5px;
                      "
                      :style="
                        item.status == 1
                          ? 'background: #12BD89;padding-left:12px;padding-right:12px'
                          : item.status == 2 && item.type != 36 && item.type != 35
                          ? 'background:#F1EB9C;padding-left:15px;padding-right:16px'
                          : item.status == 5
                          ? 'background:#F1EB9C;padding-left:15px;padding-right:16px'
                          : item.status == 2 && item.type == 35
                          ? 'background:gray;padding-left:15px;padding-right:16px'
                          : item.status == 2 && item.type == 36
                          ? 'background:gray;padding-left:15px;padding-right:16px'
                          : 'background:#F82738;padding-left:15px;padding-right:16px'
                      "
                      >{{
                        item.status == 1
                          ? "Success"
                          : item.status == 2 && item.type != 35 && item.type != 36
                          ? "Success"
                          : item.status == "2" && item.type == 35
                          ? "Processing"
                          : item.status == "2" && item.type == 36
                          ? "Processing"
                          : item.status == 5
                          ? "Processing"
                          : "Failed"
                      }}</span
                    >
                  </td>
                  <td>
                    {{ moment(item.created_at).format("DD-MM-YYYY h:ma") }}
                  </td>
                </tr>
              </tbody>
            </table>
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
import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export default {
  name: "myWallet",
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
      hidemybalance: false,
      ledger: 0,
      mainbalance: 0,
      mywallet: [],
      lname: "",
      fname: "",
      username: "",
      moment: moment,
      selectedindex: 0,
      fruitCounts: [],
      transaction: [],
      selectedItem: [],
      clickme: false,
      filldata: false,
      defaultname: "Naira Balance",
      defaultcurrenct: "NGN",
      defaultbalance: "",
      defaultavailable: "",
      search: "",
      to: "",
      from: "",
      currency: [
        {
          name: "Naira Balance",
          currency: "NGN",
          status: 1,
          balance: 0,
          ledger: 0,
          image: "NGN(1).svg",
        },
        {
          name: "Commission Balance",
          currency: "NGN",
          status: 1,
          balance: 0,
          ledger: 0,
          image: "NGN(1).svg",
        },
        {
          name: "Euro Balance",
          currency: "EUR",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "Euro.svg",
        },
        {
          name: "Dollar Balance",
          currency: "USD",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "UAE.svg",
        },
        {
          name: "Pounds Balance",
          currency: "GBP",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "GBP.svg",
        },
        {
          name: "South Africa Balance",
          currency: "ZAR",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "cedis.svg",
        },
        {
          name: "French  Franca  Rand",
          currency: "XAF",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "CFA.svg",
        },
        {
          name: "Canadian Dollar Balance",
          currency: "CAD",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "CNY.svg",
        },
        {
          name: "Chinesse Yuan Balance",
          currency: "CNY",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "yuan.svg",
        },
        {
          name: "Australia Dollar Balance",
          currency: "AUD",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "Aus.svg",
        },
        {
          name: "Ghannian cedis Balance",
          currency: "GHS",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "cedis.svg",
        },
        {
          name: "Emirati Dirham Balance",
          currency: "AED",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "AED.svg",
        },
        {
          name: "Kenya  Shilling",
          currency: "KES",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "shilling.svg",
        },
      ],
      currentIndex: 0,
    };
  },
  computed: {
    imageUrl() {
      return this.currency[this.currentIndex].image;
    },
    filtertransaction: function () {
      return this.transaction.filter((item) => {
        if (this.from && this.to) {
          /*
          return (
            item.created_at.match(this.from) >=
            new Date(item.created_at) + item.created_at.match(this.to) <=
            new Date(item.created_at)

          );
          */
          return item.created_at >= this.from && item.created_at <= this.to;
        } else {
          return (
            item.ref.match(this.search) ||
            item.reciever.match(this.search) ||
            item.status.match(this.search)
          );
        }
      });
    },
  },
  methods: {
    getIndex(index) {
      this.selectedindex = index;
      this.defaultcurrenct = this.currency[this.selectedindex].currency;
      this.defaultbalance = this.currency[this.selectedindex].balance;
      this.defaultavailable = this.currency[this.selectedindex].ledger;
      localStorage.setItem("index", this.selectedindex);
      this.defaultname = this.currency[this.selectedindex].name;
      var modal = document.getElementById("mywallet");

      modal.style.display = "none";
    },
    getmyindex(e, index) {
      if (e.target.checked) {
        this.currency[index].status = "good";
      } else {
        this.currency[index].status = 0;
      }
    },
    async submitcurrency() {
      (this.mywallet = ""), (this.clickme = true);
      this.fruitCounts = {};
      this.currency.forEach((item) => {
        this.fruitCounts[item.currency.toLowerCase()] =
          item.status == "good" ? "1" : item.status;
      });

      await axios
        .post("api/updateuserfxwallet", this.fruitCounts)
        .then(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
            text: `Wallet Added succesfully`,
            type: "success",
            icon: "success",

            width: 300,
          }).then((result) => {
            if (result.value) {
              location.reload();
            }
          });
        })
        .catch((e) => {
          console.log(e);
          this.$swal({
            title: `<h4 style='font-size:14x;color:red'>Error!!!</h4>`,
            text: `Error occured while adding wallet`,
            type: "error",
            icon: "error",

            width: 300,
          }).then((result) => {
            if (result.value) {
              location.reload();
            }
          });
        });
    },
    clickeye() {
      this.hidemybalance = !this.hidemybalance;
    },
    todetails(item) {
      var modals = document.getElementById("myModals");
      modals.style.display = "block";
      this.selectedItem = item;
    },
    toadddedwallet() {
      var modals = document.getElementById("mywallet");
      modals.style.display = "block";
    },
    adddedwallet() {
      var modaladd = document.getElementById("myaddwallet");
      modaladd.style.display = "block";
    },
    closeModal() {
      var modaladd = document.getElementById("myaddwallet");
      modaladd.style.display = "none";
      var modal = document.getElementById("mywallet");

      modal.style.display = "none";
      var modals = document.getElementById("myModals");
      modals.style.display = "none";
    },
    dropmenu() {
      var x = document.getElementById("dropmenu");

      if (x.style.display === "none") {
        x.style.display = "block";
      } else {
        x.style.display = "none";
      }
    },
    async reload() {
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
    download() {
      window.html2canvas = html2canvas;
      const doc = new jsPDF("p", "pt", "a2");
      doc.html(document.querySelector("#content"), {
        callback: function (pdf) {
          pdf.save("Transaction.pdf");
        },
      });
    },
  },

  async mounted() {
    const myindex = parseInt(localStorage.getItem("index"));

    if (myindex == undefined || myindex == null || myindex == "" || isNaN(myindex)) {
      this.selectedindex = 0;
    } else {
      this.selectedindex = myindex;
    }
    await axios
      .get("api/getdatils")
      .then((response) => {
        this.mainbalance = response.data.data.ngn_ld;
        this.ledger = response.data.data.ngn_b;
        this.username = response.data.data.username;
        this.fname = response.data.data.fname;
        this.lname = response.data.data.lname;
        this.currency[0].balance = response.data.data.ngn_b;
        this.currency[0].ledger = response.data.data.ngn_ld;

        this.currency[1].balance = response.data.data.commission;
        this.currency[1].ledger = 0;

        this.currency[2].status = response.data.data.EUR;
        this.currency[2].balance = response.data.data.eur_b;
        this.currency[2].ledger = response.data.data.eur_ld;

        this.currency[3].status = response.data.data.USD;
        this.currency[3].balance = response.data.data.usd_b;
        this.currency[3].ledger = response.data.data.usd_ld;

        this.currency[4].status = response.data.data.GBP;
        this.currency[4].balance = response.data.data.gbp_b;
        this.currency[4].ledger = response.data.data.gbp_ld;

        this.currency[5].status = response.data.data.ZAR;
        this.currency[5].balance = response.data.data.zar_b;
        this.currency[5].ledger = response.data.data.zar_ld;

        this.currency[6].status = response.data.data.XAF;
        this.currency[6].balance = response.data.data.xaf_b;
        this.currency[6].ledger = response.data.data.xaf_ld;

        this.currency[7].status = response.data.data.CAD;
        this.currency[7].balance = response.data.data.cad_b;
        this.currency[7].ledger = response.data.data.cad_ld;

        this.currency[8].status = response.data.data.CNY;
        this.currency[8].balance = response.data.data.cny_b;
        this.currency[8].ledger = response.data.data.cny_ld;

        this.currency[9].status = response.data.data.AUD;
        this.currency[9].balance = response.data.data.aud_b;
        this.currency[9].ledger = response.data.data.aud_ld;

        this.currency[10].status = response.data.data.GHS;
        this.currency[10].balance = response.data.data.ghs_b;
        this.currency[10].ledger = response.data.data.ghs_ld;

        this.currency[11].status = response.data.data.AED;
        this.currency[11].balance = response.data.data.aed_b;
        this.currency[11].ledger = response.data.data.aed_ld;

        this.currency[12].status = response.data.data.KES;
        this.currency[12].balance = response.data.data.kes_b;
        this.currency[12].ledger = response.data.data.kes_ld;
        this.defaultbalance = this.currency[this.selectedindex].balance;
        this.defaultavailable = this.currency[this.selectedindex].ledger;
        this.defaultcurrenct = this.currency[this.selectedindex].currency;
        this.defaultname = this.currency[this.selectedindex].name;
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

    display: flex;
    img {
      position: relative;
      max-width: 503px;
      width: 100%;
    }
    .main_balance {
      position: relative;
    }
    .ballg {
      position: absolute;
      top: 0;

      padding: 1.8rem;
      width: 100%;
      box-sizing: border-box;
      @media (max-width: 750px) {
        padding: 1.4rem;
      }
      .main-text-bal {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .myngn {
          display: flex;
          align-items: center;
          .ngnimg {
            width: 35px;
            height: 35px;
            border-radius: 100%;
            margin-right: 10px;
          }
          .text_ngn {
            font-size: 14px;
            color: #fff;
            font-weight: 400;
          }
        }
        .eyef {
          display: flex;
          align-items: center;

          .material-icons {
            font-size: 2.5rem;
            color: #fff;
            @media (max-width: 750px) {
              font-size: 1.2rem;
            }
          }
        }
      }
      .mybalance h5 {
        font-size: 1.7rem;
        font-weight: 700;
        margin-top: 10px;
        margin-bottom: 0px;
        color: #fff;
        @media (max-width: 750px) {
          font-size: 1.3rem !important;
          margin-top: 5px;
        }
      }
      .mybalance {
        .myledger {
          font-weight: 400;
          font-size: 0.9rem;
          color: #fff;
          @media (max-width: 750px) {
            font-size: 0.8rem;
          }
        }
      }
    }
  }
  .drop {
    padding: 40px;
    align-content: center;
    display: none;
  }
  .kyc {
    border-radius: 10px;
    margin-top: 20px;
    padding: 15px;
    @media (max-width: 750px) {
      padding: 10px;
    }

    .kyc-title {
      h5 {
        font-weight: 700;
        color: #202020;
        font-size: 1rem;
        @media (max-width: 750px) {
          font-size: 0.9rem;
        }
      }
      span {
        font-size: 0.9rem;
        font-weight: 400;
        color: #4a4e50;
        @media (max-width: 750px) {
          font-size: 0.7rem;
        }
      }
      .complete_kyc {
        label {
          color: #4a4e50;
          font-size: 0.8rem;
        }
        .ranges {
          background: #f5f5ff;
          border-radius: 20px;
          .mycomrange {
            padding: 5px;
            background: #05cb6f;
            overflow: hidden;
            border-radius: 20px;
          }
          .myrangenum {
            font-size: 14px;
            font-weight: 700;
            position: absolute;
            right: -40px;
            top: -5px;
            box-sizing: border-box;
            overflow: hidden;
            @media (max-width: 500px) {
              right: -30px;
            }
          }
        }
      }
    }
  }
  .craete {
    margin-top: 20px;
    h5 {
      @media (max-width: 750px) {
        font-size: 0.9rem;
      }
    }
  }
  .myservice {
    padding: 5px;
    margin: 5px;
  }
  .card {
    margin: 10px !important;
    border-radius: 10px !important;
  }
  .card:first-child {
    background: rgba(5, 203, 111, 0.1);
  }
  .card:nth-child(2) {
    background: rgba(249, 115, 22, 0.1);
  }
  .card:nth-child(3) {
    background: #f5f5ff;
  }
  .card {
    border: none;
    .logoimg {
      float: left;
      margin-right: 20px;
    }
    .text-service {
      overflow: hidden;
      .card-title {
        font-size: 1rem;
        font-weight: 600;
      }
      .card-text {
        font-size: 0.9rem;
        color: #4a4e50;
        font-weight: 400;
      }
    }
    a {
      color: #fff;
      font-weight: 600;
      font-size: 0.8rem;
      align-items: center;
      display: flex;
      text-decoration: none;

      .material-icons {
        color: #fff;
        font-weight: 600;
        font-size: 0.9rem;
        align-self: center;
        display: flex;
      }
    }
  }
  .createmycard {
    padding: 10px;
    border-top: 1px solid #b7b8b9;
    border-bottom: 1px solid #b7b8b9;
    display: flex;
    justify-content: space-between;
    h5 {
      font-weight: 600;
      font-size: 14px;
    }
  }
  .table {
    margin-top: 20px;
    overflow: auto;
    @media (max-width: 500px) {
      overflow-x: scroll;
    }
    th {
      color: #9292a0;
      font-weight: 600;
      font-size: 12px;
    }
  }
  .trx-histpry {
    padding: 5px;
    margin: 5px;
    h5 {
      color: #202020;
      font-size: 14px;
      font-weight: 600;
    }
  }
  .has-search .form-control {
    padding-left: 2.375rem;
  }

  .has-search .form-control-feedback {
    position: absolute;
    z-index: 2;
    display: block;
    width: 2.375rem;
    height: 2.375rem;
    line-height: 2.375rem;
    text-align: center;

    color: #aaa;
  }
  .mylgdownload {
    @media (max-width: 750px) {
      display: none;
    }
  }
  .download {
    padding: 10px;
    background: #4705af;
    color: #fff;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    width: 30px;
    height: 30px;
    span {
      font-size: 12px;
    }
  }
  .myaddcurrency {
    padding: 5px;
    margin: 5px;
    .addcurrency {
      background: #4705af;
      color: #fff;
      border-radius: 30px;
      padding: 10px;
      align-items: center;
      @media (max-width: 750px) {
        width: 70%;
      }
      span {
        font-size: 12px;
      }
      img {
        margin-right: 20px;
      }
    }
  }
}
tr td {
  font-size: 12px;
}

.verify {
  padding: 10px;
  margin-top: 20px;
  background: #4a4e50;
  border-radius: 20px;
  text-align: center;
  padding-right: 10px;
  padding-left: 10px;
  outline: none;
  font-size: 0.7rem;
  float: right;
  color: #fff;
  text-decoration: none;
  @media (max-width: 750px) {
    float: left !important;
  }
}
.mylgroe {
  background: #4705af;
  display: flex;
  padding: 5px;
  color: #fff;
  border-radius: 30px;
  font-size: 12px;
  align-items: center;
  @media (max-width: 750px) {
    margin-top: 10px;
  }
  img {
    margin-right: 10px;
  }
}
.table_section {
  height: 250px;
  overflow: auto;
  -webkit-scrollbar: 1px;

  table {
    width: 100%;
    table-layout: fixed;
    min-width: 1000px;
    border-collapse: collapse;
    thead {
      th {
        position: sticky;
        top: 0;
        background: #f6f9fc;
        color: #8493a5;
      }
    }
    th,
    td {
      border-bottom: 1px solid #dddd;
      padding: 10px 20px;
      word-break: break-all;
      text-align: center;
    }
    tr:hover td {
      color: #0298cf;
      cursor: pointer;
      background: #f5f9fc;
    }
  }
}
input {
  background: #f5f5f5;
  padding-top: 8px;
  padding-bottom: 8px;
  outline: none;
  border-radius: 5px !important;

  font-size: 12px;
}
label {
  span {
    position: absolute;
    top: 10;
    font-size: 16px;

    margin: 10px;
  }
}
table:-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
table:-webkit-scrollbar-thumb {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
table:-webkit-scrollbar {
  width: 1px;
}
#dropmenu {
  padding: 10px;
  border: none !important;
  background: #ffffff;
  box-shadow: 0px 1px 30px 1px rgba(68, 68, 68, 0.06);
  border-radius: 8px;
}
.mydropdown {
  @media (max-width: 750px) {
    margin-left: 10px;
  }
}
::-webkit-scrollbar {
  height: 0px; /* height of horizontal scrollbar ← You're missing this */
  width: 0px; /* width of vertical scrollbar */
  border: none;
}

.round label {
  background-color: #fff;
  border: 1px solid #ccc;
  border-radius: 50%;
  cursor: pointer;
  height: 20px;
  left: 0;
  position: absolute;
  top: 0;
  width: 20px;
}
.round {
  position: relative;
}

.round label:after {
  border: 2px solid #fff;
  border-top: none;
  border-right: none;
  content: "";
  height: 6px;
  left: 3px;
  opacity: 0;
  position: absolute;
  top: 5px;
  transform: rotate(-45deg);
  width: 12px;
}

.round input[type="checkbox"] {
  visibility: hidden;
}

.round input[type="checkbox"]:checked + label {
  background-color: #12bd89;
  border-color: #12bd89;
}

.round input[type="checkbox"]:checked + label:after {
  opacity: 1 !important;
}
.mysearchicon {
  @media (max-width: 750px) {
    display: none;
  }
}
td,
th {
  text-align: left !important;
}
</style>
