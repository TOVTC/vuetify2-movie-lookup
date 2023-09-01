<template>
    <v-container>
      <v-row justify="center" class="ma-5">
        <v-col>
          <h1>{{ film.original_title }}</h1>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-5">
        <v-col col="6">
          <v-img :src="generatePosterPath(film.poster_path)" :aspect-ratio="10/15"></v-img>
        </v-col>
        <v-col col="6">
          <p>Placeholder</p>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-5">
        <v-col>
          <h2>Recommended Films</h2>
          <MovieList :movies="recommended" />
        </v-col>
        <v-col>
          <h2>Similar Films</h2>
          <MovieList :movies="similar" />
        </v-col>
      </v-row>
    </v-container>
  </template>
  
<script>
import MediaService from '@/services/MediaService.js'
import MovieList from '@/components/MovieList.vue'

export default {
  props: ['id'],
  components: {
    MovieList
  },
  data() {
    return {
      film: {},
      recommended: [],
      similar: []
    }
  },
  methods: {
    generatePosterPath(path) {
      if (!path || path === 'null' || path.trim().length === 0) {
        return '/favicon.png';
      } 
      return `https://image.tmdb.org/t/p/original${path}`;
    },
  },
  async created() {
    try {
      let film = await MediaService.getDetails(this.id)
      let recommended = await MediaService.getRecommended(this.id)
      let similar = await MediaService.getSimilar(this.id)

      if (!film || !recommended || !similar) {
        alert("An error occurred")
        return
      }
      this.film = film
      this.recommended = recommended
      this.similar = similar
    }
    catch (err) {
      alert("An error occurred")
      console.log(err)
    }
  }
}
  </script>