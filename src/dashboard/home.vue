<template>
  <div
    class="app w-100 container-xxl"
    v-if="loading == false"
    style="padding: 0px !important"
  >
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
            style="
              padding: 5px !important;
              margin: 0px !important;
              cursor: pointer;
            "
          >
            <div
              class="d-flex justify-content-between align-center mt-2"
              v-if="
                selectedItem.type != 16 &&
                selectedItem.type != 15 &&
                selectedItem.type != 17 &&
                selectedItem.type != 18 &&
                selectedItem.type != 20 &&
                selectedItem.type != 31
              "
            >
              <span>Receiver</span>
              <span style="font-weight: 600; font-size: 14px">{{
                selectedItem.reciever
              }}</span>
            </div>
            <div
              class="d-flex justify-content-between align-center mt-2"
              v-if="selectedItem.type == 31"
            >
              <span>Receiver</span>
              <span style="font-weight: 600; font-size: 14px"
                >({{ selectedItem.reciever }}){{ selectedItem.plan }}</span
              >
            </div>
            <div
              class="d-flex justify-content-between align-center mt-2"
              v-if="
                selectedItem.type == 16 && selectedItem.reciever != username
              "
            >
              <span>Bought from</span>
              <span style="font-weight: 600; font-size: 14px">{{
                selectedItem.reciever
              }}</span>
            </div>
            <div
              class="d-flex justify-content-between align-center mt-2"
              v-if="
                selectedItem.type == 16 && selectedItem.reciever == username
              "
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
                style="
                  font-weight: 600;
                  font-size: 14px;
                  text-transform: uppercase;
                "
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
                style="
                  font-weight: 600;
                  font-size: 14px;
                  text-transform: uppercase;
                "
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
                v-if="selectedItem.type == 31"
                style="font-weight: 600; font-size: 14px"
                >DOM Funding</span
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
              v-if="selectedItem.type == 2"
            >
              <span>Plan</span>
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
                style="
                  font-weight: 600;
                  font-size: 14px;
                  text-transform: lowercase;
                "
                >{{ selectedItem.network }}</span
              >
            </div>
            <div
              class="d-flex justify-content-between align-center mt-2"
              v-if="selectedItem.type != 20"
            >
              <span>Amount Paid</span>
              <span
                style="font-weight: 600; font-size: 14px"
                v-if="
                  selectedItem.type != 17 &&
                  selectedItem.type != 18 &&
                  selectedItem.type != 31
                "
                >&#8358;{{ selectedItem.amount }}</span
              >
              <span
                style="font-weight: 600; font-size: 14px"
                v-if="selectedItem.type == 31"
                >&#36;{{ selectedItem.amount }}</span
              >
              <span
                style="font-weight: 600; font-size: 14px"
                v-if="selectedItem.type == 17 || selectedItem.type == 18"
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
    <!-- To Cardri -->
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
            style="
              padding: 5px !important;
              margin: 0px !important;
              cursor: pointer;
            "
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
                  width="20px"
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
                  width="20px"
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
                <span style="font-size: 12px; font-weight: 600">{{
                  item.name
                }}</span>
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
    <!-- The Modal -->
    <div id="myModal" class="modal">
      <!-- Modal content -->
      <div class="modal-content">
        <alert :status="status" :alertstatus="alertstatus" :message="message" />

        <div class="d-flex justify-content-between" style="align-item: center">
          <h3>Receive Money</h3>
          {{ user }}

          <span
            class="close material-icons"
            @click="closeModal"
            style="cursor: pointer"
            >close</span
          >
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
              readonly
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
            <input
              type="tel"
              required
              readonly
              v-model="accountNumber"
              class="form-control"
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
              type="tel"
              required
              readonly
              v-model="accountName"
              class="form-control"
            />
          </div>

          <button
            class="btn btn-primary w-100"
            style="
              background: #d70d4a !important;
              font-size: 12px;
              border: none;
            "
            type="button"
            @click="copyURL(accountNumber)"
          >
            Copy Account Number
          </button>
        </form>
      </div>
    </div>
    <!-- End Cardri -->
    <sidebar :firstname="fname" :lastname="lname" :username="username" />
    <div class="w-100">
      <headers :firstname="fname" :lastname="lname" />
      <div class="bgbig">
        <div class="backtag">
          <img
            src="@/assets/images/back.svg"
            alt=""
            @click="this.$router.go(-1)"
          />
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
                    >{{
                      hidemybalance == true ? "visibility_off" : "visibility"
                    }}</span
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
                <h5
                  style="margin-left: 40px !important"
                  v-if="hidemybalance == false"
                >
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
                  {{ new Intl.NumberFormat().format(defaultavailable) }}
                </h5>
                <h5
                  style="margin-left: 40px !important"
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
                  >{{ Intl.NumberFormat().format(defaultbalance) }}
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
          <div class="drop d-lg-flex cursor-pointer">
            <img
              src="@/assets/images/drop.svg"
              alt=""
              @click="toadddedwallet"
            />
          </div>
        </div>
        <div class="row" style="margin: 5px">
          <div class="col-lg-6 col-md-6">
            <div
              class="row"
              style="
                width: 100%;
                display: flex;
                justify-content: space-between;
                margin-top: 15px;
                margin-bottom: 15px;
              "
            >
              <div
                class="col"
                @click="todeposit"
                style="cursor: pointer; background: #ea125d0d !important"
              >
                <div class="mylgroe">
                  <img src="@/assets/images/fund.svg" alt="" />
                  <span>Deposit</span>
                </div>
              </div>
              <div class="col">
                <router-link
                  to="../../cardri/pay"
                  style="text-decoration: none !important"
                >
                  <div class="mylgroe">
                    <img src="@/assets/images/send2.svg" alt="" />
                    <span>Send Money</span>
                  </div>
                </router-link>
              </div>
              <div class="col">
                <router-link
                  to="../../swap/fund"
                  style="text-decoration: none !important"
                >
                  <div class="mylgroe">
                    <img src="@/assets/images/fund.svg" alt="" />
                    <span>Swap Fund</span>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>

        <div
          class="balamcebar border kyc"
          style="display: block !important"
          v-if="confirmindex != 4"
        >
          <div class="row">
            <div class="col-lg-6 col-md-6">
              <div class="kyc-title">
                <h5>Complete your KYC</h5>
                <span
                  >You're almost there, activate your account to increase your
                  limit</span
                >
                <div class="complete_kyc">
                  <div class="form-group">
                    <label style="marin-top: 10px; margin-bottom: 10px"
                      >{{ confirmindex }} of 4 completed</label
                    >

                    <div
                      class="border ranges position-relative"
                      style="max-width: 400px; width: 100%"
                    >
                      <div
                        :style="`width:${(confirmindex / 4) * 100}%`"
                        class="mycomrange"
                      ></div>
                      <span class="myrangenum"
                        >{{ (confirmindex / 4) * 100 }}%</span
                      >
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-6 col-md-6">
              <a href="/settings/setting" type="button" class="verify"
                >Click to complete verification</a
              >
            </div>
          </div>
        </div>
        <div class="balamcebar craete">
          <div class="kyc-title">
            <h5>Get started on accepting global payments</h5>
          </div>
        </div>
        <div class="myservice">
          <div class="card-group">
            <div class="card">
              <div class="card-body">
                <div class="logoimg">
                  <img src="@/assets/images/sendglobal.svg" alt="" />
                </div>
                <div class="text-service">
                  <h5 class="card-title">Send Money Globally</h5>
                  <p class="card-text">
                    Send money directly to suppliers and merchant across borders
                    in over 80 countries
                  </p>
                  <router-link
                    to="../../cardri/pay"
                    type="button"
                    style="color: #12bd89 !important"
                    >Get Started
                    <span
                      class="material-icons"
                      style="color: #12bd89 !important"
                      >arrow_forward</span
                    ></router-link
                  >
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="logoimg">
                  <img src="@/assets/images/createvirtual.svg" alt="" />
                </div>
                <div class="text-service">
                  <h5 class="card-title">Create Virtual Card</h5>
                  <p class="card-text">
                    Pay with dollar virtual card invoices easily via email,
                    chats or social media to customers.
                  </p>
                  <router-link
                    to="../../card/home"
                    type="button"
                    style="color: #f97316 !important"
                    >Get Started
                    <span
                      class="material-icons"
                      style="color: #f97316 !important"
                      >arrow_forward</span
                    ></router-link
                  >
                </div>
              </div>
            </div>
            <div class="card">
              <div class="card-body">
                <div class="logoimg">
                  <img src="@/assets/images/market.svg" alt="" />
                </div>
                <div class="text-service">
                  <h5 class="card-title">P2P Market</h5>
                  <p class="card-text">
                    Transact with others Cardrians using pair to pair Market
                  </p>
                  <router-link
                    to="../../market/home"
                    type="button"
                    style="color: #7e57ff !important"
                    >Get Started
                    <span
                      class="material-icons"
                      style="color: #7e57ff !important"
                      >arrow_forward</span
                    ></router-link
                  >
                </div>
              </div>
            </div>
          </div>
        </div>
        <div
          class="d-flex"
          style="
            align-items: center;
            padding: 20px 20px 0px 20px;
            justify-content: space-between;
            margin-top: 10px;
          "
        >
          <h6 class="transaction_history">Recent</h6>
          <span class="view-all" @click="gototransaction">View all</span>
        </div>
        <div class="table" style="padding: 20px">
          <div class="table_section" id="content">
            <table>
              <thead>
                <tr>
                  <th style="text-align: left">TRX ID</th>
                  <th style="text-align: left">Amount</th>
                  <th style="text-align: left">Beneficiary</th>

                  <th style="text-align: left">PYMT Type</th>
                  <th style="text-align: left">Status</th>
                  <th style="text-align: left">Date</th>
                </tr>
              </thead>
              <tbody>
                <tr
                  v-for="item in filtertransaction.slice(0, 4)"
                  :key="item.id"
                  @click="todetails(item)"
                >
                  <td style="text-align: left">{{ item.ref }}</td>

                  <td
                    style="text-align: left"
                    v-if="
                      item.type != 20 &&
                      item.type != 17 &&
                      item.type != 18 &&
                      item.type != 31
                    "
                  >
                    &#8358;
                    {{ Intl.NumberFormat().format(item.amount) }}
                  </td>
                  <td v-if="item.type == 20" style="text-align: left">
                    &#36;
                    {{ Intl.NumberFormat().format(item.amount) }}
                  </td>
                  <td v-if="item.type == 17" style="text-align: left">
                    &#36;
                    {{ Intl.NumberFormat().format(item.amount / 100) }}
                  </td>
                  <td v-if="item.type == 18" style="text-align: left">
                    &#36;
                    {{ Intl.NumberFormat().format(item.amount / 100) }}
                  </td>
                  <td v-if="item.type == 31" style="text-align: left">
                    ${{ Intl.NumberFormat().format(item.amount) }}
                  </td>

                  <td v-if="item.type == 16" style="text-align: left">
                    {{ item.user }}
                  </td>
                  <td v-if="item.type == 18" style="text-align: left">
                    {{ item.plan }}
                  </td>
                  <td v-if="item.type == 20" style="text-align: left">
                    Dollar Card
                  </td>
                  <td v-if="item.type == 12" style="text-align: left">
                    {{ item.reciever }}
                  </td>
                  <td v-if="item.type == 31" style="text-align: left">
                    {{ item.reciever }}{{ item.plan }}
                  </td>

                  <td
                    v-if="
                      item.type != 20 &&
                      item.type != 16 &&
                      item.type != 12 &&
                      item.type != 18 &&
                      item.type != 31
                    "
                    style="text-align: left"
                  >
                    {{ item.reciever }}
                  </td>

                  <td v-if="item.type == 1" style="text-align: left">
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
                  <td v-if="item.type == 2" style="text-align: left">
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

                  <td v-if="item.type == 30">API Transfer</td>

                  <td v-if="item.type == 35">Alipay Payment</td>
                  <td v-if="item.type == 36">Wechat Payment</td>
                  <td v-if="item.type == 31">DOM Funding</td>

                  <td v-if="item.type == 16">Currency swap(P2P)</td>
                  <td v-if="item.type == 32">Auto Refund</td>

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
                          : item.status == 2 &&
                            item.type != 36 &&
                            item.type != 35
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
                          : item.status == 2 &&
                            item.type != 35 &&
                            item.type != 36
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
import sidebar from "@/components/sidebar.vue";
import headers from "@/components/header.vue";
import Loader from "@/components/loading.vue";
import axios from "axios";
import moment from "moment";
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { mapActions } from "vuex";
export default {
  name: "myHome",
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
      confirmindex: 0,
      ledger: 0,
      mainbalance: 0,
      selectedItem: [],
      defaultname: "Naira Balance",
      defaultcurrenct: "NGN",
      defaultbalance: "",
      defaultavailable: "",
      selectedindex: 0,
      lname: "",
      fname: "",
      username: "",
      to: "",
      from: "",
      moment: moment,
      transaction: [],
      hidemybalance: false,
      search: "",
      accountName: "",
      accountNumber: "",
      bankName: "",
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
    };
  },

  methods: {
    ...mapActions({
      signOut: "auth/signOut",
    }),
    getIndex(index) {
      this.selectedindex = index;
      this.defaultcurrenct = this.currency[this.selectedindex].currency;
      this.defaultbalance = this.currency[this.selectedindex].balance;
      this.defaultavailable = this.currency[this.selectedindex].ledger;
      this.defaultname = this.currency[this.selectedindex].name;
      localStorage.setItem("index", this.selectedindex);

      var modal = document.getElementById("mywallet");

      modal.style.display = "none";
    },
    clickeye() {
      this.hidemybalance = !this.hidemybalance;
    },
    gototransaction() {
      this.$router.push("/transaction/home");
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

    todeposit() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    closeModal() {
      var modal = document.getElementById("myModal");

      modal.style.display = "none";
      var modals = document.getElementById("myModals");
      modals.style.display = "none";
      var modalm = document.getElementById("mywallet");

      modalm.style.display = "none";
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
    download() {
      window.html2canvas = html2canvas;
      const doc = new jsPDF("p", "pt", "a2");
      doc.html(document.querySelector("#content"), {
        callback: function (pdf) {
          pdf.save("Transaction.pdf");
        },
      });
    },
    hidedrop() {
      this.showdrop = !this.showdrop;
    },
    setSelected2(tab) {
      this.selecteds = tab;
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
          this.transaction = res.data.data.data.reverse();
          this.loading = false;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },
  async mounted() {
    const myindex = parseInt(localStorage.getItem("index"));

    if (
      myindex == undefined ||
      myindex == null ||
      myindex == "" ||
      isNaN(myindex)
    ) {
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
        this.accountNumber = response.data.data.bank;
        this.accountName = response.data.data.accountName;
        this.bankName = response.data.data.bankname;
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
        if (response.data.data.bvnstatus == null) {
          this.$router.push("../auth/verifybvn");
        }
        if (response.data.data.bvnstatus == "true") {
          this.confirmindex += 1;
        }
        if (response.data.data.address == "2") {
          this.confirmindex += 1;
        }
        if (response.data.data.p_status == "true") {
          this.confirmindex += 1;
        } else {
          this.signOut().then(() => {
            this.$router.push("../../auth/login");
          });
        }
        if (response.data.data.pinstatus !== "true") {
          this.$router.push("../../auth/setpin");
        }

        if (response.data.data.e_status == "true") {
          this.confirmindex += 1;
        } else {
          this.signOut().then(() => {
            this.$router.push("../../auth/login");
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });

    await axios
      .get("api/gettransaction")
      .then((res) => {
        this.transaction = res.data.data.data;
        this.loading = false;
      })
      .catch((err) => {
        console.log(err);
      });
  },
  computed: {
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
        color: #fff;
        margin: 0px;
        @media (max-width: 750px) {
          font-size: 1.3rem !important;
        }
      }
      .mybalance {
        display: flex;
        flex-direction: column;
        gap: 10px;
        margin-top: 15px;
        @media (max-width: 750px) {
          gap: 4px;
          margin-top: 0px;
        }

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
    background: #d70d4a;
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
      background: #d70d4a;
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
.table_section {
  height: 250px;
  overflow: auto;
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
::-webkit-scrollbar {
  height: 0px; /* height of horizontal scrollbar ← You're missing this */
  width: 0px; /* width of vertical scrollbar */
  border: none;
}
.mylgroe {
  background: #d70d4a;
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
.mysearchtran {
  @media (max-width: 750px) {
    margin-left: 10px;
  }
}
.mysearchicon {
  @media (max-width: 750px) {
    display: none;
  }
}
.transaction_history {
  font-size: 1rem;
  color: #202020;
  font-weight: 600;
  padding: 0px;
  margin: 0px;
  line-height: 19.6px;
}
.view-all {
  font-size: 1rem;
  color: #d70d4a;
  font-weight: 600;
  padding: 0px;
  margin: 0px;
  line-height: 19.6px;
  cursor: pointer;
}
td {
  text-align: left !important;
}
</style>
