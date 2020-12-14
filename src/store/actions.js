export default {
  increameantCounter({ commit }) {
    commit("updateCounter");
  },
  updateNavigationData({ commit }, payload) {
    commit("updateNavigation", payload);
  }
};
