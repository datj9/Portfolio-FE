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
            <div id="title">These are some of my projects</div>
            <div class="container project-container">
                <div
                    v-for="project in viewAll ? projects : projects.slice(0, 6)"
                    :key="project.id"
                    class="project"
                >
                    <!-- <ContentLoader></ContentLoader> -->
                    <div class="overflow-container">
                        <img :src="project.imgUrl" />
                        <div class="more-detail-overlay">
                            <h3>Members of Team: 1</h3>
                            <h3>My Role: Fullstack Developer</h3>
                            <h3>Used Technologies: ReactJS, NodeJS, ExpressJS, MongoDB</h3>
                            <router-link to="/about" class="btn">More Detail</router-link>
                        </div>
                    </div>

                    <h3 class="project-name">{{ project.name }}</h3>
                    <div class="btn-container">
                        <router-link to="/" class="source">Source Code</router-link>
                        <router-link to="/" class="more-detail">Visit Web</router-link>
                    </div>
                </div>
            </div>
            <div @click="toggleAll" class="all-btn">View All</div>
        </div>
        <div class="profile-section">
            <div class="overlay"></div>
            <div class="profile-wp">
                <h3 id="title">My Profiles</h3>
                <div class="container profile-container">
                    <router-link to="/" class="profile">
                        <img src="../assets/images/facebook.svg" alt />
                        <span>Facebook</span>
                    </router-link>
                    <router-link to="/" class="profile">
                        <img src="../assets/images/twitter.svg" alt />
                        <span>Twitter</span>
                    </router-link>
                    <router-link to="/" class="profile">
                        <img src="../assets/images/instagram.svg" alt />
                        <span>Instagram</span>
                    </router-link>
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
        animation: move-right-in 2.5s;
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
    padding: 4% 0 3%;
    background: #fff;
    #title {
        font-size: 3.3rem;
        color: #276bd8;
        text-align: center;
        margin-bottom: 2.5%;
    }
    .project-container {
        display: flex;
        justify-content: space-between;
        align-content: space-between;
        flex-wrap: wrap;
        .project {
            width: 32%;
            height: 40%;
            margin-bottom: 4%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            .overflow-container {
                overflow: hidden;
                height: 100%;
                position: relative;
                .more-detail-overlay {
                    height: 100%;
                    display: none;
                }
                .btn {
                    background: #276bd8;
                    color: #fff;
                    border: 0.1rem solid #276bd8;
                    margin: 0 auto;
                    width: 30%;
                    text-align: center;
                    border-radius: 0.2rem;
                    &:hover {
                        background: #fff;
                        color: #276bd8;
                        border-color: #276bd8;
                    }
                }
                &:hover {
                    img {
                        opacity: 0.3;
                    }
                    .more-detail-overlay {
                        display: flex;
                        flex-direction: column;
                        justify-content: space-around;
                        position: absolute;
                        top: 0;
                        z-index: 1;
                        text-align: left;
                        font-size: 2rem;
                        padding: 0 5%;
                    }
                }
            }
            .project-name {
                font-size: 2.5rem;
                text-align: center;
                color: #276bd8;
                text-transform: capitalize;
            }
            .btn-container {
                display: flex;
                justify-content: space-around;
                .more-detail,
                .source {
                    font-size: 2rem;
                    width: 35%;
                    margin-top: 2%;
                    padding: 1%;
                }
                .more-detail {
                    background: #276bd8;
                    color: #fff;
                    box-sizing: border-box;
                    &:hover {
                        border: 1px solid #276bd8;
                        background: #fff;
                        color: #276bd8;
                    }
                }
                .source {
                    border: 1px solid #276bd8;
                    background: #fff;
                    color: #276bd8;
                    &:hover {
                        background: #276bd8;
                        color: #fff;
                    }
                }
            }
        }
        img {
            max-width: 100%;
            height: auto;
            border-radius: 1rem;
        }
    }
    .all-btn {
        border: 1px solid #276bd8;
        border-radius: 0.4rem;
        background: #276bd8;
        color: #fff;
        width: 7%;
        font-size: 2.3rem;
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
    a {
        display: block;
        border-radius: 0.4rem;
        text-align: center;
    }
}

.profile-section {
    margin: 2% 0;
    position: relative;
    .overlay {
        height: 45vh;
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
        position: absolute;
        top: 20%;
    }
    .profile-container {
        display: flex;
        flex-wrap: nowrap;
        justify-content: space-around;
        .profile {
            max-width: 4%;
            text-align: center;
            img {
                max-width: 100%;
                height: auto;
                transition-duration: 0.4s;
            }
            span {
                font-size: 2.5rem;
                height: 55%;
                display: flex;
                align-items: center;
                justify-content: center;
            }
            &:visited {
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
    padding-bottom: 2.5%;
    #title {
        color: #000;
        font-size: 3rem;
    }
    h4 {
        font-size: 2rem;
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
export default {
    name: "Home",
    data() {
        let projects = [];
        for (let index = 0; index < 12; index++) {
            projects.push({
                id: index + "",
                imgUrl:
                    "https://portfolio-dn.s3-ap-southeast-1.amazonaws.com/1584437927183%20-%20coding-computer-data-depth-of-field-577585.jpg",
                name: `Project ${index}`
            });
        }

        return {
            projects,
            viewAll: false,
            show: true
        };
    },
    methods: {
        toggleAll() {
            this.viewAll = !this.viewAll;
        },
        onOff() {
            setInterval(() => {
                this.show = !this.show;
            }, 2000);
        }
    },
    created() {
        this.onOff();
    }
};
</script>
