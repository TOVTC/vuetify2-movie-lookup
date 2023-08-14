<template>
  <v-container>
    <v-row justify="center" class="my-5">
      <v-col cols="5">
        <v-form class="text-center">
          <v-icon color="primary" size="150" class="my-3">mdi-movie-search</v-icon>
          <v-text-field label="Search for a movie" class="my-5" />
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'HomeView',
  components: {

  }
}
</script>
