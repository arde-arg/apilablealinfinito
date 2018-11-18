<template>
<div class="list">
  <div class="portada">
    <div class="wrapper-1100">
      <h1 class="page-title">Archivo</h1>
    </div>
  </div>
  <div class="wrapper-1100">
    <search
      :search="$route.query.search"
      @newSearch="search"
    ></search>
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
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      let search = vm.$route.query.search
      if(search){
        vm.artworks = await vm.$api.getArticles(search)
      }else{
        vm.artworks = await vm.$api.getFeaturedArticles()
      }
    })
  },
  watch:{
    async '$route.query.search' (newSearch) {
      if(newSearch){
        this.artworks = await this.$api.getArticles(newSearch)
      }
    }
  },
  methods: {
    search (search) {
      this.$router.push({query: {search}})
    }
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

