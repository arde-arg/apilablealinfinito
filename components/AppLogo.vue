<template>
<!--   <div class="VueToNuxtLogo">
    <div class="Triangle Triangle--two"/>
    <div class="Triangle Triangle--one"/>
    <div class="Triangle Triangle--three"/>
    <div class="Triangle Triangle--four"/>
  </div> -->
  <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
   width="367.552px" height="140px" viewBox="0 0 367.552 140" enable-background="new 0 0 367.552 140" xml:space="preserve">
<g>
  <polygon fill="#FFCD33" points="144,140 0,140 0,0 119.271,0   "/>
  <g>
    <path fill="#282222" d="M76.172,46.444v50.117H61.137v-4.711c-3.308,3.809-8.22,6.114-14.936,6.114
      c-13.131,0-23.956-11.527-23.956-26.462c0-14.936,10.825-26.462,23.956-26.462c6.716,0,11.628,2.306,14.936,6.114v-4.711H76.172z
       M61.137,71.503c0-7.518-5.012-12.229-11.928-12.229c-6.917,0-11.929,4.711-11.929,12.229s5.012,12.229,11.929,12.229
      C56.125,83.731,61.137,79.021,61.137,71.503z"/>
    <path fill="#282222" d="M92.208,23.391h15.035v73.171H92.208V23.391z"/>
    <path fill="#282222" d="M142.325,60.878v17.741c0,4.311,3.709,4.711,10.324,4.311v13.632
      c-19.646,2.005-25.359-3.909-25.359-17.942V60.878h-8.019V46.444h8.019v-9.522l15.035-4.511v14.033h10.324v14.434H142.325z"/>
    <path fill="#282222" d="M221.108,71.503c0,14.935-10.825,26.462-23.956,26.462c-6.716,0-11.628-2.306-14.936-6.114v24.758h-15.035
      V46.444h15.035v4.711c3.308-3.809,8.22-6.114,14.936-6.114C210.283,45.041,221.108,56.567,221.108,71.503z M206.073,71.503
      c0-7.518-5.012-12.229-11.928-12.229c-6.917,0-11.929,4.711-11.929,12.229s5.012,12.229,11.929,12.229
      C201.062,83.731,206.073,79.021,206.073,71.503z"/>
    <path fill="#282222" d="M234.639,23.391h15.035v73.171h-15.035V23.391z"/>
    <path fill="#282222" d="M313.123,46.444v50.117h-15.035v-4.711c-2.706,3.709-7.718,6.114-14.333,6.114
      c-10.124,0-18.744-7.217-18.744-20.749V46.444h15.035v28.566c0,6.215,3.909,9.122,8.721,9.122c5.513,0,9.321-3.208,9.321-10.324
      V46.444H313.123z"/>
    <path fill="#282222" d="M367.552,81.526c0,11.527-10.023,16.438-20.849,16.438c-10.024,0-17.642-3.809-21.551-11.928l13.03-7.418
      c1.303,3.81,4.109,5.914,8.521,5.914c3.608,0,5.412-1.103,5.412-3.107c0-5.513-24.657-2.605-24.657-19.946
      c0-10.926,9.221-16.438,19.646-16.438c8.119,0,15.336,3.608,19.546,10.726l-12.83,6.915c-1.403-2.605-3.408-4.41-6.716-4.41
      c-2.606,0-4.21,1.003-4.21,2.807C342.894,66.792,367.552,62.982,367.552,81.526z"/>
  </g>
</g>
</svg>
</template>

<style>
.VueToNuxtLogo {
  display: inline-block;
  animation: turn 2s linear forwards 1s;
  transform: rotateX(180deg);
  position: relative;
  overflow: hidden;
  height: 180px;
  width: 245px;
}

.Triangle {
  position: absolute;
  top: 0;
  left: 0;
  width: 0;
  height: 0;
}

.Triangle--one {
  border-left: 105px solid transparent;
  border-right: 105px solid transparent;
  border-bottom: 180px solid #41B883;
}

.Triangle--two {
  top: 30px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 87.5px solid transparent;
  border-right: 87.5px solid transparent;
  border-bottom: 150px solid #3B8070;
}

.Triangle--three {
  top: 60px;
  left: 35px;
  animation: goright 0.5s linear forwards 3.5s;
  border-left: 70px solid transparent;
  border-right: 70px solid transparent;
  border-bottom: 120px solid #35495E;
}

.Triangle--four {
  top: 120px;
  left: 70px;
  animation: godown 0.5s linear forwards 3s;
  border-left: 35px solid transparent;
  border-right: 35px solid transparent;
  border-bottom: 60px solid #fff;
}

@keyframes turn {
  100% {
    transform: rotateX(0deg);
  }
}

@keyframes godown {
  100% {
    top: 180px;
  }
}

@keyframes goright {
  100% {
    left: 70px;
  }
}
</style>

