<template>
  <div class="container-xxl" style="background: #fdfdfd">
    <nav class="navbar navbar-expand-md" style="">
      <div class="container" style="background: #fdfdfd">
        <router-link class="navbar-brand" to="/">
          <img src="./assets/images/logo.svg" width="120" alt="cardri" />
        </router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#main-nav"
          aria-controls="main-nav"
          aria-expanded="false"
          aria-label="Toglle Navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div
          class="collapse navbar-collapse justify-content-end align-center"
          id="main-nav"
        >
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link to="/" class="nav-link">Home</router-link>
            </li>

            <li class="nav-item d-flex align-items-center myproduct">
              <a class="nav-link" href="#transact">Products</a>
              <span class="material-icons">expand_more</span>
              <!--
              <div class="mybarnavitem myup d-none myproductdown">
                <div class="row justify-content-between">
                  <div class="col-md-6 col-lg-6">
                    <ul style="list-style: none">
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/bank.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>Send & Receive Money</h4>
                          <p>
                            Send & Receive Payment from anyone in the world within a
                            minutes.
                          </p>
                        </div>
                      </li>
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/swap.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>Swap Fund</h4>
                          <p>Swap fund seamlessly</p>
                        </div>
                      </li>
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/bill.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>Bill Payment</h4>
                          <p>Pay elsectricity, TV subscription, data and more bills</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  <div class="col-md-6 col-lg-6">
                    <ul style="list-style: none">
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/p2p.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>P2P Market</h4>
                          <p>
                            Send & Receive Payment from anyone in the world within a
                            minutes.
                          </p>
                        </div>
                      </li>
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/link3.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>Payment Link</h4>
                          <p>
                            Send & Receive Payment from anyone in the world within a
                            minutes.
                          </p>
                        </div>
                      </li>
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/virtual.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>Virtual Cards</h4>
                          <p>
                            Send & Receive Payment from anyone in the world within a
                            minutes.
                          </p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              -->
            </li>

            <li class="nav-item d-flex align-items-center mylegals">
              <span class="nav-link">Legal</span>
              <span class="material-icons">expand_more</span>

              <div class="mybarnavitem mylegal d-none mylegalsdown">
                <div class="row justify-content-between">
                  <div class="col">
                    <ul style="list-style: none">
                      <li class="">
                        <a
                          href="https://cardri.ng/home/terms.html"
                          style="text-decoration: none"
                        >
                          <div style="overflow: hidden" class="mytextlg">
                            <h4 style="font-size: 1rem">Terms of Use</h4>
                          </div>
                        </a>
                      </li>
                      <li class="">
                        <a
                          href="https://cardri.ng/home/privacy.html"
                          style="text-decoration: none"
                        >
                          <div style="overflow: hidden" class="mytextlg">
                            <h4 style="font-size: 1rem">Privacy Policy</h4>
                          </div>
                        </a>
                      </li>
                      <li class="">
                        <a
                          href="https://cardri.ng/home/cookies.html"
                          style="text-decoration: none"
                        >
                          <div style="overflow: hidden" class="mytextlg">
                            <h4 style="font-size: 1rem">Cookies</h4>
                          </div>
                        </a>
                      </li>
                      <li class="">
                        <a
                          href="https://cardri.ng/home/aml.html"
                          style="text-decoration: none"
                        >
                          <div style="overflow: hidden" class="mytextlg">
                            <h4 style="font-size: 1rem">AML policy</h4>
                          </div>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            <!--

            <li class="nav-item d-flex align-items-center mysupport">
              <span class="nav-link">Support</span>
              <span class="material-icons">expand_more</span>

              <div class="mybarnavitem mylegal d-none mysupportsdown">
                <div class="row justify-content-between">
                  <div class="col">
                    <ul style="list-style: none">
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/contact.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>Contact Us</h4>
                          <p>How can we help? Get in touch,please</p>
                        </div>
                      </li>
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/help.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>Quick Help</h4>
                          <p>
                            Get quick response to all your questions and inquiry about
                            cardri
                          </p>
                        </div>
                      </li>
                      <li class="">
                        <div style="float: left">
                          <div style="position: relative">
                            <img
                              src="@/assets/images/ellipse.svg"
                              alt=""
                              style="margin-right: 15px"
                            />
                            <img
                              src="@/assets/images/faq.svg"
                              alt=""
                              style="position: absolute; top: 8px; left: 8px"
                            />
                          </div>
                        </div>
                        <div style="overflow: hidden" class="mytextlg">
                          <h4>FAQ</h4>
                          <p>Frequently asked question</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </li>
            -->

            <li class="nav-item ms-2 d-md-inline">
              <router-link
                class="btn btn-secondary display-2 text-xl pl-2 pr-2 py-2 myloginreg"
                style="
                  font-size: 12px;
                  font-weight: 600;
                  background: #f5f5ff;
                  color: #4705af;
                  border: none;
                  padding-left: 20px;
                  padding-right: 20px;
                "
                to="/auth/login"
                >Login</router-link
              >
            </li>
            <li class="nav-item ms-2 d-md-inline">
              <router-link
                class="btn display-2 w-sm-100 myloginreg"
                style="
                  font-size: 12px;
                  font-weight: 600;
                  background: #4705af;
                  color: #fff;
                  padding-left: 20px;
                  padding-right: 20px;
                "
                to="/auth/register"
                >Sign Up</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  <section id="intro" class="myintro">
    <div class="container py-2 mt-5">
      <div class="row position-relative">
        <div class="col-md-6 col-lg-6 mytext-digital mlgdigital">
          <h3 class="text-md-left text-left">
            Digital wallet for seamless cross-border payments.
          </h3>
          <p>
            A cross-border digital wallet to send and receive payment worldwide,
            swap and hold foreign currencies, buy and sell currencies using P2P
            and creation of virtual dollar cards.
          </p>
          <div class="d-flex justify-content-start linkapp">
            <a href="" class="nav-link" style="margin-right: 10px">
              <img
                src="@/assets/images/download_appstore_grey.svg"
                alt=""
                class="img-fluid"
              />
            </a>
            <a href="https://play.google.com/store/apps/details?id=com.cardri.com" class="nav-link">
              <img
                src="@/assets/images/download_playstore_grey.svg"
                alt=""
                class="img-fluid"
              />
            </a>
          </div>
        </div>
        <div
          class="col-md-6 col-lg-6 mytext-digital myhomebig"
          style="position: absolute; right: 0; margin-right: -100px"
        >
          <!--
            <div class="main" style="display: flex">
              <div class="">
                <img src="@/assets/images/phone.svg" alt="" />
              </div>
              <img src="@/assets/images/p2.svg" alt="" style="margin-top: -100px" />
              <img
                src="@/assets/images/small.svg"
                alt=""
                style="
                  display: flex;
                  overflow: hidden;
                  z-index: -1;
                  margin-left: -290px;
                  margin-top: -260px;
                "
              />
              <img
                src="@/assets/images/big.svg"
                alt=""
                style="margin-left: -162px; overflow: hidden; z-index: -200"
              />
            </div>
            -->
          <div
            style="
              position: absolute;
              top: 0;
              margin-top: -400px;
              display: flex;
              justify-content: right;
            "
            class="myimgcon"
          >
            <img src="@/assets/images/bighome.jpg" alt="" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    id="transact"
    style="background: #f5f5ff; padding-top: 20px; margin-top: 400px"
    class="mlnb"
  >
    <div class="container py-2 mt-5" style="padding-bottom: 0px !important">
      <div class="row">
        <div
          class="col-md-6 col-lg-6 mytext-digital"
          data-aos="slide-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="600"
          data-aos-anchor-placement="top-center"
        >
          <h3 class="text-md-left text-left">
            Transact in global currency pair
          </h3>
          <p>
            Seamlessly exchange and hold global currencies right from your
            Cardri wallet at the most cheapest rate ever. Buy and sell foreign
            currencies using Cardri peer to peer.
          </p>
          <router-link
            class="linkrouter"
            to="/auth/register"
            type="button"
            style="
              align-items: center;
              display: flex;
              color: #4705af;
              text-decoration: none;
              font-weight: 600;
            "
          >
            <span>Get started with cardri </span>
            <span class="material-icons">arrow_forward</span>
          </router-link>

          <h4 class="available">Available Wallet</h4>
          <div class="d-flex justify-content-start mycurrency">
            <img
              src="@/assets/images/NG.svg
              
            "
              alt=""
              width="50px"
            />
            <img
              src="@/assets/images/eu.svg
            "
              alt=""
              width="50px"
            />
            <img
              src="@/assets/images/US.svg
            "
              alt=""
              width="50px"
            />
            <img
              src="@/assets/images/GB.svg
            "
              alt=""
              width="50px"
            />
          </div>
        </div>
        <div class="col-md-6 col-lg-6">
          <div
            data-aos="fade-up"
            data-aos-anchor-placement="top-center"
            class="w-100 lgmobile"
            style="
              display: flex;
              justify-content: center;
              position: relative;
              padding-top: -20px;
            "
          >
            <img
              src="@/assets/images/mobile2.svg"
              alt=""
              class="img-fluid"
              style="z-index: 10000"
            />

            <img
              src="@/assets/images/down.svg"
              alt=""
              class="img-fluid mytransact"
              style="position: absolute; bottom: 0"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section
    id="intro"
    style="background: #ffffff; padding-top: 20px; padding-bottom: 25px"
  >
    <div class="container py-2 mt-5">
      <div class="row">
        <div class="col-md-6 col-lg-6">
          <div
            class="w-100 lgmobile"
            style="
              display: flex;
              justify-content: center;
              position: relative;
              padding-top: -20px;
            "
            data-aos="flip-left"
            data-aos-delay="100"
          >
            <img
              src="@/assets/images/mobile3.svg"
              alt=""
              class="img-fluid"
              style="z-index: 10000"
            />

            <img
              src="@/assets/images/circle.svg"
              alt=""
              class="img-fluid mytransact"
              style="position: absolute; bottom: 0"
            />
          </div>
        </div>
        <div
          class="col-md-6 col-lg-6 mytext-digital"
          data-aos="flip-right"
          data-aos-delay="100"
        >
          <h3 class="text-md-left text-left">
            Free Transfer & Low Cross-border Rates
          </h3>
          <p>
            Enjoy free local transfers and low exchange rate for cross-border
            payments. Pay directly to bank accounts of suppliers, vendors and
            business partners in more than 90 countries.
          </p>
          <router-link
            class="linkrouter"
            to="/auth/register"
            type="button"
            style="
              align-items: center;
              display: flex;
              color: #4705af;
              text-decoration: none;
              font-weight: 600;
            "
          >
            <span>Get started with cardri </span>
            <span class="material-icons">arrow_forward</span>
          </router-link>
        </div>
      </div>
    </div>
  </section>
  <section id="intro" style="background: #f5f5ff; padding-top: 20px">
    <div class="container py-2 mt-5" style="padding-bottom: 0px !important">
      <div class="row">
        <div
          class="col-md-6 col-lg-6 mytext-digital"
          data-aos="slide-right"
          data-aos-delay="100"
        >
          <h3 class="text-md-left text-left">
            Get your dollar virtual card for global payment
          </h3>
          <p>
            Create a 3D secured virtual dollar card to shop worldwide, works on
            almost all payments platforms, including crypto platforms.
          </p>
          <router-link
            class="linkrouter"
            to="/auth/register"
            type="button"
            style="
              align-items: center;
              display: flex;
              color: #4705af;
              text-decoration: none;
              font-weight: 600;
            "
          >
            <span>Get started with cardri </span>
            <span class="material-icons">arrow_forward</span>
          </router-link>
        </div>
        <div class="col-md-6 col-lg-6">
          <div
            class="w-100 lgmobile"
            style="
              display: flex;
              justify-content: start;
              position: relative;
              padding-top: -20px;
            "
            data-aos="fade-in"
            data-aos-delay="100"
          >
            <img
              src="@/assets/images/mobilecard.svg"
              alt=""
              class="img-fluid mymobilecard"
              style="z-index: 10000; margin-left: 100px; margin-top: -20px"
            />

            <img
              src="@/assets/images/circleright.svg"
              alt=""
              class="img-fluid mytransact mycirlerigt"
              style="position: absolute; right: 0; top: 0; margin-right: -110px"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="more" style="background: #ffffff" class="p-2 moresection">
    <div
      class="container py-2 mt-5 mymore"
      data-aos="fade-in"
      data-aos-delay="100"
    >
      <h3>And So Much More...</h3>
      <div class="row justify-content-between" style="margin-top: 30px">
        <div
          class="col-md-4 col-lg-4 mm"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <div class="card" style="background: #f5f5ff; border: none">
            <div class="card-body">
              <img src="@/assets/images/0.svg" alt="" />
              <div class="mydomeedetails">
                <h4>Link</h4>
                <p>
                  Set a product or subscription by sharing a link for customers.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4 mm"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <div
            class="card"
            style="background: rgba(18, 189, 137, 0.1); border: none"
          >
            <div class="card-body">
              <img src="@/assets/images/1.svg" alt="" />
              <div class="mydomeedetails">
                <h4>Cable Tv</h4>
                <p>Pay for cable tv subscription Dstv, Gotv and more.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4 mm"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <div
            class="card"
            style="background: rgba(0, 124, 238, 0.1); border: none"
          >
            <div class="card-body">
              <img src="@/assets/images/2.svg" alt="" />
              <div class="mydomeedetails">
                <h4>Mobile Data</h4>
                <p>Buy mobile data subscription and get connected.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4 mm"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <div class="card" style="background: #f2eeff; border: none">
            <div class="card-body">
              <img src="@/assets/images/3.svg" alt="" />
              <div class="mydomeedetails">
                <h4>Airtime</h4>
                <p>Buy airtime for self and others in seconds.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4 mm"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <div class="card" style="background: #f5f5ff; border: none">
            <div class="card-body">
              <img src="@/assets/images/4.svg" alt="" />
              <div class="mydomeedetails">
                <h4>Electriciy</h4>
                <p>Pay for electricity subscription with your meter code.</p>
              </div>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4 mm"
          data-aos="fade-in"
          data-aos-delay="100"
        >
          <div
            class="card"
            style="background: rgba(249, 115, 22, 0.1); border: none"
          >
            <div class="card-body">
              <img src="@/assets/images/5.svg" alt="" />
              <div class="mydomeedetails">
                <h4>Betting</h4>
                <p>Fund your bet account with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="more" style="background: #ffffff" class="p-2 moresection">
    <div class="container py-2 mt-5 mymore">
      <h3 data-aos="fade-in" data-aos-delay="100">
        Ready for cardri experience ?
      </h3>
      <p style="text-align: center" data-aos="fade-in" data-aos-delay="150">
        There’s so much we have for you, Get started in 3 easy steps
      </p>
      <div class="row justify-content-between" style="margin-top: 30px">
        <div
          class="col-md-4 col-lg-4 mystep"
          data-aos="fade-in"
          data-aos-delay="200"
        >
          <div
            class="card"
            style="
              background: #4705af;
              color: white;
              border-radius: 20px !important;
            "
          >
            <div class="card-body">
              <div class="d-flex justify-content-center" style="margin: 20px">
                <img src="@/assets/images/1.svg" alt="" />
              </div>
              <h5 style="text-align: center; font-weight: 600">
                Create your account
              </h5>
              <p style="text-align: center; font-size: 12px">
                Create a new account or Log In to your existing profile via our
                mobile or web app.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4 mystep"
          data-aos="fade-in"
          data-aos-delay="220"
        >
          <div
            class="card"
            style="
              background: #4705af;
              color: white;
              border-radius: 20px !important;
            "
          >
            <div class="card-body">
              <div class="d-flex justify-content-center" style="margin: 20px">
                <img src="@/assets/images/1.svg" alt="" />
              </div>
              <h5 style="text-align: center; font-weight: 600">
                Complete your KYC
              </h5>
              <p style="text-align: center; font-size: 12px">
                Verify your account by uploading the necessary information, and
                make your account more secure.
              </p>
            </div>
          </div>
        </div>
        <div
          class="col-md-4 col-lg-4 mystep"
          data-aos="fade-in"
          data-aos-delay="250"
        >
          <div
            class="card"
            style="
              background: #4705af;
              color: white;
              border-radius: 20px !important;
            "
          >
            <div class="card-body">
              <div class="d-flex justify-content-center" style="margin: 20px">
                <img src="@/assets/images/1.svg" alt="" />
              </div>
              <h5 style="text-align: center; font-weight: 600">
                Pay and Get paid
              </h5>
              <p style="text-align: center; font-size: 12px">
                Start exploring your gateway to fast and affordable cross-border
                payments
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section id="more" style="background: #f5f5ff" class="p-2 moresection">
    <div class="container py-2 mt-5 mymore myapp">
      <h3>Download the Mobile App</h3>
      <p style="text-align: center">
        It takes just a minute to get with Cardri, Download now to embark on a
        hustle free financial journey
      </p>
      <div class="downloadapp">
        <img
          src="@/assets/images/download_appstore_grey.svg"
          alt=""
          class="img-fluid"
        />
        <a href="https://play.google.com/store/apps/details?id=com.cardri.com">
        <img
          src="@/assets/images/download_playstore_grey.svg"
          alt=""
          class="img-fluid"
        />
        </a>
      </div>
    </div>
  </section>
  <footer id="more" style="background: #201f50">
    <div class="container py-2 mt-5 mymore myapp">
      <div class="row justify-content-between">
        <div class="col-md-3 col-lg-3">
          <div class="logo2">
            <img src="@/assets/images/logo2.svg" alt="" />
          </div>
          <p style="text-align: left; color: #fff">
            A cross-border digital wallet to send and receive payment worldwide,
            swap and hold foreign currencies, buy and sell currencies using P2P
            and creation of virtual dollar cards.
          </p>
        </div>

        <div class="col-md-2 col-lg-2 mycardri">
          <h5>Cardri</h5>
          <ul class="mylist">
            <li>
              <router-link to="/"> Home </router-link>
            </li>
            <li>
              <router-link to="/"> FAQ </router-link>
            </li>
            <li>
              <router-link to="/"> Contact Us </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-lg-2 mycardri">
          <h5>Contact us</h5>
          <ul class="mylist">
            <li>
              <a href="mailto:help@cardri.ng">help@cardri.ng</a>
            </li>
            <li>
              <router-link to="/"> Whatsapp: 08022486100 </router-link>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-lg-2 mycardri">
          <h5>LEGAL</h5>
          <ul class="mylist">
            <li>
              <a href="https://cardri.ng/home/terms.html"> Term of Use </a>
            </li>
            <li>
              <a href="https://cardri.ng/home/privacy.html"> Privacy Policy </a>
            </li>
          </ul>
        </div>
        <div class="col-md-2 col-lg-2 mycardri">
          <h5>Social Media</h5>
          <ul
            style="
              list-style: none;
              display: flex;
              justify-content: space-between;
              gap: 2px;
            "
          >
            <li>
              <a
                href="https://www.facebook.com/cardrifinance"
                style="color: #fff !important; text-decoration: none"
              >
                <i class="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/cardrifinance"
                style="color: #fff !important; text-decoration: none"
              >
                <i class="fa fa-instagram"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/cardrifinance/"
                style="color: #fff !important; text-decoration: none"
              >
                <i class="fa fa-linkedin"></i>
              </a>
            </li>
            <li>
              <a
                href="https://www.twitter.com/cardrifinance"
                style="color: #fff !important; text-decoration: none"
              >
                <i class="fa fa-twitter"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <hr style="color: #fff" />
    <div style="text-align: center; font-size: 11px; color: #fff">
      &copy; Cardri Technologies and Services Limited
    </div>
  </footer>
