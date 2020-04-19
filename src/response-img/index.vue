<template>
  <img class="response-img" v-bind="$attrs">
</template>

<script>
export default {
  name: 'response-img'
}
</script>


<style scoped>
.response-img {
  display: block;
  max-width: 100%;
}
</style>