import { MutationTree } from "vuex";
import { MutationTypes } from "./mutation-types";
import { State } from "@/store/state";
import { IShow } from "@/types/Show";

export type Mutations<S = State> = {
  [MutationTypes.SET_SELECTED_SHOW](state: S, payload: IShow): void;
  [MutationTypes.SET_ALL_SHOWS](state: S, payload: IShow[]): void;
};

export const mutations: MutationTree<State> & Mutations = {
  [MutationTypes.SET_SELECTED_SHOW](state, payload: IShow) {
    state.selectedShow = payload;
  },
  [MutationTypes.SET_ALL_SHOWS](state, payload: IShow[]) {
    state.allShows = payload;
  },
};
