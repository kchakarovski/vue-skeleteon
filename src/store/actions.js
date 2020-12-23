export default {
  increameantCounter({ commit }) {
    commit("updateCounter");
  },
  updateNavigationData({ commit }, payload) {
    commit("updateNavigation", payload);
  },
  updateBlogData({ commit }, payload) {
    commit("updateBlog", payload);
  },
  updateContactData({ commit }, payload) {
    commit("updateContact", payload);
  }
};
