<template>
  <transition name="bounce">
    <div>
      <div class="gif-card">
        <!-- <sui-popup :content="message.text" :header="message.title"> -->
        <sui-card slot="trigger" style="cursor: default" class="raised link">
          <sui-image :src="gifUrl" />
          <sui-card-content>
            <sui-card-header
              >{{ item.title }}
              <sui-icon
                class="right floated"
                @click="saveGif"
                circular
                size="small"
                name="like"
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
import { ratingDictionary } from "../../utils";

// Components
import InfoGif from "./Info-Gif";

export default {
  name: "GifCard",
  data: () => ({
    open: false,
    message: {
      text: "Clique no coração para salvar essa GIF! :)",
      title: "Gostou?",
    },
    gifUrl: "",
  }),
  components: { InfoGif },
  props: {
    item: {
      type: Object,
      default: () => ({}),
    },
  },
  created() {
    this.setImage();
  },
  methods: {
    ...mapActions("savedGifs", ["addSavedGifs"]),
    async saveGif() {
      await this.addSavedGifs(this.item);
    },
    setImage() {
      // loading the image, to give feedback to the user
      let myImage = new Image();
      myImage.src = this.item.url;
      myImage.onload = () => {
        this.gifUrl = myImage.src;
      };
      this.gifUrl =
        "https://miro.medium.com/max/882/1*9EBHIOzhE1XfMYoKz1JcsQ.gif";
    },
  },
  computed: {
    // Props Computed
    rating() {
      return ratingDictionary[this.item.rating];
    },
    username() {
      return this.item.username == ""
        ? "Usuário Desconhecido"
        : this.item.username;
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
