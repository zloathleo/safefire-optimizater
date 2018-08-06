<template>

  <v-layout row wrap v-if="dasCard">
    <v-flex xs12 sm4>
      <v-card>
        <HeatChart />
      </v-card>
    </v-flex>

    <v-flex xs12 sm4>
      <v-card>
        <TrendChart />
      </v-card>
    </v-flex>

  </v-layout>
  <v-layout row wrap v-else>
    <v-flex xs12 sm6>
      <v-card>
        <HeatChart />
      </v-card>
    </v-flex>

    <v-flex xs12 sm6>
      <v-card>
        <TrendChart />
      </v-card>
    </v-flex>
  </v-layout>

</template>

<script>
import HeatChart from './HeatChart.vue';
import TrendChart from './TrendChart.vue';
export default {
  components: {
    HeatChart, TrendChart
  },
  data() {
    return {
      dasCard: null, //显示dasCard
    }
  },
  mounted() {
    let _this = this;
    this.$globalEventHub.$on("clickDasCard", function (value) {
      _this.dasCard = !_this.dasCard;
    });
  },
}
</script>
