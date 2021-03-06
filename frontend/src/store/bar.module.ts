import ApiService, { BarsService } from "@/common/api.service";
import { ActionsType } from "./actions.type";
import { MutationsType } from "./mutations.type";

export interface State {
  Bar: any;
  Promotion: any;
}

export const InitialState: State = {
  Bar: {},
  Promotion : {}
};

export const actions = {


  async [ActionsType.ADD_BAR](context: any, credentials: string) {
    ApiService.setHeader();
    const { data } = await BarsService.createBar(credentials)
    context.commit(MutationsType.SET_BAR, data.bar);
  },
  async [ActionsType.FETCH_BAR](context: any, barSlug: any) {
    const { data } = await BarsService.getBar(barSlug);
    context.commit(MutationsType.SET_BAR, data);
    return data;
  },
  async [ActionsType.FETCH_PROMOTION](context: any, barSlug: any) {
    const { data } = await BarsService.getBarPromotion(barSlug);
    context.commit(MutationsType.SET_PROMOTION, data);
    return data;
  },
  async [ActionsType.FAVORITE_ADD](context: any, barSlug: any) {

    const { data } = await BarsService.addBarFavorite(barSlug);
    context.commit(MutationsType.SET_BAR, data.bar);
  },
  async [ActionsType.FAVORITE_REMOVE](context: any, barSlug: any) {
    const { data } = await BarsService.removeBarFavorite(barSlug);
    context.commit(MutationsType.SET_BAR, data.bar);
  },
};

export const mutations = {
  [MutationsType.SET_BAR](state: State, bar: any) {
    state.Bar = bar;
  },
  [MutationsType.SET_PROMOTION](state: State, promotion: any) {
    state.Promotion = promotion;
  },
};

const getters = {
  bar(state: State) {
    return state.Bar;
  },
  promotion(state: State) {
    return state.Promotion;
  },
};

export default {
  InitialState,
  actions,
  mutations,
  getters,
};
