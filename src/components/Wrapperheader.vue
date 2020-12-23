<template>
  <div v-if="inputData" :id="inputData.id" class="wrapper__header">
    <slot name="title">
      <div class="wrapper__header--title" v-text="inputData.header_title" />
    </slot>
    <slot name="subtitle">
      <div
        class="wrapper__header--subtitle"
        v-text="inputData.header_subtitle"
      />
    </slot>
    <slot name="image">
      <div class="wrapper__header--img">
        <img :src="inputData.header_img" :alt="inputData.header_title" />
      </div>
    </slot>
    <slot name="description">
      <div
        class="wrapper__header--description"
        v-html="inputData.header_description"
      />
    </slot>
    <slot name="button">
      <button
        class="wrapper__header--btn"
        @click="toggle(inputData.header_buttonLink)"
        v-text="inputData.header_buttonText"
      />
    </slot>
  </div>
</template>

<script>
export default {
  name: "WrapperHeader",
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          string_id: "#about-section",
          header_title: "Header Comp",
          header_subtitle: "Header Subtitle Comp",
          header_img: "Some https://image.com",
          header_description: "Some Description Comp",
          header_buttonText: "About",
          header_buttonLink: "/about"
        };
      }
    }
  },
  data() {
    return {};
  },
  methods: {
    toggle(url) {
      this.$emit("clickedButton", url);
    }
  }
};
</script>
