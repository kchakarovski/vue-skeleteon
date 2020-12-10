<template>
  <div id="home">
    <topcard :inputData="getCard.topCard" />
    <wrapper
      @clickedContainerButton="navigate"
      @clickedHeaderButton="navigate"
    />
    <lastcard :inputData="getCard.lastCard"/>
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
    Lastcard
  },
  data() {
    return {};
  },
  methods: {
    navigate(url) {
      this.$router.push(url);
    }
  },
  computed: {
    ...mapGetters([
      "getCard",
    ])
  }
};
</script>
