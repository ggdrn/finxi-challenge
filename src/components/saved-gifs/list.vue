<template>
  <div>
    <sui-modal v-model="modal">
      <sui-modal-header>Gifs Salvas</sui-modal-header>
      <sui-modal-content scrolling>
        <sui-modal-description>
          <transition name="slide-fade">
            <template v-if="edit">
              <p>EDITANO</p>
            </template>
          </transition>
          <transition name="slide-fade">
            <template v-if="!edit">
              <sui-container>
                <sui-grid centered :columns="2">
                  <GifCard editable v-for="gif in savedGifs" :item="gif" :key="gif.id" />
                </sui-grid>
              </sui-container>
            </template>
          </transition>
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
  data: () => ({
    edit: false, // switch template
  }),
  computed: {
    modal() {
      return this.open;
    },
  },
};
</script>

<style></style>
