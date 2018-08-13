<template>
    <v-app dark>
        <v-toolbar app fixed clipped-left>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>{{appName}}</v-toolbar-title>
            <v-spacer></v-spacer>
            <ModuleToolbar/>
        </v-toolbar>
        <v-content>
            <v-container fluid grid-list-md>
                <router-view></router-view>

                <v-navigation-drawer v-model="drawer" absolute temporary app>
                    <v-list dense>
                        <v-list-tile v-for="item in items" @click="toggle(item)" :key="item.key" v-bind:class="{ active: isItemActive(item.key) }">
                            <v-list-tile-action>
                                <v-icon>{{ item.icon }}</v-icon>
                            </v-list-tile-action>
                            <v-list-tile-content>
                                <v-list-tile-title>{{ item.title }}</v-list-tile-title>
                            </v-list-tile-content>
                        </v-list-tile>
                    </v-list>
                </v-navigation-drawer>
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
import globalvar from '../../common/globalvar'
import ModuleToolbar from './ModuleToolbar.vue'
export default {
    components: { ModuleToolbar },
    data() {
        return {
            appName: globalvar.appName,
            drawer: false,
            activeItem: undefined,
            items: [
                {
                    title: '主页',
                    key: 'dashboard',
                    icon: 'dashboard',
                    active: '/',
                },
                {
                    title: '设置',
                    key: 'settings',
                    icon: 'settings',
                    active: '/',
                },
                {
                    title: '分析',
                    key: 'analysis',
                    icon: 'art_track',
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
            this.$router.push({ name: item.key });
        }
    }
}
</script>