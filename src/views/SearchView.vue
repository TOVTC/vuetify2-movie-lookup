<template>
  <v-container>
    <v-row justify="center" class="ma-5">
      <v-col>
        <h1>Search Results "{{ this.$route.query.searchTerm }}":</h1>
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
      let results = await MediaService.getResults(this.$route.query.searchTerm);
      if (!results) {
          alert('An error occurred');
          return;
      }
      this.movies = results;
    } catch (error) {
      console.log(error);
    }
  }
}
</script>