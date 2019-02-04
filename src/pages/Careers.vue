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

      	<section class="section-2">
	        <div style="padding: 150px;"></div>
      	</section>

      	<section class="section-3 text-center">
	      	<div class="container-fuild">
		        <div class="circle"></div>
		        <h1>Life at Blueform</h1>
		        <div class="row" style="margin-top: 60px;">
		        	<div class="col-md-3 col-sm-12 col-xs-12">
		        		<h2>Personality</h2><br/><br/>
		        		<p>Our fun and quirky team <br/>makes Envoy great. We would<br/> never want you to leave your <br/>personality at the door.</p>
		        	</div>
		        	<div class="col-md-3 col-sm-12 col-xs-12">
		        		<h2>Professional</h2><br/><br/>
		        		<p>Team Envoy is small yet <br/>mighty. This is a great place <br/>to learn, grow and participate <br/>first hand in something big.</p>
		        	</div>
		        	<div class="col-md-3 col-sm-12 col-xs-12">
		        		<h2>Product-market fit</h2><br/><br/>
		        		<p>Simply put, our products <br/>solve problems. We have a <br/>healthy revenue stream from <br/>happy, paying customers who <br/>agree.</p>
		        	</div>
		        	<div class="col-md-3 col-sm-12 col-xs-12">
		        		<h2>Personality</h2><br/><br/>
		        		<p>From Pandora, to Box, Yelp <br/>and beyond, millions of <br/>visitors interact with Envoy in <br/>top offices around the <br/>world.From Pandora, to Box, <br/>Yelp and beyond, millions of <br/>visitors interact with <br/>Blueform in top offices <br/> around the world.</p>
		        	</div>
		        </div>
		    </div>
      	</section><hr/>

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
      	</section><hr/>

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

<style scoped>

#careers .section-1 {
	padding-top: 150px;
	padding-bottom: 50px;
	padding-left: 20px;
	padding-right: 20px;
}

#careers .section-1 h1 {
	font-style: normal;
	font-weight: 600;
	line-height: 44px;
	font-size: 40px;
	text-align: center;
	letter-spacing: -0.02em;
	color: #223D68;
}

#careers .section-1 p {
	font-family: Overpass;
	font-style: normal;
	font-weight: 600;
	line-height: 26px;
	font-size: 20px;
	text-align: center;
	letter-spacing: 0.02em;
	color: #6F7E83;
}

#careers .section-2 {
  background: url(../assets/images/wavy-background.png);
  background-size: cover;
  background-position: center;
}

#careers .learn-more {
  background: linear-gradient(90deg, #3C94EE 49%, #1558E5 104.42%);
  font-size: 20px;
  padding: 30px;
  border-radius: 27px;
  color: white;
}

#careers .section-3 {
	margin-bottom: 30px;
  	padding: 80px;
}

#careers .section-3 h1 {
	font-style: normal;
	font-weight: 600;
	line-height: 44px;
	font-size: 40px;
	text-align: center;
	letter-spacing: -0.02em;
	color: #223D68;
}

#careers .section-3 .circle {
	background: linear-gradient(270deg, #3C94EE 122.79%, #1D64E7 -30.15%);
	height: 75px;
	width: 75px;
	padding: 20px;
	color: white;
	display: block;
    margin: 0 auto;
    margin-bottom: 10px;
    border-radius: 50%;
}

#careers .section-3 p {
	font-family: Overpass;
	font-style: normal;
	font-weight: 600;
	line-height: 24px;
	font-size: 18px;
	text-align: center;
	letter-spacing: 1px;
	color: #888888;
}

#careers .section-3 h2 {
	font-style: normal;
	font-weight: 600;
	line-height: 25px;
	font-size: 20px;
	letter-spacing: 2px;
	color: #223D68;
}

#careers .section-4 {
	margin-bottom: 30px;
	padding: 80px;
}

#careers .section-4 h1 {
	font-style: normal;
	font-weight: 600;
	line-height: 44px;
	font-size: 40px;
	letter-spacing: -0.02em;
	color: #223D68;
	margin-bottom: 40px;
}

#careers .section-4 ul {
	padding-left: 40px;
}

#careers .section-4 ul li {
	font-family: Overpass;
	font-style: normal;
	font-weight: 600;
	line-height: normal;
	font-size: 20px;
	letter-spacing: 0.02em;
	color: #888888;
	margin-bottom: 40px;
}
</style>