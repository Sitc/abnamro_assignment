<template>
  <div class="scrollableRow" v-if="list">
    <h2>{{ title }}</h2>

    <div class="scrollableRow--arrowleft" @click="handleLeftArrow">&#9664;</div>
    <div class="scrollableRow--arrowright" @click="handleRightArrow">
      &#x25B6;
    </div>

    <div class="scrollableRow--listarea">
      <div class="scrollableRow--list" :style="[listStyle]">
        <div
          class="scrollableRow--item"
          v-for="(item, index) in Object.values(list).flat()"
          :key="index"
          @click="handleItemClick(item)"
        >
          <img :src="item.image.medium" :alt="item.name" />
        </div>
      </div>
    </div>
  </div>
</template>
>

<script lang="ts">
import router from "@/router";
import { MutationTypes } from "@/store/mutation-types";

export default {
  name: "ScrollableList",
  props: {
    title: {
      type: String,
      default: "",
      required: true,
    },
    list: {
      type: Array,
      default: () => [],
      required: true,
    },
  },
  data: () => ({
    scrollX: 0,
  }),
  computed: {
    listStyle() {
      return {
        marginLeft: this.scrollX + "px",
        width: this.list.length * 150 + "px",
      };
    },
  },
  methods: {
    handleLeftArrow() {
      const userScreenSize = Math.round(window.innerWidth / 2);
      let roll = this.scrollX + userScreenSize;
      if (roll > 0) {
        roll = 0;
      }
      this.scrollX = roll;
    },
    handleRightArrow() {
      let listWidth = this.list.length * 150;
      const padding = 30;
      const userScreenSize = Math.round(window.innerWidth / 2);
      const remainingSpace = window.innerWidth - listWidth;
      let roll = this.scrollX - userScreenSize;
      if (remainingSpace > roll) {
        roll = remainingSpace - padding * 2;
      }
      this.scrollX = roll;
    },
    handleItemClick(item) {
      this.$store.commit(MutationTypes.SET_SELECTED_SHOW, item);
      router.push({ name: "series", params: { id: item.id } });
    },
  },
};
</script>

<style lang="scss">
.scrollableRow {
  margin-bottom: 30px;
  h2 {
    font-size: 2rem;
    margin: 0px 0px 0px 30px;
    color: var(--text-light);
  }
}

.scrollableRow--listarea {
  margin-left: 1.4rem;
  overflow-x: hidden;
}

.scrollableRow--list {
  width: auto;
  min-width: max-content;
  transition: all ease 0.5s;
}

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

.scrollableRow--arrowleft,
.scrollableRow--arrowright {
  position: absolute;
  width: 40px;
  height: 225px;
  background-color: rgba(0, 0, 0, 0.6);
  color: var(--text-light);
  z-index: 99;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;

  @media (max-width: 760px) {
    opacity: 1;
  }
}

.scrollableRow--arrowleft {
  left: 0;
}
.scrollableRow--arrowright {
  right: 0;
}

.scrollableRow:hover {
  .scrollableRow--arrowleft,
  .scrollableRow--arrowright {
    opacity: 1;
  }
}
</style>
