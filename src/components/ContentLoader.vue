<template>
    <content-loader
        :width="width"
        :height="height"
        :speed="speed"
        :primaryColor="primaryColor"
        :secondaryColor="secondaryColor"
    >
        <rect x="0" y="0" rx="5" ry="5" width="1020" height="450" />
        <rect x="235" y="470" rx="5" ry="5" width="550" height="70" />
        <rect x="0" y="575" rx="5" ry="5" width="470" height="80" />
        <rect x="550" y="575" rx="5" ry="5" width="470" height="80" />
    </content-loader>
</template>

<script>
import { ContentLoader } from "vue-content-loader";
export default {
    components: {
        ContentLoader
    },
    data() {
        return {
            width: "1060",
            height: "750",
            speed: 1.5,
            primaryColor: "#bdbbbb",
            secondaryColor: "#d1d1d1"
        };
    }
};
</script>
<style lang="scss">
svg {
    width: 33%;
}
</style>