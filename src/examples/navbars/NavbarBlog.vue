<script setup>
import { useRouter } from 'vue-router'; // Import router untuk navigasi
import { ref, watch } from 'vue';
import { useWindowsWidth } from '../../assets/js/useWindowsWidth';

const props = defineProps({
  transparent: {
    type: Boolean,
    default: false,
  },
  light: {
    type: Boolean,
    default: false,
  },
  dark: {
    type: Boolean,
    default: false,
  },
  sticky: {
    type: Boolean,
    default: false,
  },
  darkText: {
    type: Boolean,
    default: false,
  },
});

const goBack = () => {
  router.go(-1);
};

// set nav color on mobile && desktop

let textDark = ref(props.darkText);
const { type } = useWindowsWidth();

if (type.value === "mobile") {
  textDark.value = true;
} else if (type.value === "desktop" && textDark.value == false) {
  textDark.value = false;
}

watch(
  () => type.value,
  (newValue) => {
    if (newValue === "mobile") {
      textDark.value = true;
    } else {
      textDark.value = false;
    }
  }
);
</script>

<template>
  <nav class="navbar top-0" :class="{
    'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
      props.transparent,
    'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
      props.sticky,
    'navbar-light bg-white py-3': props.light,
    ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark,
  }">
    <div :class="props.transparent || props.light || props.dark
      ? 'container'
      : 'container-fluid px-0'
      ">
      <a @click="goBack" class="navbar-brand d-none d-md-block" :class="[
        (props.transparent && textDark.value) || !props.transparent
          ? 'text-dark font-weight-bolder ms-sm-3'
          : 'text-white font-weight-bolder ms-sm-3',
      ]" href="#" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
        <span class="material-icons">arrow_back</span>
      </a>
      <a @click="goBack" class="navbar-brand d-block d-md-none" :class="props.transparent || props.dark
        ? 'text-white'
        : 'font-weight-bolder ms-sm-3'
        " href="#" rel="tooltip" title="Designed and Coded by Creative Tim" data-placement="bottom">
        <span class="material-icons">arrow_back</span>
      </a>
      <h4 class="m-0" :class="[
        (props.transparent && textDark.value) || !props.transparent
          ? 'text-dark'
          : 'text-white',
      ]">Welcome to Om Guh Blog</h4>

      <div class="invisible">
        <span class="material-icons">arrow_back</span>
      </div>
    </div>
  </nav>
  <!-- <nav class="navbar navbar-expand-lg top-0" :class="{
    'z-index-3 w-100 shadow-none navbar-transparent position-absolute my-3':
      props.transparent,
    'my-3 blur border-radius-lg z-index-3 py-2 shadow py-2 start-0 end-0 mx-4 position-absolute mt-4':
      props.sticky,
    'navbar-light bg-white py-3': props.light,
    ' navbar-dark bg-gradient-dark z-index-3 py-3': props.dark
  }">
    <div :class="props.transparent || props.light || props.dark
        ? 'container'
        : 'container-fluid px-0'
      ">
      <button class="btn btn-back" @click="goBack">
        <span class="material-icons">arrow_back</span>
      </button>
    </div>
  </nav> -->
</template>
