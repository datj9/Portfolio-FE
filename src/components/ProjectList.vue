<template>
    <div class="project-container">
        <div v-for="project in allProjects" :key="project._id" class="project">
            <!-- <ContentLoader></ContentLoader> -->
            <div class="overflow-container">
                <img :src="project.imageUrl" />
                <div class="more-detail-overlay">
                    <h3>Members of Team: 1</h3>
                    <h3>My Role: Fullstack Developer</h3>
                    <h3>Used Technologies: ReactJS, NodeJS, ExpressJS, MongoDB</h3>
                    <router-link to="/about" class="btn">More Detail</router-link>
                </div>
            </div>
            <h3 class="project-name">{{ project.name }}</h3>
            <div class="btn-container">
                <a :href="project.sourceCodeUrl" class="source">Source Code</a>
                <a :href="project.linkDemoUrl" class="more-detail">Visit Web</a>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
    name: "ProjectList",
    methods: {
        ...mapActions(["fetchProjects"])
    },
    computed: {
        ...mapGetters(["allProjects"])
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
</style>