<template>

  <v-card id="dashboard" ref="content" flat style="width: 100%; height: 100%;">
    <Toolbar/>
    <Content/>
  </v-card>

</template>

<script>   
import Content from '../components/dashboard/Content.vue';
import Toolbar from '../components/dashboard/Toolbar.vue';
export default {
  components: {
    Content, Toolbar
  },
  mounted() { 
  }
}
</script>