</template>
<script>
import AOS from "aos";
export default {
  name: "myHome",
  mounted() {
    AOS.init();
  },
};
</script>
<style scoped lang="scss">
body {
  background: #fdfdfd;
}

.container {
  ul {
    li {
      font-weight: 600;
      color: #4a4e50;
      font-size: 14px;
      margin-right: 20px;
      .material-icons {
        display: inline-block;
      }
    }
  }
}
#intro,
#transact {
  .mytext-digital {
    h3 {
      font-weight: 700;
      font-size: 2.9rem;
      color: #201f50;
      @media (max-width: 750px) {
        font-size: 1.3rem;
        word-spacing: 1;
        text-align: center;
        word-break: normal;
        padding: 2rem;
      }
    }
    .mycurrency {
      img {
        margin-right: 20px;
        @media (max-width: 750px) {
          margin-right: 10px;
          width: 70px;
        }
      }
    }

    .available {
      font-size: 14px;
      font-weight: 600;
      color: #4a4e50;
      margin-top: 30px;
      margin-bottom: 30px;
      @media (max-width: 750px) {
        font-size: 12px;
      }
    }
    .mytransact {
      position: absolute;
      z-index: -100;
    }

    p {
      margin-top: 30px;
      margin-bottom: 30px;
      @media (max-width: 750px) {
        text-align: center;
        font-size: 1rem;
      }
    }
  }
  .linkapp {
    margin-bottom: 20px;
    @media (max-width: 750px) {
      display: flex;
      justify-content: center !important;
    }
    img {
      @media (max-width: 750px) {
        width: 100px;
      }
    }
  }
}
.lgmobile {
  @media (max-width: 750px) {
    margin-top: 60px;
  }
}
.moresection {
  margin-top: 30px;
  .mymore {
    h3 {
      font-weight: 700;
      font-size: 2.9rem;
      color: #201f50;
      text-align: center;
      @media (max-width: 750px) {
        font-size: 1.3rem;
        word-spacing: 1;
        text-align: center;
        word-break: normal;
        padding: 2rem;
      }
    }
    img {
      float: left;
      margin-right: 20px;
    }
    .mydomeedetails {
      overflow: hidden;
      h4 {
        color: #201f50;
        font-weight: 600;
        font-size: 16px;
      }
      p {
        color: #4a4e50;
        font-size: 14px;
        text-align: left;
      }
      .card {
        line-height: 30;
        padding: 30px;
      }
    }
  }
}
.mm {
  margin-top: 30px;
}
.card-body {
  padding: 30px;
}
.mysmall {
  display: flex;
  overflow: hidden;
  z-index: -1;
  margin-left: -300px;
  margin-top: -200px;
}
.netwoek {
  margin-top: 10%;
}
.mybig {
  margin-left: -162px;
  overflow: hidden;
  z-index: -200;
}
.mystep {
  .card {
    @media (max-width: 750px) {
      margin-top: 20px;
    }
  }
}
.myapp {
  p {
    margin: 0px auto;

    width: 100%;
    max-width: 500px;

    @media (max-width: 750px) {
      padding: 0px;
    }
  }
  .downloadapp {
    display: flex;
    justify-content: center;
    max-width: 300px;
    width: 100%;
    margin: 25px auto;
  }
}
footer {
  padding-right: 100px;
  padding-left: 100px;
  padding-top: 30px;
  padding-bottom: 30px;
  @media (max-width: 750px) {
    padding: 10px;
  }
  .logo2 {
    margin-bottom: 20px;
    @media (max-width: 750px) {
      display: flex;
      justify-content: center;
    }

    img {
      @media (max-width: 750px) {
        width: 100px;
        margin: 0px auto;
      }
    }
  }
  p {
    font-size: 14px;
    @media (max-width: 750px) {
      font-size: 12px;
      text-align: center;
    }
  }
  .mycardri {
    h5 {
      color: #929596;
      font-weight: 600;
      font-size: 15px;
      text-transform: uppercase;
      text-align: left;
      @media (max-width: 750px) {
        margin: 20px 0px;
        text-align: center;
      }
    }
    ul {
      list-style: none;
      li {
        text-align: left;
        margin-left: -30px;
        @media (max-width: 750px) {
          text-align: center;
        }
        a {
          color: #fff;
          font-weight: 600;
          text-decoration: none;
        }
      }
    }
    p {
      color: #fff;
      font-weight: 600;
      font-size: 16px;
      @media (max-width: 750px) {
        text-align: center;
      }
    }
  }
}
main {
  display: flex;
}
.mysmall {
  display: flex;
  overflow: hidden;
  z-index: -1;
  margin-left: -270px;
  margin-top: -550px;
}
.netwoek {
  margin-top: -120px;
}
.mybig {
  margin-left: -152px;
  overflow: hidden;
  z-index: -200;
  margin-top: -150px;
}
.myintro {
  margin-top: 400px;
  margin-bottom: 200px;
  @media (max-width: 750px) {
    margin-top: 20px;
    margin-bottom: 0;
  }
}
.mlgdigital {
  margin-top: -250px;
  @media (max-width: 750px) {
    margin-top: 0px;
  }
}
.myloginreg {
  @media (max-width: 750px) {
    width: 100%;
    margin-top: 10px;
    padding: 15px;
    margin-bottom: 10px;
  }
}
#main-nav {
  li {
    cursor: pointer;
    @media (max-width: 750px) {
      justify-content: space-between;
    }
  }
}

