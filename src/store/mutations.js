export default {
  updateCounter(state) {
    state.counter += 1;
  },
  updateNavigation(state, data) {
    state.navigation = data;
  },
  updateHome(state, data) {
    state.home = data;
  },
  updateAbout(state, data) {
    state.about = data;
  },
  updateBlog(state, data) {
    state.blog = data;
  },
  updateContact(state, data) {
    state.contactaction = data;
  }
};
