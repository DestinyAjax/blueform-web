<template>
    <nav id="nav" class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/images/blueform-logo.png" style="width: 150px;">
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
                  <h5><router-link to="/why-choose-us">Success Rate</router-link></h5>
                  <h5><router-link to="/why-choose-us">Demo</router-link></h5><br/>
                  <span>Your Growth Stage</span>
                  <h5><router-link to="/individual">For Individual</router-link></h5>
                  <h5><router-link to="/non-profit">For Non-Profit</router-link></h5>
                  <h5><router-link to="/enterprise">For Enterprises</router-link></h5>
                </div>
                <div class="b-dropdown-menu d-none d-md-block">
                  <div class="row">
                    <div class="col-md-8" style="border-right: 1px dotted grey;">
                      <h5><router-link to="/why-choose-us">Why Choose Blueform</router-link></h5>
                      <p>Individuals, business, non-business love blueform</p>
                      <h5><router-link to="/success-rate">Success Rate</router-link></h5>
                      <p>Get the best data available when you need it</p>
                      <h5><router-link to="/demo">Demo</router-link></h5>
                      <p>See Blueform live in action</p>
                    </div>
                    <div class="col-md-4 side">
                      <span>Your Growth Stage</span>
                      <h6><router-link to="/individual">For Individual</router-link></h6>
                      <h6><router-link to="/non-profit">For Non-Profit</router-link></h6>
                      <h6><router-link to="/enterprise">For Enterprises</router-link></h6>
                    </div>
                  </div>
                </div>
              </div>
            </li>
            <li class="nav-item active">
              <router-link to="/pricing" class="nav-link">Pricing <span class="sr-only">(current)</span></router-link>
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
                  <h5><router-link to="/company">Company</router-link></h5>
                  <h5><router-link to="/careers">Careers</router-link></h5>
                  <h5><router-link to="/enterprise">Media Kit</router-link></h5>
                  <h5><router-link to="/pivacy-terms">Privacy & Terms</router-link></h5>
                </div>
                <div class="b-dropdown-menu d-none d-md-block">
                  <div class="row">
                    <div class="col-md-8" style="border-right: 1px dotted grey;">
                      <h5><router-link to="/blog">Blog</router-link></h5>
                      <p>Original lessons about making the internet work for your business</p>
                      <h5><router-link to="/guide">Guide</router-link></h5>
                      <p>Big ideas in data collection, explained in simple English</p>
                    </div>
                    <div class="col-md-4 side">
                      <span>ABOUT US</span>
                      <h6><router-link to="/company">Company</router-link></h6>
                      <h6><router-link to="/careers">Careers</router-link></h6>
                      <h6><router-link to="/enterprise">Media Kit</router-link></h6>
                      <h6><router-link to="/pivacy-terms">Privacy & Terms</router-link></h6>
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
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">                
                <router-link to="/general-support" class="dropdown-item">General Support</router-link>
                <router-link to="/contact-us" class="dropdown-item">Contact Us</router-link>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/login" class="nav-link">Login</router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login">
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
  font-size: 16px;
  letter-spacing: -0.01em;
}

#nav a {
  color: #223D68;
}
</style>