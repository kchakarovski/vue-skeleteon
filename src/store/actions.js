export default {
  increameantCounter({ commit }) {
    commit("updateCounter");
  },
  updateNavigationData({ commit }, payload) {
    commit("updateNavigation", payload);
  },
  updateHomeData({ commit }, payload) {
    commit("updateHome", payload);
  },
  updateAboutData({ commit }, payload) {
    commit("updateAbout", payload);
  },
  updateBlogData({ commit }, payload) {
    commit("updateBlog", payload);
  },
  updateContactData({ commit }, payload) {
    commit("updateContact", payload);
  }
};
