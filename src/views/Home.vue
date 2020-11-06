<template>
  <div>
    <transition name="fade">
      <CrawText v-if="skipCrawText" @skip-intro="skipCrawText = $event" />
      <template v-else>
        <sui-segment vertical aligned="center">
          <div class="ui text container">
            <h1>Deasfio Finxi</h1>
            <h2>Vamos destruir Darth Vader usadno as melhores Gifs da Giphy API!</h2>
          </div>
        </sui-segment>
      </template>
    </transition>
  </div>
</template>

<script>
// Vuex imports
import { mapActions, mapState } from "vuex";

// componets
import CrawText from "../components/Craw-Text";

export default {
  name: "App",
  components: { CrawText },
  data: () => ({
    skipCrawText: true,
  }),
  async created() {
    this.clearGifs();
    this.getGifs("naruto", 2);
  },
  methods: {
    ...mapActions("gifs", ["getGifs", "clearGifs"]),
  },
  computed: {
    ...mapState("gifs", ["gifs"]),
  },
  watch: {
    gifs: function() {
      console.log(this.gifs);
    },
  },
};
</script>

<style>
h1 {
  color: #ff6;
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
