<template>
  <div>
    <nav-vertical></nav-vertical>
    <nuxt/>
    <footer-layout></footer-layout>
  </div>
</template>
<script>
  import FooterLayout from '@/components/FooterLayout'
  import NavVertical from '@/components/NavVertical'
  export default {
    name: 'default',
    components: {
      FooterLayout,
      NavVertical
    }
  }
</script>
<style>
:root {
  --rojoPrimario: #FF4C3A;
}
html {
  font-family: "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*, *:before, *:after {
  box-sizing: border-box;
  margin: 0;
}
.wrapper-1100 {
  margin: 0 auto;
  max-width: 1100px;
  padding: 0 15px;
}
.main {
  z-index: 1;
}
.nav-vertical {
  z-index: 3;
}
</style>

