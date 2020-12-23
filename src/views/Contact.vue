<template>
  <div class="contact">
    <div style="color: black; text-align: left">mapGetters</div>
    <contact-form-getter
      :inputContact="contactInputData"
      style="color: cyan; text-align: left"
    />
    <div style="color: black; text-align: left">mapGetters</div>

    <div style="color: orange; text-align: center">mapActions</div>
    <contact-form-getter
      :inputContact="contactInputDataAction"
      style="color: red; text-align: center"
    />
    <div style="color: orange; text-align: center">mapActions</div>

    <div style="color: white; text-align: right">mapGetters</div>
    <contact-form-getter
      :inputContact="aboutInputData.contactest"
      style="color: purple; text-align: right"
    />
    <div style="color: white; text-align: right">mapGetters</div>
  </div>
</template>

<script>
import ContactFormGetter from "../components/ContactFormGetter";
import { mapGetters } from "vuex";

export default {
  name: "contact",
  components: {
    ContactFormGetter
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "contactInputData",
      "contactInputDataAction",
      "aboutInputData"
    ])
  }
};
</script>

<style></style>
