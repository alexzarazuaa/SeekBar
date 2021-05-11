import ApiService, { ProfileService, RegisterService, UserService } from "@/common/api.service";
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
  async [ActionsType.LOGIN](context: any, credentials: any) {
    await ApiService.post("users/login", { user: credentials })
      .then(({ data }) => {
        context.commit(MutationsType.SET_AUTH, data.user);
      })
      .catch(({ response }) => {
        context.commit(MutationsType.SET_ERROR, response.data.errors);
      });
  },

  // Logout
  async  [ActionsType.LOGOUT](context: any) {
    await context.commit(MutationsType.PURGE_AUTH);
  },

  // Register
  async [ActionsType.REGISTER](context: any, credentials: any) {
    await RegisterService.register(credentials.type, { user: credentials })
      .then(({ data }) => {
        context.commit(MutationsType.SET_AUTH, data.user);
      })
      .catch(({ response }) => {
        context.commit(MutationsType.SET_ERROR, response.data.errors);
      });
  },

  // Desactivate
  async [ActionsType.DESACTIVATE](context: any, credentials: any) {

    console.log("des", credentials)
    const { data } = await ApiService.delete("users/login",credentials)
    context.commit(MutationsType.SET_AUTH, data.user);

  },


  // ACTIVATE
  async [ActionsType.ACTIVATE](context: any, credentials: any) {
    await ApiService.update("users/login", { user: credentials })
      .then(({ data }) => {
        context.commit(MutationsType.SET_AUTH, data.user);
      })
      .catch(({ response }) => {
        context.commit(MutationsType.SET_ERROR, response.data.errors);
      });
  },

  // Check auth
  async [ActionsType.CHECK_AUTH](context: any, credentials: any) {
    if (JwtService.getToken()) {
      ApiService.setHeader();
      await UserService.getUser("user")
        .then(({ data }) => {
          context.commit(MutationsType.SET_AUTH, data.user);
        })
        .catch(({ response }) => {
          context.commit(MutationsType.SET_ERROR, response.data.errors);
        });
    } else {
      context.commit(MutationsType.PURGE_AUTH);
    }
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
