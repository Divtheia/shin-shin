<template>
  <div class="tilteLink">
    <nav class="navbar navbar-expand-lg navbar-dark bg-success">
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/spa/about" class="nav-link active">About</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/spa/courses" class="nav-link active">Courses</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/spa/booking" class="nav-link active">Booking</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/spa/drink" class="nav-link active">Drinks</router-link>
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
export default {};
</script>


