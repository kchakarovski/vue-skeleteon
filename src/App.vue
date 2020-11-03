<template>
  <div id="app">
    <Nav />
    <router-link to="/">APP</router-link> <br>
    <router-link to="/Home">Home</router-link>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "../src/components/Nav";
import Footer from "../src/components/Footer";
export default {
  name: "App",
  components: {
    Nav,
    Footer
  },
  data() {
    return {};
  }
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
