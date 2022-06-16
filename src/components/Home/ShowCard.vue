<template>
  <li class="show--list_item" v-for="show of data" :key="show.id">
    <div className="card">
      <div className="poster">
        <img
          :src="show.image.medium"
          :alt="`${show.name} poster`"
          className="poster--img"
        />
      </div>
      <div className="card--info">
        <p className="card--title " id="show-title">{{ show.name }}</p>
      </div>
    </div>
  </li>
</template>

<script lang="ts">
import type { IShow } from "@/types/Show";
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "ShowCard",
  props: {
    data: {
      type: Array as PropType<IShow[]>,
      required: true,
    },
  },
});
</script>

<style scoped>
@import "@/assets/showListItem.css";
</style>
