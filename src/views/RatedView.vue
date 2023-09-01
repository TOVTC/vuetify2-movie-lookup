<template>
  <v-container>
    <v-row justify="center" class="ma-5">
      <v-col>
        <h1>Top Rated:</h1>
      </v-col>
    </v-row>
    <v-row class="ma-5">
      <v-col>
        <MovieList :movies="movies" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieList from '@/components/MovieList.vue';
import MediaService from '@/services/MediaService.js';

export default {
  props: ['searchTerm'],
  components: {
    MovieList
  },
  data() {
    return {
        movies: []
    };
  },
  async created() {
    try {
      let movies = await MediaService.getTopRated();
      if (!movies) {
        alert("An error occurred");
        return;
      }
      this.movies = movies;
    }
    catch (err) {
      alert("An error occurred");
      console.log(err);
    }
  }
}
</script>