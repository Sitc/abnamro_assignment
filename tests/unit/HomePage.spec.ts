import { shallowMount, flushPromises } from "@vue/test-utils";
import HomePage from "@/components/Home/HomePage.vue";

describe("HomePage.vue", () => {
  const axios = {
    get: async () => ({
      data: [{ name: "Show 1" }, { name: "Show 2" }],
    }),
  };
  it("test description", async () => {
    const wrapper = shallowMount(HomePage, {
      global: {
        mocks: {
          axios: axios,
        },
      },
    } as any);
    expect(wrapper.html()).toMatchSnapshot();
    await flushPromises();
    expect(wrapper.html()).toMatchSnapshot();
  });
});
