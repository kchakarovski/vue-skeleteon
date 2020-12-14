<template>
  <div id="blog">
    <topcard :inputData="blogInputData.topCard" />
    <wrapper
      :inputData="blogInputData.wrapper"
      @clickedContainerButton="navigate"
      @clickedHeaderButton="navigate"
    />
    <lastcard :inputData="blogInputData.lastCard" />
  </div>
</template>

<script>
import Topcard from "../components/Topcard";
import Lastcard from "../components/Lastcard";
import Wrapper from "../components/Wrapper";
import { mapGetters } from "vuex";

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
    ...mapGetters(["blogInputData"]),
  },
  methods: {
    // showFromStore() {
    //   alert(this.getFooter);
    //   alert(this.getHeader);
    // }
    navigate(url) {
      this.$router.push(url);
    }
  },
};
</script>
