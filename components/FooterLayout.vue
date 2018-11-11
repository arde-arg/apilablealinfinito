<template>
<footer class="footer-layout">
  <div class="wrapper-1100">
    <div class="col-izq">
      <a href="">
        <v-icon name="brands/facebook-square"/>
      </a>
      <a href="">
        <v-icon name="brands/instagram"/>
      </a>
      <p>@apilablealinfinito</p>
    </div>
    <div class="col-der">
      <a href="mailto:info@apilablealinfinito.com" target="_blank">info@apilablealinfinito.com</a> - copyright {{this.year}}
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
      year: new Date().getFullYear(),
    }
	}
}
</script>
<style scoped>
footer {
  background: #FF4C3A;
  padding: 10px 0;
}
.col-izq, .col-der {
  align-items: center;
  color: #fff;
  display: inline-flex;
  justify-content: center;
  /*flex-direction: column;*/
  width: 50%;
  font-size: .9rem;
}
@media (max-width: 620px) {
  .col-izq, .col-der {
    width: 100%;
  }
  .col-der {
    display: block;
    margin-top: 10px;
    text-align: center;
  }
}
.fa-icon {
  width: auto;
  height: 1em; /* or any other relative font sizes */
  /* You would have to include the following two lines to make this work in Safari */
  max-width: 100%;
  max-height: 100%;
  margin: 0 5px;
  vertical-align: middle;
}
a:hover, a:hover .fa-icon {
  color: black;
}
.col-izq p {
  padding-left: 10px;
}
</style>