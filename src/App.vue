<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
import blog from './components/blog.vue'
import shin from './components/shin.vue'
import spa from './components/spa.vue'
import index from './components/index.vue'

export default {
  components:{
    blog,
    shin,
    spa,
    index,
  },
}
</script>

<style>

</style>
