<template>
  <div class="item">
    <slot name="title">
    <div class="item--title" v-if="config.title" v-text="inputData.title" />
    </slot>
    <slot name="subtitle">
    <div class="item--subtitle" v-if="config.subtitle" v-text="inputData.subtitle" />
    </slot>
    <slot name="description">
    <div class="item--description" v-if="config.description" v-html="inputData.description" />
    </slot>
    <slot name="button">
    <button
      class="item--btn"
      @click="toggle(inputData.buttonLink)"
      v-if="config.buttonLink"
      v-text="inputData.buttonText"
    />
    </slot>
    <slot name="image">
      <div v-if="config.img" class="item--img">
        <img :src="inputData.img" :alt="inputData.title" />
      </div>
    </slot>
  </div>
</template>
<script>
export default {
  name: "Item",
  data(){
    return{
      hide: true,
    }
  },
  props: {
    inputData: {
      type: Object,
      default: () => {
        return {
          title: "Some Title",
          subtitle: "Some subtitle",
          description: "<p>Some awesome paragraph</p>",
          buttonLink: "/about",
          buttonText: "Read more",
          img: "https://via.placeholder.com/1300x700",
        };
      },
    },
    config: {
      type: Object,
      default: () => {
        return {
          title: true,
          subtitle: true,
          description: true,
          buttonLink: true,
          buttonText: true,
          img: true
        }
      }
    }
  },
  methods: {
    toggle(url) {
      this.$emit("clickedButton", url);
    },
  },
};
</script>