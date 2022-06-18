<template>
  <header :class="{ scrolled }">
    <nav role="navigation">
      <router-link :class="{ scrolled }" to="/">
        <h1>ABN AMRO Tv series app</h1>
      </router-link>
    </nav>
  </header>
</template>
>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  props: {
    scrolled: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
@import "@/assets/appHeader.css";
</style>
