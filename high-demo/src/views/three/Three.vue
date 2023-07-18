<template>
  <div id="map">

  </div>
</template>

<script>
// https://mp.weixin.qq.com/s/Ua42sTCMVjWBjtbYNDWOeA
import {
  initiaMap,
  createMap,
  createMesh,
  createLine,
  createLabel,
  createIcon,
  setCenter,
} from 'utils/threeMap.js'
export default {
  name: 'Three',
  props: {

  },
  components: {

  },
  data() {
    return {

    };
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    initiaMap('map')
  },
  methods: {

  },
};
</script>

<style scoped lang="scss">
</style>
