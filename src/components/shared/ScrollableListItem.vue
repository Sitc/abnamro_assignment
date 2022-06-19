<template>
  <div
    class="scrollableRow--item"
    v-for="(item, index) in Object.values(list).flat()"
    :key="index"
    @click="handleItemClick(item)"
    data-test="show-item"
  >
    <img :src="item.image.medium" :alt="item.name" />
  </div>
</template>

<script>
import { MutationTypes } from "@/store/mutation-types";
import { useStore } from "vuex";
import router from "@/router";

export default {
  name: "ScrollableListItem",
  props: {
    list: {
      type: Object,
      required: true,
    },
  },
  setup() {
    const store = useStore();
    function handleItemClick(item) {
      store.commit(MutationTypes.SET_SELECTED_SHOW, item);
      router.push({ name: "series", params: { id: item.id } });
    }
    return {
      router,
      handleItemClick,
    };
  },
  methods: {},
};
</script>

<style lang="scss" scoped>
.scrollableRow--item {
  display: inline-block;
  width: 150px;
  cursor: pointer;
  img {
    width: 100%;
    transform: scale(0.9);
    transition: all ease 0.2s;

    &:hover {
      transform: scale(1);
    }
  }
}
</style>
