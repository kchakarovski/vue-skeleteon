<template>
  <div v-if="inputData" class="lastcard">
    <slot name="img">
      <img :src="inputData.img" :alt="inputData.title" />
    </slot>
    <slot name="title">
      <h1 class="lastcard__title" v-text="inputData.title" />
    </slot>
    <slot name="subtitle">
      <div class="lastcard__subtitle" v-text="inputData.subtitle" />
    </slot>
    <slot name="description">
      <p class="lastcard__description" v-html="inputData.description"></p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Lastcard",
  props: {
    inputData: {
      default: () => {
        return {
          title: "Lorem Ipsum",
          subtitle: "Lorem ipsum sub",
          description: "Some description",
          img: "https://someimage.com"
        };
      }
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
