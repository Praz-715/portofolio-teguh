<script setup>
import { onMounted, ref } from "vue";

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

const isEnglish = ref(true); // Default bahasa Inggris
const listpekerjaan = ref([]); // Reactive array untuk pekerjaan
const project = ambilDataDariProps(); // Ambil data project berdasarkan props
console.log(project)
// Fungsi untuk memperbarui konten berdasarkan bahasa
const updateContent = () => {
  const lang = isEnglish.value ? "en" : "id";
  if (project && project.pekerjaan[lang]) {
    listpekerjaan.value = project.pekerjaan[lang] || [];
  }
};

// Lifecycle hook untuk menjalankan fungsi setelah komponen dipasang
onMounted(() => {
  setNavPills();
  updateContent(); // Memanggil updateContent saat komponen dimuat
});

// Fungsi untuk mengambil data dari props
function ambilDataDariProps() {
  const combinedItems = data.reduce((combined, project) => {
    return combined.concat(project.items);
  }, []);
  const datafilter = combinedItems.filter((o) => o.projectId == props.id);
  console.log(datafilter); // Debugging output
  return datafilter[0] || {}; // Kembalikan objek kosong jika tidak ditemukan
}
</script>

<template>
  <BaseLayout title="My Project" :breadcrumb="[{ label: 'Home', route: 'presentation' }, { label: id }]">
    <section class="" id="tentang">
      <div class="container">
        <div class="row">
          <div class="col text-center my-sm-5 mt-5">
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
            <p>Job details</p>
            <div class="presentation-container" @mouseover="isEnglish = false; updateContent()"
              @mouseleave="isEnglish = true; updateContent()">
              <ul>
                <li v-for="(task, index) in listpekerjaan" :key="index">
                  {{ task }}
                </li>
              </ul>
            </div>
          </div>
          <div class="col-md-3 mx-auto mt-md-0 mt-3">
            <div class="position-sticky" style="top: 100px !important">
              <img :src="ambilDataDariProps().image" id="gambar" alt="" srcset="" />
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
    <!-- <p>hello {{ id }} {{ project }}</p> -->
  </BaseLayout>
</template>
<style>
#gambar {
  width: -moz-available;
}
</style>
<style scoped>
/* Gaya font untuk desktop (min-width 992px) */
@media (min-width: 992px) {
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  p.lead {
    font-size: 1.25rem;
    line-height: 1.75;
  }

  li {
    text-align: justify;
    /* Justify alignment untuk rata kiri-kanan */
  }
}

/* Gaya font untuk mobile (max-width 991px) */
@media (max-width: 991px) {
  h2 {
    font-size: 1.5rem;
    font-weight: 600;
  }

  h3 {
    font-size: 1rem;
    font-weight: 600;
  }

  p.lead {
    font-size: 0.85rem;
    line-height: 1.5;
  }

  li {
    text-align: justify;
    /* Justify alignment untuk rata kiri-kanan */
  }
}
</style>