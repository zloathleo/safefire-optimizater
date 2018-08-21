<template>
  <div :style="{width: '100%', height: dashboardHeight}">
    <div id="dashboard-container" style="width: 100%; height: 100%; overflow-x: hidden;overflow-y: auto;">
      <v-layout row wrap>
        <v-flex v-if="dasCard" xs12 sm4 md2 lg2>
          <v-slide-x-transition>
            <DasCard />
          </v-slide-x-transition>
        </v-flex>

        <v-flex xs12 v-bind:class="mainBindClass">
          <v-layout row wrap>
            <v-flex xs12 sm12 md6 lg6>
              <HeatChart />
            </v-flex>
            <v-flex xs12 sm12 md6 lg6>
              <TrendChart />
            </v-flex>
          </v-layout>

          <v-layout row wrap>
            <v-flex xs6 sm3>
              <Gauge title="回转窑压力" />
            </v-flex>
            <v-flex xs6 sm3>
              <Gauge title="一次风温度" />
            </v-flex>
            <v-flex xs6 sm3>
              <Gauge title="一次风风量" />
            </v-flex>
            <v-flex xs6 sm3>
              <Gauge title="二次风温度" />
            </v-flex>
          </v-layout>
        </v-flex> 

      </v-layout>
    </div>
  </div>
</template>

<style>
/* This is for documentation purposes and will not be needed in your application */
#lateral .v-speed-dial,
#lateral .v-btn--floating {
  position: absolute;
}
#lateral .v-btn--floating {
  margin: 0 0 16px 16px;
}
</style>

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
          'md10': true,
          'lg10': true,
        }
      } else {
        return {
          'sm8': true,
          'md10': true,
          'lg10': true,
          'offset-md1': true,
          'offset-lg1': true
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
