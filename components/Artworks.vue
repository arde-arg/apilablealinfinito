<template>
<div class="artworks">
	<a class="box item1" :style="{'background-image': 'url(' +  item1.src + ')'}"></a>
	<a class="box item2" :style="{'background-image': 'url(' +  item2.src + ')'}"></a>
	<a class="box item3" :style="{'background-image': 'url(' +  item3.src + ')'}"></a>
</div>
</template>
<script>
export default{
	name: 'artworks',
	data () {
		return {
			item1: {
				src: require('@/assets/china.png'),
				title: ''
			},
			item2: {
				src: require('@/assets/china.png'),
				title: ''
			},
			item3: {
				src: require('@/assets/china.png'),
				title: ''
			}
		}
	}
}
</script>
<style scoped>
.artworks {
	padding: 0 0 0 55px;
  width: 100%;
  height: 100vh;
  /*border: 2px solid #CCC;*/
  display: grid;
  grid-gap: 0;
  grid-template-columns: repeat(4, 25%);
  grid-template-rows: repeat(2,50%);
  justify-content: center;
  align-content: end;
}

.box {
  background-color: #eee;
  color: #fff;
  padding: 20px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
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

</style>