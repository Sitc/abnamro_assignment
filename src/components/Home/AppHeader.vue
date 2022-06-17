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

<style>
header {
  position: fixed;
  z-index: 9999;
  top: 0;
  right: 0;
  left: 0;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4rem;
  background: transparent;
  transition: all ease 0.2s;
}

header.scrolled {
  background: var(--background-dark);
}

a {
  height: 25px;
  all: unset;
  color: var(--text-light);
}
</style>
