<template>
  <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeInLeft"
    leave-active-class="bounceOut"
  >
    <div class="basic" style="animation-duration:2s">
      <img
        src="../../../assets/imgs/SPA1.jpg"
        style="display:block; margin:auto;"
        class="mx-auto d-block img-fluid"
      >
      <router-link to="/spa/courses">＜Back</router-link>
      <router-view/>
      <div>
        <h2>全身敷體嫩膚護理</h2>
        <p>
          增強肌膚免疫系統功能，能有效保持肌膚柔軟健康，恢復肌膚亮澤，給妳一身透白無暇的美人肌！讓光采由內而外透亮出每一天。讓夏日的陽光，再也無法在你身上留下任何痕跡，讓您從頭到腳亮白細緻，妳就是最美麗的化身。
          搭配去角質課程更佳。
        </p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {};
</script>
