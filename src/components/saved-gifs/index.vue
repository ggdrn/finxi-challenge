<template>
  <sui-container>
    <sui-button
      circular
      class="saved-gif-btn"
      floated="right"
      color="yellow"
      >{{ length }} 
      <sui-icon color="red" size="small" name="like" />
    </sui-button>
  </sui-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  name: "SavedGifs",
  data: () => ({}),
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
