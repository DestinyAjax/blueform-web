<template>
	<div id="contact">
    	<nav-menu></nav-menu><hr/>

    	<section class="text-center section-1">
        <div class="row">
          <div class="col-md-3 col-xs-12 col-sm-12"></div>
          <div class="col-md-6 col-xs-12 col-sm-12">
            <h1>We make data collection, monitoring and evaluation easy and less expensive for businesses of all sizes.</h1>
            <p>Blueform is the data collection tool of choice for some of the fastest-growing businesses and Non-profits in Africa. Here're 12 reasons why.</p><br/>
          </div>
          <div class="col-md-3 col-xs-12 col-sm-12"></div>
        </div>
      </section>

    	<div class="section-2">
        <div style="padding: 150px;"></div>
    	</div>

      <section class="section-3">
        <div class="container">
            <div class="row">
              <div class="col-md-6 col-xs-12 col-sm-12 background">
                <div style="padding: 150px;"></div>
              </div>
              <div class="col-md-6 col-xs-12 col-sm-12 content">
                <h1>What Corporate use Blueform for:</h1>
                <ul class="fa-ul">
                  <li><i class="fa-li fas fa-cloud"></i> Monitoring and Evaluation</li>
                  <li><i class="fa-li fas fa-cloud"></i> CSR baseline survey</li>
                  <li><i class="fa-li fas fa-cloud"></i> CSR Beneficiary feedback</li>
                  <li><i class="fa-li fas fa-cloud"></i> Market research</li>
                  <li><i class="fa-li fas fa-cloud"></i> Data analysis</li>
                </ul><br/>
                <h6><router-link to="/"> Search the help desk <i class="fas fa-check-circle"></i></router-link></h6>
              </div>
            </div>
        </div>
      </section>

    	<bottom-nav></bottom-nav>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import BottomNav from "@/components/BottomNav";

export default {
  name: "Businesses",
  components: {
    NavMenu,
    BottomNav
  }
};
</script>