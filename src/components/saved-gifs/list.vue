<template>
  <div>
    <sui-modal v-model="modal">
      <sui-modal-header>Gifs Salvas</sui-modal-header>
      <sui-modal-content scrolling>
        <sui-modal-description>
          <sui-container>
            <sui-grid centered :columns="2">
              <GifCard v-for="gif in savedGifs" :item="gif" :key="gif.id" />
            </sui-grid>
          </sui-container>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button color="red" @click="$emit('close-modal', false)">
          FECHAR
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
import GifCard from "../Gif-Card";
export default {
  name: "SavedGifList",
  props: { savedGifs: Array, open: Boolean },
  components: { GifCard },
  computed: {
    modal() {
      return this.open;
    },
  },
};
</script>

<style></style>
