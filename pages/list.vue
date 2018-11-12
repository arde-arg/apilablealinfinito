<template>
<div class="list">
  <div class="portada">
    <div class="wrapper-1100">
      <h1 class="page-title">Archivo</h1>
    </div>
  </div>
  <div class="wrapper-1100">
    <search></search>
    <list-module></list-module>
  </div>
</div>
</template>

<script>
import ListModule from '~/components/ListModule.vue'
import Search from '~/components/Search.vue'
export default {
  components: {
    ListModule,
    Search
  }
}
</script>

<style scoped>
.portada .wrapper-1100 {
  height: 120px;
}
</style>

