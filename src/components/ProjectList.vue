<template>
    <div class="project-container">
        <div v-if="isLoading" class="loader-wp">
            <ContentLoader v-for="index in numberOfItems" :key="index" />
        </div>
        <div v-else v-for="project in allProjects" :key="project._id" class="project">
            <div class="overflow-container">
                <img :src="project.imageUrl" />
                <div class="more-detail-overlay">
                    <span>Number of Members: 1</span>
                    <span>Role: Front-end and Back-end Developer</span>
                    <span>Used Technologies: ReactJS, NodeJS, ExpressJS, MongoDB</span>
                </div>
            </div>
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="btn-container">
                <a :href="project.sourceCodeUrl" target="_blank" class="source">Source Code</a>
                <a :href="project.linkDemoUrl" target="_blank" class="more-detail">Visit Web</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ContentLoader from "./ContentLoader";

export default {
    name: "ProjectList",
    props: {
        numberOfItems: {
            type: Number
        }
    },
    components: {
        ContentLoader
    },
    methods: {
        ...mapActions(["fetchProjects"])
    },
    computed: {
        ...mapGetters(["allProjects", "isLoading"])
    },
    created() {
        this.fetchProjects();
    }
};
</script>

<style lang="scss">
.project-container {
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;

    .loader-wp {
        width: 100%;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

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

            a {
                border-radius: 0.4rem;
                display: block;
                text-align: center;
            }

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

@media only screen and(max-width: 768px) {
    .project-container {
        .project {
            width: 48%;
        }
    }
}

@media only screen and(max-width: 576px) {
    .project-container {
        .project {
            width: 100%;
        }
    }
}
</style>