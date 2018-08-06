<template>
    <v-app dark>
        <v-navigation-drawer v-model="drawer" clipped temporary fixed app>
            <v-list dense>
                <v-list-tile v-for="item in items" @click="toggle(item)" :key="item.key" v-bind:class="{ active: isItemActive(item.key) }">
                    <v-list-tile-action>
                        <v-icon>{{ item.key }}</v-icon>
                    </v-list-tile-action>
                    <v-list-tile-content>
                        <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                    </v-list-tile-content>
                </v-list-tile>
            </v-list>
        </v-navigation-drawer>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>燃烧优化-水泥</v-toolbar-title>
        </v-toolbar>
        <v-content>
            <v-container fluid fill-height grid-list-md text-xs-center>
                <router-view></router-view>
            </v-container>
        </v-content>
        <v-footer app fixed>
            <span>&copy; 2018</span>
        </v-footer>
    </v-app>
</template>

<style scoped lang="less">
.active {
  background-color: rgba(95, 95, 95, 0.6);
}
</style>

<script>
export default {
    data() {
        return {
            drawer: false,
            activeItem: undefined,
            items: [
                {
                    title: 'Dashboard',
                    key: 'dashboard',
                    active: '/',
                },
                {
                    title: 'Settings',
                    key: 'settings',
                    active: '/',
                },
            ]
        }    },
    methods: {
        isItemActive(key) {
            return this.activeItem === key;
        },
        toggle(item) {
            this.activeItem = item.key;
            console.log(item.key);
            this.$router.push({ name: item.key });
        }
    }
}
</script>