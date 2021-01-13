<template>
  <div v-if="homeInputData" id="home">
    <div class="">
      <span>{{ counter }}</span>
      <button class="counterbtn" @click="increameantCounter">{{homeInputData.increamentBtn}}</button>
    </div>
    <topcard v-if="homeInputData" :inputData="homeInputData.topCard" />
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
    ...mapGetters(["homeInputData", "counter"]),
  },
};
</script>
