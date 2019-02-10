<template>
	<section class="login">
		<div class="row">
			<div class="col-md-4 form text-center">
				<div class="form-content">
					<p><router-link to="/"><img src="../assets/images/blueform-logo.png" /></router-link></p>
					<h2>Forgot your password?</h2>
					<div class="form-group">
						<input class="form-control" name="email" type="email" placeholder="Email" />
					</div>
					<div class="form-group">
						<button type="submit" class="btn btn-primary form-control">Send me reset password instructions</button>
					</div>
					<p>Need a Blueform account? <router-link to="/signup">Create a Blueform account</router-link></p>
					<p>Already have a Blueform account? <router-link to="/signin">Sign In</router-link></p>
				</div>
			</div>
			<div class="col-md-8 background">
				<div class="inner">
					<h1>It's nice to see <br/> you back at <br/> Blueform</h1>
				</div>
			</div>
		</div>
	</section>
</template>

<script>
export default {
  name: "ForgotPassword",
};
</script>

<style scoped>

	.login .background {
		background: linear-gradient(90deg, #3C94EE 49%, #1558E5 104.42%);
		background-image: url(../assets/images/signin-background.png);
		background-size: cover;
		background-attachement: fixed;
		background-repeat: no-repeat;
		height: 100vh;
	}

	.field-icon {
	  float: right;
	  margin-left: -24px;
	  margin-top: -25px;
	  margin-right: 10px;
	  position: relative;
	  z-index: 2;
	  color: #6F7E83;
	  opacity: 0.6;
	}

	.field-icon:hover {
		cursor: pointer;
	}

	.login .background .inner {
		
	}

	.login .background .inner h1 {
		font-style: normal;
		font-weight: 600;
		line-height: 55px;
		font-size: 50px;
		color: white;
		padding-left: 150px;
		padding-top: 300px;
	}


	.login .form {
		padding: 65px;
	}

	.login img {
		width: 150px;
	}

	.login .form .form-content {
		margin-top: 90px;
	}

	.login .form .form-content input {
		padding: 20px;
	}

	.login .form .form-content h2 {
		font-style: normal;
		font-weight: 800;
		line-height: 45px;
		font-size: 20px;
		letter-spacing: -0.01em;
		color: #223D68;
		margin-bottom: 10px;
	}

	.login .form .form-content p {
		color: #223D68;
		font-size: 14px;
	}

	.login .form .form-content a:hover {
		text-decoration: none;
	}
</style>