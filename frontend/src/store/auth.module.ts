import ApiService, { RegisterService } from "@/common/api.service";
import JwtService from "@/common/jwt.service";
import { ActionsType } from "./actions.type";
import { MutationsType } from "./mutations.type";

const state = {
  errors: null,
  user: {},
  isAuthenticated: !!JwtService.getToken(),
};

const getters = {
  currentUser(state: any) {
    return state.user;
  },
  isAuthenticated(state: any) {
    return state.isAuthenticated;
  },
};

const actions = {
  // Login
  [ActionsType.LOGIN](context: any, credentials: any) {
    console.log("ENTRA ACTIOIN LOGIN");
    return new Promise((resolve) => {
      ApiService.post("users/login", { user: credentials })
        .then(({ data }) => {
          console.log(data);
          context.commit(MutationsType.SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          context.commit(MutationsType.SET_ERROR, response.data.errors);
        });
    });
  },

  // Logout
  [ActionsType.LOGOUT](context: any) {
    //console.log("ENTRA ACTIOIN LOGOUT");
    context.commit(MutationsType.PURGE_AUTH);
  },

  // Register
  [ActionsType.REGISTER](context: any, credentials: any) {
    console.log("ENTAR REGISTER AUTH ", credentials);
    return new Promise((resolve, reject) => {
      console.log(resolve);
      RegisterService.register(credentials.type, { user: credentials })
        .then(({ data }) => {
          console.log(data);
          context.commit(MutationsType.SET_AUTH, data.user);
          resolve(data);
        })
        .catch(({ response }) => {
          console.log(response);
          context.commit(MutationsType.SET_ERROR, response.data);
          reject(response);
        });
    });
  },
};

const mutations = {
  // Set error
  [MutationsType.SET_ERROR](state: any, error: any) {
    state.errors = error;
  },

  // Set auth
  [MutationsType.SET_AUTH](state: any, user: any) {
    state.isAuthenticated = true;
    state.user = user;
    state.errors = {};
    JwtService.saveToken(state.user.token);
  },

  // Purge auth
  [MutationsType.PURGE_AUTH](state: any) {
    state.isAuthenticated = false;
    state.user = {};
    state.errors = {};
    JwtService.destroyToken();
  },
};

export default {
  state,
  actions,
  mutations,
  getters,
};
