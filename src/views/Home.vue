<template>
  <div>
    <transition name="fade">
      <CrawText v-if="skipCrawText" @skip-intro="skipCrawText = $event" />
      <template v-else>
				
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
/* Transtiton component animation */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>
