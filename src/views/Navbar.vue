<template>
  <div id="nav">
    <div class="container navbar-container">
      <router-link to="/">Home</router-link>
      <router-link :to="{ name: 'About' }">My Work</router-link>
      <router-link :to="{ name: 'About' }">About Me</router-link>
      <router-link :to="{ name: 'Signin' }">Sign In</router-link>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Navbar",
  getters: {
    ...mapGetters([])
  }
};
</script>
<style lang="scss">
#nav {
  background: #0044b3;
  height: 7vh;
  .navbar-container {
    height: 100%;
    display: flex;
    justify-content: flex-end;
    a {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 7%;
      height: 100%;
      padding: 0 1.2%;
      font-size: 2.2rem;
      color: #fff;
      &:hover {
        color: #0044b3;
        background: #fff;
      }
    }
  }
}
</style>
