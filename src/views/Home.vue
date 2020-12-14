<template>
  <div id="home">
    <div class="">
      <span>{{ counter }}</span>
      <button @click="increameantCounter">+ 1 Like</button>
    </div>
    <topcard :inputData="homeInputData.topCard" />
    <wrapper
      :inputData="homeInputData.wrapper"
      @clickedContainerButton="navigate"
      @clickedHeaderButton="navigate"
    />
    <lastcard :inputData="homeInputData.lastCard" />
  </div>
</template>

<script>
import Topcard from "../components/Topcard";
import Wrapper from "../components/Wrapper";
import Lastcard from "../components/Lastcard";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Topcard,
    Wrapper,
    Lastcard,
  },
  methods: {
    ...mapActions(["increameantCounter"]),
    navigate(url) {
      this.$router.push(url);
    },
  },
  computed: {
    ...mapGetters([
      "homeInputData",
      "counter"
    ]),
  },
};
</script>
