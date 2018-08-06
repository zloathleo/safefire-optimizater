<template>
  <div class="content">
    <h3>Hello {{ name }} from my Vue.js page, built with Webpack 1!</h3>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      required: true
    }
  }
}
</script>
