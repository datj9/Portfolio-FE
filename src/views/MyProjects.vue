<template>
    <div class="container project-list">
        <h2 class="list-title">My Projects</h2>
        <ProjectList />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProjectList from "../components/ProjectList";
export default {
    name: "MyProjects",
    components: {
        ProjectList
    },
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
.project-list {
    margin-top: 3rem;
    .list-title {
        margin-bottom: 2rem;
        font-size: 3rem;
    }
}
</style>