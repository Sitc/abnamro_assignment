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

export async function getSelectedShow(id) {
  try {
    const { data } = await axiosClient.get<IShow[]>(`shows/${id}`);
    return data;
  } catch (error) {
    return error;
  }
}

export async function getSelectedShowEpisodes(id) {
  try {
    const { data } = await axiosClient.get(`shows/${id}/episodes`);
    return data;
  } catch (error) {
    return error;
  }
}
