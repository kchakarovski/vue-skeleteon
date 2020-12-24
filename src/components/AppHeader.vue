<template>
  <div v-if="navigation" class="header">
    <navigation
      :inputData="navigation"
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
    clickedNavigation(data) {
      this.$emit('clickedNavigation', data);
    }
  },
};
</script>

<style></style>
