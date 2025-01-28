<template>
  <div style="max-width: 2000px; width: 100%; margin: 0px auto">
    <div
      class="w-100"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == 'TYYSbqjdnfiw273&'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img
          src="@/assets/images/newlogocard.png"
          alt=""
          style="height: 42px"
        />
        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="sendTransfer">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">You are sending</p>
              <div class="d-flex justify-content-center">
                <span
                  style="
                    margin: 0px auto;
                    padding: 5px;
                    background: rgba(5, 203, 111, 0.1);
                    color: #202020;
                    border-radius: 5px;
                    text-align: center;
                    font-weight: 600;
                    padding-right: 20px;
                    padding-left: 20px;
                  "
                >
                  &#8358;{{ forms.amount }}
                </span>
              </div>
              <div style="margin-top: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Account Name</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.accountname }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Account Number</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.accountnumber }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Bank</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.bankname }}
                  </h6>
                </div>
                <div class="border" style="line-height: 40px"></div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Transaction fees</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    &#8358;{{ forms.charges }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Total Charges</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    &#8358;{{
                      parseFloat(forms.charges) + parseFloat(forms.amount)
                    }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Description</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.naration }}
                  </h6>
                </div>
              </div>
            </div>

            <div class="row d-flex justify-content-center">
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin4"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #d70d4a'
                  : 'background:#6E7173'
              "
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                margin: 30px 0px;
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <h5
              style="
                font-size: 12px;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
              @click="getBack"
            >
              <span class="material-icons" style="font-size: 12px; margin: 5px"
                >arrow_back</span
              ><span>Go back</span>
            </h5>
          </form>
        </div>
      </div>
    </div>

    <div
      class="container-xxl"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == 'YSUWGubdu68durr&'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img
          src="@/assets/images/newlogocard.png"
          alt=""
          style="height: 42px"
        />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="SwapCurrency">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">
                You are swapping
              </p>
              <div class="d-flex justify-content-center">
                <span
                  style="
                    margin: 0px auto;
                    padding: 5px;
                    background: rgba(5, 203, 111, 0.1);
                    color: #202020;
                    border-radius: 5px;
                    text-align: center;
                    font-weight: 600;
                    padding-right: 20px;
                    padding-left: 20px;
                  "
                >
                  {{ forms.icfrom }} {{ forms.amt }}
                </span>
              </div>
              <div style="margin-top: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Swap From</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.icfrom }}{{ forms.from }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Swap to</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.icto }} {{ forms.to }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Rate</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.rate }}
                  </h6>
                </div>
                <div class="border" style="line-height: 40px"></div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Transaction fees</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.icfrom }} {{ forms.charges }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Total Charges</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.icfrom }}
                    {{ parseFloat(forms.charges) + parseFloat(forms.amt) }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Description</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.naration }}
                  </h6>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin4"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #d70d4a'
                  : 'background:#6E7173'
              "
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                margin: 30px 0px;
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <h5
              style="
                font-size: 12px;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
              @click="getBack"
            >
              <span class="material-icons" style="font-size: 12px; margin: 5px"
                >arrow_back</span
              ><span>Go back</span>
            </h5>
          </form>
        </div>
      </div>
    </div>

    <div
      class="container-xxl"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == 'kjGstevshaidTTY&'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img
          src="@/assets/images/newlogocard.png"
          alt=""
          style="height: 42px"
        />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="sendForeign">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">
                You are transferring
              </p>
              <div class="d-flex justify-content-center">
                <span
                  style="
                    margin: 0px auto;
                    padding: 5px;
                    background: rgba(5, 203, 111, 0.1);
                    color: #202020;
                    border-radius: 5px;
                    text-align: center;
                    font-weight: 600;
                    padding-right: 20px;
                    padding-left: 20px;
                  "
                >
                  {{ forms.currencyfrom }} {{ forms.amount }}
                </span>
              </div>
              <div style="margin-top: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Beneficiary Name/Company</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.fname }} {{ forms.lname }} {{ forms.c_name }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Currency</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.bencurrency }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Country</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.benconntry }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Entity</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.entity }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Rate</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    1{{ forms.currencyfrom }} :
                    {{ parseFloat(forms.rate).toFixed(4) }}
                    {{ forms.bencurrency }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Amount to receive</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{
                      parseFloat(forms.rate).toFixed(4) *
                      parseFloat(forms.amount)
                    }}
                    {{ forms.bencurrency }}
                  </h6>
                </div>
                <div class="border" style="line-height: 40px"></div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Transaction fees</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.currencyfrom }} {{ forms.charges }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Total Charges</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.currencyfrom }}
                    {{ parseFloat(forms.charges) + parseFloat(forms.amount) }}
                  </h6>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin4"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #d70d4a'
                  : 'background:#6E7173'
              "
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                margin: 30px 0px;
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <h5
              style="
                font-size: 12px;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
              @click="getBack"
            >
              <span class="material-icons" style="font-size: 12px; margin: 5px"
                >arrow_back</span
              ><span>Go back</span>
            </h5>
          </form>
        </div>
      </div>
    </div>
    <div
      class="container-xxl"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == 'ytrFRwsn74FgeT&'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img
          src="@/assets/images/newlogocard.png"
          alt=""
          style="height: 42px"
        />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="buyingcurrency">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">You are buying</p>
              <div class="d-flex justify-content-center">
                <span
                  style="
                    margin: 0px auto;
                    padding: 5px;
                    background: rgba(5, 203, 111, 0.1);
                    color: #202020;
                    border-radius: 5px;
                    text-align: center;
                    font-weight: 600;
                    padding-right: 20px;
                    padding-left: 20px;
                    text-transform: uppercase;
                  "
                >
                  &#8358;{{ forms.amount }}
                </span>
              </div>
              <div style="margin-top: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px"
                    >Amount in
                    <span style="text-transform: uppercase">{{
                      forms.currency
                    }}</span></span
                  >
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.amount / forms.rate }} {{ forms.currency }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Buying from</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.name }}
                  </h6>
                </div>

                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Rate</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    &#8358;{{ forms.rate }} = 1{{ forms.currency }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Amount to receive</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ parseFloat(forms.amount) / parseFloat(forms.rate) }}
                    {{ forms.currency }}
                  </h6>
                </div>
                <div class="border" style="line-height: 40px"></div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Transaction fees</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    0
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Total Charges</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    0
                  </h6>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin4"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #d70d4a'
                  : 'background:#6E7173'
              "
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                margin: 30px 0px;
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <h5
              style="
                font-size: 12px;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
              @click="getBack"
            >
              <span class="material-icons" style="font-size: 12px; margin: 5px"
                >arrow_back</span
              ><span>Go back</span>
            </h5>
          </form>
        </div>
      </div>
    </div>
    <div
      class="container-xxl"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == '75dgagTvdjRESvd&'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img
          src="@/assets/images/newlogocard.png"
          alt=""
          style="height: 42px"
        />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="buyelectricity">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">You are buying</p>
              <div class="d-flex justify-content-center">
                <span
                  style="
                    margin: 0px auto;
                    padding: 5px;
                    background: rgba(5, 203, 111, 0.1);
                    color: #202020;
                    border-radius: 5px;
                    text-align: center;
                    font-weight: 600;
                    padding-right: 20px;
                    padding-left: 20px;
                    text-transform: uppercase;
                  "
                >
                  &#8358;{{ forms.amount }}
                </span>
              </div>
              <div style="margin-top: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Meter Name </span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.name }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Meter Number</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.bi }}
                  </h6>
                </div>

                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Service</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.serveid }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Meter type</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.variationcode }}
                  </h6>
                </div>
                <div class="border" style="line-height: 40px"></div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Transaction fees</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    &#8358;0
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Commission</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    &#8358;{{ forms.charges }}
                  </h6>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin4"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #d70d4a'
                  : 'background:#6E7173'
              "
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                margin: 30px 0px;
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <h5
              style="
                font-size: 12px;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
              @click="getBack"
            >
              <span class="material-icons" style="font-size: 12px; margin: 5px"
                >arrow_back</span
              ><span>Go back</span>
            </h5>
          </form>
        </div>
      </div>
    </div>
    <div
      class="container-xxl"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == '7fthnkTYvbRtKLu&'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img
          src="@/assets/images/newlogocard.png"
          alt=""
          style="height: 42px"
        />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="buyairtime">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">You are buying</p>
              <div class="d-flex justify-content-center">
                <span
                  style="
                    margin: 0px auto;
                    padding: 5px;
                    background: rgba(5, 203, 111, 0.1);
                    color: #202020;
                    border-radius: 5px;
                    text-align: center;
                    font-weight: 600;
                    padding-right: 20px;
                    padding-left: 20px;
                    text-transform: uppercase;
                  "
                >
                  &#8358;{{ forms.amount }}
                </span>
              </div>
              <div style="margin-top: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Recipient </span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.reciever }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Network</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.name }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                  v-if="forms.type == 2"
                >
                  <span style="font-size: 12px">Plan</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    {{ forms.planname }}
                  </h6>
                </div>

                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Service</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.type == 1 ? "Airtime" : "Data" }}
                  </h6>
                </div>

                <div class="border" style="line-height: 40px"></div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Transaction fees</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    &#8358;0
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Commission</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    &#8358;{{ forms.charges }}
                  </h6>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin4"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #d70d4a'
                  : 'background:#6E7173'
              "
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                margin: 30px 0px;
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <h5
              style="
                font-size: 12px;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
              @click="getBack"
            >
              <span class="material-icons" style="font-size: 12px; margin: 5px"
                >arrow_back</span
              ><span>Go back</span>
            </h5>
          </form>
        </div>
      </div>
    </div>
    <div
      class="container-xxl"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == 'TYYSbqjdh89fiw273&'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img
          src="@/assets/images/newlogocard.png"
          alt=""
          style="height: 42px"
        />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="buyairtime">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">You are paying</p>
              <div class="d-flex justify-content-center">
                <span
                  style="
                    margin: 0px auto;
                    padding: 5px;
                    background: rgba(5, 203, 111, 0.1);
                    color: #202020;
                    border-radius: 5px;
                    text-align: center;
                    font-weight: 600;
                    padding-right: 20px;
                    padding-left: 20px;
                    text-transform: uppercase;
                  "
                >
                  &#8358;{{
                    parseFloat(forms.mainNairaamount).toLocaleString()
                  }}
                </span>
              </div>
              <div style="margin-top: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Transaction Type </span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.type == "35" ? "Alipay" : "Wechat Pay" }}
                  </h6>
                </div>

                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">User ID </span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.userid }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Account Name </span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.accountname }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Amount (RMB/Yuan)</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    &yen;{{ forms.amount }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px"> Fee</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    &#8358;{{ forms.fee }}
                  </h6>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin4"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #d70d4a'
                  : 'background:#6E7173'
              "
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                margin: 30px 0px;
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <h5
              style="
                font-size: 12px;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
              @click="getBack"
            >
              <span class="material-icons" style="font-size: 12px; margin: 5px"
                >arrow_back</span
              ><span>Go back</span>
            </h5>
          </form>
        </div>
      </div>
    </div>
    <div
      class="container-xxl"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == 'kjGstevshaidTTY&95'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img
          src="@/assets/images/newlogocard.png"
          alt=""
          style="height: 42px"
        />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="sendDom">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">
                You are transferring
              </p>
              <div class="d-flex justify-content-center">
                <span
                  style="
                    margin: 0px auto;
                    padding: 5px;
                    background: rgba(5, 203, 111, 0.1);
                    color: #202020;
                    border-radius: 5px;
                    text-align: center;
                    font-weight: 600;
                    padding-right: 20px;
                    padding-left: 20px;
                    text-transform: uppercase;
                  "
                >
                  ${{ parseFloat(forms.amount) + parseFloat(forms.domfee) }}
                </span>
              </div>
              <div style="margin-top: 20px">
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Account Number </span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.accountNumber }}
                  </h6>
                </div>

                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Bank Name </span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.bankName }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Account Name </span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                      text-transform: uppercase;
                    "
                  >
                    {{ forms.accountName }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px">Amount In Dollar</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    ${{ forms.amount }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px"> Fee</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    ${{ forms.domfee }}
                  </h6>
                </div>
                <div
                  class="d-flex justify-content-between"
                  style="align-items: center; line-height: 30px"
                >
                  <span style="font-size: 12px"> Rate</span>
                  <h6
                    style="
                      font-size: 12px;
                      margin: 0px !important;
                      padding: 0px !important;
                    "
                  >
                    1$ = &#8358;{{ forms.rate }}
                  </h6>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col-3">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin4"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #d70d4a'
                  : 'background:#6E7173'
              "
              class="btn w-100 mt-4"
              style="
                color: #fff;
                border: none;
                border-radius: 5px;
                outline: none;
                margin: 30px 0px;
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <h5
              style="
                font-size: 12px;
                text-align: center;
                display: flex;
                align-items: center;
                cursor: pointer;
              "
              @click="getBack"
            >
              <span class="material-icons" style="font-size: 12px; margin: 5px"
                >arrow_back</span
              ><span>Go back</span>
            </h5>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
import Alert from "@/components/alert.vue";
import axios from "axios";
import moment from "moment";
export default {
  name: "myPayment",
  components: {
    Alert,
  },
  data() {
    return {
      xconfig: "",
      pin1: "",
      clickme: false,
      pin2: "",
      filldata: false,
      moment: moment,
      pin3: "",
      pin4: "",
      alertstatus: false,
      status: "",
      message: "",
      forms: [],
      loading: false,
      fname: "",
      lname: "",
    };
  },
  methods: {
    ...mapActions({
      sendCodes: "auth/sendCode",
      sendOtp: "auth/sendOtp",
    }),
    getvalidated() {
      if (
        this.pin1 != "" &&
        this.pin2 != "" &&
        this.pin3 != "" &&
        this.pin4 != ""
      ) {
        this.filldata = true;
      } else {
        this.filldata = false;
      }
    },
    async sendOtps() {
      const data = {
        phone: this.xconfig,
      };
      this.sendOtp(data)
        .then(() => {
          this.alertstatus = true;
          this.status = "success";
          this.message = "Code sent, active for 30 minutes";
          this.$router.push("verify");
          setTimeout(() => {
            this.alertstatus = false;
          }, 5000);
        })
        .catch((e) => {
          console.log(e);
          (this.alertstatus = true),
            (this.status = "failed"),
            (this.message = "Error sending code");
          setTimeout(() => {
            this.alertstatus = false;
          }, 5000);
        });
    },
    getBack() {
      this.$router.go(-1);
    },
    async sendTransfer() {
      this.filldata = false;
      this.clickme = true;
      const data = {
        pin: this.pin1 + this.pin2 + this.pin3 + this.pin4,
      };
      await axios
        .post("/api/verifypin", data)
        .then(() => {
          axios
            .post(`api/transfer`, this.forms)
            .then((res) => {
              if (res.data.success == "true") {
                setTimeout(() => {
                  localStorage.removeItem("form");
                  this.$router.push("../../success/1");
                }, 3000);
              } else {
                this.clickme = false;
                this.filldata = true;
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";

                this.$swal({
                  title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                  text: `Failed Transaction`,
                  type: "error",
                  icon: "error",

                  width: 300,
                });
              }
            })
            .catch((e) => {
              e;
              this.clickme = false;

              this.pin1 = "";
              this.pin2 = "";
              this.pin3 = "";
              this.pin4 = "";
              this.$swal({
                title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                text: `Failed Transaction`,
                type: "error",
                icon: "error",

                width: 300,
              });
            });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
            text: `Invalid pin`,
            type: "error",
            icon: "error",

            width: 300,
          });
        });
    },
    async buyairtime() {
      this.filldata = false;
      this.clickme = true;

      const data = {
        pin: this.pin1 + this.pin2 + this.pin3 + this.pin4,
      };
      await axios
        .post("/api/verifypin", data)
        .then(() => {
          axios
            .post(`api/transaction`, this.forms)
            .then((res) => {
              if (res.data.success == "true" || res.data.success == true) {
                setTimeout(() => {
                  localStorage.removeItem("form");
                  this.$router.push("../../success/1");
                }, 3000);
              } else {
                this.clickme = false;
                this.filldata = true;
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";
                this.$swal({
                  title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                  text: `Failed Transaction`,
                  type: "error",
                  icon: "error",

                  width: 300,
                });

                setTimeout(() => {
                  this.alertstatus = false;
                }, 3000);
              }
            })
            .catch((e) => {
              this.filldata = true;
              this.clickme = false;
              this.$swal({
                title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                text: `${
                  e.response?.data?.message
                    ? e.response?.data.message
                    : e.response.data.Message
                }`,
                type: "error",
                icon: "error",

                width: 300,
              }).then(() => {});
            });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
            text: `Invalid pin`,
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

    async sendDom() {
      this.filldata = false;
      this.clickme = true;

      const data = {
        pin: this.pin1 + this.pin2 + this.pin3 + this.pin4,
      };
      await axios
        .post("/api/verifypin", data)
        .then(() => {
          axios
            .post(`api/funddomeaccount`, {
              account_name: this.forms.accountName,
              bank_code: this.forms.bankCode,
              am: this.forms.amount,
              fname: this.fname,
              lname: this.lname,
              m: "web",
              bname: this.forms.bankName,
              account_number: this.forms.accountNumber,
            })
            .then((res) => {
              if (res.data.success == "true" || res.data.success == true) {
                setTimeout(() => {
                  localStorage.removeItem("form");
                  this.$router.push("../../success/1");
                }, 3000);
              } else {
                this.clickme = false;
                this.filldata = true;
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";
                this.$swal({
                  title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                  text: `Failed Transaction`,
                  type: "error",
                  icon: "error",

                  width: 300,
                });

                setTimeout(() => {
                  this.alertstatus = false;
                }, 3000);
              }
            })
            .catch((e) => {
              console.log(e);
              this.filldata = true;
              this.clickme = false;
              this.$swal({
                title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                text: `${
                  e.response?.data?.message
                    ? e.response?.data.message
                    : e.response.data.ref.message
                }`,
                type: "error",
                icon: "error",

                width: 300,
              }).then(() => {});
            });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
            text: `Invalid pin`,
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

    async buyelectricity() {
      this.filldata = false;
      this.clickme = true;

      const data = {
        pin: this.pin1 + this.pin2 + this.pin3 + this.pin4,
      };
      await axios
        .post("/api/verifypin", data)
        .then(() => {
          axios
            .post(`api/transaction`, this.forms)
            .then((res) => {
              if (res.data.success == "true") {
                setTimeout(() => {
                  localStorage.removeItem("form");
                  this.$router.push("../../success/1");
                }, 3000);
              } else {
                this.clickme = false;
                this.filldata = true;
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";
                this.$swal({
                  title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                  text: `Failed Transaction`,
                  type: "error",
                  icon: "error",

                  width: 300,
                });

                setTimeout(() => {
                  this.alertstatus = false;
                }, 3000);
              }
            })
            .catch(() => {
              this.$swal({
                title: `<h4 style='font-size:14x;color:crimson'>Errors!!!</h4>`,
                text: `Failed Transaction`,
                type: "error",
                icon: "error",

                width: 300,
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              });
            });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
            text: `Invalid pin`,
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
    async SwapCurrency() {
      this.filldata = false;
      this.clickme = true;

      const data = {
        pin: this.pin1 + this.pin2 + this.pin3 + this.pin4,
      };
      await axios
        .post("/api/verifypin", data)
        .then(() => {
          axios
            .post(`api/createforexmain`, this.forms)
            .then(() => {
              // console.log(res);

              setTimeout(() => {
                localStorage.removeItem("form");
                this.$router.push("../../success/1");
              }, 3000);
            })
            .catch((e) => {
              this.clickme = false;
              if (e.response.status == 422) {
                this.filldata = true;
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";
                this.$swal({
                  title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                  text: e.response.data.message,
                  type: "error",
                  icon: "error",

                  width: 300,
                }).then((result) => {
                  if (result.value) {
                    location.reload();
                  }
                });

                setTimeout(() => {
                  this.alertstatus = false;
                }, 3000);
              } else {
                this.filldata = true;
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";

                this.$swal({
                  title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                  text: `Failed Transaction`,
                  type: "error",
                  icon: "error",

                  width: 300,
                }).then((result) => {
                  if (result.value) {
                    location.reload();
                  }
                });
              }
            });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
            text: `Invalid pin`,
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
    sendCode() {
      this.filldata = false;
      const data = {
        code: this.pin1 + this.pin2 + this.pin3 + this.pin4,
        phone: this.xconfig,
      };
      this.sendCodes(data)
        .then(() => {
          this.alertstatus = true;
          this.status = "success";
          this.message = "Phone Number verified successfully";
          setTimeout(() => {
            this.$router.push("../auth/login.vue");
            this.alertstatus = false;
          }, 5000);
        })
        .catch((e) => {
          this.alertstatus = true;
          this.status = "failed";
          this.message = e.response.data.errors;
          setTimeout(() => {
            this.alertstatus = false;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pi4 = "";
          }, 500);
        });
    },
    async sendForeign() {
      this.filldata = false;
      this.clickme = true;
      const data = {
        pin: this.pin1 + this.pin2 + this.pin3 + this.pin4,
      };
      await axios
        .post("/api/verifypin", data)
        .then(() => {
          axios
            .post(`api/makepayment`, this.forms)
            .then((res) => {
              //  console.log(res);
              if (res.data.code != 400) {
                setTimeout(() => {
                  localStorage.removeItem("form");
                  this.$router.push("../../success/1");
                }, 3000);
              } else {
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";
                this.$swal({
                  title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                  text: res.data.message,
                  type: "error",
                  icon: "error",

                  width: 300,
                }).then((result) => {
                  if (result.value) {
                    location.reload();
                  }
                });
              }
            })
            .catch((e) => {
              console.log(e);
              this.pin1 = "";
              this.pin2 = "";
              this.pin3 = "";
              this.pin4 = "";
              this.$swal({
                title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                text: `An error occur`,
                type: "error",
                icon: "error",

                width: 300,
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              });
            });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
            text: `Invalid pin`,
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
    async buyingcurrency() {
      this.filldata = false;
      this.clickme = true;

      const data = {
        pin: this.pin1 + this.pin2 + this.pin3 + this.pin4,
      };
      await axios
        .post("/api/verifypin", data)
        .then(() => {
          axios
            .post(`api/buycurrency`, this.forms)
            .then((res) => {
              //  console.log(res);
              if (res.data.code != 400) {
                setTimeout(() => {
                  localStorage.removeItem("form");
                  this.$router.push("../../success/1");
                }, 3000);
              } else {
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";
                this.pin1 = "";
                this.pin2 = "";
                this.pin3 = "";
                this.pin4 = "";
                this.$swal({
                  title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                  text: res.data.message,
                  type: "error",
                  icon: "error",

                  width: 300,
                }).then((result) => {
                  if (result.value) {
                    location.reload();
                  }
                });
              }
            })
            .catch((e) => {
              console.log(e);
              this.clickme = false;

              this.pin1 = "";
              this.pin2 = "";
              this.pin3 = "";
              this.pin4 = "";
              this.$swal({
                title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
                text: `An error occur`,
                type: "error",
                icon: "error",

                width: 300,
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              });
            });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
            text: `Invalid pin`,
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
  },
  async mounted() {
    await axios
      .get("api/getdatils")
      .then((response) => {
        this.fname = response.data.data.fname;
        this.lname = response.data.data.lname;
      })
      .catch((e) => {
        console.log(e);
      });
    this.xconfig = localStorage.getItem("xconfig");
    const form = JSON.parse(localStorage.getItem("form"));
    this.forms = form;
    if (form == null) {
      this.$router.push("../../dashboard/home");
    }
  },
};
</script>
<style lang="scss" scoped>
.container {
  margin: 0rem auto;
  padding: 1rem;
  max-width: 2000px !important;
  width: 100%;
  margin: 0px auto;

  .mybodytag {
    max-width: 300px;
    background: rgba(255, 255, 255, 1) !important;
    z-index: 1000;
    border-radius: 10px;

    padding: 13px;
    width: 100%;
    margin: 100px auto;
    .row {
      margin-top: 50px;
    }
    input {
      width: 50px;
      padding: 10px;
      background: #f5f5f5;
      border-radius: 5px;
      text-align: center;
      border: none;
      outline: none;
    }
    input:focus {
      border: 1px solid #7e57ff;
      border-radius: 5px;
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
.center {
  height: 100vh;
  align-items: center;
  display: flex;
  justify-content: center;
}
</style>
