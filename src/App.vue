<template>
  <div id="app" class="app">
    <app-header @clickedNavigation="clickedNavigation" :navigation="navigation" />

    <router-view />

    <app-footer />
  </div>
</template>

<script>
import AppHeader from "../src/components/AppHeader";
import AppFooter from "../src/components/AppFooter";
import { navigation } from "./static/navigation";
import { 
  homeData,
  aboutData,
  blogData,
  contactData
}  from './static/pages';
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  components: {
    AppHeader,
    AppFooter
  },
  mounted() {
    setTimeout(() => {
      this.scrollTo('app');
    }, 500);
    this.getData();
  },
  computed: {
    ...mapGetters(["navigation"])
  },
  methods: {
    ...mapActions([
      "updateNavigationData",
      "updateHomeData",
      "updateAboutData",
      "updateBlogData",
      "updateContactData"
    ]),
    getData() {
      this.updateNavigationData(navigation);
      this.updateHomeData(homeData);
      this.updateAboutData(aboutData);
      this.updateBlogData(blogData);
      this.updateContactData(contactData);
    },
    clickedNavigation(data) {
      if(data.isPage) {
        this.$router.push(data.url).catch((err) => {
          console.log(err + "error");
        });
      } else {
        this.scrollTo(data.url);
      }
    },
    scrollTo(section) {
      document.getElementById(section).scrollIntoView({ behavior: "smooth" });
    }
  }
};
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
