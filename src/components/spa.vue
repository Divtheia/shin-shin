<template>
  <transition name="fade" mode="out-in" appear="ture" appear-active-class="fadeInDown">
    <div style="animation-duration:3s">
      <Menu/>
      <img src="../assets/imgs/SPA0.jpg" class="SPAcover" width="100%">
      <router-view/>
      <div class="py-3 bg-success">
        <div class="container text-white">
          <div class="row">
            <div class="col-md-4">
              <p>SPA 很高興為您服務</p>
              <hr>
            </div>
            <div class="col-md-4">
              <div class="ml-5">
                <p>服務據點</p>
                </div>
              <ul>
                <li>台北萬華店</li>
                <li>台中太平店</li>
                <li>高雄三民店</li>
              </ul>
              <hr>
            </div>
            <div class="col-md-4">
              <p>連絡電話：04-22345678</p>
              <p>服務地址：台中市北區三民路三段129號</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import Menu from "./spa/Menu.vue";
export default {
  //name: 'App',
  components: {
    Menu
  }
};
</script>

<style>
</style>
