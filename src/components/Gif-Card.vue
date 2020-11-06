<template>
  <transition name="bounce">
    <div class="gif-card">
      <sui-popup :content="message.text" :header="message.title">
        <sui-card slot="trigger" class="raised link">
          <sui-image :src="item.url" />
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
            <sui-card-meta>{{
              item.username == "" ? "Usuário Desconhecido" : item.username
            }}</sui-card-meta>
            <sui-card-description
              >Classificação: {{ item.rating }}.</sui-card-description
            >
          </sui-card-content>
          <sui-button color="yellow" attached="bottom">
            <sui-icon name="info" /> Mais Informações
          </sui-button>
        </sui-card>
      </sui-popup>
    </div>
  </transition>
</template>

<script>
// Vuex imports
import { mapActions } from "vuex";

export default {
  name: "GifCard",
  data: () => ({
    message: {
      text: "Clique no coração para salvar essa GIF! :)",
      title: "Gostou?",
    },
  }),
  props: {
    item: Object,
  },
  methods: {
    ...mapActions("savedGifs", ["addSavedGifs"]),
    async saveGif() {
      await this.addSavedGifs(this.item);
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
