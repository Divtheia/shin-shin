<template>
    <transition
    name="fade"
    mode="out-in"
    appear="ture"
    appear-active-class="fadeIn"
    leave-active-class="fadeOut"
    >
    <div 
    class="courseList"
    >
    <div>
        <div class="py-3" v-for='course in courses' :key='course' >
            <div class="courseImg"/>
                <div class="text">
                <router-link :to="`/spa/courses/${course.path}`">
                <img :src="course.img" class='list'>
                    <br/>
                <span>{{course.name}} </span>
                </router-link>
                </div>
            </div>
        </div>
    </div>
    </transition>
</template>

<script>
import img1 from '../../assets/imgs/SPA1.jpg';
import img2 from '../../assets/imgs/SPA2.jpg';
import img3 from '../../assets/imgs/SPA3.jpg';

export default {
  data(){
      return{
        courses: [
            {id: 1, img: img1, name: '全身敷體嫩膚護理', path:'basic'},
            {id: 2, img: img2, name: '賦活水嫩美容課程', path:'advanced'},
            {id: 3, img: img3, name: '遠紅外線·負離子岩盤浴', path:'extreme'}
        ],
      }
  }
}
</script>

<style>

</style>



