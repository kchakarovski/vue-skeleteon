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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    this.getNavigationData();
  },
  computed: {
    ...mapGetters(["navigation"]),
  },
  methods: {
    ...mapActions(['updateNavigationData']),
    getNavigationData() {
      const nav =  [
        {
          name: "Home",
          href: "/",
          tooltip: "Some Tooltip",
        },
        {
          name: "About",
          href: "/about",
          tooltip: "Some Tooltip",
        },
        {
          name: "Blog",
          href: "/blog",
          tooltip: "Some Tooltip",
        },
        {
          name: "Contact",
          href: "/contact",
          tooltip: "Some Tooltip",
        }
      ];
      this.updateNavigationData(nav);
    }
  }
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
