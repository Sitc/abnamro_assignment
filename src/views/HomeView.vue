<template>
  <div class="home__page">
    <HomePage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomePage from "@/components/Home/HomePage.vue";

export default defineComponent({
  name: "HomeView",
  components: {
    HomePage,
  },
});
</script>

<style scoped>
@import "@/assets/home.css";
</style>
