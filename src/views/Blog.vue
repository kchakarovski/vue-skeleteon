<template>
  <div v-if="blogInputData" id="blog">
    <div>
      <span>{{ counter }}</span>
      <button class="counterbtn" @click="increameantCounter">{{blogInputData.increameantBtn}}</button>
    </div>
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
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Home",
  components: {
    Topcard,
    Lastcard,
    Wrapper,
  },
  computed: {
    ...mapGetters(["blogInputData", "counter"]),
  },
  methods: {
    ...mapActions(["increameantCounter"]),
    navigate(url) {
      this.$router.push(url);
    },
  },
};
</script>
