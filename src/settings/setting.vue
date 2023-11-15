<template>
  <div
    class="app w-100 container-xxl"
    v-if="loading == false"
    style="padding: 0px !important"
  >
    <sidebar :firstname="fname" :lastname="lname" :username="username" />
    <div class="w-100">
      <!-- Set Seldfie -->

      <div id="selfie" class="modal mynormalads">
        <!-- Modal content -->
        <form @submit.prevent="confirmCode">
          <div class="modal-content">
            <div
              class="d-flex justify-content-between"
              style="align-item: center"
            >
              <h3>Take a selfie</h3>

              <span class="close material-icons" @click="closeModal"
                >close</span
              >
            </div>
          </div>
        </form>
      </div>

      <!-- End selfie -->

      <!-- Set bvn code -->

      <div id="mycode" class="modal mynormalads">
        <!-- Modal content -->
        <form @submit.prevent="confirmCode">
          <div class="modal-content">
            <div
              class="d-flex justify-content-between"
              style="align-item: center"
            >
              <h3>Enter Code</h3>

              <span class="close material-icons" @click="closeModal"
                >close</span
              >
            </div>

            <div class="form-group" style="margin-top: 30px">
              <label for="formGroupExampleInput">Enter the code </label>
              <input
                type="tel"
                v-model="code"
                required
                class="form-control"
                placeholder="Enter  code"
                style="padding: 12px"
                maxlength="11"
                @keyup="code.length == 4 ? (filldata = true) : false"
              />
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #4705af'
                  : 'background:#6E7173'
              "
              class="btn btn-primary w-100 mt-4"
              style="
                color: #fff;
                margin-top: 20px;
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
          </div>
        </form>
      </div>

      <!-- End Set bvn code -->

      <!-- Set bvn -->

      <div id="setamount" class="modal mynormalads">
        <!-- Modal content -->
        <form @submit.prevent="confirmBVN">
          <div class="modal-content">
            <div
              class="d-flex justify-content-between"
              style="align-item: center"
            >
              <h3>Verify Your BVN</h3>

              <span class="close material-icons" @click="closeModal"
                >close</span
              >
            </div>

            <div class="form-group" style="margin-top: 30px">
              <label for="formGroupExampleInput">Enter your BVN</label>
              <input
                type="tel"
                v-model="bvn"
                required
                class="form-control"
                placeholder="Enter Your BVN"
                style="padding: 12px"
                maxlength="11"
                @keyup="checkbvn"
              />
            </div>
            <button
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #4705af'
                  : 'background:#6E7173'
              "
              class="btn btn-primary w-100 mt-4"
              style="
                color: #fff;
                margin-top: 20px;
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
          </div>
        </form>
      </div>

      <!-- End Set bvn -->
      <!-- verification info -->
      <div id="myverify" class="modal mynormalads">
        <!-- Modal content -->
        <div class="modal-content">
          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Verification</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>
          <p>Follow this simple steps for verification</p>
          <form action="" @submit.prevent="submitcurrecny">
            <div class="card" style="background: #f5f5ff" @click="setamount">
              <div
                class="card-body d-flex justify-content-between align-center"
              >
                <h4>Bank Verifcation Number (BVN)</h4>
                <div class="containers">
                  <div class="round">
                    <input
                      type="checkbox"
                      :checked="bvnstatus == true ? true : false"
                      id="checkbox"
                    />
                    <label for="checkbox"></label>
                  </div>
                </div>
              </div>
            </div>
            <div class="card" style="background: #f5f5ff" @click="todata">
              <div
                class="card-body d-flex justify-content-between align-center"
              >
                <h4>Residential Address and Indentity verification</h4>
                <div class="containers">
                  <div class="round">
                    <input
                      type="checkbox"
                      :checked="addressstatus == true ? true : false"
                      id="checkbox"
                    />
                    <label for="checkbox"></label>
                  </div>
                </div>
              </div>
            </div>
            <!--
            <div class="card" style="background: #f5f5ff" @click="selfie">
              <div class="card-body d-flex justify-content-between align-center">
                <h4>Selfie</h4>
                <div class="containers">
                  <div class="round">
                    <input
                      type="checkbox"
                      :checked="filledsetamount == true ? true : false"
                      id="checkbox"
                    />
                    <label for="checkbox"></label>
                  </div>
                </div>
              </div>


            </div>

            -->
            <button
              type="submit"
              class="btn btn-primary"
              style="background: #4705af; margin-top: 30px"
              :disabled="
                filledsetamount && filledsetrate == true ? false : true
              "
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>
          </form>
        </div>
      </div>

      <!-- End verification info -->

      <!-- To Data -->
      <!-- The Modal -->
      <div id="mydata" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert
            :status="status"
            :alertstatus="alertstatus"
            :message="message"
          />

          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Residential Address and Indentity Verification</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendAddress">
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">House Number</label>
              </div>
              <input
                type="text"
                required
                v-model="housenumber"
                class="form-control"
                id="Wallet"
                placeholder="Enter your house number"
              />
            </div>
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Home Address</label>
              </div>
              <textarea
                type="text"
                required
                v-model="homeaddress"
                class="form-control"
              ></textarea>
            </div>
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">State</label>
              </div>
              <select
                type="tel"
                required
                v-model="state"
                class="form-control"
                @change="getlga(state.name, state.id)"
              >
                <option
                  v-for="item in states"
                  :key="item"
                  :value="{
                    id: item.id,

                    name: item.name,
                  }"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">City</label>
              </div>
              <select
                type="tel"
                required
                v-model="city"
                class="form-control"
                id="Wallet"
              >
                <option
                  v-for="item in selectedstates"
                  :key="item"
                  :value="item.name"
                >
                  {{ item.name }}
                </option>
              </select>
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Postal Code</label>
              </div>
              <input
                type="tel"
                required
                v-model="postalcode"
                class="form-control"
                placeholder="Enter Poster code"
              />
            </div>
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">ID type</label>
              </div>
              <select
                type="tel"
                required
                v-model="type"
                class="form-control"
                id="Wallet"
              >
                <option value="NIGERIAN_DRIVER_LICENSE">
                  NIGERIAN_DRIVER_LICENSE
                </option>
                <option value="NIGERIAN_INTERNATIONAL_PASSPORT">
                  NIGERIAN_INTERNATIONAL_PASSPORT
                </option>
                <option value="NIGERIAN_PVC">NIGERIAN_PVC</option>
              </select>
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">ID Number </label>
              </div>
              <input
                type="tel"
                required
                v-model="idnumber"
                class="form-control"
                placeholder="Enter ID number"
              />
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <label
                class="label"
                style="
                  width: 100%;
                  padding: 15px;
                  text-align: center;
                  display: flex;
                  justify-content: center;
                "
              >
                <input
                  type="file"
                  required
                  accept="image/*"
                  @change="onSelectedFile($event)"
                />
                <span style="font-weight: 600; color: #4705af; font-size: 13px"
                  >Upload aIage of your ID card</span
                >
              </label>
            </div>
            <button
              type="submit"
              class="btn"
              :disabled="filldata ? false : true"
            >
              <span style="color: #fff" v-if="clickme == false">Continue</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>
          </form>
        </div>
      </div>

      <!--End To Data -->
      <!-- To Electricity -->
      <!-- The Modal -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert
            :status="status"
            :alertstatus="alertstatus"
            :message="message"
          />

          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Account Information</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendBill">
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">First Name</label>
              </div>
              <input
                type="tel"
                required
                v-model="fname"
                readonly
                class="form-control"
                id="Wallet"
              />
            </div>
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Last Name</label>
              </div>
              <input
                type="tel"
                required
                readonly
                v-model="lname"
                class="form-control"
                id="Wallet"
              />
            </div>
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Email Address</label>
              </div>
              <input
                type="tel"
                required
                readonly
                v-model="email"
                class="form-control"
                id="Wallet"
              />
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Phone Number</label>
              </div>
              <input
                type="tel"
                required
                readonly
                v-model="phone"
                class="form-control"
              />
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Cardri Tag </label>
              </div>
              <input
                type="tel"
                required
                readonly
                v-model="username"
                class="form-control"
              />
            </div>
          </form>
        </div>
      </div>

      <!--End To Electricity -->

      <!-- To cabletv -->
      <!-- The Modal -->
      <div id="mycabletv" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert
            :status="status"
            :alertstatus="alertstatus"
            :message="message"
          />

          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Edit Password</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="sendCableTv">
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Old password</label>
              </div>
              <input
                type="password"
                required
                v-model="oldpassword"
                class="form-control"
                id="Wallet"
                placeholder="Enter Old Password"
              />
            </div>
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">New password</label>
              </div>
              <input
                type="password"
                required
                v-model="newpassword"
                class="form-control"
                id="Wallet"
                placeholder="Enter New Password"
              />
            </div>
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Confirm Password</label>
              </div>
              <input
                type="password"
                required
                v-model="cpassword"
                class="form-control"
                id="Wallet"
                placeholder="Confirm Password"
                @keyup="checkpassword"
              />
            </div>

            <button
              type="submit"
              class="btn"
              :disabled="filldata ? false : true"
              :style="
                filldata == true
                  ? '  background: #4705af'
                  : 'background:#6E7173'
              "
            >
              <span style="color: #fff" v-if="clickme == false">Save</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>
          </form>
        </div>
      </div>

      <!--End To  CableTv -->

      <!-- To Airtime -->
      <!-- The Modal -->
      <div id="myairtime" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <alert
            :status="status"
            :alertstatus="alertstatus"
            :message="message"
          />

          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Update PIN</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="updatePin">
            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Code</label>
              </div>
              <input
                type="tel"
                required
                v-model="oldpin"
                class="form-control"
                id="Wallet"
                maxlength="4"
              />
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">New Pin</label>
              </div>
              <input
                type="tel"
                required
                v-model="newpin"
                class="form-control"
                maxlength="4"
                minlength="4"
              />
            </div>

            <div
              class="form-group"
              style="margin-top: 20px; margin-bottom: 20px"
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center; margin-bottom: 10px"
              >
                <label for="Wallet">Confirm New pin </label>
              </div>
              <input
                type="tel"
                required
                v-model="cnewpin"
                class="form-control"
                maxlength="4"
              />
            </div>

            <button type="submit" class="btn">Continue</button>
          </form>
        </div>
      </div>

      <!--End To  Airtime -->
      <headers :firstname="fname" :lastname="lname" />

      <div class="bgbig" >
        <div class="backtag">
          <img
            src="@/assets/images/back.svg"
            alt=""
            @click="this.$router.go(-1)"
          />
          <span style="text-transform: capitalize">{{ this.$route.name }}</span>
        </div>
        <div style="display:flex;max-width:320px;width:100%;padding:8px;align-items:center;gap:16px;margin-top:16px;margin-bottom:8px">
          <span :style="tab==='Settings' ? 'border-bottom:2px solid #4705af' : ''" @click="tab='Settings'" class="tabsetting">Instruments</span>
          <span :style="tab==='webhook' ? 'border-bottom:2px solid #4705af' : ''"  @click="tab='webhook'" class="tabsetting">Webhook</span>
        </div>

        <div class="webhook_tab" v-show="tab === 'webhook'">
          <form style="display:flex;flex-direction:column;gap:10px;" @submit.prevent="UpdateWebhook">
            <label for="webhook">Webhook</label>
            <div style="display:flex;flex-direction:column;gap:16px">
            <div style="display:flex;align-items:center;gap:8px;max-width:500px;width:100%"> 
              <input type="text" style="width:100%;outline:none;border:none"  v-model="webhook" placeholder="Enter a valid webhook">
              <span class="material-icons" style="color:#4705af;cursor:pointer" @click="copyURL(webhook)" v-show="copied === false">content_copy</span>
              <span class="material-icons" style="color:green;cursor:pointer" @click="copyURL(webhook)" v-show="copied === true">done</span>


            </div>
            <button type="submit" class="btn btn-primary" style="max-width:186px" :disabled="loader">
             <span v-if="loader === false">Update Webhook</span>

               <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="loader ===  true"
              ></vue-loaders-ball-clip-rotate> 
              
            </button>

          </div>

          </form>
          
        </div>
        <div style="display:flex;flex-direction:column;gap:32px" v-show="tab === 'Settings'">

        <div style="max-width: 320px; width: 100%; margin: 10px">
          <div class="row" style="margin-top: 20px">
            <div class="col">
              <div
                class="card"
                style="box-shadow: none !important; border: none !important"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/profile.svg"
                    alt=""
                    style="
                      float: left;

                      margin-right: 20px;
                    "
                  />

                  <div style="overflow: hidden">
                    <div
                      class="justify-content-between"
                      style="align-items: center;"
                    >
                      <h3
                        style="
                          color: #202020;
                          font-weight: 600;
                          font-size: 1rem;
                          margin-bottom: 0px;
                        "
                      >
                        {{ fname }} {{ lname }}
                      </h3>
                      <span
                        style="
                          color: #f97316;
                          font-size: 12px;
                          margin-top: -10px;
                        "
                        >Regular Member</span
                      >
                    </div>

                    <div class="d-flex align-center" style="align-items:center">
                      <span
                        style="
                          font-weight: 500;
                          font-size: 0.7rem;
                          margin-right: 10px;
                        "
                        >Account Number</span
                      >
                      <div
                        style="
                          display: flex;
                          border-radius: 8px;
                          background: #f5f5ff;
                          color: #12bd89;
                          font-size: 11px;
                          padding: 4px;
                          align-items: center;
                        "
                      >
                        {{ accountNumber }}
                        <span
                          class="material-icons"
                          style="font-size: 12px; margin-left: 5px"
                          @click="copyURL(accountNumber)"
                          >content_copy</span
                        >
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div class="balamcebar" >
          <div class="row" style="margin-top: 20px">
            <div class="col-md-6 col-lg-6">
              <div
                class="card"
                style="background: #f5f5ff"
                @click="toelectricity"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/edit.svg"
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
                      <h3 style="color: #202020">Account Information</h3>
                    </div>

                    <p>
                      View the personal information like phone number and
                      address linked to this account.
                    </p>
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
                    src="@/assets/images/editpass.svg"
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
                      <h3 style="color: #202020">Edit Password</h3>
                    </div>

                    <p>Change your account login password.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div class="row" style="margin-top: 20px">
            <div class="col-md-6 col-lg-6">
              <div class="card" style="background: rgba(249, 115, 22, 0.1)">
                <div class="card-body">
                  <img
                    src="@/assets/images/bell.svg"
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
                      <h3 style="color: #202020">Email Notification</h3>
                      <label class="switch" for="checkbox">
                        <input type="checkbox" id="checkbox" />
                        <div class="slider round"></div>
                      </label>
                    </div>

                    <p style="margin-top: 10px">
                      Get notified in your email whenever you login with another
                      device.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div
                class="card"
                style="background: rgba(242, 238, 255, 0.1)"
                @click="toairtime"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/editpin.svg"
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
                      <h3 style="color: #202020">Edit Transaction Pin</h3>
                    </div>

                    <p>
                      Change the 4 digit pin you use when performing
                      transactions.
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
                @click="toverify"
                style="background: rgba(0, 124, 238, 0.1)"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/verifyicon.svg"
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
                      <h3 style="color: #202020">Verification</h3>
                    </div>

                    <p>Update your KYC to be verified</p>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-lg-6">
              <div
                class="card"
                @click="deleteaccount"
                style="background: rgba(0, 124, 238, 0.1)"
              >
                <div class="card-body">
                  <img
                    src="@/assets/images/delete.svg"
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
                      <h3 style="color: #202020">Account Deletion</h3>
                    </div>

                    <p>Delete your cardri Account</p>
                  </div>
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
      ledger: 0,
      mainbalance: 0,
      filldata: false,
      clickme: false,
      number: 0,
      newpin: "",
      cnewpin: "",
      oldpin: "",
      lname: "",
      bvnstatus: false,
      selectedbox: 1,
      mtnapi: "",
      fname: "",
      username: "",
      moment: moment,
      transaction: [],
      meterNumber: "",
      filledsetamount: false,
      amount: 0,
      tab:'Settings',

      plans: [],
      accountName: "",
      accountNumber: "",
      loader: false,
      loadermessage: "Please wait",
      mainloader: false,
      oldpassword: "",
      newpassword: "",
      copied:false,
      lga: [],
      states: [],
      cpassword: "",
      name: "",
      address: "",
      phone: "",
      housenumber: "",
      homeaddress: "",
      state: "",
      city: "",
      postalcode: "",
      type: "",
      idnumber: "",
      filldata2: true,
      bankName: "",
      alertstatus: false,
      status: "",
      plan: "",
      charges: 0,
      message: "",
      service: [],
      webhook:'null',
      addressstatus: false,
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
      email: "",
      bvn: "",
      clickme6: false,
      code: "",
      myselectedstate: [],
      selectedstates: [],
      imagename: "",
      image: "",
      formdaat: "",
      formdata: new FormData(),
      file: "",
      imageUrl: "../assets/images/4.svg",
    };
  },
  methods: {
    async  UpdateWebhook(){
     // var url = document.getElementById("url").value;
    var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (this.webhook != "") {
        if (!regexp.test(this.webhook)) {
          this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Error</h4>`,
              text: 'Please, enter a valid url',
              type: "warining",
              icon: "warning",

              width: 300,
            });
        } else {
          //  window.location.assign(url);
          this.loader = true;
      axios.post('/api/updatewebhook',{webhook: this.webhook}).then(()=>{
        //console.log(res)

        axios
      .get("api/getdatils")
      .then((response) => {
        this.loader = false
        this.webhook = response.data.data.webhook

      })
        this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Updated</h4>`,
              text: `Webhook Updated successfully`,
              type: "success",
              icon: "success",

              width: 300,
            });
      }).catch((e)=>{
        this.loader =false
        this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Error</h4>`,
              text: e.response?.data ?  e.response?.data.message : 'An error occur',
              type: "success",
              icon: "success",

              width: 300,
            });
      })
    }
    }
    },
    async updatePin() {
      if (this.newpin === this.cnewpin) {
        const data = {
          code: this.oldpin,
          pin: this.newpin,
        };
        await axios
          .post("/api/updatepin", data)
          .then(() => {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
              text: `Pin Updated successfully`,
              type: "success",
              icon: "success",

              width: 300,
            });
          })
          .catch((e) => {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
              text: e.response.data.message,
              type: "success",
              icon: "success",

              width: 300,
            });
          });
      } else {
        this.$swal({
          title: `<h4 style='font-size:14x;color:#202020'>Error</h4>`,
          text: `Pin doesn't match`,
          type: "error",
          icon: "error",
          width: 300,
        }).then((res) => {
          if (res.isConfirmed == true) {
            // location.reload();
          }
        });
      }
    },
    getlga(name, id) {
      this.myselectedstate.push(name);

      this.selectedstates = this.lga[id];
    },
    photoTaken(data) {
      console.log("image blob: ", data.blob);
      console.log("image data url", data.image_data_url);
    },
    onSelectedFile(event) {
      this.filldata = true;
      const files = event.target.files;
      let filename = files[0].name;
      if (filename.lastIndexOf(".") <= 0) {
        alert("no");
      }
      const fileReader = new FileReader();
      fileReader.addEventListener("load", () => {
        this.imageUrl = fileReader.result;
      });
      fileReader.readAsDataURL(files[0]);
      this.image = files[0];
    },
    async sendAddress() {
      this.clickme = true;
      this.filldata = false;
      const formdata = new FormData();
      formdata.append("id_image", this.image, this.image.name);
      formdata.append("city", this.city);
      formdata.append("address", this.homeaddress);
      formdata.append("state", this.state.name);
      formdata.append("country", this.country);
      formdata.append("postal_code", this.postalcode);
      formdata.append("house_no", this.housenumber);
      formdata.append("id_type", this.type);
      formdata.append("id_no", this.idnumber);

      axios
        .post("/api/submitaddress", formdata)
        .then(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success</h4>`,
            text: `Address and Indentity saved successfully, Await confirmation`,
            type: "success",
            icon: "success",
            width: 300,
          }).then((res) => {
            if (res.isConfirmed == true) {
              location.reload();
            }
          });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:red'>Error</h4>`,
            text: `An error occured`,
            type: "error",
            icon: "error",
            width: 300,
          });
        });
      this.filldata = false;
      this.clickme = false;
    },
    async confirmCode() {
      this.filldata = false;
      this.clickme = true;
      const data = {
        code: this.code,
      };
      await axios
        .post("api/confrimbvn", data)
        .then((res) => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success</h4>`,
            text: `${res.data.data.detail}`,
            type: "success",
            icon: "success",
            width: 300,
          }).then((res) => {
            if (res.isConfirmed == true) {
              location.reload();
            }
          });
        })
        .catch((e) => {
          console.log(e);
          if (e.response.status == 402) {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Failed</h4>`,
              text: `BVN verified successfuly`,
              type: "error",
              icon: "error",
              width: 300,
            });

            this.filldata = true;
            this.clickme = false;
          } else if (e.response.status == 400) {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Failed</h4>`,
              text: `${e.response.data.message}`,
              type: "error",
              icon: "error",
              width: 300,
            });
            this.filldata = true;
            this.clickme = false;
          } else {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Failed</h4>`,
              text: `${e.response.data.errors}`,
              type: "error",
              icon: "error",
              width: 300,
            });
            this.filldata = true;
            this.clickme = false;
          }
        });
    },
    async confirmBVN() {
      this.filldata = false;
      this.clickme = true;
      const data = {
        bvn: this.bvn,
      };
      await axios
        .post("api/verifybvn", data)
        .then((res) => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success</h4>`,
            text: `${res.data.data.detail}`,
            type: "success",
            icon: "success",
            width: 300,
          }).then((res) => {
            if (res.value) {
              (this.filldata = true), (this.clickme = false);
              var modal = document.getElementById("setamount");
              modal.style.display = "none";
              var airtime = document.getElementById("mycode");
              airtime.style.display = "block";
            }
          });
        })
        .catch((e) => {
          if (e.response.status == 402) {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Failed</h4>`,
              text: `${e.response.data.data}`,
              type: "error",
              icon: "error",
              width: 300,
            });

            this.filldata = true;
            this.clickme = false;
          } else if (e.response.status == 400) {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Failed</h4>`,
              text: `${e.response.data.data.message}`,
              type: "error",
              icon: "error",
              width: 300,
            });
            this.filldata = true;
            this.clickme = false;
          } else {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Failed</h4>`,
              text: `${e.response.data.errors}`,
              type: "error",
              icon: "error",
              width: 300,
            });
            this.filldata = true;
            this.clickme = false;
          }
        });
    },
    checkbvn() {
      this.filldata = true;
    },
    async copyURL(mytext) {
      try {
        await navigator.clipboard.writeText(mytext);
        this.alertstatus = true
        this.copied = true
        this.status = "success"
         this.message = "Copied to clipboard"
        setTimeout(() => {
          this.alertstatus = false;
          this.copied = false

        }, 3000);
      } catch ($e) {
        this.alertstatus = true;
        (this.status = "failed"), (this.message = "Failed to copy");
        setTimeout(() => {
          this.alertstatus = false;
        }, 3000);
      }
    },
    async deleteaccount() {
      this.$swal({
        title: `<h4 style='font-size:12x;color:#202020'>Are you Sure ?</h4>`,
        text: "Are you sure you want to delete your account ? ",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4705AF",
        cancelButtonColor: "#4A4E50",
        confirmButtonText: "Continue",
        width: "300",
        icon: "warning",

        //  icon: "warning",
      }).then((result) => {
        if (result.isConfirmed == true) {
          this.clickme = true;

          axios
            .post("api/delete")
            .then((res) => {
             // console.log(res);
              if (res.data.data.status == "true") {
                this.clickme = false;
                this.$swal({
                  title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
                  text: `${res.data.data.message}`,
                  type: "success",
                  icon: "success",

                  width: 300,
                }).then((result) => {
                  if (result.value) {
                    this.$router.push("../../auth/login");
                    localStorage.removeItem("form");
                  }
                });
              }
            })
            .catch(() => {
             // console.log(e);
              this.clickme = false;

              this.$swal({
                title: `<h4 style='font-size:14x;color:#202020'>Failed!!!</h4>`,
                text: `Failed`,
                type: "error",
                icon: "error",

                width: 300,
              }).then((result) => {
                if (result.value) {
                  location.reload();
                }
              });
            });
        } else {
          this.logoutTimer = null;
        }
      });
      /*
      await axios
        .post("api/delete")
        .then((res) => {
          console.log(res);
        })
        .catch((e) => {
          console.log(e);
        });
        */
    },
    checkpassword() {
      if (this.newpassword == this.cpassword) {
        this.filldata = true;
      } else {
        this.filldata = false;
      }
    },

    tocabletv() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      var tv = document.getElementById("mycabletv");
      tv.style.display = "block";
    },
    async toairtime() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      var tv = document.getElementById("mycabletv");
      tv.style.display = "none";
      const data = {
        phone: this.phone,
      };
      await axios
        .post("auth/verifyphone", data)
        .then(() => {
          var airtime = document.getElementById("myairtime");
          airtime.style.display = "block";
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
            text: `Code sent to your phone Number`,
            type: "success",
            icon: "success",

            width: 300,
          });
        })
        .catch(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:crimson'>Error!!!</h4>`,
            text: `Error initiating pin update,try again`,
            type: "error",
            icon: "error",

            width: 300,
          });
        });
    },
    tocode() {
      var modal = document.getElementById("setamount");
      modal.style.display = "none";
      var airtime = document.getElementById("mycode");
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
    toverify() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      var tv = document.getElementById("mycabletv");
      tv.style.display = "none";
      var airtime = document.getElementById("myairtime");
      airtime.style.display = "none";
      var data = document.getElementById("myverify");
      data.style.display = "block";
    },
    selfie() {
      var modal = document.getElementById("myModal");
      modal.style.display = "none";
      var tv = document.getElementById("mycabletv");
      tv.style.display = "none";
      var airtime = document.getElementById("myairtime");
      airtime.style.display = "none";
      var data = document.getElementById("myverify");
      data.style.display = "none";

      var selfie = document.getElementById("selfie");
      selfie.style.display = "block";
    },
    setamount() {
      if (this.bvnstatus == false) {
        var modals = document.getElementById("myverify");
        modals.style.display = "none";

        var modal = document.getElementById("setamount");
        modal.style.display = "block";
      }
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
      var modals = document.getElementById("setamount");
      modals.style.display = "none";
      var verify = document.getElementById("myverify");
      verify.style.display = "none";
      var selfie = document.getElementById("selfie");
      selfie.style.display = "none";
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
      const data = {
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
      };
      //console.log(data);
      localStorage.setItem("form", JSON.stringify(data));
      this.$router.push("../transaction/payment/75dgagTvdjRESvd&");
    },
  },
  computed: {
    ...mapGetters(["user"]),
  },

  async mounted() {
    const url = "https://api.inec-sans.com/v1/get_states";
    const headers = {
      "Content-Type": "application/json",
      //'Authorization': 'Bearer {your-access-token}'
    };
    const options = {
      method: "GET", // change to POST, PUT, DELETE, etc. if needed
      headers: headers,
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((res) => {
        this.lga = res.result.data.lgas;
        this.states = res.result.data.state;
      })
      .catch((error) => console.error(error));
    /*
    fetch("https://api.inec-sans.com/v1/get_states")
      .then((res) => {
        console.log(res);
        this.lga = res.data.result.data.lgas;
        this.states = res.data.result.data.state;
      })
      .catch((error) => console.error(error));
      */

    await axios
      .get("api/getdatils")
      .then((response) => {
        this.mainbalance = response.data.data.ngn_ld;
        this.ledger = response.data.data.NGN;
        this.username = response.data.data.username;
        this.fname = response.data.data.fname;
        this.lname = response.data.data.lname;
        this.email = response.data.data.email;
        this.accountNumber = response.data.data.bank;
        this.webhook = response.data.data.webhook
        this.phone = response.data.data.phone;
        this.accountName = response.data.data.accountName;
        this.bankName = response.data.data.bankname;
        this.bvnstatus = response.data.data.bvnstatus == "true" ? true : false;
        this.addressstatus = response.data.data.address == "2" ? true : false;
        this.loading = false
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
    max-width: 700px;
    width: 100%;

    img {
      position: relative;
      max-width: 503px;
      width: 100%;
    }
  }
  .card {
    background: #fff !important;
    border-radius: 10px;
    border: 1px solid #f5f5ff !important;
    box-shadow: 0px 1px 30px 1px rgba(71, 5, 175, 0.02);
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
.switch {
  display: inline-block;
  height: 22px;
  position: relative;
  width: 50px;
}

.switch input {
  display: none;
}

.slider {
  background-color: #ccc;
  bottom: 0;
  cursor: pointer;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  transition: 0.4s;
}

.slider:before {
  background-color: #fff;
  bottom: 1px;
  content: "";
  height: 20px;
  left: 4px;
  position: absolute;
  transition: 0.4s;
  width: 20px;
}

input:checked + .slider {
  background-color: #4705af;
}

input:checked + .slider:before {
  transform: translateX(26px);
}

.slider.round {
  border-radius: 34px;
}
.tabsetting{
  font-size: 14px;
  cursor: pointer;
  font-weight: 500;
  letter-spacing: 2%;
  line-height: 19.6px;

}

.slider.round:before {
  border-radius: 50%;
}
.mynormalads {
  .card {
    border: none !important;
    margin-top: 20px;
    cursor: pointer;
  }
  p {
    font-size: 12px;
  }

  h4 {
    font-size: 12px;
  }
}

label.label input[type="file"] {
  position: absolute;
  top: -1000px;
}
.label {
  cursor: pointer;
  border: 1px solid #cccccc;
  border-radius: 5px;
  padding: 5px 15px;
  margin: 5px;
  background: #dddddd;
  display: inline-block;
}

.label:active {
  background: #9fa1a0;
}
.label:invalid + span {
  color: #000000;
}
.label:valid + span {
  color: #ffffff;
}
.round {
  position: relative;
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
  opacity: 1;
}
.webhook_tab{
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding:8px;
}
</style>
