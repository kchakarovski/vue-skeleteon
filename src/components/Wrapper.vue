<template>
  <div :id="inputData.id" class="wrapper">
    <div class="wrapper__header">
      <!--  Header of the wrapper => header title, header subtitle ... -->
      <div class="wrapper__header--title" v-text="inputData.header_title" />
      <div
        class="wrapper__header--subtitle"
        v-text="inputData.header_subtitle"
      />
      <div class="wrapper__header--img">
        <img
          :src="inputData.header_img"
          :alt="inputData.header_title"
        />
      </div>
      <div
        class="wrapper__header--description"
        v-html="inputData.header_description"
      />
      <button
        class="wrapper__header--btn"
        @click="toggleFromHeader(inputData.header_buttonLink)"
        v-text="inputData.header_buttonText"
      />
    </div>
    <div
      v-for="(value, key) in inputData.widgets"
      :key="key"
      class="wrapper__container"
    >
      <div class="wrapper__container--left">
        <!--  Here comes Item Component, Komentiranoto e stariot kod  -->

        
        <!-- <div class="item">
          <div class="item--img">
            <img :src="value.img" :alt="value.title" />
          </div>
        </div> -->
      </div>

      <div class="wrapper__container--right">
        <item 
          :inputData="value" 
          @clickedButton="toggleFromContainer"
        >
          <!-- <template v-slot:image>
            <span></span>
          </template> -->
        </item>

         <!--  Star kod za brisenje  -->
        <!-- <div class="item">
          <div class="item--title" v-text="value.title" />
          <div class="item--subtitle" v-text="value.subtitle" />
          <div class="item--description" v-html="value.description" />
          <button
            class="item--btn"
            @click="toggleFromContainer(inputData.buttonLink)"
            v-text="value.buttonText"
          /> -->
        <!-- </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Item from "../components/Item";

export default {
  name: "Wrapper",
  components: {
    Item
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
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description",
            },
            {
              title: "Title",
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
    toggleFromContainer(buttonLink){
      this.$emit("clickedContainerButton", buttonLink);
    }
  },
};
</script>

<style></style>
