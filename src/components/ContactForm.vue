<template>
  <div v-if="inputDataContact" class="contact">
    <slot name="name">
      <div class="contact--name" v-text="inputDataContact.name" />
    </slot>
    <slot name="surname">
      <div class="contact--surname" v-text="inputDataContact.surname" />
    </slot>
    <slot name="number">
      <div class="contact--number" v-text="inputDataContact.number" />
    </slot>
    <slot name="adress">
      <div class="contact--adress" v-text="inputDataContact.adress" />
    </slot>
    <slot name="city">
      <div class="contact--city" v-text="inputDataContact.city" />
    </slot>
  </div>
</template>

<script>
export default {
  props: {
    inputDataContact: {
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
  name: "ContactForm",
  data() {
    return {};
  }
};
</script>

<style></style>
