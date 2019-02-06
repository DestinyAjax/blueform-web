<template>
	<div id="career">
    	<nav-menu></nav-menu><hr/>

      	<section class="text-center section-1">
	      	<div class="row">
	      		<div class="col-md-3 col-xs-12 col-sm-12"></div>
	      		<div class="col-md-6 col-xs-12 col-sm-12">
			      	<h1>Impact that matters!</h1>
			      	<p>We’re looking for dreamers and doers to shape the future of Blueform. Here, you’ll make your own decisions, work with smart people and build products people want.</p><br/>
			      	<p><router-link to="/login"><a class="button is-primary learn-more" href="">View open positions</a></router-link></p>
			    </div>
			    <div class="col-md-3 col-xs-12 col-sm-12"></div>
			</div>
      	</section>

      	<div class="section-2">
	        <div style="padding: 150px;"></div>
      	</div>

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