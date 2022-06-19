import Vuex from "vuex";
import { mount, shallowMount } from "@vue/test-utils";
import ScrollableListItem from "@/components/shared/ScrollableListItem.vue";

describe("ScrollableListItem.vue", () => {
  let store;
  let mutations;

  beforeEach(() => {
    mutations = {
      MUTATION: jest.fn(),
    };
    store = new Vuex.Store({
      mutations,
    });
  });

  const list = [
    { name: "Show 1", image: { medium: "Show 1" } },
    { name: "Show 2", image: { medium: "Show 2" } },
  ];
  test("renders a list of images", async () => {
    const wrapper = shallowMount(ScrollableListItem, {
      propsData: {
        list,
      },
    });

    expect(wrapper.findAll('[data-test="show-item"]')).toHaveLength(2);
  });
  test("renders a list of images with a selected item", async () => {
    const wrapper = mount(ScrollableListItem, {
      propsData: {
        list,
        selectedItem: list[0],
      },
    });

    expect(wrapper.findAll('[data-test="show-item"]')).toHaveLength(2);
    expect(wrapper.find('[data-test="show-item"]').classes()).toContain(
      "scrollableRow--item"
    );
  });
});
