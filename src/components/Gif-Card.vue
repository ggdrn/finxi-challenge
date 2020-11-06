<template>
  <div class="gif-card">
    <sui-popup :content="message.txt" :header="message.title" inverted>
      <sui-button slot="trigger" icon="heart" />
    </sui-popup>
    <sui-card>
      <sui-image :src="item.url" />
      <sui-card-content>
        <sui-card-header>{{ item.title }}</sui-card-header>
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
      <!-- <sui-card-content extra>
        <sui-container aligned="center">
          <sui-grid centered>
            <sui-grid-row :columns="2">
              <sui-grid-column>
                <sui-button icon="heart" color="yellow">Salvar</sui-button>
              </sui-grid-column>
              <sui-grid-column>
                <sui-button icon="info" color="yellow">Mais Info.</sui-button>
              </sui-grid-column>
            </sui-grid-row>
          </sui-grid>
        </sui-container> -->
      <!-- </sui-card-content> -->
    </sui-card>
  </div>
</template>

<script>
export default {
  name: "GifCard",
  data: () => ({
    message: {
      text: "Clique para salvar a GIF!",
      title: "Gostou?"
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
