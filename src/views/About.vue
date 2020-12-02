<template>
  <div class="about">
    <topcard />
    <h1>Hello from About Page</h1>
    <lastcard />
  </div>
</template>

<script>
import Topcard from "../components/Topcard";
import Lastcard from "../components/Lastcard";
export default {
  name: "Home",
  components: {
    Topcard,
    Lastcard
  },
  data() {
    return {};
  },
  methods: {}
};
</script>
