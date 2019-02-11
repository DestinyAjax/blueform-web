<template>
	<div id="footer">
      	<div class="container">
      		<div class="row first">
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Why Blueform?</h3><br/>
      				<p>
                <router-link to="/for-individuals">For Individuals</router-link><br/>
                <router-link to="/for-non-profit">For Non-Profits</router-link><br/>
                <router-link to="/for-businesses">For Businesses</router-link>
              </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Developers</h3><br/>
            		<p>
                  <router-link to="/">Status page</router-link>
                </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Pricing</h3><br/>
            		<p>
                  <router-link to="/pricing-monthly">Monthly</router-link><br/>
                  <router-link to="/pricing-yearly">Yearly</router-link>
                </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Learn</h3><br/>
            		<p><router-link to="/blog">Blog</router-link><br/>
                  <router-link to="/">Guides</router-link>
                </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Support</h3><br/>
            		<p>
                  <router-link to="/help-desk">Help Desk</router-link><br/>
                  <router-link to="/contact-us">Contact us</router-link>
                </p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>About Us</h3><br/>
      				<p>
                <router-link to="/company">Company</router-link><br> 
                <router-link to="/careers">Careers</router-link><br>
                <router-link to="/privacy-policy">Privacy Policy</router-link><br/>
                <router-link to="/terms-of-agreement">Terms of Agreement</router-link>
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
              <router-link to="/twitter" class="twitter"><span><i class="fab fa-twitter"></i></span></router-link>
              <router-link to="/facebook" class="facebook"><span><i class="fab fa-facebook"></i></span></router-link>
              <router-link to="/instagram" class="instagram"><span><i class="fab fa-instagram"></i></span></router-link>
              <router-link to="/linkedin" class="linkedin"><span><i class="fab fa-linkedin-in"></i></span></router-link>
              <router-link to="/youtube" class="youtube"><span><i class="fab fa-youtube"></i></span></router-link>
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

#footer .social span {
  font-size: 25px;
  font-weight: 600;
  color: #6F7E83;
  display: inline-block;
  margin-right: 15px;
}

#footer a {
  color: #223D68;
  font-size: 15px;
}

#footer a:hover {
  text-decoration: none;
  color: blue;
}
</style>