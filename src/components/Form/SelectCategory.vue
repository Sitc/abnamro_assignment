<template>
  <div>
    <Multiselect
      v-model="value"
      :options="options"
      placeholder="Select a category"
      @change="bubbleEvent"
    />
  </div>
</template>

<script lang="ts">
import Multiselect from "@vueform/multiselect";
import { PropType, defineComponent } from "vue";

export default defineComponent({
  name: "ShowCard",
  emits: ["updateSelectedCategory"],
  components: {
    Multiselect,
  },
  data() {
    return {
      value: [],
    };
  },
  props: {
    options: {
      type: Array as PropType<string[]>,
      required: true,
    },
    selectedCategory: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props, { emit }) {
    function bubbleEvent(value: string) {
      console.log(value);
      emit("updateSelectedCategory", value);
    }
    return {
      bubbleEvent,
    };
  },
});
</script>

<style src="@vueform/multiselect/themes/default.css"></style>
