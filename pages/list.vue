<template>
<div class="list">
  <div class="portada">
    <div class="wrapper-1100">
      <h1 class="page-title">Archivo</h1>
    </div>
  </div>
  <div class="wrapper-1100">
    <search></search>
    <list-module
      v-if="artworks.length"
      :artworks="artworks"
    />
    <p v-else class="sin-resultados">No hay resultados.</p>
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
  },
  data () {
    return{
      artworks: []
    }
  },
  async created () {
    this.artworks = await this.$api.getArticles()
  }
}
</script>

<style scoped>
.portada .wrapper-1100 {
  height: 120px;
}
.sin-resultados {
  margin: 20px auto 50px;
}
</style>

