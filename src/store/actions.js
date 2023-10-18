import { fetchNewsList } from "@/api";

export default {
  FETCH_NEWS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_NEWS", data);
        console.log();
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_JOBS({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_JOBS", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  FETCH_ASK({ commit }) {
    fetchNewsList()
      .then(({ data }) => {
        commit("SET_ASK", data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
