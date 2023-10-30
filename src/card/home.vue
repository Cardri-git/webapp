<template>
  <div
    class="app w-100 container-xxl"
    v-if="loading == false"
    style="padding: 0px !important"
  >
    <sidebar :firstname="fname" :lastname="lname" :username="username" />
    <div class="w-100">
      <!-- Card creation info-->
      <div id="mycardcreationinfo" class="modal">
        <!-- Modal content -->
        <div class="modal-content" style="width: 100%">
          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Virtual Card</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Card Creation Fee
          </h3>
          <p>
            The Naira equivalent of {{ cardcreatebridgecardcfee }} Naira would
            be debited from your cardri wallet for every Dollar card created.
          </p>

          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Funding Fees
          </h3>
          <p>
            A fixed fee of {{ bridgecardfees }} Naira when funding your dollar
            card. Plus {{ cardmbridgecardcfee }} Naira on first funding of every
            month.
          </p>

          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Card Maintenance Fees
          </h3>
          <p>No maintenance fee.</p>

          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Card Limit
          </h3>
          <p>Not More than 10,000 per month.</p>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked
              style="margin-right: 20px; accent-color: rgb(71, 5, 175)"
            />
            <span
              class="form-check-label"
              for="flexCheckDefault"
              style="font-size: 0.8rem; overflow: hidden"
            >
              I have read and understood the above card terms and conditions.
            </span>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="check"
              value=""
              id="flexCheckDefault"
              style="margin-right: 20px; accent-color: rgb(71, 5, 175)"
              @change="this.check == this.check"
            />
            <label
              class="form-check-label"
              for="flexCheckDefault"
              style="font-size: 0.8rem"
            >
              I accepts the above terms and conditions.
            </label>
          </div>

          <button
            class="btn btn-primary mt-2"
            @click="showtitle"
            style="background: #4705af"
            :disabled="check == false ? true : false"
          >
            Create Card
          </button>
        </div>
      </div>

      <!-- End Card Creation Info-->
      <!--Fund Card -->
      <div id="myfund" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Fund card</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="fundcard">
            <div class="form-group">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Amount in USD</label
              >
              <input
                type="amount"
                class="form-control"
                placeholder="Enter Amount"
                style="padding: 11px"
                v-model="amtusd"
                @keydown="$event.key === '-' ? $event.preventDefault() : null"

                required
                @keyup="
                  this.amtnaira =
                    parseFloat(this.bridgerate) * parseFloat(this.amtusd);
                  this.amtnaira = this.amtnaira + parseFloat(bridgecardfees);
                "
              />
              <div
                style="
                  color: red;
                  font-weight: 600;
                  text-align: center;
                  font-size: 12px;
                "
              >
                1USD = {{ bridgerate }}NGN
              </div>
            </div>
            <div class="form-group">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Amount to deduct(Naira)</label
              >
              <input
                type="number"
                @keydown="$event.key === '-' ? $event.preventDefault() : null"

                class="form-control"
                placeholder="Amount to receive"
                style="padding: 11px"
                v-model="amtnaira"
                readonly
              />
              <div
                style="
                  color: red;
                  font-weight: 600;
                  text-align: center;
                  font-size: 12px;
                "
              >
                Card Fees = &#8358;{{ bridgecardfees }}
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-primary w-100"
              style="padding: 12px; margin-top: 20px"
              :disabled="clickme == true ? true : false"
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
      <!--End fund -->
      <!-- Title -->
      <div id="myTitle" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Title</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="createCard">
            <div class="form-group">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Title</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="mytitle"
                required
              />
              <button
                type="submit"
                class="btn btn-primary w-100"
                style="padding: 12px; margin-top: 20px"
                :disabled="clickme == true ? true : false"
              >
                <span style="color: #fff" v-if="clickme == false"
                  >Continue</span
                >
                <vue-loaders-ball-clip-rotate
                  color="#fff"
                  scale="1"
                  v-if="clickme == true"
                ></vue-loaders-ball-clip-rotate>
              </button>
            </div>
          </form>
        </div>
      </div>
      <!-- card info -->
      <div id="mycardinfo" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Card Information</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form>
            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Card Name</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="eachcard.card_name"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(eachcard.card_name)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>

            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Card Number</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="eachcard.card_number"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(eachcard.card_number)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>
            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Expire Date</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="expiredate"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(expiredate)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>
            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >CVV</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="eachcard.cvv"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(eachcard.cvv)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>
            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Billing Address</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="billingaddress"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(billingaddress)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>
            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Zip Code</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="billingxip"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(billingxip)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>

            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >City</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="billingcity"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(billingcity)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>
            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >State</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="billingstate"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(billingstate)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>
            <div class="form-group" style="position: relative">
              <label
                for="exampleInputEmail1"
                style="font-weight: 600; line-height: 40px"
                >Country</label
              >
              <input
                type="text"
                class="form-control"
                placeholder="Enter Title"
                style="padding: 11px"
                v-model="billingcountry"
                readonly
              />
              <span
                class="position-absolute py-1 px-2 d-block"
                style="
                  top: 0;
                  border-radius: 30px;
                  background: #fff;
                  right: 0;
                  margin-top: 46px;
                  font-size: 12px;
                  color: #7e57ff;
                "
                @click="copyURL(billingcountry)"
              >
                copy
                <span
                  class="material-icons"
                  style="color: #7e57ff; font-size: 11px"
                  >content_copy</span
                >
              </span>
            </div>
            <button
              class="btn btn-primary"
              style="
                background: red;
                font-size: 12px;
                padding: 12px;
                border: none;
              "
              :disabled="clickme2 == true ? true : false"
              @click="freezecard"
            >
              <span style="color: #fff" v-if="clickme2 == false"
                >Freeze Card</span
              >
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme2 == true"
              ></vue-loaders-ball-clip-rotate>
            </button>
          </form>
        </div>
      </div>

      <!-- End card info -->
      <!-- my card details-->
      <div id="mycard" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Card</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>
          <div
            class="w-100 position-relative"
            style="margin-top: 20px; margin-bottom: 20px"
          >
            <img
              src="@/assets/images/cards.svg"
              alt=""
              style="width: 100%; box-sizing: border-box"
            />
            <div
              class="position-absolute py-2 px-3 w-100"
              style="
                top: 0;
                box-sizing: border-box !important;
                margin-top: 10px;
                align-items: center;
              "
            >
              <div
                class="d-flex justify-content-between"
                style="align-items: center"
              >
                <img
                  src="@/assets/images/cardrilogo.svg"
                  alt=""
                  class="img-fluid"
                />
                <img
                  src="@/assets/images/mastercard.svg"
                  alt=""
                  class="img-fluid"
                />
              </div>

              <div
                style="align-items: center; margin-top: 1rem"
                class="mycardholder1"
              >
                <span style="color: #fff; font-size: 1rem; word-spacing: 1.1rem"
                  >**** **** **** {{ cardnumber }}</span
                >
              </div>

              <div
                style="align-items: center; margin-top: 0.5rem"
                class="mycardholder2 row"
              >
                <div class="col-6" style="font-size: 0.8rem; color: #fff">
                  {{ eachcard.card_name }}
                </div>
                <div class="col-6">
                  <div style="font-size: 0.8rem; color: #fff">Exp Date:</div>
                  <div style="font-size: 0.8rem; color: #fff">
                    {{ eachcard.expiry_month }} /{{ eachcard.expiry_year }}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="d-flex justify-content-between">
            <a
              href="javascript:void()"
              type="button"
              style="
                text-decoration: none;
                font-size: 12px;
                color: #4705af;
                margin-top: -20px;
                font-weight: 600;
                cursor: pointer;
              "
              @click="showcardinfo"
              >Show card details
              <span
                class="material-icons"
                style="color: #4705af; font-size: 12px; margin-top: 5px"
                >info</span
              >
            </a>

            <span
              style="background: red; color: white; border-radius: 10px"
              class="py-2 px-3"
              v-if="eachcard.is_active == false"
            >
              Freeze
            </span>
            <span
              style="background: green; color: white; border-radius: 10px"
              class="py-2 px-3"
              v-if="eachcard.is_active == true"
            >
              Active
            </span>
          </div>
          <div
            style="
              color: #4a4e50;
              text-align: center;
              font-size: 13px;
              margin-top: 20px;
            "
          >
            Current Balance
          </div>

          <h3
            style="
              text-align: center;
              margin: 10px auto;
              background: rgba(5, 203, 111, 0.1);
            "
            class="py-2 px-4"
          >
            &#36;{{ this.balance / 100 }}
          </h3>
          <button
            class="btn btn-primary"
            style="
              margin-top: 20px;
              background: #4705af;
              font-size: 12px;
              padding: 12px;
              border: none;
            "
            @click="showfund"
          >
            Fund Card
          </button>
          <button
            class="btn btn-primary"
            style="margin-top: 20px;background:background: #12BD89;padding:12px;border:none;
