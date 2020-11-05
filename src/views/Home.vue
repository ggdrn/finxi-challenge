<template>
  <div><h1>Ola Mundo</h1></div>
</template>

<script>
// Vuex imports
import { mapActions, mapState } from "vuex";
export default {
  name: "App",
  async created() {
    this.getGifs("naruto", 2);
  },
  methods: {
    ...mapActions("gifs", ["getGifs"]),
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
