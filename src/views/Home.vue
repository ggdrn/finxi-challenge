<template>
  <div>
    <CrawText v-if="skipCrawText" @skip-intro="skipCrawText = $event" />
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

<style></style>
