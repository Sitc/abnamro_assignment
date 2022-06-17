<script setup lang="ts">
import { defineProps } from "vue";
import type { IShow } from "@/types/Show";
import ShowCard from "./ShowCard.vue";
import LoadingScreen from "../Loading/LoadingScreen.vue";

const props = defineProps<{
  data: IShow[];
  loading: boolean;
}>();
</script>

<template>
  <div>
    <Suspense>
      <ul class="show--list">
        <ShowCard :data="data" />
      </ul>
      <template #fallback>
        <LoadingScreen :isLoading="loading" />
      </template>
    </Suspense>
  </div>
</template>

<style scoped>
@import "@/assets/showList.css";
</style>
