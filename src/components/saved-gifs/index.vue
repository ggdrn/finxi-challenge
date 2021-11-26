<template>
  <sui-container>
    <sui-button
      @click="open = true"
      circular
      class="saved-gif-btn"
      floated="right"
      color="yellow"
      >{{ length }}
      <sui-icon color="red" size="small" name="like" />
    </sui-button>
    <SavedGifList :savedGifs="savedGifs" :open="open" @close-modal="open = $event" />
  </sui-container>
</template>

<script>
// vuex
import { mapState, mapActions } from "vuex";
// components
import SavedGifList from "./List";
export default {
  name: "SavedGifs",
  components: { SavedGifList },
  data: () => ({
    open: false, // modal controller
  }),
  async created() {
    await this.getSavedGifs();
  },
  methods: {
    ...mapActions("savedGifs", ["getSavedGifs"]),
  },
  computed: {
    ...mapState("savedGifs", ["savedGifs"]),
    length() {
      return `${this.savedGifs.length}`;
    },
  },
};
</script>

<style>
.saved-gif-btn {
  position: fixed;
  bottom: 30px;
  right: 50px;
}
</style>
