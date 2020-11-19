<template>
  <div :id="inputData.id" class="wrapper">
    <div class="wrapper__header">
      <!--  Header of the wrapper => header title, header subtitle ... -->
      <div class="wrapper__header--title" v-text="header_title" />
    </div>

    <div
      v-for="(value, key) in inputData.widgets"
      :key="key"
      class="wrapper__container"
    >
      <div class="wrapper__left">
        <div class="wrapper__item">
          <!--  Here comes Image  -->
        </div>
      </div>

      <div class="wrapper__right">
        <div class="wrapper__item">
          <!-- <div class="wrapper__item--title" v-text="value.title" /> -->
          <!--  Title, Subtitle, Description, ButtonText, ButtonLink -->
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
              buttonLink: "/some-awesome-description"
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description"
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description"
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description"
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description"
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description"
            },
            {
              title: "Title",
              subtitle: "Subtitle",
              img: "https://someimage.com",
              description: "Some description",
              buttonText: "Some Text",
              buttonLink: "/some-awesome-description"
            }
          ]
        };
      }
    }
  }
};
</script>

<style></style>
