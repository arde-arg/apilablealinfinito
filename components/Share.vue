<template>
<div class="share">
  <!-- <a href="" @click.prevent="showDropDown=!showDropDown" style="font-size: 20px">desplegar</a> -->
  <button-layout
    color="black"
    @click.native="showDropDown=!showDropDown">
    <template slot="button">
      <v-icon name="share-alt" />compartir
    </template>
  </button-layout>
  <transition name="slide-fade">
    <ul class="dropdown" v-if="showDropDown">
      <li v-for="social in socialShare" :key="social.id">
        <a
          :href="social.link"
          data-action="social.data"
          target="_blank">
          <v-icon
            :name="social.icon"
            class="icon"
            :class="social.class">
          </v-icon>
          <span>{{social.name}}</span>
        </a>
      </li>
    </ul>
  </transition>
</div>
</template>
<script>
import ButtonLayout from '~/components/ButtonLayout.vue'
import Icon from 'vue-awesome/components/Icon'
export default {
  name: 'share',
  components: {
    ButtonLayout,
    'v-icon': Icon
  },
  data () {
    return {
      showDropDown: false,
      socialShare: [
        {
          id: 1,
          name: 'Whatsapp',
          link: 'https://wa.me/?text=https://apilablealinfinito.com.ar' + this.$route.path,
          data: 'share/whatsapp/share',
          icon: 'brands/whatsapp',
          class: 'whatsapp'
        },
        {
          id: 2,
          name: 'Facebook',
          link: 'http://www.facebook.com/sharer.php?u=https://apilablealinfinito.com.ar' + this.$route.path,
          data: '',
          icon: 'brands/facebook-square',
          class: 'facebook'
        },
        {
          id: 3,
          name: 'Twitter',
          link: 'https://twitter.com/intent/tweet?text=https://apilablealinfinito.com.ar' + this.$route.path,
          data: '',
          icon: 'brands/twitter',
          class: 'twitter'
        },
        {
          id: 4,
          name: 'E-mail',
          link: 'mailto:?subject=Mirá el descuento que encontré! https://apilablealinfinito.com.ar' + this.$route.path,
          data: '',
          icon: 'envelope',
          class: 'email'
        }
      ]
    }
  }
}
</script>
<style scoped>
.share {
  position: relative;
}
  .share .dropdown {
    background: rgba(255,255,255,.8);
    position: absolute;
    left: -20px;
    top: 42px;
  }
    .share .dropdown li {
      font-size: 1.2rem;
      line-height: 1rem;
      padding: 10px;
    }
    .share .dropdown li:hover {
      background: rgba(255,76,58,.8);
      color: #fff;
    }
.fa-icon {
	margin-right: 10px;
}

.slide-fade-enter-active {
  transition: all .3s ease;
}
.slide-fade-leave-active {
  transition: all .2s ease;
}
.slide-fade-enter {
  transform: translateY(-30px);
  opacity: 0;
}
.slide-fade-leave-to {
 transform: translateY(-30px);
  opacity: 0;
}
</style>