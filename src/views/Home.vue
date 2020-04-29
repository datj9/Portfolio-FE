<template>
    <div class="home">
        <div class="overlay">
            <div class="container">
                <div class="title-container">
                    <h1 id="title">I am a Web Developer</h1>
                    <h2 id="sub-title">I like to build things for the web</h2>
                </div>
            </div>
        </div>
        <div class="projects-section">
            <div class="container">
                <div id="list-title">These are some of my projects</div>
                <ProjectList :numberOfItems="3" />
                <router-link v-show="!isLoading" to="/my-projects" class="all-btn">View All</router-link>
            </div>
        </div>
        <div class="profile-section">
            <div class="overlay"></div>
            <div class="profile-wp">
                <h3 id="title">My Profiles</h3>
                <div class="container profile-container">
                    <a
                        href="https://www.facebook.com/profile.php?id=100007977246513"
                        target="_blank"
                        class="profile"
                    >
                        <img src="../assets/images/facebook.svg" alt />
                        <span>Facebook</span>
                    </a>
                    <a href="https://www.hackerrank.com/tandat198" target="_blank" class="profile">
                        <img src="../assets/images/hackerrank.svg" alt />
                        <span>HackerRank</span>
                    </a>
                    <a href="https://github.com/tandat198" target="_blank" class="profile">
                        <img src="../assets/images/github.svg" alt />
                        <span>GitHub</span>
                    </a>
                </div>
            </div>
        </div>
        <div class="contact-section">
            <div class="container">
                <h3 id="title">Contact Me</h3>
                <h4>Mobile Phone Number: 084 26 93293</h4>
                <h4>Email: datng198@gmail.com</h4>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scope>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 1s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
.overlay {
    height: 93vh;
    background-image: url("../assets/images/home.jpg");
    background-repeat: no-repeat;
    background-size: cover;
    background-position: bottom;
    background-attachment: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    .title-container {
        display: flex;
        flex-direction: column;
        background: #fff;
        color: #276bd8;
        text-align: center;
        border-radius: 0.5rem;
        padding: 1.5rem;
        animation: move-right-in 1s;
        #title {
            font-size: 3rem;
            font-weight: 700;
        }
        #sub-title {
            font-size: 2.5rem;
            font-weight: 500;
        }
    }
}
.projects-section {
    padding: 10% 0;
    background: #fff;

    #list-title {
        font-size: 3.3rem;
        font-weight: 600;
        color: #276bd8;
        text-align: center;
        margin-bottom: 2.5%;
    }

    .all-btn {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        border: 1px solid #276bd8;
        border-radius: 0.4rem;
        background: #276bd8;
        color: #fff;
        width: 8.5rem;
        font-size: 2.2rem;
        text-align: center;
        margin: 0 auto;
        padding: 0.6% 0.5%;
        &:hover {
            border-color: #276bd8;
            background: #fff;
            color: #276bd8;
            cursor: pointer;
        }
    }
}

.profile-section {
    padding: 2.5rem 0;
    position: relative;
    height: 55vh;

    .overlay {
        height: 100%;
        background-image: url("../assets/images/social.jpg");
        background-position: bottom;
        opacity: 0.2;
        flex-direction: column;
    }

    #title {
        color: #000;
        font-size: 3.2rem;
        text-align: center;
        margin-bottom: 3%;
        display: flex;
        justify-content: center;
    }

    .profile-wp {
        width: 100%;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
    }
    .profile-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;

        .profile {
            text-align: center;
            img {
                width: 6rem;
                height: 6rem;
                transition: transform 0.3s;
            }
            span {
                font-size: 2.5rem;
                height: 55%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            &:visited,
            &:link {
                color: #000;
            }
            &:hover img {
                transform: translateY(-7%);
            }
            &:active img {
                transform: translateY(0);
            }
        }
    }
}

.contact-section {
    margin: 0 2%;
    padding: 4rem 0;
    #title {
        color: #000;
        font-size: 3rem;
    }
    h4 {
        font-size: 2rem;
    }
}

@media screen and (max-width: 768px) {
    .overlay {
        background-attachment: unset;
    }
}

@keyframes move-right-in {
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    70% {
        opacity: 0.8;
        transform: translateX(-30%);
    }
    100% {
        opacity: 1;
        transform: translateX(0);
    }
}
</style>

<script>
import { mapGetters } from "vuex";
import ProjectList from "../components/ProjectList";
export default {
    name: "Home",
    components: {
        ProjectList
    },
    computed: {
        ...mapGetters(["isLoading"])
    }
};
</script>
