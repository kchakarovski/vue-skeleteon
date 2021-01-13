<template>
  <div class="contact">
    <div class="vuex">
      <div style="color: black; text-align: left">mapGetters</div>
      <contact-form>
        <template v-slot:contactvuex>
          <contact-vuex :inputDataVuex="contactInputData"
        style="color: cyan; text-align: left" />
        </template>
        <template v-slot:form>
          <span />
        </template>
      </contact-form>
      <div style="color: black; text-align: left">mapGetters</div>

      <div style="color: orange; text-align: center">mapActions</div>
      <contact-form>
        <template v-slot:contactvuex>
          <contact-vuex
            style="color: red; text-align: center"
            :inputDataVuex="contactInputDataAction"
          />
        </template>
        <template v-slot:form><span /></template>
      </contact-form>
      <div style="color: orange; text-align: center">mapActions</div>
      <div style="color: white; text-align: right">mapGetters</div>
      <contact-form @clickedSubmit="clickedSubmitAlert">
        <template v-slot:contactvuex>
          <contact-vuex
            style="color: purple; text-align: right"
            :inputDataVuex="aboutInputData.contactest"
          />
        </template>
        <template v-slot:form><span /></template>
      </contact-form>
      <div style="color: white; text-align: right">mapGetters</div>
    </div>
    <div class="form">
      <contact-form @clickedSubmit="clickedSubmitAlert" />
    </div>
  </div>
</template>

<script>
import ContactForm from "../components/ContactForm";
import ContactVuex from "../components/ContactVuex";
import { mapGetters } from "vuex";

export default {
  name: "contact",
  components: {
    ContactForm,
    ContactVuex,
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters([
      "contactInputData",
      "contactInputDataAction",
      "aboutInputData",
    ]),
  },
  methods: {
    clickedSubmitAlert() {
      alert("test");
    },
  },
};
</script>

<style></style>
