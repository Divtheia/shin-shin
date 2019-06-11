import Vue from 'vue'
import Router from 'vue-router'
import index from '@/components/index.vue';
import blog from '@/components/blog.vue'
import shin from '@/components/shin.vue'
import spa from '@/components/spa.vue/'
import About from '../components/spa/About.vue';
import Booking from '../components/spa/Booking.vue';
import CourseList from '../components/spa/CourseList.vue';
import Courses from '../components/spa/Courses.vue';
import Basic from '../components/spa/courses/Basic.vue';
import Advanced from '../components/spa/courses/Advanced.vue';
import Extreme from '../components/spa/courses/Extreme.vue';
import Drink from '../components/spa/Drink/Drink.vue';

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children: [{
        path: 'blog',
        name: 'blog',
        component: blog,
      }, {
        path: '',
        name: 'shin',
        component: shin,
      }, {
        path: 'spa',
        name: 'spa',
        component: spa,
        children: [
          { path: 'About', component: About },
          { path: 'booking', component: Booking },
          {
            path: 'courses',
            component: Courses,
            children: [
              { path: '', component: CourseList },
              { path: 'basic', component: Basic },
              { path: 'advanced', component: Advanced },
              { path: 'extreme', component: Extreme },
            ]
          },
          { path: 'drink', component: Drink }]
      },
      ]
    }
  ]
})
