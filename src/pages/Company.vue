<template>
	<div id="contact">
    	<nav-menu></nav-menu><hr/>

    	<section class="text-center section-1">
      	<div class="row">
      		<div class="col-md-3 col-xs-12 col-sm-12"></div>
      		<div class="col-md-6 col-xs-12 col-sm-12">
		      	<h1>Powering the new generation of data-driven organizations in Africa</h1>
		      	<p>Blueform is a technology company solving data collection and analysis problems for ambitious businesses in Africa. Our mission is to help businesses in Africa become data-driven.</p><br/>
		      </div>
		      <div class="col-md-3 col-xs-12 col-sm-12"></div>
		    </div>
    	</section>

    	<div class="section-2">
        <div style="padding: 150px;"></div>
    	</div>

      <section class="section-3">
        <div class="container">
            <div class="row">
              <div class="col-md-6 col-xs-12 col-sm-12 for-individual-background">
                <div style="padding: 150px;"></div>
              </div>
              <div class="col-md-6 col-xs-12 col-sm-12 content">
                  <h1>An accelerator for the next generation of data- driven businesses in Africa</h1>                  
                  <p>Blueform builds technology to help Africa’s new generation of businesses grow - from new startups to market leaders launching new products and business models.</p>  
                  <p>We make it easy for businesses to collect and analyse data from partners, field agents, customers, beneficiaries etc and then we provide tools to help you analyze such data for decision making.</p>
              </div>
            </div>
        </div>
      </section>

      <section class="team text-center">
        <div class="container">
            <div class="row">
              <div class="col-md-12">
                <h1>The Team</h1>
                <p>We’re a diverse, close-knit team on an adventure to build something <br/>enduring, while learning something new, every day.</p>
              </div>
            </div>
            <div class="row text-center" style="margin-top: 60px;">
              <div class="col-md-4 col-xs-12 col-sm-12">
                <img src="../assets/images/tochukwu.jpg" alt="tochukwu-ogesi" class="rounded-circle" />
                <h6>Tochukwu Egesi</h6>
                <p>CEO & Founder</p>
              </div>
              <div class="col-md-4 col-xs-12 col-sm-12">
                <img src="../assets/images/kelechi.jpg" alt="kelechi-ezenwaka" class="rounded-circle" />
                <h6>Kelechi Ezenwaka</h6>
                <p>CTO & Co-founder</p>
              </div>
              <div class="col-md-4 col-xs-12 col-sm-12">
                <img src="../assets/images/oby.jpg" alt="oby-azubuike" class="rounded-circle" />
                <h6>Oby Azubuike</h6>
                <p>Business</p>
              </div>
            </div>
            <div class="row text-center" style="margin-top: 60px;">
              <div class="col-md-4 col-xs-12 col-sm-12">
                <img src="../assets/images/isaac.jpg" alt="olalekan-isaac" class="rounded-circle" />
                <h6>Olalekan Isaac</h6>
                <p>Design</p>
              </div>
              <div class="col-md-4 col-xs-12 col-sm-12">
                <img src="../assets/images/destiny-ajakaiye.jpg" alt="destiny-ajakaiye" class="rounded-circle" />
                <h6>Destiny Ajakaiye</h6>
                <p>Engineering</p>
              </div>
              <div class="col-md-4 col-xs-12 col-sm-12">
                <img src="../assets/images/oby.jpg" alt="miracle-okeke" class="rounded-circle" />
                <h6>Miracle Okeke</h6>
                <p>Engineering</p>
              </div>
            </div>
        </div>
      </section><hr/>

      <section class="section-3">
        <div class="container">
            <div class="row">
              <div class="col-md-6 col-xs-12 col-sm-12 content">
                <h1>Vision</h1>
                <p>Every organization deserves to be data-driven</p>
                <h1>Mission</h1>                  
                <ul class="fa-ul">
                  <li><i class="fa-li fas fa-check"></i> Provide data technology</li>
                  <li><i class="fa-li fas fa-check"></i> Strengthen organizations on data science</li>
                  <li><i class="fa-li fas fa-check"></i> Support social development advocacy</li>
                  <li><i class="fa-li fas fa-check"></i> Conduct Data research</li>
                </ul><br/>
                <h1>Values</h1>                  
                <ul class="fa-ul">
                  <li><i class="fa-li fas fa-check"></i> <strong>Friendship:</strong> Friendship is an embodiment of so many values.</li>
                  <li><i class="fa-li fas fa-check"></i> <strong>Integrity:</strong> The supreme quality for leadership is unquestionably integrity.</li>
                  <li><i class="fa-li fas fa-check"></i> <strong>Accountability:</strong> “Each day you are leading by example. Whether you realize it or not or whether it&#39;s positive or negative, you are influencing those around you.”</li>
                  <li><i class="fa-li fas fa-check"></i> Growth and Learning: “It’s what you learn after you know it all that counts.</li>
                  <li><i class="fa-li fas fa-check"></i> <strong>Innovation:</strong> Our future growth relies on competitiveness and innovation, skills and productivity... and these, in turn, rely on the education of our people.</li>
                </ul><br/>
              </div>
              <div class="col-md-6 col-xs-12 col-sm-12 for-individual-background">
                <div style="padding: 150px;"></div>
              </div>
            </div>
        </div>
      </section>

    	<bottom-nav></bottom-nav>
    </div>
</template>

<script>
import NavMenu from "@/components/NavMenu";
import BottomNav from "@/components/BottomNav";

export default {
  name: "Company",
  components: {
    NavMenu,
    BottomNav
  }
};
</script>