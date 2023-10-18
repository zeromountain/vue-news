import { createStore } from "vuex";

import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";

export default createStore({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  getters,
  mutations,
  actions,
  modules: {},
});
