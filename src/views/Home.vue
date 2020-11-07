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
          <h1>Desafio Finxi</h1>
          <h2>
            Vamos destruir Darth Vader usando as melhores Gifs da Giphy API!
          </h2>
        </div>
      </sui-segment>
      <Search
        :loading="loading"
        @alert-message="message = $event"
        @search-gifs="searchGifs($event)"
      />
      <Alert :message="message" @close-alert="message.show = $event" />
      <sui-container aligned="center">
        <sui-grid :columns="3">
          <GifCard v-for="gif in gifs" :item="gif" :key="gif.id" />
        </sui-grid>
      </sui-container>
      <Footer :loading="loading" :finished="finished" :length="gifs.length" />
    </template>
  </div>
</template>

<script>
// Vuex imports
import { mapActions, mapState } from "vuex";

// componets
import CrawText from "../components/gifs/Craw-Text";
import Search from "../components/gifs/Search";
import GifCard from "../components/gifs/Gif-Card";
import Alert from "../components/Alert";
// layout
import Footer from "../layouts/Footer";

export default {
  name: "App",
  components: { CrawText, Search, GifCard, Footer, Alert },
  data: () => ({
    skipCrawText: true, // skip introducion
    offset: 0, // gif page position
    query: "", // value received from the input to search for gifs
    loading: false, // requisition loading feedback
    finished: false, //  finished request of Request Gifs feedback
    message: {
      // warning, error, success message
      text: "",
      title: "",
      color: "",
      show: false,
    },
  }),
  async created() {},
  methods: {
    ...mapActions("gifs", ["getGifs", "clearGifs"]),
    // function that fetches gifs from the input
    async searchGifs(search) {
      this.loading = true;
      this.message.show = false;
      this.offset = 0;
      this.finished = false;
      // saving the value of the search to be performed when scrolling the page
      this.query = search;
      this.clearGifs(); // remove arry's gifs
      await this.getGifs({ query: search, offset: this.offset });
      if (!this.gifs.length)
        this.message = {
          title: "Você digitou algo engraçado?",
          text: "Nenhuma gif foi localizada",
          color: "warning",
          show: true,
        };
      this.loading = false;
    },
    async scroll() {
      window.onscroll = async () => {
        let bottomOfWindow =
          document.documentElement.scrollTop + window.innerHeight ===
          document.documentElement.scrollHeight;
        if (bottomOfWindow) {
          this.offset += 18;
          this.loading = true;
          if (this.offset >= this.totalCount) {
            this.finished = true;
          } else {
            await this.getGifs({ query: this.query, offset: this.offset });
          }
          this.loading = false;
        }
      };
    },
  },
  async mounted() {
    await this.scroll();
  },
  computed: {
    ...mapState("gifs", ["gifs", "totalCount"]),
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
