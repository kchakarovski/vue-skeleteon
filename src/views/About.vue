<template>
  <div id="home">
    <topcard :inputData="aboutInputData.topCard" />
    <h1>Hello from About Page</h1>
    <lastcard :inputData="aboutInputData.lastCard" />
  </div>
</template>

<script>
import Topcard from "../components/Topcard";
import Lastcard from "../components/Lastcard";
import { mapGetters } from 'vuex';

export default {
  name: "Home",
  components: {
    Topcard,
    Lastcard
  },
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["aboutInputData"]),
  },
  methods: {
    // showFromStore() {
    //   alert(this.getFooter);
    //   alert(this.getHeader);
    // }
  }
};
</script>
