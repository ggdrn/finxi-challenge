<template>
  <sui-modal v-model="open">
    <sui-modal-header>Informações da GIF</sui-modal-header>
    <sui-modal-content image>
      <sui-image size="medium" :src="gif.url" />
      <sui-modal-description>
        <sui-header>{{ gif.title }}</sui-header>
        <p><b>Usuário:</b> {{ username }}</p>
        <p><b>Data de Upload:</b> {{ importDateTime }}</p>
        <p><b>Classificação:</b> {{ rating }}</p>
        <p><b>Altura:</b> {{ height }}</p>
        <p><b>Largura:</b> {{ width }}</p>
        <p><b>URL:</b> {{ gif.url }}</p>
      </sui-modal-description>
    </sui-modal-content>
    <sui-modal-actions>
      <sui-button color="red" @click="$emit('close-modal', false)">
        Fechar
      </sui-button>
    </sui-modal-actions>
  </sui-modal>
</template>

<script>
// utils
import { ratingDictionary } from "../../utils";
export default {
  name: "InfoGif",
  props: { open: Boolean, gif: Object },
  computed: {
    // Props Computed
    rating() {
      return ratingDictionary[this.gif.rating];
    },
    username() {
      return this.gif.username == ""
        ? "Usuário Desconhecido"
        : this.gif.username;
    },
    importDateTime() {
      return new Date(this.gif.importDateTime).toLocaleDateString();
    },
    height() {
      return `${this.gif.height}px`;
    },
    width() {
      return `${this.gif.width}px`;
    },
  },
};
</script>

<style scoped>
p {
  color: black;
}
</style>
