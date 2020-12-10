<template>
  <div id="home">
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
import { mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Topcard,
    Wrapper,
    Lastcard,
  },
  methods: {
    navigate(url) {
      this.$router.push(url);
    },
  },
  computed: {
    ...mapGetters(["homeInputData"]),
  },
};
</script>
