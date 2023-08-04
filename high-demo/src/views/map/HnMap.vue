<template>
  <div class="map-wrapper">
    <div id="olMap"></div>
    <!-- <dv-flyline-chart-enhanced :config="config" style="width:100%;height:100%;" /> -->
  </div>
</template>

<script>
import "ol/ol.css";
import { Map, View } from "ol";
import { defaults as defaultControls } from "ol/control";
import { Vector as VectorLayer } from "ol/layer";
import { Vector as VectorSource } from "ol/source";
import TileLayer from "ol/layer/Tile";
import XYZ from "ol/source/XYZ";
import { Style, Fill } from "ol/style";
import GeoJSON from "ol/format/GeoJSON";
import { defaults as defaultInteractions } from "ol/interaction";
import { getVectorContext } from "ol/render";
import proAndCity from "./data/proAndCity.json";
import province from "./data/province.json";
// c367ccae39229e3b768c1f9826809654
export default {
  name: 'HnMap',
  props: {

  },
  components: {

  },
  data() {
    return {
      map: null,
      config: {
        points: [
          {
            name: '郑州',
            coordinate: [0.48, 0.35],
            icon: {
              src: 'https://sm.ms/image/8QSN1p6JXBIgCrt',
              width: 30,
              height: 30
            }
          },
          {
            name: '新乡',
            coordinate: [0.52, 0.23]
          },
          {
            name: '焦作',
            coordinate: [0.43, 0.29]
          },
          {
            name: '开封',
            coordinate: [0.59, 0.35]
          },
          {
            name: '许昌',
            coordinate: [0.53, 0.47]
          },
          {
            name: '平顶山',
            coordinate: [0.45, 0.54]
          },
          {
            name: '洛阳',
            coordinate: [0.36, 0.38]
          },
          {
            name: '周口',
            coordinate: [0.62, 0.55]
          },
          {
            name: '漯河',
            coordinate: [0.56, 0.56]
          },
          {
            name: '南阳',
            coordinate: [0.37, 0.66]
          },
          {
            name: '信阳',
            coordinate: [0.55, 0.81]
          },
          {
            name: '驻马店',
            coordinate: [0.55, 0.67]
          },
          {
            name: '济源',
            coordinate: [0.37, 0.29]
          },
          {
            name: '三门峡',
            coordinate: [0.20, 0.36]
          },
          {
            name: '商丘',
            coordinate: [0.76, 0.41]
          },
          {
            name: '鹤壁',
            coordinate: [0.59, 0.18]
          },
          {
            name: '濮阳',
            coordinate: [0.68, 0.17]
          },
          {
            name: '安阳',
            coordinate: [0.59, 0.10]
          }
        ],
        lines: [
          {
            source: '新乡',
            target: '郑州'
          },
          {
            source: '焦作',
            target: '郑州'
          },
          {
            source: '开封',
            target: '郑州'
          },
          {
            source: '许昌',
            target: '郑州'
          },
          {
            source: '平顶山',
            target: '郑州'
          },
          {
            source: '洛阳',
            target: '郑州'
          },
          {
            source: '周口',
            target: '郑州'
          },
          {
            source: '漯河',
            target: '郑州'
          },
          {
            source: '南阳',
            target: '郑州'
          },
          {
            source: '信阳',
            target: '郑州'
          },
          {
            source: '驻马店',
            target: '郑州'
          },
          {
            source: '济源',
            target: '郑州'
          },
          {
            source: '三门峡',
            target: '郑州'
          },
          {
            source: '商丘',
            target: '郑州'
          },
          {
            source: '鹤壁',
            target: '郑州'
          },
          {
            source: '濮阳',
            target: '郑州'
          },
          {
            source: '安阳',
            target: '郑州'
          }
        ],
        icon: {
          show: true,
          src: 'https://sm.ms/image/vmid5APf8gaWupD'
        },
      },
    }
  },
  computed: {

  },
  watch: {

  },
  created() {

  },
  mounted() {
    this.initMap();
  },
  methods: {
    initMap() {
      const tiandituMap = new TileLayer({
        source: new XYZ({
          url: 'http://t0.tianditu.gov.cn/DataServer?T=img_c&X={x}&Y={y}&L={z}&tk=bea4826cd9f20c39d86d6226c45593e9',
          projection: "EPSG:4326",
        }),
      });
      const clipLayer = new VectorLayer({
        projection: "EPSG:4326",
        source: new VectorSource({
          features: new GeoJSON().readFeatures(province),
          featureProjection: "EPSG:4326",
        }),
      });
      tiandituMap.on("postrender", function (e) {
        e.context.globalCompositeOperation = "destination-in";
        clipLayer.getSource().forEachFeature(function (feature) {
          getVectorContext(e).drawFeature(
            feature,
            new Style({ fill: new Fill({ color: "red" }) })
          );
        });
        e.context.globalCompositeOperation = "source-over";
      });
      this.map = new Map({
        target: 'olMap',
        layers: [tiandituMap],
        view: new View({
          projection: "EPSG:4326",
          center: [113.665412, 34.757975],
          zoom: 7.6,
          maxZoom: 18,
          minZoom: 6,
        }),
        controls: defaultControls({ zoom: false }).extend([]),
        interactions: defaultInteractions({ doubleClickZoom: false }),
      });

      this.$olMapUtil.drawAdmnBoundary(this.map, proAndCity);
      this.$olMapUtil.drawMapBoundary(this.map, province);
      this.map.on("singleclick", (evt) => {
        const pixel = this.map.getEventPixel(evt.originalEvent);
        const feature = this.map.forEachFeatureAtPixel(pixel, (feat) => feat);

      });

      this.map.on("pointermove", (evt) => {
        const pixel = this.map.getEventPixel(evt.originalEvent);
        const feature = this.map.forEachFeatureAtPixel(pixel, (feat) => feat);

      });
      this.map.on("moveend", () => {

      });

      this.$olMapUtil.changeViewByPolygon(
        this.map,
        new GeoJSON().readFeatures(province)[0].getGeometry(),
        [50, 50, 50, 50]
      );
    },
  },
};
</script>

<style scoped lang="scss">
.map-wrapper {
  position: relative;
  width: 100%;
  height: 100vh;
  background: rgb(2, 0, 36);
  background: linear-gradient(
    90deg,
    rgba(2, 0, 36, 1) 0%,
    rgba(60, 78, 192, 0.8828125) 0%,
    rgba(0, 212, 255, 1) 100%
  );
}
#olMap {
  position: relative;
  width: 100%;
  height: 100%;
}
</style>
