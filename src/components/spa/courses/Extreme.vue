<template>
  <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInLeft"
    leave-active-class="bounceOut"
  >
    <div class="extreme" style="animation-duration:2s">
      <img
        src="../../../assets/imgs/SPA3.jpg"
        style="display:block; margin:auto;"
        class="mx-auto d-block img-fluid"
      >
      <router-link to="/spa/courses/#">＜Back</router-link>
      <router-view/>
      <h2>遠紅外線·負離子岩盤浴</h2>
      <p>
        鐳礦石岩盤浴床-遠紅外線·負離子岩盤浴
        <br>利用遠紅外線和負離子作用讓身體底層達到大量排汗，加速身體新陳代謝及血液循環，調整冰冷體質，同時紓緩身體疲勞，解除身心壓力。
      </p>
    </div>
  </transition>
</template>

<script>
export default {};
</script>
