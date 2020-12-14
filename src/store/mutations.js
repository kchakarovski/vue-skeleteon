export default {
  updateCounter(state) {
    state.counter += 1;
  },
  updateNavigation(state, data) {
    state.navigation = data;
  }
};
