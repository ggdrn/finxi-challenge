<template>
  <transition name="bounce">
    <div>
      <div class="gif-card">
        <!-- <sui-popup :content="message.text" :header="message.title"> -->
        <sui-card slot="trigger" style="cursor: default" class="raised link">
          <sui-image :src="gifUrl" />
          <sui-card-content>
            <sui-card-header
              >{{ title }}
              <sui-icon
                class="right floated"
                @click="saveGif"
                circular
                :color="checkGif"
                size="small"
                name="like"
              />
              <sui-icon
                v-if="editable"
                class="right floated"
                circular
                style="cursor: pointer "
                @click="$emit('edit-gif', { edit: true, gif: item })"
                size="small"
                name="edit"
              />
            </sui-card-header>
            <sui-card-meta>{{ username }}</sui-card-meta>
            <sui-card-description
              >Classificação: {{ rating }}</sui-card-description
            >
          </sui-card-content>
          <sui-button @click="open = true" color="yellow" attached="bottom">
            <sui-icon name="info" /> Mais Informações
          </sui-button>
        </sui-card>
        <!-- </sui-popup> -->
      </div>
      <InfoGif :open="open" :gif="item" @close-modal="open = false" />
    </div>
  </transition>
</template>

<script>
// Vuex imports
import { mapActions } from "vuex";

//Utils
import { ratingDictionary } from "../utils";

// Components
import InfoGif from "./gifs/Info-Gif";

export default {
  name: "GifCard",
  data: () => ({
    open: false,
    message: {
      text: "Clique no coração para salvar essa GIF! :)",
      title: "Gostou?",
    },
    gifUrl: require(".././assets/loading.gif"),
  }),
  components: { InfoGif },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
    editable: Boolean,
  },
  created() {
    this.setImage();
  },
  methods: {
    ...mapActions("savedGifs", ["addSavedGifs", "deleteSavedGifs"]),
    ...mapActions("gifs", ["editGif"]),
    async saveGif() {
      let gif = this.item;
      if (!this.item.saved) {
        gif.saved = true;
        this.editGif(gif);
        await this.addSavedGifs(this.item);
      } else {
        gif.saved = false;
        await this.editGif(gif);
        await this.deleteSavedGifs(gif);
      }
    },
    setImage() {
      // loading the gif, to give feedback to the user
      let myImage = new Image();
      myImage.src = this.item.url;
      myImage.onload = () => {
        this.gifUrl = myImage.src;
      };
    },
  },
  computed: {
    // Props Computed
    rating() {
      return ratingDictionary[this.item.rating];
    },
    title() {
      return this.item.title == "" ? "Título desconhecido" : this.item.title;
    },
    username() {
      return this.item.username == ""
        ? "Usuário Desconhecido"
        : this.item.username;
    },
    checkGif() {
      return this.item.saved ? "red" : null;
    },
  },
};
</script>

<style>
.gif-card {
  margin: 15px;
}
.bounce-enter-active {
  animation: bounce-in 1s;
}
.bounce-leave-active {
  animation: bounce-in 1s reverse;
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>
