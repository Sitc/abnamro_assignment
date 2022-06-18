<script setup lang="ts">
import { IShow } from "@/types/Show";
import { ref, onMounted, computed } from "vue";
import { useStore } from "vuex";
import HomePage from "@/components/Home/HomePage.vue";
import LoadingScreen from "@/components/Loading/LoadingScreen.vue";
import { getAllShows } from "@/services/shows/shows.api";
import { MutationTypes } from "@/store/mutation-types";

const data = ref<IShow[]>(null);
const loading = ref<boolean>(true);
const error = ref(null);
const store = useStore();
const allShows = computed(() => store.state.allShows);
onMounted(async () => {
  loading.value = true;
  try {
    const shows = await getAllShows();
    data.value = shows as IShow[];
    store.commit(MutationTypes.SET_ALL_SHOWS, shows);
    loading.value = false;
  } catch (e) {
    error.value = e as string;
  } finally {
    loading.value = false;
  }
});
</script>

<template>
  <Suspense>
    <template #fallback>
      <LoadingScreen v-if="loading" />
    </template>
    <div v-if="allShows" class="home__page">
      <HomePage :data="allShows" />
    </div>
  </Suspense>
</template>
