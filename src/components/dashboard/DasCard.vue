<template>
    <v-card>

        <v-card-title class="subheading font-weight-bold">{{ title }}</v-card-title>

        <v-divider></v-divider>

        <v-list>
            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">回转窑压力:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.calories }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">一次风温度:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.fat }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">一次风风量:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.carbs }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">二次风温度:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.protein }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">中心风压力:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.sodium }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">旋流风压力:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.calcium }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">轴流风压力:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">中心风蝶阀开度:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">内风蝶阀开度:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">外风蝶阀开度:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">火焰周围的氧气浓度:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">煤质灰分:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">煤质水分:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">煤质细度:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">煤粉浓度:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">燃烧器位置:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>

            <v-list-tile style="height:30px">
                <v-list-tile-content style="font-size: 12px;">Nox排放量:</v-list-tile-content>
                <v-list-tile-content style="font-size: 12px;" class="align-end">{{ data.iron }}</v-list-tile-content>
            </v-list-tile>
        </v-list>

        <!-- <v-data-iterator :items="items" :pagination.sync="pagination" content-tag="v-layout" hide-actions>

            <v-flex slot="item" slot-scope="props" xs12>
                <v-card>
                   
                </v-card>
            </v-flex>

        </v-data-iterator> -->
    </v-card>
</template>

<script> 
export default {
    data() {
        return {
            title: '指标参数',
            data: {
                value: false,
                name: 'Frozen Yogurt',
                calories: 159,
                fat: 6.0,
                carbs: 24,
                protein: 4.0,
                sodium: 87,
                calcium: '14%',
                iron: '1%'
            }
        }
    },
    mounted() {
    },
}
</script>
