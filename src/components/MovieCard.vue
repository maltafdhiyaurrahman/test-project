<template>
  <div class="movie-list my-4">
    <h3 class="text-light">{{ category }}</h3>
    <div class="row">
      <div class="col-6 col-md-3" v-for="(movie, index) in movies" :key="index">
        <div class="card bg-dark text-white mb-3">
          <img :src="movie.image" class="card-img-top" :alt="movie.title">
          <div class="card-body">
            <h5 class="card-title">{{ movie.title }}</h5>
            <p class="card-text">{{ movie.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieCard",
  props: ["category", "movies"],
};
</script>

<style scoped>
.card-img-top {
  height: 300px;
  object-fit: cover;
}
</style>
