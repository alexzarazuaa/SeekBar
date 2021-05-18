import ApiService, { ProfileService } from "@/common/api.service";
import { ActionsType } from "./actions.type";
import { MutationsType } from "./mutations.type";

const state = {
  errors: {},
  profile: {}
};

const getters = {
  profile(state: any) {
    return state.profile;
  }
};

const actions = {
  async [ActionsType.FETCH_PROFILE](context: any, params: any) {
    const { data } = await ProfileService.getProfile(`${params.checkType}/${params.username}`, "")
    context.commit(MutationsType.SET_PROFILE, data);
    return data;
  },

};

const mutations = {
  [MutationsType.SET_ERROR](state: any, error: any) {
    state.errors = error
  },
  [MutationsType.SET_PROFILE](state: any, profile: any) {
    state.profile = profile;
    state.errors = {};
  }
};

export default {
  state,
  actions,
  mutations,
  getters
};