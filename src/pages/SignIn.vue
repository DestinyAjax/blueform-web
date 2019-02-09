<template>
	<section class="login">
		<div class="row">
			<div class="col-md-4 form text-center">
				<div class="form-content">
					<p><router-link to="/"><img src="../assets/images/blueform-logo.png" /></router-link></p>
					<h2>Log In To Blueform</h2>
					<div class="form-group">
						<input class="form-control" name="email" type="email" placeholder="Email" />
					</div>
					<div class="form-group">
						<button type="submit" class="btn btn-primary form-control">Log In</button>
					</div>
					<p>Need a Blueform  account? <router-link to="/signup">Create a Blueform account</router-link></p>
					<p><router-link to="/forgot-password">Forgot Password?</router-link></p>
				</div>
			</div>
			<div class="col-md-8 background">
				<div class="inner"></div>
			</div>
		</div>
	</section>
</template>


<script>
export default {
  name: "SignIn",
};
</script>

<style scoped>
	
	.login .background {
		background: linear-gradient(90deg, #3C94EE 49%, #1558E5 104.42%);
		height: 100vh;
		overflow: hidden;
		background-image: url(../assets/images/analysis.jpeg);
		background-size: cover;
		background-attachement: fixed;
		background-repeat: no-repeat;
	}

	.login .background .inner {
		
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