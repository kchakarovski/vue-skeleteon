<template>
  <div id="home">
    <topcard />
    <wrapper />
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
  }
};
</script>
