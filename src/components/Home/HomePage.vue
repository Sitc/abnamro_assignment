<template>
  <div class="home__page--content">
    <header class="header">
      <h1 class="home__page--title">All TV series</h1>
      <form class="form">
        <input
          type="text"
          class="home__page--search"
          placeholder="Search for a TV series"
          v-model="search"
        />
        <Multiselect
          class="home__page--select"
          v-model="selectedCategory"
          :options="category"
          :placeholder="'placeholder'"
        />
      </form>
    </header>
    <ShowList :data="showList.value" :loading="loading" :error="error" />
  </div>
</template>

<script lang="ts">
import type { IShow } from "@/types/Show";
import { defineComponent, ref, onMounted, computed } from "vue";
import { getAllShows } from "@/services/shows/shows.api";
import Multiselect from "@vueform/multiselect";
import ShowList from "./ShowList.vue";
import extractGenres from "@/helper/extractGenres";

export default defineComponent({
  name: "HomePage",
  components: {
    ShowList,
    Multiselect,
  },
  setup() {
    let loading = ref<boolean>(false);
    let error = ref<string>("");
    let data = ref<IShow[]>([]);
    let search = ref<string>("");
    let selectedCategory = ref<string>("");
    let category = computed(() => extractGenres(data.value));

    const filteredList = computed(() =>
      data.value.filter((show) =>
        show.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    const selectedCategoryFilter = computed(() =>
      search.value.length > 0
        ? filteredList.value.filter((show) =>
            show.genres.includes(selectedCategory.value)
          )
        : data.value.filter((show) =>
            show.genres.includes(selectedCategory.value)
          )
    );

    const showList = computed(() =>
      selectedCategory.value.length > 1 ? selectedCategoryFilter : filteredList
    );

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
      search,
      filteredList,
      category,
      selectedCategory,
      showList,
    };
  },
});
</script>

<style scoped>
@import "@/assets/home.css";
@import "@vueform/multiselect/themes/default.css";
</style>
