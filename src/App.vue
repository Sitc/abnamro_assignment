<template>
  <nav role="navigation">
    <router-link to="/">ABN AMRO Tv series app</router-link>
  </nav>
  <router-view />
</template>
<script lang="ts">
import { defineComponent, computed, reactive } from "vue";
import { useHead } from "@vueuse/head";

export default defineComponent({
  setup() {
    const siteData = reactive({
      title: `AN AMRO Tv series app`,
      description: `this app showcases how I can build an app using new technologies`,
    });

    useHead({
      htmlAttrs: { lang: "en" },
      title: computed(() => siteData.title),
      meta: [
        {
          name: `description`,
          content: computed(() => siteData.description),
        },
      ],
    });
  },
});
</script>

<style>
@import "@/assets/base.css";
</style>
