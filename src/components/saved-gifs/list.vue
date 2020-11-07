<template>
  <div>
    <sui-modal v-model="modal">
      <sui-modal-header
        >Gifs Salvas
        <sui-button
          circular
          compact
          inverted
          @click="$emit('close-modal', false)"
          floated="right"
        >
          <sui-icon name="close" color="red" />
        </sui-button>
      </sui-modal-header>
      <sui-modal-content scrolling>
        <sui-modal-description>
          <transition name="slide-fade">
            <template v-if="edit">
              <EditSavedGif :gif="gif" />
            </template>
          </transition>
          <sui-container v-if="!savedGifs.length">
            <sui-grid centered :columns="1">
              <h3>Você ainda não salvou nenhuma GIF!</h3>
            </sui-grid>
          </sui-container>
          <transition name="slide-fade">
            <template v-if="!edit">
              <sui-container>
                <sui-grid centered :columns="2">
                  <GifCard
                    @edit-gif="editGifs($event)"
                    editable
                    v-for="gif in savedGifs"
                    :item="gif"
                    :key="gif.id"
                  />
                </sui-grid>
              </sui-container>
            </template>
          </transition>
        </sui-modal-description>
      </sui-modal-content>
      <sui-modal-actions>
        <sui-button v-if="edit" color="blue" @click="edit = false">
          VOLTAR
        </sui-button>
      </sui-modal-actions>
    </sui-modal>
  </div>
</template>

<script>
//componets
import GifCard from "../Gif-Card";
import EditSavedGif from "./Edit";

export default {
  name: "SavedGifList",
  props: { savedGifs: Array, open: Boolean },
  components: { GifCard, EditSavedGif },
  data: () => ({
    edit: false, // switch template
    gif: {}, // gif that will be edited
  }),
  methods: {
    editGifs({ edit, gif }) {
      this.edit = edit;
      this.gif = gif;
    },
  },
  computed: {
    modal() {
      return this.open;
    },
  },
};
</script>

<style>
h3 {
  color: black;
}
</style>
