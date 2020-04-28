<template>
    <div id="nav">
        <div class="container navbar-container">
            <ul nav-items>
                <li>
                    <router-link to="/">Home</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'MyProjects' }">My Projects</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'About' }">My Work</router-link>
                </li>
                <li>
                    <router-link :to="{ name: 'About' }">About Me</router-link>
                </li>
                <li v-show="false">
                    <router-link :to="{ name: 'Signin' }">Sign In</router-link>
                </li>
                <li>
                    <router-link v-if="isAuthenticated" :to="{ name: 'About' }">Add Project</router-link>
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
    name: "Navbar",
    computed: {
        ...mapGetters(["isAuthenticated"])
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

        ul {
            display: flex;
            flex-direction: row;

            li {
                a {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100%;
                    padding: 0 2rem;
                    font-size: 2.2rem;
                    color: #fff;
                    &:hover {
                        background: rgb(51, 62, 218);
                    }
                }
            }
        }
    }
}
</style>
