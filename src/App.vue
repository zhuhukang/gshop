<template>
  <div id="app">
    <router-view/>
    <footer-guide/>
  </div>
</template>

<script>
import FooterGuide from "./components/FooterGuide/FooterGuide";
export default {
  name: 'App',
  components:{
    FooterGuide
  }
}
</script>

<style>
#app {
  width: 100%;
  height: 100%;
  /*text-align: center;*/

}
</style>
