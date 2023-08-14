<template>
  <v-container>
    <v-row justify="center" class="ma-5">
      <v-col>
        <h1>Search Results:</h1>
      </v-col>
    </v-row>
    <v-row class="ma-5">
      <v-col>
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
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
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
      ]
    }
  }
}
</script>