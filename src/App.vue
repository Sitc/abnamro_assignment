<template>
  <div>
    <app-header :scrolled="scrolled" />
    <keep-alive include="HomeView">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>
<script lang="ts">
import {
  defineComponent,
  computed,
  reactive,
  ref,
  onMounted,
  onBeforeUnmount,
} from "vue";
import { useHead } from "@vueuse/head";
import AppHeader from "@/components/shared/AppHeader.vue";
export default defineComponent({
  components: {
    AppHeader,
  },
  setup() {
    let scrolled = ref<boolean>(false);
    const siteData = reactive({
      title: `ABN AMRO Tv series app`,
      description: `this app showcases how I can build an app using new technologies`,
    });
    onMounted(() => {
      window.addEventListener("scroll", () => {
        scrolled.value = window.scrollY > 0;
      });
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
    onBeforeUnmount(async () => {
      window.removeEventListener("scroll", () => {
        scrolled.value = window.scrollY > 0;
      });
    });
    return {
      scrolled,
    };
  },
});
</script>

<style>
@import "@/assets/base.css";
</style>
