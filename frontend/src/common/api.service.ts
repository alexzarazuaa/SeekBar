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
    // console.log('entra',resource)
    return axios.get(`${resource}/${params}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },

  post(resource: string, params: any) {
    console.log("entra");
    console.log(params);
    return axios.post(`${API_URL}/${resource}`, params);
  },

  update(resource: string, slug: string, params: any) {
    return axios.put(`${resource}/${slug}`, params);
  },

  delete(resource: string) {
    //console.log(resource, "delete bar");
    return axios.delete(`${API_URL}/${resource}`).catch((error: any) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};



/* PROFILE SERVICE  */

export const ProfileService = {
  getProfile(check: any, username: any) {
    console.log(check,username)
    return axios.get(`${API_URL}/${check}/${username}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

/* REGISTER SERVICE */

export const RegisterService = {
  register(type: string, credentials: any) {
    console.log(credentials, type);
    return ApiService.post(`user/${type}`, credentials);
  },
};
/* BARS SERVICE */

export const BarsService = {


  createBar(info: any){
    //CREATE BAR
    console.log(info)
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
    return ApiService.post(`bars/${slug}/favorite`, "");
  },
  removeBarFavorite(slug: string) {
    // UNFAVORITE BAR
    return ApiService.delete(`bars/${slug}/favorite`);
  },
};


export default ApiService;
