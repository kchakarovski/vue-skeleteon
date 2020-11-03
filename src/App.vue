<template>
  <div id="app">
    <Nav />
    <h1>Lorem ipsum APP</h1>
    <router-view />
    <Footer />
  </div>
</template>

<script>
import Nav from "../src/components/Nav";
// import Topcard from "../src/components/Topcard";
// import Wrapper from "../src/components/Wrapper";
// import Lastcard from "../src/components/Lastcard";
import Footer from "../src/components/Footer";
export default {
  name: "App",
  components:{
    Nav,
    Footer,
  },
  data(){
    return{
    }
  },
}
</script>
<style lang="scss">
@import "assets/scss/application";
</style>
