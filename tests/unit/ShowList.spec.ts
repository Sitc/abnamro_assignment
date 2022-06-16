import { shallowMount } from "@vue/test-utils";
import ShowList from "@/components/Home/ShowList.vue";

describe("ShowList.vue", () => {
  test("renders series title when passed", () => {
    const data = [{ name: "Show 1" }, { name: "Show 2" }];
    const wrapper = shallowMount(ShowList, {
      propsData: { data },
    });
    expect(wrapper.text()).toMatch(data[0].name);
  });
});
