<template>
  <div class="gif-card">
    <sui-popup :content="message.text" :header="message.title">
      <sui-card slot="trigger" class="raised link">
        <sui-image :src="item.url" />
        <sui-card-content>
          <sui-card-header
            >{{ item.title }}
            <sui-icon class="right floated" size="small" name="like" />
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
</template>

<script>
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
};
</script>

<style>
.gif-card {
  margin: 15px;
}
</style>
