<template>
  <div class="item">
    <div class="item--title" v-text="inputData.title" />
    <div class="item--subtitle" v-text="inputData.subtitle" />
    <div class="item--description" v-html="inputData.description" />
    <button
      class="item--btn"
      @click="toggle(inputData.buttonLink)"
      v-text="inputData.buttonText"
    />
    <slot name="image">
      <div v-if="inputData.img" class="item--img">
        <img :src="inputData.img" :alt="inputData.title" />
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "item",
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          title: "Some Title",
          subtitle: "Some subtitle",
          description: "<p>Some awesome paragraph</p>",
          buttonLink: "/about",
          buttonText: "Read more",
          img: "https://via.placeholder.com/1300x700",
        };
      },
    },
  },
  methods: {
    toggle(url) {
      this.$emit("clickedButton", url);
    },
  },
};
</script>