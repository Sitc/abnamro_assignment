import { ref, computed, reactive } from "vue";
import axios from "axios";

export const useFetch = (url: string, config = { skip: false }) => {
  console.log(url);
  const data = ref(null);
  const response = ref(null);
  const error = ref(null);
  const loading = ref(false);
  const fetch = async () => {
    loading.value = true;
    try {
      const result = await axios.request({ url, ...config });
      data.value = result.data;
      response.value = result;
    } catch (error) {
      error.value = error;
      loading.value = false;
    } finally {
      loading.value = false;
    }
  };

  fetch();
  console.log(data);
  return { data, response, error, loading, fetch };
};

const cacheMap = reactive(new Map());

export const useFetchCache = (key, url, config) => {
  const info = useFetch(url, { skip: true, ...config });
  const update = () => cacheMap.set(key, info.response.value);
  const clear = () => cacheMap.set(key, undefined);

  const fetch = async () => {
    try {
      await info.fetch();
      update();
    } catch {
      clear();
    }
  };

  const response = computed(() => cacheMap.get(key));
  const data = computed(() => response.value?.data);
  if (response.value === null) fetch();

  return { ...info, fetch, data, response, clear };
};
