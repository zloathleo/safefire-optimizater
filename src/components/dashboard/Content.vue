<template>
  <div id="dashboard" :style="{width: '100%', height: dashboardHeight}">
    <div id="dashboard-container" style="width: 100%; height: 100%; overflow-x: hidden;overflow-y: auto;">
      <v-layout row wrap>
        <v-flex v-if="dasCard" xs12 sm4 md4 lg3 offset-lg1>
          <v-slide-x-transition>
            <DasCard />
          </v-slide-x-transition>
        </v-flex>

        <v-flex xs12 v-bind:class="mainBindClass">
          <v-layout row wrap>
            <v-flex xs12 sm6 md6 lg6>
              <HeatChart />
            </v-flex>
            <v-flex xs12 sm6 md6 lg6>
              <TrendChart />
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs3>
              <Gauge/>
            </v-flex>
            <v-flex xs3>
              <Gauge/>
            </v-flex>
            <v-flex xs3>
              <Gauge/>
            </v-flex>
            <v-flex xs3>
              <Gauge/>
            </v-flex>
          </v-layout>
        </v-flex>

      </v-layout>
    </div>
  </div>
</template>

<script>
import HeatChart from './HeatChart.vue';
import TrendChart from './TrendChart.vue';
import Gauge from './Gauge.vue';
import DasCard from './DasCard.vue';
export default {
  components: {
    HeatChart, TrendChart, Gauge, DasCard
  },
  data() {
    return {
      dasCard: false, //显示dasCard  
      dashboardHeight: (window.innerHeight - (64 + 32 + 24 * 2)) + 'px',

    }
  },
  computed: {
    mainBindClass: function () {
      if (this.dasCard) {
        return {
          'sm8': true,
          'md8': true,
          'lg7': true,
        }
      } else {
        return {
          'sm12': true,
          'md8': true,
          'lg7': true,
          'offset-md2': true,
          'offset-lg2': true
        }
      }
    },
  },
  mounted() {
    let _this = this;
    this.$globalEventHub.$on("clickDasCard", function (value) {
      _this.dasCard = !_this.dasCard;
    });
  },
  methods: {

    onResize() {
      console.log(123);
    }
  }
}
</script>
