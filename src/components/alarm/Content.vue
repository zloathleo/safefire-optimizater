<template>
    <div :style="{width: '100%', height: dashboardHeight}">
        <div style="width: 100%; height: 100%; overflow-x: hidden;overflow-y: auto;">

            <v-data-table :headers="headers" :items="desserts" hide-actions class="elevation-1">
                <template slot="items" slot-scope="props">
                    <td>{{ props.item.name }}</td>
                    <td>{{ props.item.content }}</td>
                    <td>{{ props.item.time }}</td>
                </template>
            </v-data-table>

        </div>
    </div>
</template>

<script> 
export default {
    components: {
    },
    data() {
        return {
            dashboardHeight: (window.innerHeight - (64 + 32 + 24 * 2)) + 'px',
            headers: [
                {
                    text: '报警名称',
                    align: 'left',
                    sortable: false,
                    value: 'name'
                },
                {
                    text: '报警内容',
                    align: 'left',
                    sortable: false,
                    value: 'content'
                },
                {
                    text: '报警时间',
                    align: 'left',
                    sortable: false,
                    value: 'time'
                }
            ],
            desserts: [
                {
                    name: '偏烧报警',
                    content: '10分钟回转窑区域报警',
                    time: '2018.08.10 12:10:10'
                },
                {
                    name: '偏烧报警',
                    content: '10分钟回转窑区域报警',
                    time: '2018.08.10 12:10:10'
                },
                {
                    name: '偏烧报警',
                    content: '10分钟回转窑区域报警',
                    time: '2018.08.10 12:10:10'
                }
            ]
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
