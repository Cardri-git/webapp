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
        <div class="modal-content" style="max-width: 400px !important; width: 100%">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Virtual Card</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>
          <div
            style="
              text-align: center;
              font-weight: 500;
              font-size: 1rem;
              margin-top: 20px;
            "
          >
            Use the Cardri Virtual Card for secure online transactions and contactless
            payments in different currencies anywhere you are.
          </div>
          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">Card Limit</h3>
          <ul
            style="
              list-style: none;
              font-size: 0.9rem;
              font-weight: 400;
              margin-left: -30px;
            "
          >
            <li>- Maximum single deposit $10,000</li>
            <li>- Maximum single transaction $10,000</li>
            <li>- Maximum card balance $10,000</li>
            <li>- Monthly transaction limit $25,000</li>
            <li>- Maximum of 5 Dollar cards can be created</li>
          </ul>

          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Card Creation Fee
          </h3>
          <p>
            The Naira equivalent of $4 would be debited from your Cardri wallet for every
            Dolar card created.
          </p>

          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Rates & Conversion
          </h3>
          <p>
            At the point of funding your dollar card, the current exchage rate will be
            made known to you, and the equivalent in Naira will be debited from your
            Cardri wallet.
          </p>

          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Transaction Fees
          </h3>
          <p>Per transaction, the following transaction fees are applicable:</p>
          <ul
            style="
              list-style: none;
              font-size: 0.9rem;
              font-weight: 400;
              margin-left: -30px;
            "
          >
            <li>- $0.5 - $50 = $0.5</li>
            <li>- $0.5 - $50 = $0.5</li>
            <li>- $0.5 - $50 = $0.5</li>
          </ul>
          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Funding Fees
          </h3>
          <p>
            A fixed fee of $1.5 (in Naira) would be debited from your Cardri wallet by our
            USD card partner when funding your dollar card.
          </p>

          <h3 style="font-size: 16px; font-weight: 600; margin-top: 30px">
            Card Maintenance Fees
          </h3>
          <p>
            A fee of $3 would be charged by our USD card partner at the end of the month
            if the card is used for transaction within a month.
          </p>

          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="flexCheckDefault"
              checked
              style="margin-right: 20px"
            />
            <label
              class="form-check-label"
              for="flexCheckDefault"
              style="font-size: 0.9rem"
            >
              I have read and understood the above card terms and conditions.
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              v-model="check"
              value=""
              id="flexCheckDefault"
              style="margin-right: 20px"
              @change="this.check == this.check"
            />
            <label
              class="form-check-label"
              for="flexCheckDefault"
              style="font-size: 0.9rem"
            >
              I accepts the above terms and conditions.
            </label>
          </div>
          <p>
            You can create more than one virtual card. Label or name the card for easy
            identification.
          </p>

          <button
            class="btn btn-primary"
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
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>
              Buy
              <span style="text-transform: uppercase">{{ selectedmarket.currency }}</span>
            </h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="fundcard">
            <div class="d-flex" style="align-items: center">
              <span>Price:</span>
              <sapn style="font-size: 12px; font-weight: 600; color: #18894c"
                >&#8358;{{ selectedmarket.amount }}</sapn
              >
            </div>
            <div class="d-flex" style="align-items: center">
              <span>Limit:</span>
              <span style="font-size: 12px; font-weight: 600">
                &#8358;{{ selectedmarket.lfrom }} - &#8358;{{ selectedmarket.lto }}
              </span>
            </div>
            <div class="form-group" style="margin-top: 20px">
              <label for="exampleInputEmail1" style="font-weight: 600; line-height: 40px"
                >Amount
              </label>
              <input
                type="tel"
                class="form-control"
                placeholder="Enter Amount"
                style="padding: 11px"
                v-model="amtusd"
                required
                @keyup="checkmypost"
              />
              <!--
              <div style="color: red; font-weight: 600; font-size: 12px">
                Minimum is &#8358;{{ selectedmarket.lfrom }}
              </div>
              -->
              <div
                style="color: red; font-weight: 600; font-size: 12px"
                v-if="clickme3 == true"
              >
                {{ messageme }}
              </div>
            </div>
            <div
              class="d-flex justify-content-between"
              style="align-items: center; margin-top: 30px"
            >
              <span>Equivalent</span>
              <span style="font-weight: 600; font-size: 14px; text-transform: uppercase">
                {{ amtnaira }}{{ selectedmarket.currency }}</span
              >
            </div>
            <div
              class="d-flex justify-content-between"
              style="align-items: center; margin-top: 30px"
            >
              <span>Quantity</span>
              <span style="font-weight: 600; font-size: 14px; text-transform: uppercase">
                {{ selectedmarket.rm }}{{ selectedmarket.currency }}</span
              >
            </div>
            <div
              class="d-flex justify-content-between"
              style="align-items: center; margin-top: 10px"
            >
              <span>Rate</span>
              <span style="font-weight: 600; font-size: 14px; text-transform: uppercase">
                &#8358;{{ selectedmarket.amount }}</span
              >
            </div>

            <button
              type="submit"
              class="btn btn-primary w-100"
              style="padding: 12px; margin-top: 20px; background: #12bd89; border: none"
              :disabled="clickme3 == true ? true : false"
            >
              <span style="color: #fff" v-if="clickme == false">Buy</span>
              <vue-loaders-ball-clip-rotate
                color="#fff"
                scale="1"
                v-if="clickme == true"
              ></vue-loaders-ball-clip-rotate>
            </button>

            <div class="py-2 px-2" style="background: #fffbe7; margin-top: 20px">
              <p>
                <span class="font-weight:600;font-size:.9rem">ATTENTION</span>
                <span style="font-size: 0.8rem">
                  Please read the terms and condition carefully. Failure to comply might
                  result in fail transaction and financial loss.</span
                >
              </p>
            </div>
          </form>
        </div>
      </div>
      <!--End fund -->
      <!-- Title -->
      <div id="myTitle" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Title</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <form @submit.prevent="createCard">
            <div class="form-group">
              <label for="exampleInputEmail1" style="font-weight: 600; line-height: 40px"
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
      </div>
      <!-- card info -->
      <div id="mycardinfo" class="modal mynormalads">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Post Normal ads</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>
          <p>Follow this simple steps to post Ads</p>
          <form action="" @submit.prevent="submitcurrecny">
            <div class="card" style="background: #f5f5ff" @click="setprice">
              <div class="card-body d-flex justify-content-between align-center">
                <h4>Set Currency and Price</h4>
                <div class="containers">
                  <div class="round">
                    <input
                      type="checkbox"
                      :checked="filledsetrate == true ? true : false"
                      id="checkbox"
                    />
                    <label for="checkbox"></label>
                  </div>
                </div>
              </div>
            </div>
            <div class="card" style="background: #f5f5ff" @click="setamount">
              <div class="card-body d-flex justify-content-between align-center">
                <h4>Set Total Amount</h4>
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
            <button
              type="submit"
              class="btn btn-primary"
              style="background: #4705af; margin-top: 30px"
              :disabled="filledsetamount && filledsetrate == true ? false : true"
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

      <!-- End card info -->

      <!-- Set price -->
      <div id="setprice" class="modal mynormalads">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Set Currency and Price</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>
          <div class="form-group" style="margin-top: 20px">
            <label for="exampleFormControlInput1">Select Currency</label>
            <select
              class="form-control"
              placeholder="Select Currency"
              v-model="mycurrency"
              required
              @change="setrate"
              style="padding: 12px"
            >
              <option
                :value="{ balance: item.ledger, currency: item.currency }"
                v-for="item in currency"
                :key="item"
                v-show="item.status == 1 && item.currency != 'Com'"
              >
                {{ item.currency }} {{ item.ledger }}
              </option>
            </select>
          </div>

          <div class="form-group" style="margin-top: 20px">
            <label for="exampleFormControlInput1"
              >Rate per {{ mycurrency.currency }}</label
            >

            <input
              type="tel"
              class="form-control"
              placeholder="Set  Rate"
              v-model="myrate1"
              required
              style="padding: 12px"
              @keyup="setrate"
            />
          </div>
          <div class="row" style="margin-top: 20px">
            <div class="form-group col-6">
              <label for="inputEmail4">Min Limit(in NGN)</label>
              <input
                type="tel"
                class="form-control"
                placeholder="Set Min Limit"
                v-model="myrate"
                required
                style="padding: 12px"
                @keyup="setrate"
              />
            </div>
            <div class="form-group col-6">
              <label for="inputPassword4">Max Limit(in NGN)</label>
              <input
                type="tel"
                class="form-control"
                placeholder="Set Max Limit"
                v-model="myrate2"
                required
                style="padding: 12px"
                @keyup="setrate"
              />
            </div>
          </div>
          <div class="py-2 px-2" style="background: #fffbe7; margin-top: 20px">
            <div>
              <div class="font-weight:600;font-size:.8rem">ATTENTION:</div>
              <div style="font-size: 0.7rem">
                Min Limit is the minimum amount of the currency(converted to dollar using
                the listed rate) that a user can buy
              </div>
              <div style="font-size: 0.7rem">
                Max Limit is the maximum amount of the currency(converted to dollar using
                the listed rate) that a user can buy at a time
              </div>
            </div>
          </div>

          <button
            class="btn btn-primary"
            style="margin-top: 20px; background: #4705af"
            :disabled="filledsetrate == true ? false : true"
            @click="setrateclick"
          >
            Continue
          </button>
        </div>
      </div>

      <!-- End Set Price -->

      <!-- Set Amount -->
      <div id="setamount" class="modal mynormalads">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Set Total amount for sale</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>

          <div class="form-group" style="margin-top: 30px">
            <label for="formGroupExampleInput"
              >Total Amount(in {{ mycurrency.currency }}) for sale</label
            >
            <input
              type="tel"
              v-model="myamount"
              required
              class="form-control"
              placeholder="Enter Total Amount"
              style="padding: 12px"
              @keyup="checkamoutnt"
            />
            <span style="font-size: 12px; margin-right: 5px"> Available Amount</span>
            <span style="text-transform: uppercase; font-size: 12px"
              >{{ mycurrency.currency }}{{ mycurrency.balance }}</span
            >
            <div style="color: red; font-size: 12px" v-show="error == true">
              Total amount exceeds the available balance
            </div>
          </div>
          <button
            class="btn btn-primary"
            style="margin-top: 20px; background: #4705af"
            :disabled="filledsetamount == true ? false : true"
            @click="setamountclick"
          >
            Continue
          </button>
        </div>
      </div>

      <!-- End Set Amount -->
      <!-- my card details-->
      <div id="mycard" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
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
              <div class="d-flex justify-content-between" style="align-items: center">
                <img src="@/assets/images/cardrilogo.svg" alt="" class="img-fluid" />
                <img src="@/assets/images/mastercard.svg" alt="" class="img-fluid" />
              </div>

              <div style="align-items: center; margin-top: 1rem" class="mycardholder1">
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
            style="color: #4a4e50; text-align: center; font-size: 13px; margin-top: 20px"
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
            &#36;{{ this.balance }}.00
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
            :disabled="clickme2 == true ? true : false"
            @click="freezecard"
          >
            <span style="color: #fff" v-if="clickme2 == false">Freeze Card</span>
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
          <!-- Title -->
        </div>
      </div>
      <!-- End my card details -->
      <!-- To Cardri -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div class="d-flex justify-content-between" style="align-item: center">
            <h3>Transaction Details #{{ selectedtransaction.id }}</h3>

            <span class="close material-icons" @click="closeModal">close</span>
          </div>
          <div
            class="card"
            style="
              border: none;
              margin-top: 30px;
              padding: 0px !important;
              border-bottom: 1px solid #ccc !important;
            "
            v-for="item in myeachtransaction"
            :key="item.id"
          >
            <div
              class="card-body"
              style="padding: 5px !important; margin: 0px !important; cursor: pointer"
            >
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Buyer</span>
                <span style="font-weight: 600; font-size: 14px">{{ item.user }}</span>
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Quantity</span>
                <span style="font-weight: 600; font-size: 14px; text-transform: uppercase"
                  >{{ item.cref }}{{ item.btr }}</span
                >
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Amount Paid</span>
                <span style="font-weight: 600; font-size: 14px"
                  >&#8358;{{ item.amount }}</span
                >
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Remaining Quantity after</span>
                <span style="font-weight: 600; font-size: 14px; text-transform: uppercase"
                  >{{ item.cref }} {{ item.name }}</span
                >
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Naira Balance Before</span>
                <span style="font-weight: 600; font-size: 14px"
                  >&#8358;{{ item.sngnbefore }}</span
                >
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Naira Balance After</span>
                <span style="font-weight: 600; font-size: 14px"
                  >&#8358;{{ item.scurebefore }}</span
                >
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span
                  ><span style="text-transform">{{ item.cref }}</span> available balance
                  before
                </span>
                <span
                  style="font-weight: 600; font-size: 14px; text-transform: uppercase"
                >
                  {{ item.cref }} {{ item.scureafter }}</span
                >
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span
                  ><span style="text-transform">{{ item.cref }}</span> available balance
                  after</span
                >
                <span style="font-weight: 600; font-size: 14px; text-transform: uppercase"
                  >{{ item.cref }}{{ item.sngnafter }}</span
                >
              </div>
              <div class="d-flex justify-content-between align-center mt-2">
                <span>Date</span>
                <span style="font-weight: 600; font-size: 14px">{{
                  moment(item.updated_at).format("DD-MM-YYYY h:ma")
                }}</span>
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
          <div class="row">
            <div class="col-8">
              <div class="market-wallet">
                <!--
                <span
                  @click="pickeachwallet('', -1)"
                  :class="selected == -1 ? 'active' : ''"
                >
                  All
                </span>
                -->
                <span
                  v-for="(item, index) in currency"
                  :key="item"
                  v-show="item.status == '1'"
                  @click="pickeachwallet(item, index)"
                  :class="selected == index ? 'active' : ''"
                >
                  {{ item.currency }}
                </span>
              </div>
            </div>
            <div class="col-4 d-flex justify-content-end">
              <button
                @click="showcardinfo"
                class="btn btn-secondary d-flex justify-content-between"
                style="
                  align-items: center;
                  padding-right: 12px;
                  padding-left: 12px;
                  background: #4a4e50;
                "
              >
                <span style="font-size: 12px; font-weight: 600">Post Ads</span>
              </button>
            </div>
          </div>
        </div>
        <div class="table_section">
          <table>
            <thead>
              <tr>
                <th>Advertisers (Completion rate)</th>
                <th>Price</th>
                <th>Limit/Available</th>
                <th>Trade</th>
              </tr>
            </thead>

            <tbody>
              <tr
                v-for="(it, index) in filterMarket"
                :key="it"
                v-show="filterMarket.length != 0"
              >
                <td>
                  <div class="d-flex" style="align-items: center">
                    <div
                      style="
                        width: 40px;
                        height: 40px;
                        border-radius: 100%;
                        background: #4705af;
                        color: #fff;
                        display: flex;
                        justify-content: center;
                        font-weight: 700;
                        font-size: 17px;
                        text-align: center;
                        align-items: center;
                        margin-right: 20px;
                        margin-left: 20px;
                      "
                    >
                      <span>{{ it.name.slice(0, 1).toUpperCase() }}</span>
                    </div>
                    <span
                      style="
                        color: #1f1f1f;
                        font-size: 1rem;
                        font-weight: 600;
                        text-transform: capitalize;
                      "
                      >{{ it.name }}</span
                    >
                  </div>
                </td>
                <td style="display: flex; justify-content: center; align-items: center">
                  <h4
                    style="
                      font-weight: 600;
                      margin-right: 5px;
                      margin-top: 10px;
                      font-size: 1rem;
                      padding: 20px;
                    "
                  >
                    &#8358;{{ it.amount }}
                  </h4>
                </td>
                <td>
                  <div style="text-align: center; color: #202020; font-size: 0.8rem">
                    Amount:{{ it.dolamount }} {{ it.currency.toUpperCase() }}
                  </div>
                  <div style="text-align: center; color: #202020; font-size: 0.8rem">
                    Limit: &#8358;{{ it.lfrom }} - &#8358;{{ it.lto }}
                  </div>
                  <div style="text-align: center; color: #202020; font-size: 0.8rem">
                    Remaining Amount:
                    <span style="text-transform: uppercase">{{ it.currency }}</span>
                    {{ it.rm }}
                  </div>
                </td>
                <td>
                  <button
                    v-if="username != it.name"
                    @click="showfund(it)"
                    class="btn btn-primary"
                    style="
                      border-radius: 40px;
                      background: #12bd89;
                      padding-right: 25px;
                      padding-left: 25px;
                      font-size: 14px;

                      outline: none;
                      color: #fff;
                      border: none;
                    "
                  >
                    Buy
                  </button>
                  <button
                    v-if="username == it.name"
                    @click="tocardri(it)"
                    class="btn btn-primary"
                    style="
                      border-radius: 40px;
                      background: #4705af;
                      padding-right: 25px;
                      padding-left: 25px;
                      font-size: 14px;

                      outline: none;
                      color: #fff;
                      border: none;
                      margin-left: 5px;
                    "
                  >
                    Transaction {{ nooftrade[index].numoftrade }}
                  </button>
                  <button
                    v-if="username == it.name"
                    @click="cancel(it)"
                    class="btn btn-primary"
                    style="
                      border-radius: 40px;
                      background: red;
                      padding-right: 25px;
                      padding-left: 25px;
                      font-size: 14px;

                      outline: none;
                      color: #fff;
                      border: none;
                      margin-left: 5px;
                    "
                  >
                    Cancel
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
          <div v-show="filterMarket.length == 0" style="margin-top: 40px">
            <div class="w-100 d-flex justify-content-center" style="text-align: center">
              <span style="margin-right: 5px">No</span>

              <span style="text-transform: uppercase; font-weight: 600">
                {{ mymatch }}
              </span>
              <span style="margin-left: 5px"> on the market list. </span>
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
      selected: -1,
      eror: false,
      moment: moment,
      rate: 0,
      amountfrom: 0,
      amountto: 0,
      selectedcurrency: "",
      selectedcountry: "",
      clickme: false,
      clickme2: false,
      selectedtransaction: [],
      filledsetamount: false,

      lname: "",
      myrate1: 0,
      selectedbox: 1,
      myben: [],
      success: false,
      selectedmarket: [],
      fname: "",
      amtnaira: 0,
      amtusd: 0,
      clickme3: false,
      mainloader: false,
      title: "",
      bridgerate: 0,
      bridgecardfees: 0,
      mytitle: "",
      username: "",
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
      mymarket: [],
      error: false,
      expiredate: "",
      loadermessage: "Please wait",
      accountName: "",
      fillData: false,
      benAccountNumber: "",
      bns: false,
      bmessage: "",
      myeachtransaction: [],
      mycurrency: [],
      myrate: "",
      myrate2: "",
      sesid: "",
      nationalId: "",
      filledsetrate: false,
      charges: 0,
      search: "",
      banks: [],
      allcards: [],
      mymatch: "",
      entity: "",
      wallet: "",
      alertstatus: false,
      bvnstatus: true,
      status: "",
      message: "",
      purposeid: "",
      cardnumber: "",
      nooftrade: [],
      balance: "0",
      purposes: [],
      foreignAccountNumber: "",
      foreigncountry: "",
      foreigncurrency: "",
      markets: [],
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
          status: 0,
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
        {
          name: "Kenya  Shilling",
          currency: "KES",
          status: 0,
          balance: 0,
          ledger: 0,
          image: "shilling.svg",
        },
      ],
      billingstate: "",
      billingcountry: "",
      billingcity: "",
      billingxip: "",
      billingaddress: "",
      messageme: "",
    };
  },
  methods: {
    async cancel(it) {
      const data = {
        id: it.id,
      };
      await axios
        .post("api/deleteads", data)
        .then(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success</h4>`,
            text: `Your currency is listed successfully`,
            type: "success",

            width: 300,
          }).then((res) => {
            if (res.isConfirmed) {
              location.reload();
            }
          });
        })
        .catch((e) => {
          this.clickme = false;
          this.filledsetamount = true;
          this.filledsetrate = true;
          if (e.response.status == 422) {
            this.$swal({
              title: `<h4 style='font-size:14x;color:red'>Failed!!!</h4>`,
              text: `${e.response.data.message}`,
              type: "error",
              icon: "error",

              width: 300,
            });
          } else {
            this.$swal({
              title: `<h4 style='font-size:14x;color:red'>Failed!!!</h4>`,
              text: `Failed to cancel ads`,
              type: "error",
              icon: "error",

              width: 300,
            }).then(() => {
              location.reload();
            });
          }
        });
    },
    checkmypost() {
      this.amtnaira = parseFloat(this.amtusd) / parseFloat(this.selectedmarket.amount);
      if (parseFloat(this.amtusd) < parseFloat(this.selectedmarket.lfrom)) {
        this.messageme = `Minimum amount is ${this.selectedmarket.lfrom}`;
        this.clickme3 = true;
      } else if (this.amtusd > parseFloat(this.selectedmarket.lto)) {
        this.clickme3 = true;
        this.messageme = `Maximum amount is ${this.selectedmarket.lto}`;
      } else {
        this.clickme3 = false;
      }
    },
    pickeachwallet(item, selected) {
      this.selected = selected;
      this.mymatch = item.currency;
    },
    checkamoutnt() {
      if (parseFloat(this.myamount) <= parseFloat(this.mycurrency.balance)) {
        this.filledsetamount = true;
        this.error = false;
      } else {
        this.filledsetamount = false;
        this.error = true;
      }
    },
    setrate() {
      if (this.mycurrency != "" && this.myrate != "" && this.myrate2 != "") {
        this.filledsetrate = true;
      } else {
        this.filledsetrate = false;
      }
    },
    setrateclick() {
      var setprice = document.getElementById("setprice");
      setprice.style.display = "none";
      var modal = document.getElementById("mycardinfo");
      modal.style.display = "block";
    },
    setamountclick() {
      var setprice = document.getElementById("setamount");
      setprice.style.display = "none";
      var modal = document.getElementById("mycardinfo");
      modal.style.display = "block";
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
    async fundcard() {
      this.clickme = true;
      if (this.amtusd >= this.selectedmarket.lfrom) {
        const data = {
          id: this.selectedmarket.id,
          amount: this.amtusd,
          m: "web",
          name: this.selectedmarket.name,
          currency: this.selectedmarket.currency,
          rate: this.selectedmarket.amount,
        };
        localStorage.setItem("form", JSON.stringify(data));
        this.$router.push("../transaction/payment/ytrFRwsn74FgeT&");
      } else {
        this.clickme3 = "bad";
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
    tocardcreation() {
      var modals = document.getElementById("myModal");
      modals.style.display = "none";

      var modal = document.getElementById("mycardcreationinfo");
      modal.style.display = "block";
    },
    setamount() {
      var modals = document.getElementById("mycardinfo");
      modals.style.display = "none";

      var modal = document.getElementById("setamount");
      modal.style.display = "block";
    },
    async submitcurrecny() {
      this.clickme = true;
      this.filledsetamount = false;
      this.filledsetrate = false;
      const data = {
        amount: this.myrate1,
        dolamount: this.myamount,
        lfrom: this.myrate,
        lto: this.myrate2,
        currency: this.mycurrency.currency,
      };
      await axios
        .post("api/listcurrency", data)
        .then(() => {
          this.$swal({
            title: `<h4 style='font-size:14x;color:#202020'>Success</h4>`,
            text: `Your currency is listed successfully`,
            type: "success",

            width: 300,
          }).then((res) => {
            if (res.isConfirmed) {
              location.reload();
            }
          });
        })
        .catch((e) => {
          this.clickme = false;
          this.filledsetamount = true;
          this.filledsetrate = true;
          if (e.response.status == 422) {
            this.$swal({
              title: `<h4 style='font-size:14x;color:red'>Failed!!!</h4>`,
              text: `${e.response.data.message}`,
              type: "error",
              icon: "error",

              width: 300,
            });
          } else {
            this.$swal({
              title: `<h4 style='font-size:14x;color:red'>Failed!!!</h4>`,
              text: `Failed to post ads`,
              type: "error",
              icon: "error",

              width: 300,
            }).then(() => {
              location.reload();
            });
          }
        });
    },
    async tocardri(item) {
      this.selectedtransaction = item;
      await axios
        .get(`api/gettrasactiondetails?id=${item.id}`)
        .then((res) => {
          console.log(res);
          this.myeachtransaction = res.data.data.reverse();
        })
        .catch((e) => {
          console.log(e);
        });
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
    },
    toForeign() {
      var modal = document.getElementById("myForeign");
      modal.style.display = "block";
    },
    showfund(item) {
      this.selectedmarket = item;
      var mycard = document.getElementById("mycard");
      mycard.style.display = "none";
      var modal = document.getElementById("myfund");
      modal.style.display = "block";
    },
    setprice() {
      var modal = document.getElementById("mycardinfo");
      modal.style.display = "none";
      var title = document.getElementById("setprice");
      title.style.display = "block";
    },
    async showcarddetails(card) {
      this.eachcard = card;
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
      this.expiredate = this.eachcard.expiry_month + "/" + this.eachcard.expiry_year;
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
      var setamount = document.getElementById("setamount");
      setamount.style.display = "none";

      var modalss = document.getElementById("myaddbeneficiary");
      var modalssss = document.getElementById("myforeignBeneficiary");
      var mycard = document.getElementById("mycard");
      mycard.style.display = "none";
      var setprice = document.getElementById("setprice");
      setprice.style.display = "none";

      modal.style.display = "none";
      modalss.style.display = "none";
      modalsss.style.display = "none";
      modalssss.style.display = "none";
    },

    getselectcountry() {
      this.selectedcountry = this.selectedcurrency.country;
    },
    geteachbeneficiary() {},
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
        this.currency[0].balance = response.data.data.ngn_ld;
        this.currency[0].ledger = response.data.data.ngn_ld;
        this.defaultbalance = response.data.data.ngn_ld;

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
      })
      .catch((e) => {
        console.log(e);
      });
    await axios
      .get("api/getalllisted?all=true")
      .then((res) => {
        console.log(res);
        this.markets = res.data.data.reverse();

        for (var i = 0; i < this.markets.length; i++) {
          this.mymarket.push(this.markets[i].data);

          this.nooftrade.push(this.markets[i]);
          console.log(this.nooftrade);
        }
        this.loading = false;
      })
      .catch((e) => {
        console.log(e);
      });
  },
  computed: {
    filterMarket: function () {
      return this.mymarket.filter((item) => {
        return item.currency.toUpperCase().match(this.mymatch.toUpperCase());
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
.no-border {
  border: 0 !important;
}
.market-wallet {
  overflow-x: auto;
  padding: 5px;
  &::-webkit-scrollbar {
    height: 1px; /* height of horizontal scrollbar ← You're missing this */
    width: 0px; /* width of vertical scrollbar */
    border: 1px solid #d5d5d5;
  }
  span {
    background: #f5f5ff;
    color: #9292a0;
    padding-right: 15px;
    padding-left: 15px;
    padding-top: 5px;
    padding-bottom: 5px;
    margin-right: 10px;
    text-align: center;
    border-radius: 30px;
    font-size: 12px;
    cursor: pointer;
  }
  .active {
    background: #4705af !important;
    color: #fff !important;
  }
}
.table_section {
  max-height: 1050px;
  min-height: 400px;
  overflow: auto;
  margin-top: 30px;
  -webkit-scrollbar: 1px;
  &::-webkit-scrollbar {
    width: 1px;
  }

  table {
    width: 100%;
    table-layout: fixed;
    min-width: 1000px;
    border-collapse: collapse;
    thead {
      th {
        position: sticky;
        top: 0;
        color: #9292a0;
        font-weight: 600;

        font-weight: 400 !important;
      }
    }
    th,
    td {
      border-bottom: 1px solid #dddd;
      padding: 10px 20px;
      word-break: break-all;
      text-align: center;
    }
  }
  ::-webkit-scrollbar {
    height: 0px; /* height of horizontal scrollbar ← You're missing this */
    width: 0px; /* width of vertical scrollbar */
    border: none;
  }
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

/* general styling */
</style>
