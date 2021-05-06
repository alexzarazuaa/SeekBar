import ApiService, { BarsService } from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { ActionsType } from "./actions.type";
import { MutationsType } from "./mutations.type";

export interface State {
  Bar: any;
}

export const InitialState: State = {
  Bar: {},
};

export const actions = {


  [ActionsType.ADD_BAR](context: any, credentials: string) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      BarsService.createBar(credentials)
        .then(({ data }) => {
          console.log(data);
          context.commit(MutationsType.AD_BAR, data);
        })
        .catch(({ response }) => {
          context.commit(MutationsType.SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(MutationsType.PURGE_AUTH);
    }
  },
  async [ActionsType.FETCH_BAR](context: any, barSlug: any) {
    console.log(barSlug);
    const { data } = await BarsService.getBar(barSlug);
    console.log(data);
    context.commit(MutationsType.SET_BAR, data);
    return data;
  },
  async [ActionsType.FAVORITE_ADD](context: any, barSlug: any) {
    console.log("lo hara favorito");
    const { data } = await BarsService.addBarFavorite(barSlug);
    console.log(data);
    context.commit(MutationsType.SET_BAR, data.bar);
  },
  async [ActionsType.FAVORITE_REMOVE](context: any, barSlug: any) {
    console.log("entra borra fav");
    const { data } = await BarsService.removeBarFavorite(barSlug);
    //console.log(data);
    context.commit(MutationsType.SET_BAR, data.bar);
  },
};

export const mutations = {
  [MutationsType.SET_BAR](state: State, bar: any) {
    state.Bar = bar;
  },
};

const getters = {
  bar(state: State) {
    return state.Bar;
  },
};

export default {
  InitialState,
  actions,
  mutations,
  getters,
};
