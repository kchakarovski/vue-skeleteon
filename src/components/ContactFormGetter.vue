<template>
  <div v-if="inputContact" class="contactformgetter">
    <contact-form :inputDataContact="inputContact" />
  </div>
</template>
<script>
import ContactForm from "../components/ContactForm";

export default {
  name: "ContactFormGetter",
  components: {
    ContactForm
  },
  props: {
    inputContact: {
      type: Object
    }
  },
  data() {
    return {};
  }
};
</script>

<style></style>
