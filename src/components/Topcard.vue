<template>
  <div id="Topcard">
    <h1>Topcard COMP</h1>
  </div>
</template>

<script>
export default {
  name: "Topcard",
  props: {
    inputData: {
      type: Object,
    },
  },
  data() {
    return {
      topcardData: {
        title: "Lorem Ipsum",
        subtitle: "Lorem ipsum sub",
        description: "Some description",
        img: "https://someimage.com"
      },
    };
  },
};
</script>

<style>
</style>