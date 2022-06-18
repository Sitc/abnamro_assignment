<template>
  <div class="home__page--header">
    <form class="form">
      <input
        type="text"
        class="home__page--search"
        placeholder="Search for a TV series"
        v-model="search"
      />
    </form>
  </div>
  <section class="lists" v-if="moviesByCategory && search.length === 0">
    <scrollable-list
      v-for="(list, index) in moviesByCategory"
      :key="index"
      :title="Object.keys(list).join()"
      :list="list"
    />
  </section>
  <ShowList v-else :data="showList.value" />
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import ScrollableList from "@/components/shared/ScrollableList.vue";
import ShowList from "./ShowList.vue";
import extractGenres from "@/helper/extractGenres";
import generateNewListByGenre from "@/helper/generateNewListByGenre";
import { useStore } from "vuex";

export default defineComponent({
  name: "HomePage",
  components: {
    ShowList,
    ScrollableList,
  },
  setup() {
    const store = useStore();
    const allShows = computed(() => store.state.allShows);
    let search = ref<string>("");
    let selectedCategory = ref<string>("");
    let category = computed(() => extractGenres(allShows.value));
    let moviesByCategory = computed(() =>
      generateNewListByGenre(allShows.value, category.value)
    );

    const filteredList = computed(() =>
      allShows.value.filter((show) =>
        show.name.toLowerCase().includes(search.value.toLowerCase())
      )
    );

    const selectedCategoryFilter = computed(() =>
      search.value.length > 0
        ? filteredList.value.filter((show) =>
            show.genres.includes(selectedCategory.value)
          )
        : allShows.value.filter((show) =>
            show.genres.includes(selectedCategory.value)
          )
    );

    const showList = computed(() =>
      selectedCategory.value.length > 1 ? selectedCategoryFilter : filteredList
    );

    return {
      search,
      filteredList,
      category,
      selectedCategory,
      showList,
      moviesByCategory,
      allShows,
    };
  },
});
</script>

<style scoped>
@import "@/assets/home.css";
@import "@vueform/multiselect/themes/default.css";
</style>
