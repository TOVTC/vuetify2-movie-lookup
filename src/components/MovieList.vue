<template>
  <v-list>
    <v-list-item v-for="(item, i) in movies" :key="i" @click="redirect(item.id)">
      <v-list-item-icon>
        <v-img :src="generatePosterPath(item.poster_path)" :aspect-ratio="10/15"></v-img>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="generateTitle(item.title, item.release_date)"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  import router from '../router/index.js'
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
      redirect(id) {
        router.push({ name: 'details', params: { id: id } })
        console.log(id);
      }
    },
  }
</script>
