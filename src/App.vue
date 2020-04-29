<template>
    <div id="app">
        <Navbar />
        <router-view />
    </div>
</template>

<script>
import Navbar from "./components/Navbar";
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
@media screen and (max-width: 768px) {
    .container {
        max-width: 98%;
    }
}
</style>