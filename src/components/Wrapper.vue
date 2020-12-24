<template>
  <div :id="inputData.id" class="wrapper">
    <!-- Wrapper Header -->
    <wrapper-header
      :inputData="inputData.header"
      @clickedButton="toggleFromHeader"
    />
    <!-- Item Component -->
    <div
      v-for="(value, key) in inputData.widgets"
      :key="key"
      class="wrapper__container"
    >
      <div class="wrapper__container--left">
        <item :inputData="value" :config="inputData.config.configItemsA" />
      </div>
      <div class="wrapper__container--right">
        <item
          :inputData="value"
          :config="inputData.config.configItemsB"
          @clickedButton="toggleFromContainer"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../components/Item";
import WrapperHeader from "../components/Wrapperheader";

export default {
  name: "Wrapper",
  components: {
    Item,
    WrapperHeader,
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
          id: "#home-section",
          header: {
            string_id: "#home-section",
            header_title: "Vuex Header",
            header_subtitle: "Vuex Header Subtitle",
            header_img: "https://via.placeholder.com/200x150",
            header_description: "Vuex Header Description",
            header_buttonText: "Vuex Button",
            header_buttonLink: "/about",
          },
          widgets: [
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://via.placeholder.com/200x150",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://via.placeholder.com/200x150",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://via.placeholder.com/200x150",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://via.placeholder.com/200x150",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://via.placeholder.com/200x150",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://via.placeholder.com/200x150",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Titlew",
              subtitle: "Subtitle",
              img: "https://via.placeholder.com/200x150",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
          ],
          config: {
            configItemsA: {
              title: false,
              subtitle: false,
              description: false,
              buttonLink: false,
              buttonText: false,
              img: true,
            },
            configItemsB: {
              title: true,
              subtitle: true,
              description: true,
              buttonLink: true,
              buttonText: true,
              img: false,
            },
          },
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
