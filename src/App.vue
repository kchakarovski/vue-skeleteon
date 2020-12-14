<template>
  <div class="app">
    <app-header :navigation="navigation" />

    <router-view />

    <app-footer />
  </div>
</template>

<script>
import AppHeader from '../src/components/AppHeader';
import AppFooter from "../src/components/AppFooter";
import { mapGetters } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  data() {
    return {
      
    };
  },
  computed: {
    ...mapGetters(["navigation"]),
  },
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
