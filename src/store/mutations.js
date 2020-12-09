export default {
  setData(state, data) {
    state.inputData = data;
    setTimeout(() => {
      state.loadingScreen = false;
    }, 1300);
  },
  updateBurger: state => {
    state.isNavOpen = !state.isNavOpen;
  }
};
