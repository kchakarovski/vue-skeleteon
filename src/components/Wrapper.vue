<template>
  <div :id="inputData.id" class="wrapper">
    <div class="wrapper__header">
      <!--  Header of the wrapper => header title, header subtitle ... -->
      <div class="wrapper__header--title" v-text="inputData.header_title" />
      <div
        class="wrapper__header--subtitle"
        v-text="inputData.header_subtitle"
      />
      <img
        class="wrapper__header--img"
        :src="inputData.header_img"
        :alt="inputData.header_title"
      />
      <div
        class="wrapper__header--description"
        v-html="inputData.header_description"
      />
      <button
        class="wrapper__header--btn"
        @click="toggle(inputData.buttonLink)"
        v-text="inputData.header_buttonText"
      />
    </div>
    <div
      v-for="(value, key) in inputData.widgets"
      :key="key"
      class="wrapper__container"
    >
      <div class="wrapper__container--left">
        <div class="item">
          <!--  Here comes Image  -->
          <img class="item--img" :src="value.img" :alt="value.title" />
        </div>
      </div>

      <div class="wrapper__container--right">
        <div class="item">
          <div class="item--title" v-text="value.title" />
          <div class="item--subtitle" v-text="value.subtitle" />
          <div class="item--description" v-html="value.description" />
          <button
            class="item--btn"
            @click="toggle(inputData.buttonLink)"
            v-text="value.buttonText"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Wrapper",
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
          header_buttonText: "Read more",
          header_buttonLink: "/some-awesome-link",
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
    toggle(buttonLink) {
      this.$emit("clickedButton", buttonLink);
    },
  },
};
</script>

<style></style>
