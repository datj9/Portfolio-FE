<template>
    <div id="nav">
        <div class="container navbar-container">
            <input type="checkbox" id="check-menu" />
            <label for="check-menu">
                <img class="hamburger-icon" src="../assets/images/hamburger.png" alt />
            </label>
            <ul class="nav-items">
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
    width: 100%;
    z-index: 11;

    .navbar-container {
        height: 100%;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        z-index: 3;

        #check-menu {
            display: none;
        }

        label {
            z-index: 10;
            height: 100%;
        }

        .hamburger-icon {
            height: 100%;
            float: right;
            display: none;
        }

        .nav-items {
            background: #0044b3;
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

@media screen and (max-width: 768px) {
    #nav {
        height: 10vh;
        position: fixed;
        top: 0;
        left: 0;

        .container {
            max-width: 100%;
            padding: 0 2%;
        }

        .navbar-container {
            padding: 0 2%;
            box-sizing: border-box;
            height: 100%;
            background: #0044b3;
            justify-content: center;
            flex-direction: column;

            .hamburger-icon {
                display: block;
            }

            #check-menu {
                &:checked ~ .nav-items {
                    transform: translateY(0);
                }
            }

            .nav-items {
                flex-direction: column;
                position: absolute;
                transform: translateY(calc(-100% - 10vh));
                transition: transform 0.6s;
                left: 0;
                top: 10vh;
                width: 102%;
                padding: 2rem 0;

                li {
                    a {
                        &:hover {
                            background: none;
                            color: rgb(165, 165, 165);
                        }
                    }
                }
            }
        }
    }
}

@media screen and (max-width: 576px) {
    #nav {
        .navbar-container {
            .nav-items {
                top: 4vh;
            }
        }
    }
}
</style>
