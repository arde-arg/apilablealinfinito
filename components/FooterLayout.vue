<template>
<footer class="footer-layout">
  <div class="wrapper-1100">
    <div class="col-izq">
      <v-icon name="brands/facebook-square"/>
      <v-icon name="brands/instagram"/>
      @apilablealinfinito
    </div>
    <div class="col-der">
      <a href="mailto:info@apilablealinfinito.com" target="_blank">info@apilablealinfinito.com</a> - copyright 2018
    </div>
  </div>
</footer>
</template>
<script>
import Icon from 'vue-awesome/components/Icon'
export default{
	name: 'footer-layout',
  components: {
    'v-icon': Icon
  },
	data () {
		return {
    }
	}
}
</script>
<style scoped>
footer {
  background: #FF4C3A;
  padding: 0 0 0 55px
}
</style>