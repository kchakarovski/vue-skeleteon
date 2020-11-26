<template>
  <div :id="inputData.id" class="wrapper">
    <!-- Wrapper Header -->
    <div v-for="(value, key) in inputData" :key="key">
      <wrapperheader @clickedButton="toggleFromHeader" />
    </div>
    <!-- Item Component -->
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
import Wrapperheader from "../components/Wrapperheader";

export default {
  name: "Wrapper",
  components: {
    Item,
    Wrapperheader
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
