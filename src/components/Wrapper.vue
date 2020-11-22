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
      <router-link
        class="wrapper__header--btnlink"
        :to="inputData.header_buttonLink"
      >
        <button
          class="wrapper__header--btntext"
          v-text="inputData.header_buttonText"
        />
      </router-link>
    </div>
    <div
      v-for="(value, key) in inputData.widgets"
      :key="key"
      class="wrapper__container"
    >
      <div class="wrapper__container__left">
        <div class="wrapper__container__left__item">
          <!--  Here comes Image  -->
          <img
            class="wrapper__container__left__item--img"
            :src="value.img"
            :alt="value.title"
          />
        </div>
      </div>

      <div class="wrapper__container__right">
        <div class="wrapper__container__right__item">
          <div
            class="wrapper__container__right__item--title"
            v-text="value.title"
          />
          <div
            class="wrapper__container__right__item--subtitle"
            v-text="value.subtitle"
          />
          <div
            class="wrapper__container__right__item--description"
            v-html="value.description"
          />
          <!-- <router-link
            :to="value.buttonLink"
            class="wrapper__container__right__item--btnlink"
          > -->
            <button
              class="wrapper__container__right__item--btn"
              @click="toggle(inputData.buttonLink)"
              v-text="value.buttonText"
            />
            <!-- div or span for the buttontext? router link or function for the link on the button? -->
          <!-- </router-link> -->
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
  },
  methods: {
    toggle(buttonLink) {
      this.$emit("clickedButton", buttonLink);
    }
  }
};
</script>

<style></style>
