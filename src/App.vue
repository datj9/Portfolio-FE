<template>
  <div id="app">
    <Navbar />
    <router-view />
  </div>
</template>

<script>
import Navbar from "./views/Navbar";
export default {
  name: "App",
  components: { Navbar }
};
</script>

<style lang="scss">
@import "./style/_reset.scss";
html {
  font-size: 62.5%;
  font-family: Arial, Helvetica, sans-serif;
}
body {
  line-height: 1.5;
}
a {
  text-decoration: none;
  display: inline-block;
  align-self: center;
}
.container {
  max-width: 90%;
  margin: 0 auto;
}
</style>