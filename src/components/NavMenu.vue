<template>
    <nav id="nav" class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/images/blueform-logo.png" style="width: 120px;">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <i class="fas fa-bars" style="font-size:30px;color: #BDC3C7;"></i>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Why Bluform
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="d-block d-md-none mobile-nav">
                  <h5><router-link to="/why-choose-us">Why Choose Blueform</router-link></h5>
                  <h5><router-link to="/demo">Demo</router-link></h5><br/>
                  <span>Your Growth Stage</span>
                  <h5><router-link to="/for-individuals">For Individual</router-link></h5>
                  <h5><router-link to="/for-non-profit">For Non-Profit</router-link></h5>
                  <h5><router-link to="/for-businesses">For Businesses</router-link></h5>
                </div>
                <div class="b-dropdown-menu d-none d-md-block">
                  <div class="row">
                    <div class="col-md-8" style="border-right: 1px dotted grey;">
                      <h5><router-link to="/why-choose-us">Why Choose Blueform</router-link></h5>
                      <p>Individuals, business, non-business love blueform</p>
                      <h5><router-link to="/demo">Demo</router-link></h5>
                      <p>See Blueform live in action</p>
                    </div>
                    <div class="col-md-4 side">
                      <span>Your Growth Stage</span>
                      <h6><router-link to="/for-individuals">For Individual</router-link></h6>
                      <h6><router-link to="/for-non-profit">For Non-Profit</router-link></h6>
                      <h6><router-link to="/for-businesses">For Businesses</router-link></h6>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item active">
              <router-link to="/pricing-monthly" class="nav-link">Pricing <span class="sr-only">(current)</span></router-link>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Learn
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <div class="d-block d-md-none mobile-nav">
                  <h5><router-link to="/blog">Blog</router-link></h5>
                  <h5><router-link to="/guide">Guide</router-link></h5><br/>
                  <span>ABOUT US</span>
                  <h5><router-link to="/about">Company</router-link></h5>
                  <h5><router-link to="/careers">Careers</router-link></h5>
                  <h5><router-link to="/enterprise">Media Kit</router-link></h5>
                  <h5><router-link to="/privacy-policy">Privacy Policy & Terms</router-link></h5>
                  <h5><router-link to="/terms-of-agreement">Terms of Agreement</router-link></h5>
                </div>
                <div class="b-dropdown-menu d-none d-md-block">
                  <div class="row">
                    <div class="col-md-8" style="border-right: 1px dotted grey;">
                      <h5><router-link to="http:://blueformblog.wordpress.com">Blog</router-link></h5>
                      <p>Original lessons about making the internet work for your business</p>
                      <h5><router-link to="/guide">Guide</router-link></h5>
                      <p>Coming soon...</p>
                    </div>
                    <div class="col-md-4 side">
                      <span>ABOUT US</span>
                      <h6><router-link to="/about">Company</router-link></h6>
                      <h6><router-link to="/careers">Careers</router-link></h6>
                      <h6><router-link to="/privacy-policy">Privacy Policy</router-link></h6>
                      <h6><router-link to="/terms-of-agreement">Terms of Agreement</router-link></h6>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item dropdown pull-right">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Support
              </a>
              <div class="dropdown-menu support-dropdown" aria-labelledby="navbarDropdown">                
                <h6><router-link to="/general-support">General Support</router-link></h6>
                <h6><router-link to="/contact-us">Contact Us</router-link></h6>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/signin" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/signup">
                <button class="btn btn-primary b-button">Create free account</button>
              </router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
</template>

<script>
export default {
	name: "NavMenu",
};
</script>

<style scoped>

#nav {
  padding-right: 40px;
  padding-left: 40px;
  padding-top: 10px;
  color: #223D68;
  font-style: normal;
  line-height: normal;
  font-weight: 1000;
  font-size: 14px;
  letter-spacing: -0.01em;
}

#nav a {
  color: #223D68;
}

.mobile-nav {
  width: auto;
  padding: 20px;
}

.mobile-nav h5 {
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #223D68;
  font-size: 15px;
  margin-bottom: 20px;
}

.mobile-nav span {
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 13px;
}

.b-dropdown-menu {
  width: 550px;
  padding: 20px;
}

.b-dropdown-menu h5, .b-dropdown-menu h6 {
  font-weight: 800;
  letter-spacing: -0.01em;
  color: #223D68;
  font-size: 13px;
}

.b-dropdown-menu h5 a:hover {
  text-decoration: none;
}

.b-dropdown-menu h6 a:hover {
  text-decoration: none;
}

.b-dropdown-menu p {
  margin-bottom: 30px;
  font-size: 15px;
}

.b-dropdown-menu span {
  display: block;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 13px;
}

.support-dropdown {
  width: 200px;
  padding: 20px;
}

.support-dropdown a {
  margin-bottom: 15px;
  letter-spacing: -0.01em;
  color: #223D68;
  font-size: 14px;
  font-weight: 800;
}

.support-dropdown a:hover {
  text-decoration: none;
}
</style>