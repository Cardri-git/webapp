<template>
  <div class="app w-100 container-xxl" style="padding: 0px !important">
    <sidebar :firstname="fname" :lastname="lname" :username="username" />
    <div class="w-100">
      <!-- End my card details -->
      <!-- To Cardri -->
      <div id="myModal" class="modal">
        <!-- Modal content -->
        <div class="modal-content">
          <div
            class="d-flex justify-content-between"
            style="align-item: center"
          >
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
                v-if="selectedItem.type == 2"
              >
                <span>Plan</span>
                <span
                  style="
                    font-weight: 600;
                    font-size: 14px;
                    text-transform: lowercase;
                  "
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
                  v-if="selectedItem.type != 17 && selectedItem.type != 18"
                  >&#8358;{{ selectedItem.amount }}</span
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
        <div
          class="w-100 p-2 d-flex justify-content-between align-items-center"
        >
          <div style="max-width: 450px; width: 100%; display: flex; gap: 20px">
            <div class="form-group">
              <input
                type="search"
                class="form-control border"
                style="
                  background: #fff;
                  font-size: 12px !important;
                  font-weight: 400 !important;
                "
                v-model="search"
                placeholder="Search Reference"
              />
            </div>
          </div>
          <div class="d-none d-lg-block d-md-block">
            <div v-if="loading === false">
              <h2>&#8358;{{ main_balance / 100 }}</h2>
            </div>
            <div v-else>
              <span>fetching balance...</span>
            </div>
          </div>
        </div>
        <div class="p-2">
          <div class="row d-flex h-100">
            <div class="col-lg-4 col-md-4 p-0">
              <div class="card p-0 border-0">
                <div class="card-body">
                  <div class="w-100 d-flex justify-content-center">
                    <div
                      style="
                        width: 80px;
                        height: 80px;
                        border-radius: 100%;
                        border: 1px solid rgb(71, 5, 175);
                        background: rgb(71, 5, 175);
                        text-align: center;
                        font-weight: 500;
                        font-size: 2rem;
                        color: #fff;
                        align-items: center;
                        justify-content: center;
                        display: flex;
                      "
                    >
                      {{ split }}
                    </div>
                  </div>
                  <div
                    class="w-100 text-center"
                    style="text-transform: uppercase; line-height: 30px"
                  >
                    <h2 class="my-3" style="font-size:1.5rem">{{ customer.name }}</h2>
                  </div>
                  <div
                    class="w-100"
                    style="
                      line-height: 50px;
                      display: flex;
                      gap: 10px;
                      align-items: center;
                      border-bottom: 1px solid #ccc;
                    "
                  >
                    <span class="material-icons">account_balance </span>
                    <span>{{ customer.bankname }} </span>
                  </div>
                  <div
                    class="w-100"
                    style="
                      line-height: 50px;
                      display: flex;
                      gap: 10px;
                      align-items: center;
                      border-bottom: 1px solid #ccc;
                    "
                  >
                    <span class="material-icons">badge</span>
                    <span> {{ customer.bank }} </span>
                  </div>
                  <div
                    class="w-100"
                    style="
                      line-height: 50px;
                      display: flex;
                      gap: 10px;
                      align-items: center;
                      border-bottom: 1px solid #ccc;
                    "
                  >
                    <span class="material-icons"> person </span>
                    <span> {{ customer.accountName }} </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="col-lg-8 col-md-8">
              <div class="card">
                <div class="card-body">
                  <div
                    style="
                      display: flex;
                      justify-content: space-between;
                      align-items: center;
                    "
                  >
                    <div class="display:flex;flex-direction:column">
                      <h5 style="font-size: 2rem">Balance</h5>
                      <div v-if="loading === false">
                        <div style="letter-spacing: 2%">
                          &#8358;{{ main_balance / 100 }}
                        </div>
                      </div>
                      <div v-else>
                        <span>fetching balance...</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="w-100 p-2">
                <h3
                  style="font-size: 14px; color: rgb(145, 145, 145)"
                  class="mb-3 mt-3"
                >
                  Transactions
                </h3>
                <div class="table_section" id="content">
                  <div v-if="loading == false" class="w-100">
                    <div class="" v-if="filtertransaction.length > 0">
                      <table>
                        <thead>
                          <tr>
                            <th>Reference</th>

                            <th>Amount</th>
                            <th>Beneficiary/sender</th>
                            <th>Balance After</th>
                            <th>Sender</th>
                            <th>Naration</th>

                            <th>Account</th>
                            <!--  <th>Status</th> -->
                            <th>Date</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr v-for="item in filtertransaction" :key="item.id">
                            <td>{{ item.ReferenceNumber }}</td>
                            <td>&#8358;{{ item.Amount / 100 }}</td>
                            <td>{{ item.BeneficiaryName }}</td>
                            <td>&#8358;{{ item.BalanceAfter / 100 }}</td>
                            <td>{{ item.SenderName }}</td>
                            <td>{{ item.Narration }}</td>
                            <td>{{ item.AccountNumber }}</td>
                            <!--
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
                                  item.Status == true
                                    ? 'background: #12BD89;padding-left:12px;padding-right:12px'
                                    : 'background:#F82738;padding-left:15px;padding-right:16px'
                                "
                                >{{
                                  item.Status == true ? "Success" : "Failed"
                                }}</span
                              >
                            </td>
                            -->
                            <td>
                              {{
                                moment(item.RealDate).format("DD-MM-YYYY h:ma")
                              }}
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                    <div
                      v-else
                      style="
                        width: 100%;
                        text-align: center;
                        font-weight: 500;
                        font-size: 14px;
                        line-height: 30px;
                      "
                    >
                      No Transaction Record
                    </div>
                  </div>

                  <div v-else>
                    <Loader />
                  </div>
                </div>
                <div
                  class="w-100 d-flex justify-content-center align-items-center"
                  v-if="records >= 20"
                >
                  <pagination
                    v-model="page"
                    :records="records"
                    :per-page="20"
                    @paginate="myCallback(page)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
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
import Pagination from "v-pagination-3";

