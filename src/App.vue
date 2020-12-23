<template>
  <div class="app">
    <app-header :navigation="navigation" />

    <router-view />

    <app-footer />
  </div>
</template>

<script>
import AppHeader from "../src/components/AppHeader";
import AppFooter from "../src/components/AppFooter";
import { navigation } from "./static/navigation";
import { blogData } from "./static/blog";
import { contactData } from "./static/contact";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    this.getNavigationData();
    this.getBlogData();
    this.getContactData();
  },
  computed: {
    ...mapGetters(["navigation"])
  },
  methods: {
    ...mapActions([
      "updateNavigationData",
      "updateBlogData",
      "updateContactData"
    ]),
    getNavigationData() {
      this.updateNavigationData(navigation);
    },
    getBlogData() {
      this.updateBlogData(blogData);
    },
    getContactData() {
      this.updateContactData(contactData);
    }
  }
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
