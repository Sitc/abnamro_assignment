<script setup lang="ts">
import { defineProps } from "vue";
import type { IShow } from "@/types/Show";
import ShowCard from "./ShowCard.vue";

const props = defineProps<{
  data: IShow[];
}>();
</script>

<template>
  <div>
    <ul class="show--list">
      <ShowCard :data="data" />
    </ul>
  </div>
</template>

<style scoped>
@import "@/assets/showList.css";
</style>
