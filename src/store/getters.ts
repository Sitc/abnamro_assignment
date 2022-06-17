import { GetterTree } from "vuex";
import { State } from "@/store/state";
import { IShow } from "@/types/Show";

export type Getters = {
  getSelectedShow(state: State): IShow;
};

export const getters: GetterTree<State, State> & Getters = {
  getSelectedShow: (state) => {
    return state.selectedShow;
  },
};
