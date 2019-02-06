<template>
	<div id="career">
    	<nav-menu></nav-menu><hr/>

      	<section class="text-center section-1">
	      	<div class="row">
	      		<div class="col-md-3 col-xs-12 col-sm-12"></div>
	      		<div class="col-md-6 col-xs-12 col-sm-12">
			      	<h1>Impact that matters!</h1>
			      	<p>We’re looking for dreamers and doers to shape the future of Blueform. Here, you’ll make your own decisions, work with smart people and build products people want.</p><br/>
			      	<p><router-link to="/login"><button class="btn btn-primary b-button-lg">View open positions</button></router-link></p>
			    </div>
			    <div class="col-md-3 col-xs-12 col-sm-12"></div>
			</div>
      	</section>

      	<div class="section-2">
	        <div style="padding: 150px;"></div>
      	</div>

      	<section class="section-3 text-center">
	      	<div class="container">
		        <div class="circle"><i class="fas fa-heart"></i></div>
		        <h1>Life at Blueform</h1>
		        <div class="row" style="margin-top: 60px;">
		        	<div class="col-md-3 col-sm-12 col-xs-12">
		        		<h2>Personality</h2><br/><br/>
		        		<p>Our fun and quirky team makes Envoy great. We would never want you to leave your personality at the door.</p>
		        	</div>
		        	<div class="col-md-3 col-sm-12 col-xs-12">
		        		<h2>Professional</h2><br/><br/>
		        		<p>Team Envoy is small yet mighty. This is a great place to learn, grow and participate first hand in something big.</p>
		        	</div>
		        	<div class="col-md-3 col-sm-12 col-xs-12">
		        		<h2>Product-market fit</h2><br/><br/>
		        		<p>Simply put, our products <br/>solve problems. We have a healthy revenue stream from happy, paying customers who agree.</p>
		        	</div>
		        	<div class="col-md-3 col-sm-12 col-xs-12">
		        		<h2>Personality</h2><br/><br/>
		        		<p>From Pandora, to Box, Yelp and beyond, millions of visitors interact with Envoy in top offices around the world.From Pandora, to Box, Yelp and beyond, millions of visitors interact with Blueform in top offices around the world.</p>
		        	</div>
		        </div>
		    </div>
      	</section><hr/>

      	<section class="section-4">
      		<div class="container">
	      		<h1>Small team, big perks</h1>
	      		<div class="row">
	      			<div class="col-md-6 col-sm-12 col-xs-12">
	      				<ul class="fa-ul">
			                <li><i class="fa-li fas fa-cloud"></i> Team offsites and trips to fun, unique destinations.</li>
			                <li><i class="fa-li fas fa-cloud"></i> The latest tech and equipment to outfit your desk.</li>
			                <li><i class="fa-li fas fa-cloud"></i> 20 days annual leave</li>
			                <li><i class="fa-li fas fa-cloud"></i> Comprehensive health insurance</li>
			                <li><i class="fa-li fas fa-cloud"></i> Montly gym credit</li>
			            </ul>
	      			</div>
	      			<div class="col-md-6 col-sm-12 col-xs-12">
	      				<ul class="fa-ul">
			                <li><i class="fa-li fas fa-cloud"></i> Monthly Taxify/Uber ride credit</li>
			                <li><i class="fa-li fas fa-cloud"></i> Monthly airtime credit</li>
			                <li><i class="fa-li fas fa-cloud"></i> Performances bonuses</li>
			                <li><i class="fa-li fas fa-cloud"></i> Comprehensive health insurance</li>
			                <li><i class="fa-li fas fa-cloud"></i> Tailor-made professional development for every team member</li>
			            </ul>
	      			</div>
	      		</div>
	      	</div>
      	</section></hr>

      	<bottom-nav></bottom-nav>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import BottomNav from "@/components/BottomNav";

export default {
  name: "Careers",
  components: {
    NavMenu,
    BottomNav
  }
};
</script>