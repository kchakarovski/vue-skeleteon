<template>
  <div class="app">
    <navigation />
    <router-link to="/">Home</router-link> <br />
    <router-link to="/about">About</router-link>
    <router-view />
    <app-footer />
  </div>
</template>

<script>
import Navigation from "../src/components/Navigation";
import Appfooter from "../src/components/App-footer";
export default {
  name: "App",
  components: {
    Navigation,
    "app-footer": Appfooter
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
