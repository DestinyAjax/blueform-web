<template>
	<section class="covered">
        <div class="container">
          <h1>You are covered</h1>
          <p>Join other organizations who trust Blueform to make work easy for them and save cost.</p>
          <div class="row" style="margin-top: 40px;">
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="col-md-12 col-xs-12 col-sm-12 card">
                <p><img src="../assets/images/icon-01.png" /></p>
                <h2>Blueform for <br/>individuals</h2>
                <p>We help individuals conduct surveys and conduct data collection exercise anywhere in Africa with or without the internet.</p>
                <h6><router-link to="/"><i class="fas fa-check-circle"></i> Learn More</router-link></h6>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="col-md-12 col-xs-12 col-sm-12 card">
                <p><img src="../assets/images/icon-02.png" /></p>
                <h2>Blueform for <br/>Non-profits</h2>
                <p>We make data collection, monitoring and evaluation easy and less expensive <br/>for non-profits</p>
                <h6>
                  <router-link to="/"><i class="fas fa-check-circle"></i> Learn More</router-link>
                </h6>
              </div>
            </div>
            <div class="col-md-4 col-xs-12 col-sm-12">
              <div class="col-md-12 col-xs-12 col-sm-12 card">
                <p><img src="../assets/images/icon-03.png" /></p>
                <h2>Blueform for <br/>Businesses</h2>
                <p>We make data collection, monitoring and evaluation easy and less expensive for businesses of all sizes.</p>
                <h6>
                  <router-link to="/"><i class="fas fa-check-circle"></i> Learn More</router-link>
                </h6>
              </div>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
export default {
  name: "YouAreCovered",
};
</script>

<style scoped>
.covered {
  background-color: #F8FEFF;
  padding-top: 35px;
  padding-bottom: 30px;
}

.covered h1 {
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  font-size: 30px;
  text-align: left;
  letter-spacing: -0.01em;
  color: #223D68;
  margin-bottom: 20px;
}

.covered h2 {
  font-style: normal;
  font-weight: 600;
  line-height: 40px;
  font-size: 30px;
  letter-spacing: -0.01em;
  color: #223D68;
  text-align: left;
  margin-bottom: 20px;
}

.covered img {
  margin-bottom: 10px;
  width: 132px;
  height: 122px;
  text-align: left;
}

.covered p {
  font-family: Overpass;
  font-style: normal;
  line-height: 26px;
  font-size: 16px;
  text-align: left;
  letter-spacing: 0.01em;
  color: #6F7E83;
}

.covered .card p {
  font-family: Overpass;
  font-style: normal;
  line-height: 26px;
  font-size: 18px;
  text-align: left;
  letter-spacing: 0.01em;
  color: #6F7E83;
}

.covered .card h6 {
  font-weight: 600;
  line-height: 40px;
  font-size: 16px;
  letter-spacing: -0.01em;
  color: #223D68;
  text-align: left;
  margin-top: 20px;
}

.covered .card a {
  color: #223D68;
}

.covered .card a:hover {
  text-decoration: none;
  color: #1ABC9C;
}

.covered .card {
  padding: 30px;
  background-color: white;
  border-radius: 8px;
  margin-bottom: 30px;
}
</style>