<template>
<div class="artworks">
	<a class="box item1" :style="{'background-image': 'url(' +  item1.src + ')'}">
   <div class="overlay">
     <div class="artwork-name">{{item1.title}}</div>
     <div class="author">{{item1.author}}</div>
   </div>
  </a>
	<a class="box item2" :style="{'background-image': 'url(' +  item2.src + ')'}">
   <div class="overlay">
     <div class="artwork-name">{{item2.title}}</div>
     <div class="author">{{item2.author}}</div>
   </div>
  </a>
	<a class="box item3" :style="{'background-image': 'url(' +  item3.src + ')'}">
   <div class="overlay">
     <div class="artwork-name">{{item3.title}}</div>
     <div class="author">{{item3.author}}</div>
   </div>
  </a>
</div>
</template>
<script>
export default{
	name: 'artworks-section',
	data () {
		return {
			item1: {
				src: require('@/assets/china.png'),
				title: 'Hotaru',
        author: '@Uemura Shōen'
			},
			item2: {
				src: require('@/assets/china.png'),
				title: 'Laberinto',
        author: '@Costhanzo'
			},
			item3: {
				src: require('@/assets/china.png'),
				title: 'Creencias',
        author: '@ArmaniAlda'
			}
		}
	}
}
</script>
<style scoped>
.artworks {
  width: 100%;
  height: 100vh;
  /*border: 2px solid #CCC;*/
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2,50%);
  /*justify-content: center;*/
  /*align-content: end;*/
}

.box {
  background-color: #eee;
  color: #fff;
  padding: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
  display: block;
}

.item1 {
  background-color: #fffeee;
  grid-column: 1 / 3;
  grid-row: 1 / 3;
}
.item2,
.item3 {
  grid-column: 3 / 5;
}
.item2 {
  background-color: blue;
  grid-row: 1 / 2;
}
.item3 {
  grid-row: 2 / 2;
}
  .box .overlay {
    background-color: rgba(104,104,104,.3);
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    flex-direction: column;
  }
    .box:hover .overlay {
      background-color: rgba(255,76,58,.3);
    }
  .box .artwork-name,
  .box .author {
    text-shadow: 1px 1px rgba(30,30,30,.5)
  }
  .box .artwork-name {
    font-size: 2.250em;
  }
  .box .author {
    font-size: 1.875em;
  }
@media (max-width: 670px) {
  .artworks {
    display: block;
    height: auto;
  }
  .item1,
  .item2,
  .item3 {
    height: 300px;
  }
}

</style>