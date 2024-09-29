<template>
  <div id="movieCarousel" class="carousel slide" data-bs-ride="carousel">
    <div class="carousel-inner">
      <div class="carousel-item" v-for="(movie, index) in movies" :class="{ active: index === 0 }" :key="index">
        <img :src="movie.image" class="d-block w-100" :alt="movie.title">
        <div class="carousel-caption d-none d-md-block">
          <h5>{{ movie.title }}</h5>
          <p>{{ movie.description }}</p>
        </div>
      </div>
    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#movieCarousel" data-bs-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#movieCarousel" data-bs-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="visually-hidden">Next</span>
    </button>
  </div>
</template>

<script>
export default {
  name: "MovieCarousel",
  data() {
    return {
      movies: [
        {
          title: "Movie 1",
          description: "Description for movie 1",
          image: "https://via.placeholder.com/1200x400",
        },
        {
          title: "Movie 2",
          description: "Description for movie 2",
          image: "https://via.placeholder.com/1200x400",
        },
        {
          title: "Movie 3",
          description: "Description for movie 3",
          image: "https://via.placeholder.com/1200x400",
        },
      ],
    };
  },
};
</script>

<style scoped>
.carousel-caption {
  background-color: rgba(0, 0, 0, 0.6);
  padding: 10px;
}
</style>
