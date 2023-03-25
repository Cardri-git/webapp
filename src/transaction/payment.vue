<template>
  <div>
    <div
      class="container-xxl"
      style="background: rgba(245, 245, 255, 1); margin-top: 0px !important"
      v-if="this.$route.params.form == 'TYYSbqjdnfiw273&'"
    >
      <Alert :alertstatus="alertstatus" :status="status" :message="message" />
      <div class="container">
        <img src="@/assets/images/logo.svg" alt="" />
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
                    &#8358;{{ parseFloat(forms.charges) + parseFloat(forms.amount) }}
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
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
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
              :style="filldata == true ? '  background: #4705af' : 'background:#6E7173'"
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
                dispay: flex;
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
        <img src="@/assets/images/logo.svg" alt="" />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="SwapCurrency">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">You are swapping</p>
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
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
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
              :style="filldata == true ? '  background: #4705af' : 'background:#6E7173'"
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
                dispay: flex;
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
        <img src="@/assets/images/logo.svg" alt="" />

        <div class="mybodytag">
          <h3>Enter Your PIN</h3>
          <p>Please enter your PIN to confirm the transaction.</p>
          <form action="" @submit.prevent="sendForeign">
            <div class="py-2 bg-white">
              <p style="text-align: center; font-size: 12px">You are transferring</p>
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
                    1{{ forms.currencyfrom }} : {{ parseFloat(forms.rate).toFixed(4) }}
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
                    {{ parseFloat(forms.rate).toFixed(4) * parseFloat(forms.amount) }}
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
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
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
              :style="filldata == true ? '  background: #4705af' : 'background:#6E7173'"
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
                dispay: flex;
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
        <img src="@/assets/images/logo.svg" alt="" />

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
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
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
              :style="filldata == true ? '  background: #4705af' : 'background:#6E7173'"
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
                dispay: flex;
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
        <img src="@/assets/images/logo.svg" alt="" />

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
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
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
              :style="filldata == true ? '  background: #4705af' : 'background:#6E7173'"
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
                dispay: flex;
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
        <img src="@/assets/images/logo.svg" alt="" />

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
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin1"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin2"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
                <input
                  type="password"
                  maxlength="1"
                  v-model="pin3"
                  required
                  autocomplete="off"
                  @keyup="getvalidated"
                />
              </div>
              <div class="col">
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
              :style="filldata == true ? '  background: #4705af' : 'background:#6E7173'"
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
                dispay: flex;
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
    };
  },
  methods: {
    ...mapActions({
      sendCodes: "auth/sendCode",
      sendOtp: "auth/sendOtp",
    }),
    getvalidated() {
      if (this.pin1 != "" && this.pin2 != "" && this.pin3 != "" && this.pin4 != "") {
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
      /*
      const data = {
        amount: this.forms.amount,
        accountcode: this.forms.accountcode,
        naration: this.forms.naration,
        bns: this.forms.bns,
        accountname: this.forms.accountname,
        accountnumber: this.forms.accountnumber,
        m: "web",
        sesid: this.forms.sesid,
        bankname: this.forms.bankname,
      };
      */
      await axios
        .post(`api/transfer`, this.forms)
        .then((res) => {
          if (res.data.success == "true") {
            setTimeout(() => {
              localStorage.removeItem("form");
              this.$router.push("../../success/1");
            }, 3000);
          } else {
            this.alertstatus = true;
            this.status = "failed";
            this.message = "Failed";
            this.clickme = false;
            this.filldata = true;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";

            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          }
        })
        .catch((e) => {
          e;
          this.clickme = false;

          this.alertstatus = true;
          this.status = "failed";
          this.message = "Failed";
          this.pin1 = "";
          this.pin2 = "";
          this.pin3 = "";
          this.pin4 = "";
          setTimeout(() => {
            this.alertstatus = false;
          }, 3000);
        });
    },
    async buyairtime() {
      this.filldata = false;
      this.clickme = true;

      await axios
        .post(`api/transaction`, this.forms)
        .then((res) => {
          console.log(res);
          if (res.data.data.status == true || res.data.data.success == true) {
            setTimeout(() => {
              localStorage.removeItem("form");
              this.$router.push("../../success/1");
            }, 3000);
          } else {
            this.clickme = false;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";

            this.alertstatus = true;
            this.status = "failed";
            this.message = "Transaction failed";
            this.filldata = false;

            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          }
        })
        .catch((e) => {
          console.log(e);
          this.clickme = false;
          if (e.response.data.status == "fail") {
            this.alertstatus = true;
            this.status = "failed";
            this.message = "An unknown error occured";
            this.filldata = true;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";

            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          } else {
            this.alertstatus = true;
            this.status = "failed";
            this.message = e.response.data.message;
            this.filldata = true;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";

            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          }
        });
    },

    async buyelectricity() {
      this.filldata = false;
      this.clickme = true;
      //  const current = new Date();

      /*const data = {
        reciever: this.forms.billersCode,
        type: this.forms.type,
        status: 1,
        ref: moment(current).format("YYYYMMDDHHm") + Math.random() * 1000,
        amount: this.forms.amount,
        plan: this.forms.variation_code,
        name: this.forms.metername,
        network: this.forms.ename,
        cref: moment(current).format("YYYYMMDDHHm"),
        serveid: this.forms.serviceID,
        ph: this.forms.phone,
        am: this.forms.amount,
        bi: this.forms.billersCode,
        variationcode: this.forms.variation_code,
        requestid: moment(current).format("YYYYMMDDHHm") + Math.random() * 1000,
        fr: "",
        st: this.forms.ename,
        m: "web",
      };
      */

      await axios
        .post(`api/transaction`, this.forms)
        .then((res) => {
          console.log(res);

          setTimeout(() => {
            localStorage.removeItem("form");
            this.$router.push("../../success/1");
          }, 3000);
        })
        .catch((e) => {
          this.clickme = false;
          this.clickme = false;
          if (e.response.data.status == "fail") {
            this.alertstatus = true;
            this.status = "failed";
            this.message = "An unknown error occured";
            this.filldata = true;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";

            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          } else {
            this.alertstatus = true;
            this.status = "failed";
            this.message = e.response.data.message;
            this.filldata = true;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";

            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          }
        });
    },
    async SwapCurrency() {
      this.filldata = false;
      this.clickme = true;

      await axios
        .post(`api/createforexmain`, this.forms)
        .then((res) => {
          console.log(res);

          setTimeout(() => {
            localStorage.removeItem("form");
            this.$router.push("../../success/1");
          }, 3000);
        })
        .catch((e) => {
          console.log(e);
          this.clickme = false;
          if (e.response.status == 422) {
            this.alertstatus = true;
            this.status = "failed";
            this.message = e.response.data.message;
            this.filldata = true;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";

            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          } else {
            this.alertstatus = true;
            this.status = "failed";
            this.message = "Failed";
            this.filldata = true;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";

            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          }
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

      await axios
        .post(`api/makepayment`, this.forms)
        .then((res) => {
          console.log(res);
          if (res.data.code != 400) {
            setTimeout(() => {
              localStorage.removeItem("form");
              this.$router.push("../../success/1");
            }, 3000);
          } else {
            this.clickme = false;
            this.filldata = true;
            this.alertstatus = true;
            this.status = "failed";
            this.message = res.data.message;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";
            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          }
        })
        .catch((e) => {
          console.log(e);
          this.pin1 = "";
          this.pin2 = "";
          this.pin3 = "";
          this.pin4 = "";
          this.clickme = false;

          this.alertstatus = true;
          this.status = "failed";
          this.message = "An error Occur";

          setTimeout(() => {
            this.alertstatus = false;
          }, 3000);
        });
    },
    async buyingcurrency() {
      this.filldata = false;
      this.clickme = true;

      await axios
        .post(`api/buycurrency`, this.forms)
        .then((res) => {
          console.log(res);
          if (res.data.code != 400) {
            setTimeout(() => {
              localStorage.removeItem("form");
              this.$router.push("../../success/1");
            }, 3000);
          } else {
            this.clickme = false;
            this.filldata = true;
            this.alertstatus = true;
            this.status = "failed";
            this.message = res.data.message;
            this.pin1 = "";
            this.pin2 = "";
            this.pin3 = "";
            this.pin4 = "";
            setTimeout(() => {
              this.alertstatus = false;
            }, 3000);
          }
        })
        .catch((e) => {
          console.log(e);
          this.clickme = false;

          this.alertstatus = true;
          this.status = "failed";
          this.message = "Failed";
          this.pin1 = "";
          this.pin2 = "";
          this.pin3 = "";
          this.pin4 = "";
          setTimeout(() => {
            this.alertstatus = false;
          }, 3000);
        });
    },
  },
  mounted() {
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
