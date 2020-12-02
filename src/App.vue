<template>
  <div class="app">
    <app-header />

    <router-view />

    <app-footer />
  </div>
</template>

<script>
import AppHeader from "../src/components/AppHeader";
import AppFooter from "../src/components/AppFooter";
export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {};
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
