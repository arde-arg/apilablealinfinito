<template>
<section class="register-section">
  <div class="wrapper-1100">
    <div class="wrap-text">
      <h3>Regístrate y conocé más sobre nosotros</h3>
      <button-layout color="black">
        <template slot="button">registrarse</template>
      </button-layout>
    </div>
  </div>
</section>
</template>
<script>
import ButtonLayout from '~/components/ButtonLayout.vue'
export default{
	name: 'register-section',
  components: {
    ButtonLayout
  },
	data () {
		return {
		}
	}
}
</script>
<style scoped>
.register-section {
  background-color: #cecfc7;
  padding: 70px 0;
}
  .register-section .wrap-text {
    max-width: 350px
  }
h3 {
  font-size: 2.250rem;
  line-height: 2.7rem;
  font-weight: 300;
  margin-bottom: 20px;
}
</style>