<template>
	<section id="footer">
      	<div class="container-fluid">
      		<div class="row first">
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Why Blueform?</h3><br/>
      				<p>For Individuals<br/>For Non-Profits <br/>For Businesses</p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Developers</h3><br/>
            		<p>Status page</p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Pricing</h3><br/>
            		<p>Nigeria</p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Learn</h3><br/>
            		<p>Blog<br/>Guides</p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>Support</h3><br/>
            		<p>Help Desk<br/>Contact us</p>
      			</div>
      			<div class="col-md-2 col-xs-12 col-sm-12">
      				<h3>About Us</h3><br/>
      				<p>Company <br> Careers <br>Media Kit <br>Privacy & Terms</p>
      			</div>
      		</div>
      		<div class="row bottom">
      			<div class="col-md-3 col-xs-12 col-sm-12">
      				<h3>Contact</h3><br/>
      				<p>hello@blueform.co</p>
      			</div>
      			<div class="col-md-3 col-xs-12 col-sm-12">
      				<h3>Lagos</h3><br/>
      				<p>Workstation Maryland Mall, <br/>Maryland, <br/>Lagos.</p>
      			</div>
      			<div class="col-md-6 col-xs-12 col-sm-12 social"></div>
      		</div>
      	</div>
  	</section>
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