.mybarnavitem {
  position: absolute;
  padding: 10px;
  background: #fff;
  z-index: 10000;
  width: 100%;
  max-width: 500px;
  box-shadow: 0px 3px 14px 3px rgba(71, 5, 175, 0.12);
  border-radius: 10px;
  margin-top: 5px;
  top: 10;
  li {
    margin-left: -20px;
    h4 {
      color: #202020;
      font-size: 10px;
    }
    p {
      font-size: 8px;
      color: #4a4e50;
      font-weight: 400;
    }
  }

  @media (max-width: 750px) {
    margin-top: 10px;
    position: relative;
    box-shadow: none;
    margin: 10px auto;
  }
}
.mylegal {
  width: 100%;
  max-width: 250px !important;
  margin-top: 180px;
  @media (max-width: 750px) {
    margin-top: 10px;
  }
}
.myup {
  margin-top: 250px;
  @media (max-width: 750px) {
    margin-top: 10px;
  }
}
.myproduct {
  &:hover {
    .myproductdown {
      display: block !important;
      transition: 2s ease-out;
    }
    .material-icons {
      transform: rotateY(90deg) scaleX(-1);
      transition: 0.2s ease-in;
    }
  }
}
.mylegals {
  &:hover {
    .mylegalsdown {
      display: block !important;
      transition: 2s ease-in;
    }
    .material-icons {
      transform: rotateY(90deg) scaleX(-1);
      transition: 0.2s ease-out;
    }
  }
}
.mysupport {
  &:hover {
    .mysupportsdown {
      display: block !important;
      transition: 2s ease-in;
    }
    .material-icons {
      transform: rotateY(90deg) scaleX(-1);
      transition: 0.2s ease-out;
    }
  }
}
.mycirlerigt {
  @media (max-width: 750px) {
    margin: 0px !important;
  }
}
.mymobilecard {
  @media (max-width: 750px) {
    margin: 0px !important;
  }
}
.myhomebig {
  @media (max-width: 750px) {
    position: relative !important;
    margin-right: 0px !important;
  }
  .myimgcon {
    @media (max-width: 750px) {
      margin-top: 0px !important;
      position: relative !important;
      margin-right: -11px !important;
    }
  }
}
.mlnb {
  @media (max-width: 750px) {
    margin-top: 0px !important;
  }
}
.linkrouter {
  @media (max-width: 750px) {
    justify-content: center;
    line-height: 30px;
  }
}
</style>
