<template>
    <div class="modal">
        <div class="modal-content">
            <form @submit.prevent="submitForm">
                <div class="form-item">
                    <label for="name">Project Name</label>
                    <input type="text" v-model="name" id="name" />
                </div>
                <div class="form-item">
                    <label for="sourceCodeUrl">Source Code Url</label>
                    <input type="text" v-model="sourceCodeUrl" id="sourceCodeUrl" />
                </div>
                <div class="form-item">
                    <label for="linkDemoUrl">Link Demo Url</label>
                    <input type="text" v-model="linkDemoUrl" id="linkDemoUrl" />
                </div>
                <input
                    ref="file"
                    v-on:change="handleFileUpload()"
                    type="file"
                    name="imageUpload"
                    id="imageUpload"
                />
                <div class="img-uploaded">
                    <img :src="imageUrl" alt />
                </div>
                <button>Cancel</button>
                <button type="submit">Save</button>
            </form>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
export default {
    data() {
        return {
            name: "",
            sourceCodeUrl: "",
            linkDemoUrl: ""
        };
    },
    methods: {
        ...mapActions(["uploadImage", "addNewProject"]),
        handleFileUpload() {
            this.uploadImage(this.$refs.file.files[0]);
        },
        submitForm() {
            this.addNewProject({
                name: this.name,
                sourceCodeUrl: this.sourceCodeUrl,
                linkDemoUrl: this.linkDemoUrl,
                imageUrl: this.imageUrl
            });
        }
    },
    computed: {
        ...mapGetters(["imageUrl"])
    }
};
</script>

<style lang="scss">
.modal {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 20;
    background-color: rgba(#000, 0.8);
    width: 100%;
    height: 100vh;

    .modal-content {
        background: #fff;
        width: 50%;
        height: 60vh;
        z-index: 21;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);

        form {
            margin: 5% 10%;
            .form-item {
                font-size: 2rem;

                label {
                    margin-right: 2rem;
                }
            }

            .img-uploaded {
                width: 50%;
                margin-top: 2%;

                img {
                    width: 100%;
                    height: auto;
                }
            }
        }
    }
}
</style>