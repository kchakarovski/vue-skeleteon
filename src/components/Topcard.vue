<template>
  <div  v-if="inputData" class="topcard">
    <slot name="img">
      <img :src="inputData.img" :alt="inputData.title" />
    </slot>
    <slot name="title">
      <h1 class="topcard__title" v-text="inputData.title" />
    </slot>
    <slot name="subtitle">
      <div class="topcard__subtitle" v-text="inputData.subtitle" />
    </slot>
    <slot name="description">
      <p class="topcard__description" v-html="inputData.description"></p>
    </slot>
  </div>
</template>

<script>
export default {
  name: "Topcard",
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
