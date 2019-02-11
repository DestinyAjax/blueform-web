<template>
	<section class="signup">
		<div class="row">
			<div class="col-md-4 form">
				<div class="form-content">
					<p class="text-center"><router-link to="/"><img style="width: 150px;" src="../assets/images/blueform-logo.png" /></router-link></p>
					<h2 class="text-center">You are in great company</h2>
					<p class="text-center">Enter your credentials to get started with Blueform completely free</p>
					<div class="form-group">
	             		<label>Name</label>
	             		<input class="form-control" placeholder="John Doe" name="name" />
	             	</div>
	             	<div class="form-group">
	             		<label>Email</label>
	             		<input class="form-control" placeholder="mail@mail.com" name="email" />
	             	</div>
	             	<div class="form-group">
	             		<label>Username</label>
	             		<input class="form-control" placeholder="Username" name="username" />
	             	</div>
	             	<div class="form-group">
	             		<label>Password</label>
	             		<input type="password" class="form-control" placeholder="*************" name="password" />
	             	</div>
					<div class="form-group">
						<button type="submit" class="btn btn-primary form-control">Let's go</button>
					</div>
					<div class="form-group">
	             		<label><input type="checkbox"/> I agree to Blueform’s Terms of Service & Privacy Policy </label>
	             	</div>
				</div>
			</div>
			<div class="col-md-8 background">
				<div class="row" style="margin-top: 120px;">
					<div class="col-md-2"></div>
					<div class="col-md-8 inner">
						<p>Blueform has made data collection simple and straightforward. By leveraging both online and offline technologies we are making data collection accessible to everyone.</p>
					</div>
					<div class="col-md-2"></div>
				</div>
			</div>
		</div>
	</section>
</template>


<script>
export default {
  name: "SignUp",
};
</script>

<style scoped>
	
	.signup .background {
		background: linear-gradient(90deg, #3C94EE 49%, #1558E5 104.42%);
		background-image: url(../assets/images/signin-background.png);
		height: 100vh;
		overflow: hidden;
		background-size: cover;
		background-attachement: fixed;
		background-repeat: no-repeat;
		padding-left: 50px;
		padding-right: 50px;
	}

	.signup .background .overlay h6 {
		font-style: normal;
		font-weight: 800;
		font-size: 20px;
		letter-spacing: -0.01em;
	}

	.signup .background .inner p {
		font-size: 18px;
		color: #757575;
		font-family: Overpass;
		font-style: normal;
		line-height: normal;
	}

	.signup .form-content {
		padding: 50px;
	}

	.signup .form label {
		font-size: 13px;
	}

	.signup .overlay img {
		width: 150px;
		height: 200px;
	}

	.signup .form .form-content input {
		padding: 20px;
		font-size: 15px;
	}

	.signup .form .form-content h2 {
		font-style: normal;
		font-weight: 800;
		line-height: 45px;
		font-size: 20px;
		letter-spacing: -0.01em;
		color: #223D68;
		margin-bottom: 10px;
	}

	@media screen and (min-width: 601px) {
		.signup .background .inner {
			background-color: white;
			border-radius: 10px;
			padding: 50px;
			margin-top: 80px;
		}

	  	.signup .background .overlay {
			position: absolute;
			width: 406px;
			height: 406px;
			left: 30%;
			top: 340px;
			text-align: center;
			color: white;
		}
	}

	@media screen and (max-width: 600px) {
		.signup .background .inner {
			background-color: white;
			border-radius: 10px;
			padding: 50px;
		}

	  	.signup .background .overlay {
			position: absolute;
			width: 406px;
			height: 406px;
			left: 10%;
			top: 300px;
			text-align: center;
			color: white;
		}
	}

	.signup .form .form-content p {
		color: #223D68;
		font-size: 14px;
	}

	.signup .form .form-content a:hover {
		text-decoration: none;
	}
</style>