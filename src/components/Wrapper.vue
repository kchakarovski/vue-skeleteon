<template>
  <div :id="inputData.id" class="wrapper">
    <!-- <div class="wrapper__header">
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
          @click="toggleFromHeader(inputData.header_buttonLink)"
          v-text="inputData.header_buttonText"
        />
      </slot>
    </div> -->
    <div
      v-for="(value, key) in inputData.widgets"
      :key="key"
      class="wrapper__container"
    >
      <div class="wrapper__container--left">
        <item>
          <template v-slot:title>
            <span v-if="hide" />
          </template>
          <template v-slot:subtitle>
            <span v-if="hide" />
          </template>
          <template v-slot:description>
            <span v-show="hide" />
          </template>
          <template v-slot:button>
            <span v-show="hide" />
          </template>
        </item>
      </div>

      <div class="wrapper__container--right">
        <item @clickedButton="toggleFromContainer">
          <template v-slot:image>
            <span v-show="hide" />
          </template>
        </item>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../components/Item";

export default {
  name: "Wrapper",
  components: {
    Item,
  },
  data() {
    return {
      hide: true
    };
  },
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          string_id: "#about-section",
          header_title: "Header Title",
          header_subtitle: "Header Subtitle",
          header_img: "Some https://image.com",
          header_description: "Some Description",
          header_buttonText: "About",
          header_buttonLink: "/about",
          widgets: [
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
          ],
        };
      },
    },
  },
  methods: {
    toggleFromHeader(buttonLink) {
      this.$emit("clickedHeaderButton", buttonLink);
    },
    toggleFromContainer(buttonLink) {
      this.$emit("clickedContainerButton", buttonLink);
    },
  },
};
</script>

<style></style>
