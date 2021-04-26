import { createStore } from 'vuex'

import auth from "./auth.module";
import profile from "./profile.module";
import bars from "./bars.module";
import bar from  "./bar.module";


export default createStore({
  modules: {
    auth,
    profile,
    bars,
    bar
  }
})