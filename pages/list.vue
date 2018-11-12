<template>
<div class="list">
  <div class="portada">
    <div class="wrapper-1100">
      <h1>Archivo</h1>
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
.portada {
  background-color: #f1e8b8;
  margin-bottom: 50px;
}
  .portada .wrapper-1100 {
    height: 120px;
    position: relative;
  }
h1 {
  font-size: 4.5rem;
  position: absolute;
  bottom: -40px;
  left: 15px;
}
</style>

