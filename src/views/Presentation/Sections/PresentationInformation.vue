<script setup>
import { onMounted } from "vue";
import RotatingCard from "../../../examples/cards/rotatingCards/RotatingCard.vue";
import RotatingCardFront from "../../../examples/cards/rotatingCards/RotatingCardFront.vue";
import RotatingCardBack from "../../../examples/cards/rotatingCards/RotatingCardBack.vue";
// import DefaultInfoCard from "../../../examples/cards/infoCards/DefaultInfoCard.vue";
import Typed from "typed.js";

import vueBangke from "@/assets/img/foto1.jpg";
import vueBangkes from "@/assets/img/foto2.jpg";

//hooks
onMounted(() => {
  if (document.getElementById("typed")) {
    // eslint-disable-next-line no-unused-vars
    var typed = new Typed("#typed", {
      stringsElement: "#typed-strings",
      typeSpeed: 90,
      backSpeed: 90,
      backDelay: 200,
      startDelay: 500,
      loop: true,
    });
  }
});
</script>
<template>
  <section class="my-5 py-5" id="home">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-lg-4 ms-auto me-auto p-lg-4 mt-lg-0 mt-4">
          <RotatingCard>
            <RotatingCardFront
              :image="vueBangke"
              icon="touch_app"
              title="Feel the <br /> Material Kit"
              description="All the Bootstrap components that you need in a development have been
        re-design with the new look."
            />

            <RotatingCardBack
              :image=vueBangkes
              title="Discover More"
              description="You will save a lot of time going from prototyping to full-functional
                code because all elements are implemented."
              :action="[
                {
                  route: './/sections/page-sections/hero-sections.html',
                  label: 'Start with Headers',
                },
              ]"
            />
          </RotatingCard>
        </div>
        <div class="col-lg-6 ms-auto">
        <div class="row">
          <div class="col text-center mx-auto position-relative">
            <h1
              class="text-white pt-3 mt-5 me-2"
              :style="{ display: 'inline-block ' }"
            >
              Teguh Prasetyo
            </h1>
            <h1 class="text-white">
              <span class="text-white" id="typed"></span>
            </h1>
            <div id="typed-strings">
              <!-- <h1>Programmer</h1>
              <h1>Engineer</h1>
              <h1>Infrastucture Engineer</h1> -->
              <h1>Database Administrator</h1>
              <h1>Data Engineering</h1>
              <!-- <h1>Data Analyst</h1>
              <h1>Data ETL</h1>
              <h1>Data Visualization</h1> -->
              
            </div>
            <!-- <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
              Start the Development With Bootstrap 5 Design System inspired by
              Material Design.
            </p> -->
          </div>
        </div>
        </div>
      </div>
    </div>
  </section>
</template>
