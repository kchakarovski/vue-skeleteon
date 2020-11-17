<template>
  <div id="nav">
    <h1>Lastcard COMP</h1>
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
      },
    },
  },
  data() {
    return {};
  },
};
</script>

<style>
</style>