<template>
  <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInLeft"
    leave-active-class="bounceOut"
  >
    <div class="advanced" style="animation-duration:2s">
      <img
        src="../../../assets/imgs/SPA2.jpg"
        style="display:block; margin:auto;"
        class="mx-auto d-block img-fluid"
      >
      <router-link to="/spa/courses/">＜Back</router-link>
      <router-view/>
      <h2>賦活水嫩美容課程</h2>
      <p>平時做的基礎保養很重要，但可能會因為年紀增長、膚質老化而造成保養品吸收效率不佳，丹朵透過賦活水嫩美容課程加強呵護肌膚，去除毛孔的髒汙粉刺，淨化角質後再施予一層層的保養精華，讓臉龐充分吸收營養，擁有透亮細緻的水嫩美肌！</p>
    </div>
  </transition>
</template>

<script>
export default {};
</script>
