<template>
	<div id="contact">
    	<nav-menu></nav-menu><hr/>

    	<section class="text-center section-1">
      	<div class="row">
      		<div class="col-md-3 col-xs-12 col-sm-12"></div>
      		<div class="col-md-6 col-xs-12 col-sm-12">
		      	<h1>We help individuals conduct surveys and conduct data collection exercise anywhere in Africa with or without the internet</h1>
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
              <div class="col-md-6 col-xs-12 col-sm-12 for-individual-background">
                <div style="padding: 150px;"></div>
              </div>
              <div class="col-md-6 col-xs-12 col-sm-12 content">
                  <h1>Survey using our own channel</h1>                  
                  <ul class="fa-ul">
                      <li><i class="fa-li fas fa-cloud"></i> USSD Code</li>
                      <li><i class="fa-li fas fa-cloud"></i> Web form</li>
                      <li><i class="fa-li fas fa-cloud"></i> Offline enabled mobile App</li>
                  </ul><br/>
                  <h6><router-link to="/signup"> Sign up <i class="fas fa-check-circle"></i></router-link></h6>
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
  name: "Individual",
  components: {
    NavMenu,
    BottomNav
  }
};
</script>