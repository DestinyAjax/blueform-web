<template>
    <div id="home-page">
      <nav-menu></nav-menu>
      <section id="first-section">
          <div class="container">
            <div class="row">
              <div class="col-md-6 col-xs-12 col-sm-12">
                <div class="top-content">
                  <h1>Modern online and offline data collection for Africa</h1>
                  <p class="subtitle">
                    Blueform helps individuals and organizations in Africa collect data from any part of Africa in real time. 
                  </p>
                  <div class="d-block d-md-none mobile-nav">
                    <img src="../assets/images/illustration.png" class="img-responsive" />
                  </div>
                  <p>
                    <router-link to="/signup">
                      <button class="btn btn-primary b-button-lg">Create free account</button>
                    </router-link>
                  </p>
                </div>
                <div class="trust">
                  <p>Trusted by the best</p>
                  <table class="table borderless">
                    <tr>
                      <td><img src="../assets/images/tic-logo.png"/></td>
                      <td><img src="../assets/images/boldx-logo.png" style="width: 300px;"/></td>
                      <td><img src="../assets/images/identity-logo.png" /></td>
                      <td></td>
                    </tr>
                 </table>
                </div>
              </div>
              <div class="col-md-6 col-xs-12 col-sm-12"></div>
            </div>
          </div>
      </section>
      
      <section class="section-3">
        <div class="container">
          <h1 class="first">Simple, easy data collection</h1><br/>
          <div class="row">
            <div class="col-md-6 col-xs-12 col-sm-12 background">
              <div style="padding: 150px;"></div>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-12 right-content">
              <h1>Provide users with a seamless data collection experience</h1>
              <p>Empower your team with a  modern, effortless, painless data collection tool. Design custom forms for data collection using any of our channels. </p><br/>
              <ul>
                <li><i class="fas fa-check"></i> Web</li>
                <li><i class="fas fa-check"></i> Offline mobile app</li>
                <li><i class="fas fa-check"></i> USSD Code (*333#)</li>
              </ul><br/>
              <h1>Enjoy phenomenal feedback rates</h1>
              <p>We allow data collection across all technical scenarios using web forms, offline enabled mobile app and USSD technology.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-4">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xs-12 col-sm-12 left-content">
              <h1>Manage data collection with ease.</h1>
              <p>Project managers love managing data collection project or monitoring and evaluation exercise using Blueform from simple data collection exercises to complex projects, they can receive and track forms sent to team members or field agents from anywhere.</p>
              <ul class="fa-ul">
                <li><i class="fa-li fas fa-cloud"></i> Collect real-time information from team members or field agents using the web, mobile or USSD channels.</li>
                <li><i class="fa-li fas fa-cloud"></i> Monitor location that data came from using our accurate GIS mapping</li>
                <li><i class="fa-li fas fa-cloud"></i> Collect direct beneficiary feedback using the USSD and Web channel.</li>
              </ul>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-12 background">
              <div style="padding: 150px;"></div>
            </div>
          </div>
        </div>
      </section>

      <section class="section-5">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xs-12 col-sm-12 background">
              <div style="padding: 150px;"></div>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-12 left-content">
              <h1>Protect yourself and your users with advanced security features </h1>
              <p>Blueform combination of automated and manual security systems protect you from data theft and loss.</p>
            </div>
          </div>
        </div>
      </section>

      <section class="section-6">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-xs-12 col-sm-12 left-content">
              <h1>Detailed reporting for your survey, monitoring and evaluation, accounting, and audits</h1>
              <p>Blueform combination of automated and manual security systems protect you from data theft and loss.</p>
            </div>
            <div class="col-md-6 col-xs-12 col-sm-12 background">
              <div style="padding: 150px;"></div>
            </div>
          </div>
        </div>
      </section>

      <you-are-covered></you-are-covered>
      <do-more></do-more>
      <bottom-nav></bottom-nav>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import BottomNav from "@/components/BottomNav";
import DoMore from "@/components/DoMore";
import YouAreCovered from "@/components/YouAreCovered";

export default {
  name: "Home",
  components: {
    NavMenu,
    BottomNav,
    DoMore,
    YouAreCovered
  }
};
</script>