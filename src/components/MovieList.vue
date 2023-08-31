<template>
  <v-list v-if="filmOptions.length">
    <v-list-item v-for="(item, i) in filmOptions" :key="i">
      <v-list-item-icon>
        <v-icon v-text="item.posterPath"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.generatedTitle"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
import MovieOption from '@/models/MovieOption.js';

  export default {
    props: ['movies'],
    name: 'MovieList',
    data() {
      return {
        filmOptions: [],
      }
    },
    methods: {
      generateTitle(title, date) {
          if (!date || date === 'null' || date.trim().length === 0) {
            return title;
          }
            return `${title} (${date.split('-')[0]})`
        },
        generatePosterPath(path) {
          if (!path || path === 'null' || path.trim().length === 0) {
            return '/favicon.png';
          } 
          return `https://image.tmdb.org/t/p/original${path}`;
        },
        updateFilms() {
        this.movies.forEach(movie => this.filmOptions.push(new MovieOption(
          movie.id,
          this.generateTitle(movie.title, movie.release_date),
          this.generatePosterPath(movie.poster_path)
        ))
      );
      console.log(this.filmOptions)
      console.log(this.movies)
      }
    },
    created() {
      this.$watch(this.movies, this.updateFilms);
    }
  }
</script>
