<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-toolbar-title>
        <v-btn to="/" text>
          <v-img src="../public/favicon.png" max-width="30" />
          <span class="mx-3">Movie Lookup</span>
        </v-btn>
      </v-toolbar-title>
      <v-spacer />
      <v-btn to="/" text>Home</v-btn>
      <v-btn to="/about" text>About</v-btn>
    </v-app-bar>
    <v-main>
      <router-view/>
    </v-main>
    <v-footer class="justify-between" color="primary">
      <v-container fluid>
            <v-row>
                <v-col cols="12" sm="2">
                    <img src="@/assets/tmdb.svg" />
                </v-col>
                <v-spacer />
                <v-col cols="12" sm="10" class="text-sm-right text-center" >
                    This product uses the TMDB API but is not endorsed or certified by TMDB.
                </v-col>
            </v-row>
        </v-container>
    </v-footer>
  </v-app>
</template>
