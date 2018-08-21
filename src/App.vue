<template>
  <div v-resize="resizeCall">
    <router-view />
  </div>
</template>


<script>   
export default {
  data() {
    return {
      isResize: false
    }
  },
  methods: {
    resizeCall() {
      if (this.isResize == true) {
        return;
      }
      this.isResize = true;
      window.setTimeout(3000, this.resizeCallBack)
    },
    resizeCallBack() {
      if (this.isResize) {
        this.isResize = false;
        console.log(this.isResize);
      }
    }
  }

}
</script>