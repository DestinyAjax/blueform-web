<template>
	<div id="careers">
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

      	<section class="section-3 text-center">
	      	<div class="container-fuild">
		        <div class="circle"></div>
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
      	</section>

      	<section class="section-4">
      		<div class="container-fluid">
	      		<h1>Small team, big perks</h1>
	      		<div class="row">
	      			<div class="col-md-6 col-sm-12 col-xs-12">
	      				<ul>
			                <li>Team offsites and trips to fun, unique destinations.</li>
			                <li>The latest tech and equipment to outfit your desk.</li>
			                <li>20 days annual leave</li>
			                <li>Comprehensive health insurance</li>
			                <li>Montly gym credit</li>
			            </ul>
	      			</div>
	      			<div class="col-md-6 col-sm-12 col-xs-12">
	      				<ul>
			                <li>Monthly Taxify/Uber ride credit</li>
			                <li>Monthly airtime credit</li>
			                <li>Performances bonuses</li>
			                <li>Comprehensive health insurance</li>
			                <li>Tailor-made professional development for every team member</li>
			            </ul>
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
  name: "Careers",
  components: {
    NavMenu,
    BottomNav
  }
};
</script>