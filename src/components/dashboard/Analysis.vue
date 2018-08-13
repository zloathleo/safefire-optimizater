<template>
    <div :style="{width: '100%', height: dashboardHeight}">
        <div id="dashboard-container" style="width: 100%; height: 100%; overflow-x: hidden;overflow-y: auto;">
            <v-layout row wrap>
                <v-flex xs12>
                    <v-layout row wrap>
                        <v-flex xs12>
                            <HeatChart calc="p" pixel="8" />
                        </v-flex>

                        <!-- <v-flex xs6>
                            <HeatChart calc="w" pixel="8" />
                        </v-flex> -->
                        <!-- <v-flex xs6>
                            <HeatChart calc="p" pixel="8" />
                        </v-flex> -->

                        <!-- <v-flex xs6>
                            <HeatChart calc="w" pixel="4" />
                        </v-flex> 
                        <v-flex xs6>
                            <HeatChart calc="p" pixel="4" />
                        </v-flex> -->
                        <!-- <v-flex xs6>
                            <HeatChart calc="m" pixel="8" />
                        </v-flex>
                        <v-flex xs6>
                            <HeatChart calc="m" pixel="4" />
                        </v-flex> -->
                        <!-- <v-flex xs4>
                            <HeatChart calc="w" pixel="10" />
                        </v-flex> -->
                        <!-- <v-flex xs4>
                            <HeatChart calc="p" />
                        </v-flex>
                        <v-flex xs4>
                            <HeatChart calc="m" />
                        </v-flex> -->
                    </v-layout>
                </v-flex>
            </v-layout>

            <v-btn absolute dark fab bottom right color="pink" @click="clickNext">
                <v-icon>add</v-icon>
            </v-btn>
        </div>
    </div>
</template>

<script>
import HeatChart from './HeatChart.vue';
import TrendChart from './TrendChart.vue';//??
export default {
    components: {
        HeatChart
    },
    data() {
        return {
            dashboardHeight: (window.innerHeight - (64 + 32 + 24 * 2)) + 'px',
        }
    },
    mounted() { 
    },
    methods: {
        clickNext() {
            this.$globalEventHub.$emit("periodNext", {});
        }
    }
}
</script>