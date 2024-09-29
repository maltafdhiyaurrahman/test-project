<template>
  <div id="home">
    <MovieCarousel />
    <MovieCard category="Popular on MyFlix" :movies="popularMovies" />
    <MovieCard category="Top Rated" :movies="topRatedMovies" />
    <MovieCard category="Action Movies" :movies="actionMovies" />
  </div>
</template>

<script>
import MovieCarousel from "../components/MovieCarousel.vue";
import MovieCard from "../components/MovieCard.vue";

export default {
  name: "AppHome",
  components: {
    MovieCarousel,
    MovieCard,
  },
  data() {
    return {
      popularMovies: [
        {
          title: "The Matrix",
          description: "A computer hacker learns about the true nature of reality.",
          image: "https://via.placeholder.com/300x450",
        },
        {
          title: "Inception",
          description: "A thief steals corporate secrets through dream-sharing technology.",
          image: "https://via.placeholder.com/300x450",
        },
      ],
      topRatedMovies: [
        {
          title: "The Shawshank Redemption",
          description: "Two imprisoned men bond over a number of years.",
          image: "https://via.placeholder.com/300x450",
        },
        {
          title: "The Godfather",
          description: "The aging patriarch of an organized crime dynasty.",
          image: "https://via.placeholder.com/300x450",
        },
      ],
      actionMovies: [
        {
          title: "Mad Max: Fury Road",
          description: "In a post-apocalyptic wasteland, a woman rebels against a tyrant.",
          image: "https://via.placeholder.com/300x450",
        },
        {
          title: "John Wick",
          description: "An ex-hitman comes out of retirement to track down gangsters.",
          image: "https://via.placeholder.com/300x450",
        },
      ],
    };
  },
};
</script>


