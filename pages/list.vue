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

    <loading-message v-if="$store.state.loading" />

    <list-module
      v-if="artworks.length"
      :artworks="artworks"
    />
    <p v-else class="sin-resultados">
      <span v-if="!$store.state.loading">No hay resultados.</span>
    </p>
  </div>
</div>
</template>

<script>
import ListModule from '~/components/ListModule.vue'
import Search from '~/components/Search.vue'
import LoadingMessage from '~/components/LoadingMessage.vue'

export default {
  components: {
    ListModule,
    Search,
    LoadingMessage
  },
  data () {
    return{
      artworks: []
    }
  },
  beforeRouteEnter (to, from, next) {
    next(async vm => {
      let search = vm.$route.query.search
      let category = vm.$route.params.categoryId
      let artist = vm.$route.params.artistId
      vm.$store.commit('SET_LOADING', true)
      if(search){
        vm.artworks = await vm.$api.getArticles(search)
      }else if(category){
        vm.artworks = await vm.$api.getArticlesByCategory(category)
      }else if(artist){
        vm.artworks = await vm.$api.getArticlesByArtist(artist)
      }else{
        vm.artworks = await vm.$api.getAllArticles()
      }
      vm.$store.commit('SET_LOADING', false)
    })
  },
  watch:{
    async '$route.query.search' (newSearch) {
      if(newSearch){
        this.$store.commit('SET_LOADING', true)
        this.artworks = await this.$api.getArticles(newSearch)
        this.$store.commit('SET_LOADING', false)
      }
    },
    async '$route.params.categoryId' (newCategory) {
      if(newCategory){
        this.$store.commit('SET_LOADING', true)
        this.artworks = await this.$api.getArticlesByCategory(newCategory)
        this.$store.commit('SET_LOADING', false)
      }
    },
    async '$route.params.artistId' (newArtist) {
      if(newArtist){
        this.$store.commit('SET_LOADING', true)
        this.artworks = await this.$api.getArticlesByArtist(newArtist)
        this.$store.commit('SET_LOADING', false)
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

