<template>
    <v-container>
      <v-row justify="center" class="ma-5">
        <v-col>
          <h1>{{ film.original_title }}</h1>
        </v-col>
      </v-row>
      <v-row justify="center" align="end" class="ma-5">
        <v-col cols="12" md="6">
          <v-img :src="generatePosterPath(film.poster_path)" :aspect-ratio="10/15" class="ma-5"></v-img>
        </v-col>
        <v-col cols="12" md="6">
          <v-sheet v-if="film" class="ma-5">
            <p v-if="film.tagline !== ''" class="my-3 font-italic text-subtitle-1">"{{ film.tagline }}"</p>
            <p v-if="film.release_date !== ''" class="text-subtitle-2">Release Date - {{ film.release_date }}</p>
            <p v-if="getRuntime(film.runtime)" class="text-subtitle-2">Runtime - {{ getRuntime(film.runtime) }}</p>
            <p v-if="parseObjects('name', film.genres)" class="text-subtitle-2">Genres - {{ parseObjects('name', film.genres).join(', ') }}</p>
            <p v-if="parseObjects('english_name', film.spoken_languages)" class="text-subtitle-2">Languages ({{ film.original_language }}){{ ` - ${parseObjects('english_name', film.spoken_languages).join(', ')}`}}</p>
            <p v-if="parseObjects('name', film.production_companies)" class="text-subtitle-2">Production Company - {{ parseObjects('name', film.production_companies).join(', ') }}</p>
            <a v-if="film.homepage !== ''" class="text-subtitle-2" :href="film.homepage" target="_blank">{{ film.homepage }}</a>
            <p v-if="film.overview !== ''" class="mt-5 text-body-1">{{ film.overview }}</p>
          </v-sheet>
        </v-col>
      </v-row>
      <v-row justify="center" class="ma-5">
        <v-col cols="12" md="6">
          <h2>Recommended Films</h2>
          <MovieList :movies="recommended" />
        </v-col>
        <v-col cols="12" md="6">
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
    parseObjects(propName, data) {
      let targetValues = [];
      data.forEach(item => {
        targetValues.push(item[propName]);
      });
      return targetValues;
    },
    getRuntime(runtime) {
      let hours = Math.floor(runtime/60)
      let minutes = runtime % 60
      if (hours !== 0 && minutes !== 0) {
          return `${hours}h ${minutes}min`
      }
      return false
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