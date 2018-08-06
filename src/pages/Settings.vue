<template>

  <v-layout row wrap>
    <v-flex xs12 sm6>
      <v-card dark>
        <HeatChart />
      </v-card>
    </v-flex>
    <v-flex xs12 sm6>
      <v-card dark>
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
  mounted() {
    // this._init_main_chart();
  },
  methods: {

  }

}
</script>