export default {
  name: "myCustomer",
  components: {
    sidebar,
    headers,
    Loader,
    Pagination,
  },
  data() {
    return {
      showdrop: false,
      selecteds: "",
      loading: true,
      main_balance: 0,
      ledger: 0,
      mainbalance: 0,
      selectedItem: [],
      split: "",
      lname: "",
      page: 1,
      fname: "",
      username: "",
      moment: moment,
      transaction: [],
      customer: [],
      search: "",
      to: "",
      from: "",
    };
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
          return item.InstrumentNumber.match(this.search);
        }
      });
    },
  },

  methods: {
    async myCallback(page) {
      await axios
        .get(
          `api/getkudatransactions?trackingReference=${this.$route.params.id}&pageSize=20&pageNumber=${page}`
        )
        .then((res) => {
          this.transaction = res.data.Data.PostingsHistory;
        })
        .catch((err) => {
          console.log(err);
        });
    },
    todetails(item) {
      var modals = document.getElementById("myModal");
      modals.style.display = "block";
      this.selectedItem = item;
    },
    closeModal() {
      var modals = document.getElementById("myModal");
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
    this.customer = JSON.parse(localStorage.getItem("document"));
    //  var customerName = this.customer.name;
    /*
    get(customerName);
    function get(customerName) {
      let str = " ";
      let temp = "";

      for (let i = customerName.length - 1; i > 0; i--) {
        if (customerName[i].match(/[a-zA-Z]/) && customerName[i - 1] === " ") {
          temp += customerName[i];
        }
        str += customerName[0];
        for (let i = temp.length - 1; i >= 0; i--) {
          str += temp[i];
          console.log(str);
        }
      }
    }
    */
    var match = this.customer.name.match(/\b(\w)/g);
    var joinChar = match.join("");
    this.split = joinChar;

    await axios
      .get("api/getdatils")
      .then((response) => {
        this.mainbalance = response.data.data.ngn_ld;
        this.ledger = response.data.data.ngn_b;
        this.username = response.data.data.username;
        this.fname = response.data.data.fname;
        this.lname = response.data.data.lname;
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
      .get(`api/getkudabalance?trackingReference=${this.$route.params.id}`)
      .then((res) => {
        this.main_balance = res.data.Data.AvailableBalance;
      })
      .catch((err) => {
        console.log(err);
      });

    await axios
      .get(
        `api/getkudatransactions?trackingReference=${this.$route.params.id}&pageSize=20&pageNumber=1`
      )
      .then((res) => {
        this.transaction = res.data.Data.PostingsHistory;
        this.records = res.data.Data.TotalRecordInStore;
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
        margin-top: 5px;
        margin-bottom: 10px;
        color: #fff;
        @media (max-width: 750px) {
          font-size: 1.3rem !important;
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
  height: 500px;
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
      font-size: 12px !important;
    }
    tr:hover td {
      color: #0298cf;
      cursor: pointer;
      background: #f5f9fc;
      font-size: 12px;
    }
  }
}
input {
  background: #f5f5f5;

  outline: none;
  border-radius: 5px !important;
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 8px;

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
.mysearchicon {
  @media (max-width: 750px) {
    display: none;
  }
}
</style>
    