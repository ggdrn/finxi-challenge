<template>
  <div>
    <template v-if="skipCrawText">
      <transition name="fade">
        <CrawText @skip-intro="skipCrawText = $event" />
      </transition>
    </template>
    <template v-else>
      <sui-segment vertical aligned="center">
        <div class="ui text container">
          <h1>Deasfio Finxi</h1>
          <h2>
            Vamos destruir Darth Vader usadno as melhores Gifs da Giphy API!
          </h2>
        </div>
      </sui-segment>
      <Search :loading="loading" @search-gifs="searchGifs($event)" />
      <sui-container aligned="center">
        <sui-grid :columns="3">
          <GifCard v-for="gif in gifs" :item="gif" :key="gif.id" />
        </sui-grid>
      </sui-container>
    </template>
  </div>
</template>

<script>
// Vuex imports
import { mapActions, mapState } from "vuex";

// componets
import CrawText from "../components/Craw-Text";
import Search from "../components/Search";
import GifCard from "../components/Gif-Card";

export default {
  name: "App",
  components: { CrawText, Search, GifCard },
  data: () => ({
    skipCrawText: true, // skip introducion
    offset: 0, // gif page position
    query: "", // value received from the input to search for gifs
    loading: false, // requisition loading feedback
  }),
  async created() {},
  methods: {
    ...mapActions("gifs", ["getGifs", "clearGifs"]),
    // function that fetches gifs from the input
    async searchGifs(search) {
      this.loading = true;
      // saving the value of the search to be performed when scrolling the page
      this.query = search;
      this.clearGifs(); // remove arry's gifs
      await this.getGifs({ query: search, offset: this.offset });
      this.loading = false;
    },
  },
  computed: {
    ...mapState("gifs", ["gifs"]),
  },
};
</script>

<style>
h1 {
  color: #ffe81f;
  font-size: 40px;
}
/* Transtiton component animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
