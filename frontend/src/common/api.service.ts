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
    console.log("entra")
    console.log(params)
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


export const ProfileService = {
  getProfile(resource: string, username: any) {
    console.log("entra profile", resource);
    return axios.get(`${API_URL}/${resource}${username}`).catch((error) => {
      throw new Error(`[RWV] ApiService ${error}`);
    });
  },
};

export const RegisterService = {

  register(type: string,  credentials: any) {
  
    return ApiService.post(`user/${type}`,credentials);
  },
};








export default ApiService;
