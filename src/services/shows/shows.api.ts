import type { IShow } from "@/types/Show";
import axios from "axios";

const axiosClient = axios.create({
  baseURL: "https://api.tvmaze.com/",
});

export async function getAllShows() {
  try {
    const { data } = await axiosClient.get<IShow[]>("shows");
    return data;
  } catch (error) {
    return error;
  }
}
