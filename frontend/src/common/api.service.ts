import axios from "axios";
import API_URL from "./config";
import JwtService from "./jwt.service";

const ApiService = {
  setHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

  query(resource: string, params: any) {
    return axios.get(resource, params).catch((error: any) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  get(resource: string, params = "") {
    return axios.get(`${resource}/${params}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource: string, params: any) {
    return axios.post(`${API_URL}/${resource}`, params);
  },

  update(resource: string, slug: string, params: any) {
    return axios.put(`${resource}/${slug}`, params);
  },

  delete(resource: string, params: any) {
    return axios.delete(`${API_URL}/${resource}`,params).catch((error: any) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
  
};



/* PROFILE SERVICE  */

export const ProfileService = {
  getProfile(check: any, username: any) {
    return axios.get(`${API_URL}/${check}/${username}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

/* REGISTER SERVICE */

export const RegisterService = {
  register(type: string, credentials: any) {
    return ApiService.post(`user/${type}`, credentials);
  },
};

/* USER SERVICE */

export const UserService = {
  getUser(resource: string) {
    return axios.get(`${API_URL}/${resource}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  desactivateUser(){
     ApiService.post(`${API_URL}/users/login`,"");
  }
};
/* BARS SERVICE */

export const BarsService = {


  createBar(info: any){
    //CREATE BAR
    return ApiService.post(`bars/`,info);
  },
  getBars() {
    //GET ALLS
    return ApiService.get(`${API_URL}/bars`);
  },

  getBar(slug: string) {
    //GET ONE BAR
    return ApiService.get(`${API_URL}/bars/${slug}`);
  },

  addBarFavorite(slug: string) {
    //FAVORITE BAR
    return ApiService.post(`bars/${slug}/favorite`, null);
  },
  removeBarFavorite(slug: string) {
    // UNFAVORITE BAR
    return ApiService.delete(`bars/${slug}/favorite`,null);
  },
};


export default ApiService;
