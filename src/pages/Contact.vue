<template>
	<div id="contact">
    	<nav-menu></nav-menu><hr/>

      	<section class="text-center section-1">
	      	<div class="row">
	      		<div class="col-md-3 col-xs-12 col-sm-12"></div>
	      		<div class="col-md-6 col-xs-12 col-sm-12">
			      	<h1 class="bf-h1">We're happy to help</h1>
			      	<p>Get in touch. We look forward to hearing from you</p>
			    </div>
			    <div class="col-md-3 col-xs-12 col-sm-12"></div>
			</div>
      	</section>

      	<div class="section-2">
	        <div class="container">
	          	<div class="row" style="margin-top: 40px;">
		            <div class="col-md-4 col-xs-12 col-sm-12">
		              	<div class="col-md-12 col-xs-12 col-sm-12 card" style="margin-top: 20px;">
			                <h2>Contact Sales</h2>
			                <p>We look forward to working with you to lead a data driven organization.</p>
			                <p>
				                <router-link to="/"><i class="fab fa-google"></i></router-link>
	              				<router-link to="/"><i class="fab fa-whatsapp"></i></router-link>
	              			</p>
		              	</div>
		            </div>
		            <div class="col-md-4 col-xs-12 col-sm-12">
			            <div class="col-md-12 col-xs-12 col-sm-12 card" style="margin-top: 20px;">
			            	<h2>General Support</h2>
			                <p>Do you have general enquiries or need support? Please send us a quick email.</p>
			                <p>
				                <router-link to="/"><i class="fab fa-google"></i></router-link>
	              				<router-link to="/"><i class="fab fa-whatsapp"></i></router-link>
	              			</p>
			            </div>
		            </div>
		            <div class="col-md-4 col-xs-12 col-sm-12">
		              	<div class="col-md-12 col-xs-12 col-sm-12 card" style="margin-top: 20px;">
			                <h2>Press and Media Kit</h2>
			                <p>Get company info, bios, photos, brand assets, and other media resources.</p><br/>
			                <h6 style='margin-top:10px;'><router-link to="/"> Search the help desk <i class="fas fa-check-circle"></i></router-link></h6>
		              	</div>
		            </div>
	          	</div>
	        </div>
      	</div>

      	<section class="section-3">
	        <div class="container">
	          	<div class="row">
		            <div class="col-md-6 col-xs-12 col-sm-12 background">
		              <div style="padding: 150px;"></div>
		            </div>
		            <div class="col-md-6 col-xs-12 col-sm-12 content">
		              	<h1>Need a quick answer?</h1>
		              	<p>The blueform help desk</p>
			            <ul class="fa-ul">
			                <li><i class="fa-li fas fa-cloud"></i> Detailed guide and instructions</li>
			                <li><i class="fa-li fas fa-cloud"></i> How to video</li>
			                <li><i class="fa-li fas fa-cloud"></i> Answers to the most common questions</li>
			            </ul><br/>
			            <h6>
		                  <router-link to="/"> Search the help desk <i class="fas fa-check-circle"></i></router-link>
		                </h6>
		            </div>
	          	</div>
	        </div>
      	</section>

      	<do-more></do-more>
      	<bottom-nav></bottom-nav>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import BottomNav from "@/components/BottomNav";
import DoMore from "@/components/DoMore";

export default {
  name: "Contact",
  components: {
    NavMenu,
    BottomNav,
    DoMore
  }
};
</script>