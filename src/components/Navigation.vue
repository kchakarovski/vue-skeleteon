<template>
  <div class="nav">
    <div class="nav__item" v-for="(value, key) in inputData" :key="key">
      <slot name="name">
        <div class="nav__item--name">
          <a
            class="href"
            @click="toggleNavigationItem(value.href)"
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
          },
          {
            name: "About",
            href: "/about",
            tooltip: "Some Tooltip",
          },

          // {
          //   name: 'Lorem Ipsum',
          //   href: 'https://google.com',
          //   tooltip: 'Some Tooltip'
          // },
          // {
          //   name: 'Lorem Ipsum',
          //   href: 'https://google.com',
          //   tooltip: 'Some Tooltip'
          // }
        ];
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    toggleNavigationItem(url) {
      this.$emit('clickedNavigation', url);
    }
  }
};
</script>

<style></style>
