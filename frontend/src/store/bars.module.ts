import ApiService, { BarsService } from "@/common/api.service";
import { ActionsType } from "./actions.type";
import { MutationsType } from "./mutations.type";

export interface State {
  Bars: any[];
  Promotions: any[];
  IsLoading: boolean;
  BarsCount: number;
  PromotionsCount: number;
  Next: null;
  Previous: null;
}

export const initialState: State = {
  Bars: [],
  Promotions: [],
  IsLoading: false,
  BarsCount: 0,
  PromotionsCount: 0,
  Next: null,
  Previous: null,
};

const getters = {
  barsCount: (initialState: any) => {
    return initialState.BarsCount;
  },
  bars: (initialState: any) => {
    return initialState.Bars;
  },
  promotionsCount: (initialState: any) => {
    return initialState.PromotionsCount;
  },
  promotions: (initialState: any) => {
    return initialState.Promotions;
  },

  previous(state: any) {
    return state.Bars.previous;
  },

  next(state: any) {
    return state.Bars.next;
  },

  isLoading: (initialState: any) => {
    return initialState.IsLoading;
  },
};

const actions = {

  async [ActionsType.FETCH_BARS]({ commit }: any, params: any) {
    commit(MutationsType.FETCH_START);
    await BarsService.getBars()
      .then(({ data }: any) => {
        commit(MutationsType.FETCH_END, data);
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  },

  async [ActionsType.FETCH_PROMOTIONS]({ commit }: any, params: any) {
    commit(MutationsType.FETCH_START);
    await BarsService.getPromotions()
      .then(({ data }: any) => {
        console.log(data)
        commit(MutationsType.FETCH_END, data);
      })
      .catch((error: any) => {
        throw new Error(error);
      });
  },



};

const mutations = {
  [MutationsType.FETCH_START](state: any) {
    state.IsLoading = true;
  },
  [MutationsType.FETCH_END](state: any, { results, barsCount }: any) {
    state.Bars = results;
    state.Promotions = results;
    state.BarsCount = barsCount;
    state.isLoading = false;
  },
  [MutationsType.UPDATE_BAR_IN_LIST](state: any, data: any) {
    state.Bars = state.Bars.map((bar: any) => {
      if (bar.slug !== data.slug) {
        return bar;
      }
      bar.favorited = data.favorited;
      bar.favoritesCount = data.favoritesCount;
      return bar;
    });
  },
  [MutationsType.UPDATE_PROMOTIONS_IN_LIST](state: any, data: any) {
    console.log(data)
    state.Promotions = state.Promotions.map((promotions: any) => {
      if (promotions.slug !== data.slug) {
        return promotions;
      }

      return promotions;
    });
  },
};

export default {
  initialState,
  getters,
  actions,
  mutations,
};