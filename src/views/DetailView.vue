<template>
    <v-container>
      <v-row justify="center" class="ma-5">
        <v-col>
          <p>DETAILS: {{ id }}</p>
        </v-col>
      </v-row>
    </v-container>
  </template>
  
  <script>
  export default {
    props: ['id'],
  }
  </script>