<template>
    <nav id="nav" class="navbar navbar-expand-lg fixed-top">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand">
          <img src="../assets/images/blueform-logo.png" style="width: 200px;">
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon" style="border: 1px solid grey;"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Why Bluform
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <router-link to="/why-choose-us"><a class="dropdown-item">Why Choose Blueform</a></router-link>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item active">
              <a class="nav-link" href="#">Pricing <span class="sr-only">(current)</span></a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Learn
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
          </ul>
          <ul class="nav navbar-nav navbar-right">
            <li class="nav-item dropdown pull-right">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Support
              </a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                <a class="dropdown-item" href="#">Action</a>
                <router-link to="/about"><a class="dropdown-item">Another action</a></router-link>
                <div class="dropdown-divider"></div>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <router-link to="/login"><a class="nav-link">Login</a></router-link>
            </li>
            <li class="nav-item">
              <router-link to="/login"><a class="button is-primary learn-more" href="">Create free account</a></router-link>
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
  padding-right: 80px;
  padding-left: 80px;
  padding-top: 30px;
  color: #223D68;
  /**font-family: Montserrat**/;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 20px;
  letter-spacing: -0.01em;
}

#nav a {
  color: #223D68;
}

#nav ul li {
  margin-right: 40px;
}

#nav .learn-more {
  background: linear-gradient(90deg, #3C94EE 49%, #1558E5 104.42%);
  font-size: 20px;
  padding: 30px;
  border-radius: 27px;
  color: white;
}
</style>