import { shallowMount } from "@vue/test-utils";
import ShowCard from "@/components/Home/ShowCard.vue";

describe("ShowCard.vue", () => {
  const data = [
    { name: "Show 1", image: { medium: "Show 1" } },
    { name: "Show 2", image: { medium: "Show 2" } },
  ];
  test("renders series image when passed", () => {
    const wrapper = shallowMount(ShowCard, {
      propsData: { data },
    });
    expect(wrapper.text()).toMatch(data[0].image.medium);
  });
  test("renders series title when passed", () => {
    const wrapper = shallowMount(ShowCard, {
      propsData: { data },
    });
    expect(wrapper.text()).toMatch(data[0].name);
  });
});
