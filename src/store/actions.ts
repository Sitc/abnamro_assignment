import { ActionTree, ActionContext } from "vuex";
import { State } from "@/store/state";
import { Mutations } from "./mutations";
import { ActionTypes } from "./action-types";
import { MutationTypes } from "./mutation-types";

type AugmentedActionContext = {
  commit<K extends keyof Mutations>(
    key: K,
    payload: Parameters<Mutations[K]>[1]
  ): ReturnType<Mutations[K]>;
} & Omit<ActionContext<State, State>, "commit">;

export interface Actions {
  [ActionTypes.GET_SELECTED_SHOW](
    { commit }: AugmentedActionContext,
    payload: number
  ): Promise<number>;
}

export const actions = {
  [ActionTypes.GET_SELECTED_SHOW]({ commit }) {
    return new Promise((resolve) => {
      setTimeout(() => {
        const data = 256;
        commit(MutationTypes.SET_SELECTED_SHOW, data);
        resolve(data);
      }, 500);
    });
  },
};
