<template>
  <content-loader
    :width="width"
    :height="height"
    :speed="speed"
    :primaryColor="primaryColor"
    :secondaryColor="secondaryColor"
  >
    <rect x="80" y="65" rx="3" ry="3" width="930" height="550" />
    <rect x="80" y="630" rx="3" ry="3" width="930" height="70" />
    <rect x="80" y="725" rx="3" ry="3" width="390" height="100" />
    <rect x="610" y="725" rx="3" ry="3" width="390" height="100" />
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
        width: '1080',
        height: '800',
        speed: 2,
        primaryColor:"#f3f3f3",
        secondaryColor:"#ecebeb"
      }
  },
};
</script>