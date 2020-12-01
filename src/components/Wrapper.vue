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
        <item :config="configItemsA"> </item>
      </div>
      <div class="wrapper__container--right">
        <item :config="configItemsB" @clickedButton="toggleFromContainer"> </item>
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
    Wrapperheader,
  },
  data() {
    return {
      hide: true,
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
    configItemsA: {
      type: Object,
      default: () => {
        return {
          title: false,
          subtitle: false,
          description: false,
          buttonLink: false,
          buttonText: false,
          img: true,
        };
      },
    },
    configItemsB: {
      type: Object,
      default: () => {
        return {
          title: true,
          subtitle: true,
          description: true,
          buttonLink: true,
          buttonText: true,
          img: false,
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
