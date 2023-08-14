<template>
  <v-container>
    <v-row justify="center" class="ma-5">
      <v-col cols="5">
        <v-form ref="searchForm" v-model="isFormValid" class="text-center" @submit.prevent="search">
          <v-icon color="primary" size="150" class="my-3">mdi-movie-search</v-icon>
          <v-text-field v-model="searchTerm" :rules="rules" label="Search for a movie" class="ma-5"/>
          <v-btn type="submit" color="primary">Search</v-btn>
        </v-form>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import router from '../router'

export default {
  name: 'HomeView',
  data() {
    return {
      isFormValid: false,  
      rules: [
          input => !!input || 'You must enter a valid search term',
          input => input.trim().length === 0 ? 'You must enter a valid search term' : true
        ],
      searchTerm: '',
    }
  },
  methods: {
    search() {
      this.$refs.searchForm.validate();
      if (this.isFormValid) {
        router.push({ name: 'search' })
        // router.push({ name: 'results', params: { movieName: movieName.value } })
      }
    }
  }
}
</script>
