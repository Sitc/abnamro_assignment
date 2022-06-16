<template>
  <div class="home__page">
    <ShowList :data="data" :loading="loading" />
    <p v-if="loading">Still Loading</p>
    <p v-if="error"></p>
  </div>
</template>

<script lang="ts">
import type { IShow } from "@/types/Show";
import { defineComponent, ref, onMounted } from "vue";
import { getAllShows } from "@/services/shows/shows.api";
import ShowList from "./ShowList.vue";

export default defineComponent({
  name: "HomePage",
  components: {
    ShowList,
  },
  setup() {
    let loading = ref<boolean>(false);
    let error = ref<string>("");
    let data = ref<IShow[]>([]);

    onMounted(async () => {
      loading.value = true;
      try {
        const shows = await getAllShows();
        data.value = shows as IShow[];
        loading.value = false;
      } catch (e) {
        error.value = e as string;
      } finally {
        loading.value = false;
      }
    });
    return {
      loading,
      error,
      data,
    };
  },
});
</script>

<style scoped></style>