;font-size:12px"
            @click="withdraw"
            :disabled="clickme == true ? true : false"
          >
            <span style="color: #fff" v-if="clickme == false">Withdraw</span>
            <vue-loaders-ball-clip-rotate
              color="#fff"
              scale="1"
              v-if="clickme == true"
            ></vue-loaders-ball-clip-rotate>
          </button>
          <button
            class="btn btn-primary"
            style="
              margin-top: 20px;
              background: red;
              font-size: 12px;
              padding: 12px;
              border: none;
            "
            v-if="cardstatus == true"
            :disabled="clickme2 == true ? true : false"
            @click="freezecard"
          >
            <span style="color: #fff" v-if="clickme2 == false"
              >Freeze Card</span
            >
            <vue-loaders-ball-clip-rotate
              color="#fff"
              scale="1"
              v-if="clickme2 == true"
            ></vue-loaders-ball-clip-rotate>
          </button>
          <button
            class="btn btn-primary"
            style="
              margin-top: 20px;
              background: green;
              font-size: 12px;
              padding: 12px;
              border: none;
            "
            v-if="cardstatus == false"
            :disabled="clickme2 == true ? true : false"
            @click="unfreezecard"
          >
            <span style="color: #fff" v-if="clickme2 == false"
              >Unfreeze Card</span
            >
            <vue-loaders-ball-clip-rotate
              color="#fff"
              scale="1"
              v-if="clickme2 == true"
            ></vue-loaders-ball-clip-rotate>
          </button>
          <button
            class="btn btn-primary"
            style="
              margin-top: 20px;
              background: #7e57ff;
              font-size: 12px;
              padding: 12px;
              border: none;
            "
            @click="showcardinfo"
          >
            Card Details
          </button>
          <!--
          <button
            class="btn btn-primary"
            style="
              margin-top: 20px;
              background: #4a4e50;
              font-size: 12px;
              padding: 12px;
              border: none;
            "
          >
            View Transaction
          </button>
          -->
          <!-- Title -->
        </div>
      </div>
      <!-- End my card details -->
      <!-- To Cardri -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
            <h3>Card Type</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>
          <div
            class="card"
            style="
              background: #f5f5ff;
              border: none;
              margin-top: 30px;
              padding: 0px !important;
            "
            @click="tocardcreation"
          >
            <div
              class="card-body"
              style="
                padding: 5px !important;
                margin: 0px !important;
                cursor: pointer;
              "
            >
              <img
                src="@/assets/images/bluewallet.svg"
                alt=""
                style="float: left"
              />
              <div style="overflow: hidden">
                <h3 style="margin: 5px">Virtual card</h3>
                <p style="margin: 5px; font-size: 12px">
                  Create and top up your card with cash or digital assets. Shop
                  online without restrictions.
                </p>
              </div>
            </div>
          </div>
          <div
            class="card"
            style="
              background: #f5f5ff;
              border: none;
              margin-top: 30px;
              padding: 0px !important;
            "
          >
            <div
              class="card-body"
              style="padding: 5px !important; margin: 0px !important"
            >
              <img
                src="@/assets/images/bluewallet.svg"
                alt=""
                style="float: left"
              />
              <div style="overflow: hidden">
                <h3 style="margin: 5px">Physical card</h3>
                <p style="margin: 5px; font-size: 12px">
                  Withdraw cash from your Cardri wallet balance at any of over
                  40 million POS terminal in 200+ countries worlwide.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
          <div class="d-flex justify-content-end">
            <button
              @click="tocardri"
              class="btn btn-secondary d-flex justify-content-between"
              style="
                align-items: center;
                padding-right: 12px;
                padding-left: 12px;
                background: #4705af;
              "
              v-if="bvnstatus == true"
            >
              <span
                class="material-icons"
                style="font-size: 20px; margin-right: 10px"
                >add</span
              >
              <span style="font-size: 13px">Create Card</span>
            </button>
          </div>
          <div v-if="allcards.length != 0">
            <div
              class="py-2 px-2"
              style="
                border-top: 1px solid #ccc;
                border-bottom: 1px solid #ccc;
                margin-top: 30px;
              "
              v-for="item in allcards"
              :key="item"
            >
              <div class="row">
                <div class="col-md-6 col-lg-6">
                  <div class="row">
                    <div class="col-md-10 col-lg-10">
                      <div
                        style="
                          position: relative !important ;
                          display: flex;
                          justify-content: center;
                          margin: 20px;
                          cursor: pointer;
                        "
                        class="cardholdermain"
                        @click="showcarddetails(item)"
                      >
                        <img
                          src="@/assets/images/cards.svg"
                          alt=""
                          style="position: relative !important"
                          class="img-fluid"
                        />
                        <div
                          class="position-absolute py-2 px-3 w-100"
                          style="
                            top: 0;
                            box-sizing: border-box !important;
                            margin-top: 10px;
                            align-items: center;
                          "
                        >
                          <div
                            class="d-flex justify-content-between"
                            style="align-items: center"
                          >
                            <img
                              src="@/assets/images/cardrilogo.svg"
                              alt=""
                              class="img-fluid"
                            />
                            <img
                              src="@/assets/images/mastercard.svg"
                              alt=""
                              class="img-fluid"
                            />
                          </div>

                          <div
                            style="align-items: center; margin-top: 1.9rem"
                            class="mycardholder1"
                          >
                            <span
                              style="
                                color: #fff;
                                font-size: 1rem;
                                word-spacing: 1.1rem;
                              "
                              >**** **** ****
                              {{ item.card_number.slice(-4) }}</span
                            >
                          </div>

                          <div
                            style="align-items: center; margin-top: 1.9rem"
                            class="mycardholder2 row"
                          >
                            <div
                              class="col-6"
                              style="font-size: 0.8rem; color: #fff"
                            >
                              {{ item.card_name }}
                            </div>
                            <div class="col-6">
                              <div style="font-size: 0.8rem; color: #fff">
                                Exp Date:
                              </div>
                              <div style="font-size: 0.8rem; color: #fff">
                                {{ item.expiry_month }} /{{ item.expiry_year }}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div
                  class="col-6 d-none d-md-flex d-lg-flex"
                  style="align-items: center; cursor: pointer"
                >
                  <img
                    src="@/assets/images/dropdown2.svg"
                    alt=""
                    class="img-fluid"
                    @click="showcarddetails(item)"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            v-else
            style="
              text-align: center;
              border-bottom: 1px solid #ccc;
              padding: 10px;
              margin-top: 20px;
            "
          >
            You do not have an existing card...
            <br />
            <h4
              style="
                color: red;
                text-align: center;
                font-size: 0.8rem;
                margin-top: 10px;
                text-transform: capitalize;
              "
            >
              {{ bmessage }}
            </h4>
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
  name: "mySend",
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
      check: false,
      mainbalance: 0,
      benfirstname: "",
      benlastname: "",
      bencompany: "",
      eror: false,
      rate: 0,
      amountfrom: 0,
      amountto: 0,
      cardmbridgecardcfee: 0,
      selectedcurrency: "",
      selectedcountry: "",
      clickme: false,
      clickme2: false,

      lname: "",
      selectedbox: 1,
      myben: [],
      success: false,
      fname: "",
      amtnaira: 0,
      amtusd: 0,
      mainloader: false,
      title: "",
      bridgerate: 0,
      bridgecardfees: 0,
      mytitle: "",
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
      eachcard: "",
      cardstatus: true,
      error: false,
      expiredate: "",
      loadermessage: "Please wait",
      accountName: "",
      fillData: false,
      benAccountNumber: "",
      bns: false,
      bmessage: "",

      sesid: "",
      nationalId: "",
      charges: 0,
      search: "",
      banks: [],
      allcards: [],
      entity: "",
      wallet: "",
      alertstatus: false,
      bvnstatus: true,
      status: "",
      message: "",
      purposeid: "",
      cardnumber: "",
      balance: "0",
      purposes: [],
      cardcreatebridgecardcfee: 0,
      foreignAccountNumber: "",
      foreigncountry: "",
      foreigncurrency: "",
      currency: [
        {
          name: "Naira Balance",
          currency: "NGN",
          status: 1,
          balance: 0,
          ledger: 0,
          image: "NGN.svg",
        },
        {
          name: "Commission Balance",
          currency: "Com",
          status: 1,
          balance: 0,
          ledger: 0,
          image: "NGN.svg",
        },
        {
          name: "Euro Balance",
          currency: "EUR",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "EUR.svg",
        },
        {
          name: "Dollar Balance",
          currency: "USD",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "USD.svg",
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
          image: "ZAR.svg",
        },
        {
          name: "French  Franca  Rand",
          currency: "XAF",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "ZAF.svg",
        },
        {
          name: "Canadian Dollar Balance",
          currency: "CAD",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "GBP.svg",
        },
        {
          name: "Chinesse Yuan Balance",
          currency: "CNY",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "AED.svg",
        },
        {
          name: "Australia Dollar Balance",
          currency: "AUD",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "GBP.svg",
        },
        {
          name: "Ghannian cedis Balance",
          currency: "GHS",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "AED.svg",
        },
        {
          name: "Emirati Dirham Balance",
          currency: "AED",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "AED.svg",
        },
      ],
      billingstate: "",
      billingcountry: "",
      billingcity: "",
      billingxip: "",
      billingaddress: "",
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
    async fundcard() {
      this.clickme = true;
      const data = {
        card_id: this.eachcard.card_id,
        amount: this.amtnaira,
      };
      await axios
        .post("api/fundcard", data)
        .then((res) => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
            text: `${res.data.data.message}`,
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
          this.clickme = false;
          this.$swal({
            title: `<h4 style='font-size:14x;color:red'>Failed!!!</h4>`,
            text: `${e.response.data.message}`,
            type: "success",
            icon: "success",

            width: 300,
          }).then((result) => {
            if (result.value) {
              location.reload();
            }
          });
        });
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
    tocardcreation() {
      var modals = document.getElementById("myModal");
      modals.style.display = "none";

      var modal = document.getElementById("mycardcreationinfo");
      modal.style.display = "block";
    },
    async tocardri() {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    toForeign() {
      var modal = document.getElementById("myForeign");
      modal.style.display = "block";
    },
    showfund() {
      var mycard = document.getElementById("mycard");
      mycard.style.display = "none";
      var modal = document.getElementById("myfund");
      modal.style.display = "block";
    },
    async showtitle() {
      if (this.bridgecard != 1) {
        await axios
          .post("api/createholder")
          .then((res) => {
            if (res.data.success == "true") {
              var modal = document.getElementById("myModal");
              modal.style.display = "none";
              var title = document.getElementById("myTitle");
              title.style.display = "block";
            }
          })
          .catch(() => {
            this.$swal({
              title: `<h4 style='font-size:14x;color:red'>Failed!!!</h4>`,
              text: `Unable to create Card , Contact our customer services..`,
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
        var modal = document.getElementById("myModal");
        modal.style.display = "none";
        var title = document.getElementById("myTitle");
        title.style.display = "block";
      }
    },
    async showcarddetails(card) {
      this.eachcard = card;
      this.cardstatus = card.is_active;
      await axios
        .get(`api/getbalcance?card_id=${card.card_id}`)
        .then((res) => {
          this.balance = res.data.data.balance;
        })
        .catch((e) => {
          console.log(e);
        });

      this.cardnumber = this.eachcard.card_number.slice(-4);
      var result = Object.keys(this.eachcard.billing_address).map((key) => [
        this.eachcard.billing_address[key],
      ]);
      this.expiredate =
        this.eachcard.expiry_month + "/" + this.eachcard.expiry_year;
      this.billingaddress = result[0];
      this.billingcity = result[1];
      this.billingcountry = result[2];
      this.billingxip = result[3];
      this.billingstate = result[5];
      var modal = document.getElementById("myTitle");
      modal.style.display = "none";
      var mycard = document.getElementById("mycard");
      mycard.style.display = "block";
    },
    showcardinfo() {
      var mycard = document.getElementById("mycard");
      mycard.style.display = "none";
      var modal = document.getElementById("mycardinfo");
      modal.style.display = "block";
    },
    closeModal() {
      var modal = document.getElementById("myModal");
      var modalsss = document.getElementById("myForeign");
      var title = document.getElementById("myTitle");
      var fund = document.getElementById("myfund");

      var cardinfo = document.getElementById("mycardinfo");
      cardinfo.style.display = "none";
      title.style.display = "none";
      fund.style.display = "none";
      var cardcreation = document.getElementById("mycardcreationinfo");
      cardcreation.style.display = "none";

      var modalss = document.getElementById("myaddbeneficiary");
      var modalssss = document.getElementById("myforeignBeneficiary");
      var mycard = document.getElementById("mycard");
      mycard.style.display = "none";

      modal.style.display = "none";
      modalss.style.display = "none";
      modalsss.style.display = "none";
      modalssss.style.display = "none";
    },

    getselectcountry() {
      this.selectedcountry = this.selectedcurrency.country;
    },
    geteachbeneficiary() {},

    async createCard() {
      this.clickme = true;
      const data = {
        title: this.mytitle,
      };

      await axios
        .post("api/createcard", data)
        .then((res) => {
          if (res.data.status == "success") {
            this.$swal({
              title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
              text: `${res.data.message}`,
              type: "success",
              icon: "success",

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
        });
    },
    async withdraw() {
      this.$swal({
        title: `<h4 style='font-size:12x;color:#202020'>Are you Sure ?</h4>`,
        text: "Are you sure you want to unload the card ? ",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4705AF",
        cancelButtonColor: "#4A4E50",
        confirmButtonText: "Continue",
        width: "300",
        iconHtml: "؟",

        //  icon: "warning",
      }).then((result) => {
        if (result.isConfirmed == true) {
          this.clickme = true;
          const data = {
            card_id: this.eachcard.card_id,
          };
          axios
            .post("api/unloadcard", data)
            .then((res) => {
              if (res.data.data.status == "success") {
                this.clickme = false;
                this.$swal({
                  title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
                  text: `${res.data.data.message}`,
                  type: "success",
                  icon: "success",

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
    },
    async freezecard() {
      this.$swal({
        title: `<h4 style='font-size:12x;color:#202020'>Are you Sure ?</h4>`,
        text: "Are you sure you want to freeze the card ? ",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4705AF",
        cancelButtonColor: "#4A4E50",
        confirmButtonText: "Continue",
        width: "300",
        iconHtml: "؟",

        //  icon: "warning",
      }).then((result) => {
        if (result.isConfirmed == true) {
          this.clickme2 = true;
          const data = {
            card_id: this.eachcard.card_id,
          };
          axios
            .post("api/freezecard", data)
            .then((res) => {
              // console.log(res.data.status);
              if (res.data.status == "success") {
                this.clickme2 = false;
                this.$swal({
                  title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
                  text: `${res.data.message}`,
                  type: "success",
                  icon: "success",

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
              this.clickme2 = false;

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
        }
      });
    },
    async unfreezecard() {
      this.$swal({
        title: `<h4 style='font-size:12x;color:#202020'>Are you Sure ?</h4>`,
        text: "Are you sure you want to unfreeze this card ? ",
        type: "warning",
        showCancelButton: true,
        confirmButtonColor: "#4705AF",
        cancelButtonColor: "#4A4E50",
        confirmButtonText: "Continue",
        width: "300",
        iconHtml: "؟",

        //  icon: "warning",
      }).then((result) => {
        if (result.isConfirmed == true) {
          this.clickme2 = true;
          const data = {
            card_id: this.eachcard.card_id,
          };
          axios
            .post("api/unfreezecard", data)
            .then((res) => {
              // console.log(res.data.status);
              if (res.data.status == "success") {
                this.clickme2 = false;
                this.$swal({
                  title: `<h4 style='font-size:14x;color:#202020'>Success!!!</h4>`,
                  text: `${res.data.message}`,
                  type: "success",
                  icon: "success",

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
              this.clickme2 = false;

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
        }
      });
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
        this.bridgecard = response.data.data.bridgecard;

        if (response.data.data.bvnstatus == "") {
          this.bvnstatus = false;
          this.bmessage = response.data.data.bmessage;
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Opss!!!</h4>`,
            text: "You are still in level 1, kindly update your BVN and Address",
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#4705AF",
            width: 300,
            confirmButtonText: "Continue",
          }).then((result) => {
            if (result.value) {
              this.$router.push("../settings/setting");
            }
          });
        }
        if (response.data.data.bridgecard == "2") {
          this.bvnstatus = false;
          this.bmessage = response.data.data.bmessage;
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Opss!!!</h4>`,
            text: `${response.data.data.bmessage}`,
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#4705AF",
            width: 300,
            confirmButtonText: "Continue",
          }).then((result) => {
            if (result.value) {
              this.$router.push("../settings/setting");
            }
          });
        }
        if (response.data.data.address != "2") {
          this.bvnstatus = false;
          this.bmessage = response.data.data.bmessage;
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Opss!!!</h4>`,
            text: `upload your address for verification`,
            type: "warning",
            showCancelButton: false,
            confirmButtonColor: "#4705AF",
            width: 300,
            confirmButtonText: "Continue",
          }).then((result) => {
            if (result.value) {
              this.$router.push("../settings/setting");
            }
          });
        }
      })
      .catch((e) => {
        console.log(e);
      });
    await axios
      .get("api/getcards")
      .then((res) => {
        if (res.data.data.cards != undefined) {
          this.allcards = res.data.data.cards.reverse();
        }
      })

      .catch((e) => {
        console.log(e);
      });
    await axios
      .get("api/getmanagement")
      .then((res) => {
        this.cardcreatebridgecardcfee = res.data.data.cardcreatebridgecardcfee;
        this.bridgerate = res.data.data.bridgerate;
        this.bridgecardfees = res.data.data.bridgecardcfee;
        this.cardmbridgecardcfee = res.data.data.cardmbridgecardcfee;
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
  margin-top: 5px;

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
  max-width: 430px;
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
.mycardholder1,
.mycardholder2 {
  @media (max-width: 750px) {
    margin-top: 10px !important;
  }
}
.cardholdermain {
  border: none;

  @media (max-width: 750px) {
    margin: 5px !important;
    margin-top: 10px !important;
  }
}
.d-block {
  cursor: pointer;
}
p {
  font-size: 0.8rem;
}
.no-border {
  border: 0 !important;
}
</style>
