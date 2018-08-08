<template>
    <div>
        <v-menu bottom left transition="slide-x-transition">
            <v-btn slot="activator" color="primary">
                {{periodItems[selectedPeriodIndex].title}}
            </v-btn>
            <v-list>
                <v-list-tile v-for="(item, index) in periodItems" :key="index" :data-index="index" @click="changePeriod">
                    <v-list-tile-title :data-index="index">{{ item.title }}</v-list-tile-title>
                </v-list-tile>
            </v-list>
        </v-menu>
        <v-btn icon @click.stop="clickDasCard">
            <v-icon>more_vert</v-icon>
        </v-btn>
    </div>
</template>
 
<script> 
export default {
    data() {
        return {
            switchShowDas: true,
            selectedPeriodIndex: 0,//选中周期
            periodItems: [
                { title: '周期选择', value: 0 },
                { title: '1分钟', value: 1 },
                { title: '5分钟', value: 5 },
                { title: '10分钟', value: 10 },
                { title: '30分钟', value: 30 },
                { title: '60分钟', value: 60 }
            ]
        }
    },
    methods: {
        changePeriod(evt) {
            this.selectedPeriodIndex = parseInt(evt.target.dataset.index);
            let _value = this.periodItems[this.selectedPeriodIndex].value;
            this.$globalEventHub.$emit("periodChanged", _value);
        },
        clickDasCard() {
            this.$globalEventHub.$emit("clickDasCard");
        }
    }
}
</script>