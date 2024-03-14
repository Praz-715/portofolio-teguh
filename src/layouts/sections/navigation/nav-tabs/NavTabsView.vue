<script setup>
import { onMounted } from "vue";

// Sections components
import BaseLayout from "../../components/BaseLayout.vue";

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
    <div
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
    </div>
    <p>hello {{ id }} {{ project }}</p>
    <!-- <View :title="ambilDataDariProps().title" id="tabs-simple">
      <TabsSimple />
    </View> -->
  </BaseLayout>
</template>
<style>
#gambar {
  width: -moz-available;
}
</style>
