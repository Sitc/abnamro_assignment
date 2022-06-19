<template>
  <div>
    <featured-show :item="selectedShow" />
    <scrollable-list
      v-for="(list, index) in [data]"
      :key="index"
      :title="'Episodes'"
      :list="list"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, onBeforeMount, onMounted, ref } from "vue";
import { MutationTypes } from "../store/mutation-types";
import { ActionTypes } from "../store/action-types";
import FeaturedShow from "@/components/Details/FeaturedShow.vue";
import { useRoute } from "vue-router";
import { getSelectedShowEpisodes } from "@/services/shows/shows.api";
import ScrollableList from "@/components/shared/ScrollableList.vue";

export default defineComponent({
  components: { FeaturedShow, ScrollableList },
  name: "ShowView",
  computed: {
    selectedShow: {
      get() {
        return this.$store.state.selectedShow;
      },
      set() {
        this.$store.commit(MutationTypes.SET_SELECTED_SHOW, null);
      },
    },
  },
  getSelectedShow() {
    return this.$store.getters.getSelectedShow;
  },
  methods: {
    resetSelectedShow() {
      this.$store.commit(MutationTypes.SET_SELECTED_SHOW, null);
    },
    async getSelectedShow() {
      const result = await this.$store.dispatch(ActionTypes.GET_SELECTED_SHOW);
    },
  },
  setup() {
    const router = useRoute();
    let loading = ref<boolean>(false);
    let error = ref<string>("");
    let data = ref([]);

    onMounted(async () => {
      loading.value = true;
      try {
        const episodes = await getSelectedShowEpisodes(router.params.id);
        data.value = episodes;
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
