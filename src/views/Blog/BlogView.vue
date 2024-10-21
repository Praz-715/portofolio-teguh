<script setup>
// example components
import NavbarBlog from "@/examples/navbars/NavbarBlog.vue";
import Header from "@/examples/Header.vue";

// sections
import Footer from "@/views/LandingPages/Author/Sections/AuthorFooter.vue";
import Profile from "@/views/LandingPages/Author/Sections/AuthorProfile.vue";
import Posts from "@/views/LandingPages/Author/Sections/AuthorPosts.vue";
import Contact from "@/views/LandingPages/Author/Sections/AuthorContact.vue";

// image
import image from "@/assets/img/city-profile.jpg";
</script>
<template>
  <div class="container position-sticky z-index-sticky top-0">
    <div class="row">
      <div class="col-12">
        <NavbarBlog :sticky="true" />
      </div>
    </div>
  </div>
  <Header>
    <div
      class="page-header min-height-400"
      :style="{ backgroundImage: `url(${image})` }"
      loading="lazy"
    >
      <span class="mask bg-gradient-dark opacity-8"></span>
    </div>
  </Header>
  <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
    <Profile />
    <Posts />
  </div>
  <Contact />
  <Footer />
</template>
