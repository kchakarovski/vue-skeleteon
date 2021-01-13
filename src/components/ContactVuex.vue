<template>
  <div v-if="inputDataVuex" class="contact">
    <slot name="name">
      <div class="contact--name" v-text="inputDataVuex.name" />
    </slot>
    <slot name="surname">
      <div class="contact--surname" v-text="inputDataVuex.surname" />
    </slot>
    <slot name="number">
      <div class="contact--number" v-text="inputDataVuex.number" />
    </slot>
    <slot name="adress">
      <div class="contact--adress" v-text="inputDataVuex.adress" />
    </slot>
    <slot name="city">
      <div class="contact--city" v-text="inputDataVuex.city" />
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    inputDataVuex: {
      type: Object,
      default: () => {
        return {
          name: "Name",
          surname: "Surname",
          number: "Number",
          adress: "Adress",
          city: "City"
        };
      }
    }
  },
  name: "ContactVuex",
  data() {
    return {};
  }
};
</script>

