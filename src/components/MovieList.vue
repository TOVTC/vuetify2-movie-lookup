<template>
  <v-list>
    <v-list-item v-for="(item, i) in movies" :key="i">
      <v-list-item-icon>
        <v-icon v-text="item.posterPath"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="generateTitle(item.title, item.release_date)"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
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
    },
  }
</script>
