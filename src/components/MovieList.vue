<template>
  <v-list>
    <v-list-item v-for="(item, i) in items" :key="i">
      <v-list-item-icon>
        <v-icon v-text="item.icon"></v-icon>
      </v-list-item-icon>
      <v-list-item-content>
        <v-list-item-title v-text="item.text"></v-list-item-title>
      </v-list-item-content>
    </v-list-item>
  </v-list>
</template>

<script>
  export default {
    name: 'MovieList',
    data: () => ({
      items: [
              {
                  icon: 'mdi-movie-search',
                  text: 'placeholder'
              },
              {
                  icon: 'mdi-movie-search',
                  text: 'placeholder'
              },
              {
                  icon: 'mdi-movie-search',
                  text: 'placeholder'
              },
          ],
    }),
  }
</script>
