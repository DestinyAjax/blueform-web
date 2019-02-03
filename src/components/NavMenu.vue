<template>
  <div id="navbar">
      <nav class="navbar is-transparent is-fixed-top">
        <div class="container">
          <div class="navbar-brand">
            <a class="navbar-item" href="https://bulma.io">
              <img src="../assets/images/blueform-logo.png" alt="" width="200" height="108">
            </a>
            <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>

          <div id="navbarExampleTransparentExample" class="navbar-menu">
            <div class="navbar-start">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link link" href="">Why Blueform</a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item link" href="">Overview</a>
                  <hr class="navbar-divider">
                  <a class="navbar-item link" href="">
                    Elements
                  </a>
                  <a class="navbar-item link is-active" href="">Components</a>
                </div>
              </div>
              <a class="navbar-item link" href="#">Pricing</a>
              <div class="navbar-item link has-dropdown is-hoverable">
                <a class="navbar-link link" href="">Learn</a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item link" href="">
                    Overview
                  </a>
                  <hr class="navbar-divider">
                  <a class="navbar-item link" href="">
                    Elements
                  </a>
                  <a class="navbar-item link is-active" href="">Components</a>
                </div>
              </div>
            </div>

            <div class="navbar-end">
              <div class="navbar-item has-dropdown is-hoverable">
                <a class="navbar-link link" href="">Support</a>
                <div class="navbar-dropdown is-boxed">
                  <a class="navbar-item" href="">Overview</a>
                  <hr class="navbar-divider">
                  <a class="navbar-item" href="">
                    Elements
                  </a>
                  <a class="navbar-item is-active" href="">
                    Components
                  </a>
                </div>
              </div>
              <a class="navbar-item link" href="#">Learn</a>
              <div class="navbar-item">
                <div class="field is-grouped">
                  <p class="control">
                    <a class="button is-primary learn-more" href="">Create free account</a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
  </div>
</template>

<script>
export default {
	name: "NavMenu",
};
</script>

<style scoped>
nav {
  padding: 15px;
  color: #223D68;
  /**font-family: Montserrat**/;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  font-size: 20px;
  letter-spacing: -0.01em;
  color: #223D68;
}

#navbar .link {
  color: #223D68;
}

#navbar .learn-more {
  background: linear-gradient(90deg, #3C94EE 49%, #1558E5 104.42%);
  font-size: 20px;
  padding: 30px;
  border-radius: 27px;
}
</style>