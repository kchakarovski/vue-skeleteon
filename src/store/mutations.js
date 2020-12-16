export default {
  updateCounter(state) {
    state.counter += 1;
  },
  updateNavigation(state, data) {
    state.navigation = data;
  },
  updateBlog(state, data) {
    state.blog = data;
  },
  updateContact(state, data) {
    state.contactaction = data;
  }
};
