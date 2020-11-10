<template>
  <div class="nav">
      <div class="nav__item" v-for="(value, key) in inputData" :key="key">
        <slot name="name">
          <div class="nav__item--name" v-text="value.name" />
        </slot>
        <slot name="link">
          <router-link :to="value.link"><div class="nav__item--link" v-text="value.link" /></router-link>
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
                  name: 'Lorem Ipsum',
                  link: 'https://google.com',
                  tooltip: 'Some Tooltip'
              }
                // {
                //   name: 'Lorem Ipsum',
                //   link: 'https://google.com',   
                //   tooltip: 'Some Tooltip'
                // },
                // {
                //   name: 'Lorem Ipsum',
                //   link: 'https://google.com',   
                //   tooltip: 'Some Tooltip'
                // }
              ];
          },
      },
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>