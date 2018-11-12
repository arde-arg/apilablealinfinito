<template>
<div class="list-module">
  <nuxt-link to="artwork"
    v-for="item in $store.state.artworks"
    :key="item.id"
    class="item">
    <div class="bg-hover"></div>
    <img :src="item.img.src" :alt="item.img.alt">
    <div class="category">{{item.category}}</div>
    <div class="title">{{item.title}}</div>
    <div class="artist">@{{item.artist}}</div>
  </nuxt-link>
</div>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
export default{
	name: 'list-module',
	data () {
		return {
    }
	}
}
</script>
<style scoped>
.list-module {
  padding: 40px 0;
  list-style: none;
  margin: 2em;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(auto-fill,minmax(200px, 1fr));
}
  .list-module .item {
    border: 1px solid #686868;
    /*border-radius: 5px;*/
    display: flex;
    flex-direction: column;
    position: relative;
  }
    .item img {
      height: 135px;
      object-fit: cover;
      width: 100%;
    }
    @media (max-width: 620px) {
      .item img {
        height: 200px;
      }
    }
    .item .artist,
    .item .category,
    .item .title{
      padding-left: 10px;
      padding-right: 10px;
    }
    .item .category {
      font-size: 0.8rem;
      line-height: 1rem;
      margin-top: 10px;
    }
    .item .title {
      font-size: 1.5rem;
      line-height: 1.6rem;
      margin-bottom: 10px;
    }
    .item .artist {
      font-size: 1.125rem;
      margin-top: auto;
      padding: 10px;
    }
.bg-hover {
  border: solid 3px rgba(255, 76, 58, 0);
  width: 100%;
  height: 100%;
  z-index: 1;
  transition: all .5s;
  position: absolute;
}
.list-module .item:hover .bg-hover {
  border: solid 3px rgba(255, 76, 58, .6);
  transform: translate(5px, 5px);
}
</style>