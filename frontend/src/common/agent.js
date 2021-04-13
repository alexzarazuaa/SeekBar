import axios from "axios";
import API_URL from "./config";
import JwtService from "./jwt.service";

const ApiService = {
  setHeader() {
    axios.defaults.headers.common[
      "Authorization"
    ] = `Token ${JwtService.getToken()}`;
  },

 
};

export default ApiService;

export const UserService = {
    getUser(resource, slug = "") {
      console.log('entra',resource)
      return axios.get(`${API_URL}/${resource}/${slug}`).catch((error) => {
        throw new Error(`[RWV] ApiService ${error}`);
      });
    },
};


export const BarsService = {
};
