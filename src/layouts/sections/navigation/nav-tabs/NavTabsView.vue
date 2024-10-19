<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";
import ExampleCard from "../../../../views/Presentation/Components/ExampleCard.vue";

// images
import imgSigninCover from "@/assets/img/signin-cover.png";

// Nav tabs page components

// Nav tabs page components codes

//nav-pills
import setNavPills from "@/assets/js/nav-pills";
import data from "../../../../views/Presentation/Sections/Data/designBlocksData";

// import data from "./Sections/Data/designBlocksData";

// Mendefinisikan props
const props = defineProps({
  id: {
    type: String,
    required: true,
  },
});

const project = ambilDataDariProps();

// Lifecycle hook untuk melakukan perbandingan saat komponen selesai dipasang
onMounted(() => {
  setNavPills();
});

function ambilDataDariProps() {
  const combinedItems = data.reduce((combined, project) => {
    return combined.concat(project.items);
  }, []);
  const datanya = combinedItems;
  const datafilter = datanya.filter((o) => o.projectId == props.id);
  console.log(datafilter);
  return datafilter[0];
}
//hook
// onMounted(() => {
//   setNavPills();
// });
</script>

<template>
  <BaseLayout
    title="My Project"
    :breadcrumb="[{ label: 'Home', route: 'presentation' }, { label: id }]"
  >
    <section class="" id="tentang">
      <div class="container">
        <div class="row">
          <div class="row text-center my-sm-5 mt-5">
            <div class="col-lg-8 mx-auto">
              <h2 class="">{{ project.title }}</h2>
              <p class="lead">
                {{ project.subtitle }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="container mt-1">
        <div class="row">
          <div class="col-md-8">
            <p>Pekerjaan</p>
            <ul>
              <li v-for="(task, index) in project.pekerjaan" :key="index">
                {{ task }}
              </li>
            </ul>
          </div>
          <div class="col-md-3 mx-auto mt-md-0 mt-3">
            <div class="position-sticky" style="top: 100px !important">
              <img
                :src="ambilDataDariProps().image"
                id="gambar"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- <div
      class="position-relative border-radius-xl overflow-hidden shadow-lg mb-7"
    >
      <div class="container border-bottom">
        <div class="row justify-space-between py-2">
          <div class="col-lg-3 me-auto">
            <p class="lead text-dark pt-1 mb-0">
              {{ project.title }}
            </p>
          </div>
        </div>
      </div>
      <div class="tab-content tab-space">
        <div class="tab-pane active p-2" :id="`preview-${id}`">
          <div class="row">
            <div class="col-8">
              <h5>Project Name : {{ project.subtitle }}</h5>
              <p>Pekerjaan</p>
              <ul>
                <li v-for="(task, index) in project.pekerjaan" :key="index">
                  {{ task }}
                </li>
              </ul>
            </div>
            <div class="col-4">
              <img
                :src="ambilDataDariProps().image"
                id="gambar"
                alt=""
                srcset=""
              />
            </div>
          </div>
        </div>
      </div>
    </div> -->
    <p>hello {{ id }} {{ project }}</p>
  </BaseLayout>
</template>
<style>
#gambar {
  width: -moz-available;
}
</style>
