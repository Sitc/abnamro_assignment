<template>
  <ul class="show--list" v-if="!loading && data && data.length">
    <ShowCard :data="data" />
  </ul>
</template>

<script lang="ts">
import type { IShow } from "@/types/Show";
import { defineComponent, PropType } from "vue";
import ShowCard from "./ShowCard.vue";

export default defineComponent({
  components: {
    ShowCard,
  },
  props: {
    data: {
      type: Array as PropType<IShow[]>,
      required: true,
    },
    loading: {
      type: Boolean,
      required: true,
    },
  },
});
</script>

<style scoped>
@import "@/assets/showList.css";
</style>
