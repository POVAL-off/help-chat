<template>
  <div class="app">
    <Head />

    <div class="custom-page">
      <div class="custom-page__bg message-page__bg"></div>
      <div class="container medium">
        <HelpChat />
      </div>
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import Head from "./components/Head.vue";
import Footer from "./components/Footer.vue";
import HelpChat from "./components/help-chat/HelpChat.vue";

export default defineComponent({
  name: "App",
  components: {
    Head,
    Footer,
    HelpChat,
  },
  setup() {
  },
});
</script>

<style lang="scss">
</style>
