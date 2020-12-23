<template>
  <div id="about">
    <div class="">
      <span>{{ counter }}</span>
      <button @click="increameantCounter">+ 1 Like</button>
    </div>
    <topcard :inputData="aboutInputData.topCard" />
    <wrapper
      :inputData="aboutInputData.wrapper"
      @clickedContainerButton="navigate"
      @clickedHeaderButton="navigate"
    />
    <lastcard :inputData="aboutInputData.lastCard" />
  </div>
</template>

<script>
import Topcard from "../components/Topcard";
import Lastcard from "../components/Lastcard";
import Wrapper from "../components/Wrapper";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Topcard,
    Lastcard,
    Wrapper
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["aboutInputData", "counter"])
  },
  methods: {
    ...mapActions(["increameantCounter"]),
    navigate(url) {
      this.$router.push(url);
    }
  }
};
</script>
