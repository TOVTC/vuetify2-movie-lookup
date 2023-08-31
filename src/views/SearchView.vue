<template>
  <v-container>
    <v-row justify="center" class="ma-5">
      <v-col>
        <h1>Search Results "{{ this.$route.query.searchTerm }}":</h1>
      </v-col>
    </v-row>
    <v-row class="ma-5">
      <v-col>
        <MovieList />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import MovieList from '@/components/MovieList.vue';

export default {
  props: ['searchTerm'],
  components: {
    MovieList
  },
  data() {
      return {
          
      };
  },
  created() {
    console.log(this.$route.query.searchTerm)
  }
}
</script>