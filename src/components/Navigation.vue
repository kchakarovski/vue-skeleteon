<template>
  <div v-if="inputData" class="nav">
    <div class="nav__item" v-for="(value, key) in inputData" :key="key">
      <slot name="name">
        <div class="nav__item--name">
          <a
            v-if="value.isPage"
            class="href"
            @click="toggleNavigationItem(value.href)"
            v-text="value.name"
            v-tooltip.bottom="value.tooltip"
          />
          <button
            class="nav__item--name_test"
            v-else
            @click="toggleButton(value.href)"
            v-text="value.name"
          />
        </div>
      </slot>
      <slot name="tooltip">
        <div class="nav__item--tooltip" v-text="value.tooltip" />
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    inputData: {
      type: Array,
      default: () => {
        return [
          {
            name: "Home",
            href: "/",
            tooltip: "Some Tooltip",
            isPage: true,
          },
          {
            name: "About",
            href: "/about",
            tooltip: "Some Tooltip",
            isPage: true,
          },
          {
            name: "Blog",
            href: "/blog",
            tooltip: "Some Tooltip",
            isPage: true,
          },
        ];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    toggleNavigationItem(url) {
      this.$emit("clickedNavigation", url);
    },
    toggleButton(href) {
      document.getElementById(href).scrollIntoView({ behavior: "smooth" });
      this.$emit("clickedButton", href);
    }
  },
};
</script>

<style></style>
