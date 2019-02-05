<template>
	<div id="footer">
      	<div class="container">
      		<div class="row first">
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Why Blueform?</h3><br/>
      				<p>
                <router-link to="/demo">For Individuals</router-link><br/>
                <router-link to="/demo">For Non-Profits</router-link><br/>
                <router-link to="/demo">For Businesses</router-link>
              </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Developers</h3><br/>
            		<p>
                  <router-link to="/demo">Status page</router-link>
                </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Pricing</h3><br/>
            		<p>
                  <router-link to="/demo">Nigeria</router-link>
                </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Learn</h3><br/>
            		<p><router-link to="/demo">Blog</router-link><br/>
                  <router-link to="/demo">Guides</router-link>
                </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Support</h3><br/>
            		<p>
                  <router-link to="/demo">Help Desk</router-link><br/>
                  <router-link to="/demo">Contact us</router-link>
                </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>About Us</h3><br/>
      				<p>
                <router-link to="/demo">Company</router-link><br> 
                <router-link to="/demo">Careers</router-link><br>
                <router-link to="/demo">Media Kit</router-link><br>
                <router-link to="/demo">Privacy & Terms</router-link>
              </p>
      			</div>
      		</div><hr/>
      		<div class="row bottom">
      			<div class="col-md-3 col-xs-12 col-sm-12">
      				<h3>Contact</h3><br/>
      				<p><router-link to="/">hello@blueform.co</router-link></p>
      			</div>
      			<div class="col-md-3 col-xs-12 col-sm-12">
      				<h3>Lagos</h3><br/>
      				<p>Workstation Maryland Mall, <br/>Maryland, <br/>Lagos.</p>
      			</div>
      			<div class="col-md-6 col-xs-12 col-sm-12 social">
              <router-link to="/"><span><i class="fab fa-twitter"></i></span></router-link>
              <router-link to="/"><span><i class="fab fa-facebook"></i></span></router-link>
              <router-link to="/"><span><i class="fab fa-instagram"></i></span></router-link>
              <router-link to="/"><span><i class="fab fa-linkedin-in"></i></span></router-link>
              <router-link to="/"><span><i class="fab fa-youtube"></i></span></router-link>
            </div>
      		</div>
      	</div>
  	</div>
</template>

<script>
export default {
  name: "BottomNav",
};
</script>

<style scoped>

#footer {
  color: #223D68;
  padding: 80px;
}

#footer .first {
	margin-bottom: 60px;
}

#footer .bottom {
	padding-top: 50px;
}

#footer h3 {
	font-style: normal;
	font-weight: 800;
	line-height: 27px;
	font-size: 20px;
	color: #223D68;
}

#footer .social {
  text-align: right;
}

</style>