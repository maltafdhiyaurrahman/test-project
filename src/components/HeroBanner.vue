<template>
    <div class="hero-banner d-flex align-items-center" style="background-image: url('https://image.tmdb.org/t/p/original/your-banner-image.jpg');">
      <div class="container text-white">
        <h1 class="display-4">Welcome to Netflix</h1>
        <p class="lead">Watch anywhere. Cancel anytime.</p>
        <button class="btn btn-primary btn-lg">Get Started</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'HeroBanner'
  }
  </script>
  
  <style scoped>
  .hero-banner {
    height: 75vh;
    background-size: cover;
    background-position: center;
  }
  </style>
  