<template>
  <div id="app">
    <navigation />
    <router-link to="/">APP</router-link> <br>
    <router-link to="/Home">Home</router-link>
    <router-view />
    <appfooter />
  </div>
</template>

<script>
import Navigation from "../src/components/Navigation";
import Appfooter from "../src/components/App-footer";
export default {
  name: "App",
  components: {
    Navigation,
    Appfooter
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
