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
    <SavedGifList
      :savedGifs="savedGifs"
      :open="open"
      @close-modal="open = $event"
    />
  </sui-container>
</template>

<script>
// vuex
import { mapState } from "vuex";
// components
import SavedGifList from "./list";
export default {
  name: "SavedGifs",
  components: { SavedGifList },
  data: () => ({
    open: false
  }),
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
