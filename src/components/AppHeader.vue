<template>
  <div v-if="navigation" class="header">
    <navigation
      :inputData="navigation"
      @clickedButton="clickedButton"
      @clickedNavigation="clickedNavigation"
    >
      <template v-slot:tooltip>
        <span />
      </template>
    </navigation>
  </div>
</template>

<script>
import Navigation from "./Navigation.vue";
export default {
  components: {
    Navigation,
  },
  name: "AppHeader",
  data() {
    return {};
  },
  props: {
    navigation: {
      type: Array,
    },
  },
  methods: {
    clickedNavigation(url) {
      this.$router.push(url).catch((err) => {
        console.log(err + "error");
      });
    },
    clickedButton(href) {
      this.$router.push(href);
    },
  },
};
</script>

<style></style>
