<template>
  <div class="header">
    <navigation @clickedNavigation="clickedNavigation"/>
  </div>
</template>

<script>
import Navigation from './Navigation.vue';
export default {
  components: { 
    Navigation 
  },
  name: "AppHeader",
  data() {
    return {};
  },
  methods: {
    clickedNavigation(url) {
      this.$router.push(url).catch(err => {
        console.log(err +'error');
      });
    }
  }
};
</script>

<style></style>
