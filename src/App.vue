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
      <v-btn to="/trending" text>Trending</v-btn>
      <v-btn to="/popular" text>Popular</v-btn>
      <v-btn to="/rated" text>Top Rated</v-btn>
      <v-btn to="/playing" text>Now Playing</v-btn>
    </v-app-bar>
    <v-main>
      <router-view :key="$route.fullPath" />
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
