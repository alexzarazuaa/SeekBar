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
  [ActionsType.FETCH_PROFILE](context: any , username: any) {
    console.log(context,username)
    return ProfileService.getProfile(`profile/${context}/${username}`,"")
      .then(({ data }) => {
         console.log(data)
        context.commit(MutationsType.SET_PROFILE, data.profile);
        return data;
      })
      .catch((response) => {
        //  context.commit(MutationsType.SET_ERROR, response.data.errors)
      });
  },
};

const mutations = {
  [MutationsType.SET_ERROR] (state: any, error: any) {
    state.errors = error
  },
  [MutationsType.SET_PROFILE](state: any, profile:  any) {
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