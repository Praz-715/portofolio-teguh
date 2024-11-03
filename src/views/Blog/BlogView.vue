<script setup>
// example components
import NavbarBlog from "@/examples/navbars/NavbarBlog.vue";
import Header from "@/examples/Header.vue";

// sections
import Footer from "@/views/LandingPages/Author/Sections/AuthorFooter.vue";
import Profile from "@/views/LandingPages/Author/Sections/AuthorProfile.vue";
import Posts from "@/views/LandingPages/Author/Sections/AuthorPosts.vue";
import Contact from "@/views/LandingPages/Author/Sections/AuthorContact.vue";

import { ref, onMounted, watch } from 'vue';
import { marked } from 'marked';
import DOMPurify from 'dompurify';
import MarkdownIt from 'markdown-it';
import hljs from 'highlight.js'; // Import Highlight.js



const markdownContent = ref('');
const htmlContent = ref('');
const isLoading = ref(true);
const error = ref(null);

const md = new MarkdownIt({
  highlight: (str, lang) => {
    if (lang && hljs.getLanguage(lang)) {
      try {
        return `<div class="code-block"><pre class="hljs"><code>${hljs.highlight(str, { language: lang }).value}</code></pre><button class="copy-btn">Copy</button></div>`;
      } catch (_) {}
    }
    return `<div class="code-block"><pre class="hljs"><code>${md.utils.escapeHtml(str)}</code></pre><button class="copy-btn">Copy</button></div>`;
  },
});

async function fetchMarkdown() {
  try {
    const response = await fetch(
      'https://raw.githubusercontent.com/Praz-715/my-documentaion/main/Docker%20MongoDB%20Replica.md'
    );
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const text = await response.text();
    markdownContent.value = text;
  } catch (err) {
    error.value = err.message;
  } finally {
    isLoading.value = false;
  }
}

function addCopyListeners() {
  const buttons = document.querySelectorAll('.copy-btn');
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      const code = button.previousElementSibling.textContent;
      navigator.clipboard.writeText(code).then(() => {
        button.textContent = 'Copied!';
        button.classList.add('copied');
        setTimeout(() => {
          button.textContent = 'Copy';
          button.classList.remove('copied');
        }, 2000);
      });
    });
  });
}

watch(markdownContent, (newContent) => {
  htmlContent.value = md.render(newContent);
  onMounted(() => {
    addCopyListeners(); // Pastikan listener dipanggil setelah render
  });
});

onMounted(() => {
  fetchMarkdown();
});

// onMounted(() => {
//     addCopyListeners(); // Tambahkan event listener untuk tombol copy
//     fetchMarkdown();
//     htmlContent.value = md.render(markdownContent.value);
// });
// onMounted(() => {
// });


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
        <div class="page-header min-height-400" :style="{ backgroundImage: `url(${image})` }" loading="lazy">
            <span class="mask bg-gradient-dark opacity-8"></span>
            <div class="container">
                <div class="row">
                    <div class="col-lg-7 text-center mx-auto position-relative">
                        <h1 class="text-white pt-3 mt-n5 me-2" :style="{ display: 'inline-block ' }">
                            Material Kit 2
                        </h1>
                        <p class="lead text-white px-5 mt-3" :style="{ fontWeight: '500' }">
                            Start the Development With Bootstrap 5 Design System inspired by
                            Material Design.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </Header>
    <div class="card card-body blur shadow-blur mx-3 mx-md-4 mt-n6 mb-4">
        <Profile />
        <div class="container mt-5">
            <div v-if="isLoading">Loading...</div>
            <div v-else-if="error">Error: {{ error }}</div>
            <div v-else v-html="htmlContent" class="markdown-body"></div> <!-- Render HTML hasil konversi -->
        </div>
        <Posts />
    </div>
    <Contact />
    <Footer />
</template>
<style scoped>
/* Styling Markdown dan Blok Kode */
.markdown-body pre {
  position: relative;
  padding: 16px;
  border-radius: 8px;
  background-color: #2d2d2d;
  color: #f8f8f2;
  overflow-x: auto;
  font-family: 'Courier New', monospace;
}

/* Gaya Tombol Copy */
.copy-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: #4caf50;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 5px 10px;
  cursor: pointer;
  font-size: 12px;
  transition: background-color 0.3s, transform 0.2s;
}

/* Hover Effect untuk Tombol Copy */
.copy-btn:hover {
  background-color: #45a049;
  transform: scale(1.05);
}

/* Animasi Tombol saat Disalin */
.copied {
  background-color: #3e8e41 !important;
  animation: bounce 0.3s ease-out;
}

/* Animasi Bounce */
@keyframes bounce {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}

/* Styling Blok Kode */
.code-block {
  position: relative;
  margin-bottom: 20px;
}
</style>