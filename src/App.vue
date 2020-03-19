<template>
  <div id="app">
    <div id="nav">
      <div class="container navbar-container">
        <router-link to="/">Home</router-link>
        <router-link to="/about">About Me</router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

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
      }
    }
  }
}
</style>
