<template>
	<div id="general-support">
    	<nav-menu></nav-menu><hr/>

      	<section class="text-center section-1">
	      	<div class="row">
	      		<div class="col-md-3 col-xs-12 col-sm-12"></div>
	      		<div class="col-md-6 col-xs-12 col-sm-12">
			      	<h1 class="bf-h1">Contact Support</h1>
			      	<p>We are available around the clock <br/>Let's us know how we can help.</p>
			    </div>
			    <div class="col-md-3 col-xs-12 col-sm-12"></div>
			</div>
      	</section>

      	<section class="section-3">
	        <div class="container">
	          	<div class="row">		            
	          		<div class="col-md-5 col-xs-12 col-sm-12 form">
		             	<div class="form-group">
		             		<label>Enter your business email</label>
		             		<input class="form-control" placeholder="e.g John Doe" name="email" />
		             	</div>
		             	<div class="form-group">
		             		<label>What's your phone number</label>
		             		<input class="form-control" placeholder="+234 807 8987 2133" name="number" />
		             	</div>
		             	<div class="form-group">
		             		<label>Email</label>
		             		<input class="form-control" placeholder="mail@mail.com" name="email" />
		             	</div>
		             	<div class="form-group">
		             		<label>Category</label>
		             		<select class="form-control" name="category">
		             			<option value="">Select category</option>
		             		</select>
		             	</div>
		             	<div class="form-group">
		             		<label>Subject</label>
		             		<input class="form-control" placeholder="Subject line" name="subject" />
		             	</div>
		             	<div class="form-group">
		             		<label>Message</label>
		             		<input class="form-control" placeholder="Let us know how we can help" name="message" />
		             	</div>
		             	<div class="form-group">
		             		<label>
		             		<input type="checkbox" name="email" /> Send me occational Blueform updates and announcement 
		             		</label>
		             	</div>
		             	<div class="form-group">
		             		<button class="btn btn-primary b-button-lg">Send Message</button>
		             	</div>
		            </div>
		            <div class="col-md-2"></div>
		            <div class="col-md-5 col-xs-12 col-sm-12 content">
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
  name: "Support",
  components: {
    NavMenu,
    BottomNav,
    DoMore
  }
};
</script>