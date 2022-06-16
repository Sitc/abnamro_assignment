<template>
  <ul v-if="!loading && data && data.length">
    <li v-for="show of data" :key="show.id">
      <p>
        <strong>{{ show.name }}</strong>
      </p>
    </li>
  </ul>
</template>

<script lang="ts">
import type { IShow } from "@/types/Show";
import { defineComponent, PropType } from "vue";

export default defineComponent({
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

<style scoped></style>
