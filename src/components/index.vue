<template>
  <div>
    <div>
      <ul class="nav nav-tabs bg-dark">
        <li class="nav-item">
          <router-link to="/shin" class="nav-link text-white">文創官網</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/blog" class="nav-link text-white">星座部落格</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/spa" class="nav-link text-white">SPA</router-link>
        </li>
      </ul>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {};
</script>