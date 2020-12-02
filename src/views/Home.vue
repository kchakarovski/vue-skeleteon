<template>
  <div class="home">
    <topcard />
    <wrapper 
      @clickedContainerButton="navigate"
      @clickedHeaderButton="navigate"
    />
    <lastcard />
  </div>
</template>

<script>
import Topcard from "../components/Topcard";
import Wrapper from "../components/Wrapper";
import Lastcard from "../components/Lastcard";
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
  }
};
</script>
