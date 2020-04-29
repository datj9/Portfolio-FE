<template>
    <div class="container project-list">
        <h2 class="list-title">My Projects</h2>
        <button v-if="isAuthenticated">Add New Project</button>
        <ProjectList />
        <FormModal v-if="isAuthenticated" />
    </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ProjectList from "../components/ProjectList";
import FormModal from "../components/FormModal";
export default {
    name: "MyProjects",
    components: {
        ProjectList,
        FormModal
    },
    methods: {
        ...mapActions(["fetchProjects"])
    },
    computed: {
        ...mapGetters(["allProjects", "isAuthenticated"])
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

@media screen and (max-width: 768px) {
    .project-list {
        margin-top: 10rem;
    }
}
</style>