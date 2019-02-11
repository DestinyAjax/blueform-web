<template>
	<div id="career">
    	<nav-menu></nav-menu><hr/>

        <section class="text-center section-1">
          <div class="row">
            <div class="col-md-3 col-xs-12 col-sm-12"></div>
            <div class="col-md-6 col-xs-12 col-sm-12">
              <h1 class="bf-h1">Choose a plan that works for you</h1>
              <p>Just need a basic plan? <router-link to="/signup">Sign up for a free account</router-link>.</p>
              <span class="tab">
                <router-link to="/pricing-monthly">Monthly</router-link>
                <router-link to="/pricing-yearly" class="active">Yearly</router-link>
              </span>
            </div>
            <div class="col-md-3 col-xs-12 col-sm-12"></div>
          </div>
        </section>

        <div class="section-5">
          <div class="container">
              <div class="row" style="margin-top: 40px;">
                <div class="col-md-3 col-xs-12 col-sm-12">
                    <div class="col-md-12 col-xs-12 col-sm-12 card" style="margin-top: 20px;">
                      <h2>Basic</h2>
                      <h1>Free</h1>
                      <p>100 responses / month <br/>10 questions <br/>Web + Mobile + USSD <br/>24/7 support</p><br/>
                      <h6 class="text-center" style='margin-top:10px;'><router-link to="/signup"> Start Free <i class="fas fa-check-circle"></i></router-link></h6>
                    </div>
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                  <div class="col-md-12 col-xs-12 col-sm-12 card star" style="margin-top: 20px;">
                    <h2>Standard</h2>
                    <h1>N432,000</h1>
                    <p>100 responses / month <br/>10 questions <br/>Web + Mobile + USSD <br/>24/7 support</p><br/>
                    <h6 class="text-center" style='margin-top:10px; margin-bottom: 30px;'><router-link to="/signup"> Go Standard <i class="fas fa-check-circle"></i></router-link></h6>
                  </div>
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                  <div class="col-md-12 col-xs-12 col-sm-12 card" style="margin-top: 20px;">
                    <h2>Premium</h2>
                    <h1>N1,188,000</h1>
                    <p>1,500 responses / mo <br/>Unlimited questions <br/>Web + Mobile + USSD <br/>24/7 support</p><br/>
                    <h6 class="text-center" style='margin-top:10px;'><router-link to="/signup"> Go Premium <i class="fas fa-check-circle"></i></router-link></h6>
                  </div>
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                  <div class="col-md-12 col-xs-12 col-sm-12 card" style="margin-top: 20px;">
                    <h2>Premium Plus</h2>
                    <h1>N199,000</h1>
                    <p>3.000 responses / mo <br/>Unlimited questions <br/>Web + Mobile + USSD <br/>Dedicated support</p><br/>
                    <h6 class="text-center" style='margin-top:10px;'><router-link to="/signup"> Go Plus <i class="fas fa-check-circle"></i></router-link></h6>
                  </div>
                </div>
                <div class="col-md-3 col-xs-12 col-sm-12">
                  <div class="col-md-12 col-xs-12 col-sm-12 card" style="margin-top: 20px;">
                    <h2>Enterprise</h2>
                    <h1 style="font-size: 19px;">Contact Sales</h1>
                    <p>Unlimited responses / mo <br/>Unlimited questions <br/>Web + Mobile + USSD <br/>Dedicated support<br/>Customization<br/> White listing <br/> Data analysis support</p><br/>
                    <h6 class="text-center" style='margin-top:10px;'><router-link to="/signup"> Go Enterprise <i class="fas fa-check-circle"></i></router-link></h6>
                  </div>
                </div>
              </div>
          </div>
        </div><hr/>

      	<bottom-nav></bottom-nav>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import BottomNav from "@/components/BottomNav";

export default {
  name: "PricingYearly",
  components: {
    NavMenu,
    BottomNav
  }
};
</script>