<template>
  <div>
    <sui-form>
      <sui-form-field :error="error.title">
        <label>Título</label>
        <input v-model="title" placeholder="Informe um título para a GIF" />
      </sui-form-field>
      <sui-form-field :error="error.username">
        <label>Usuário</label>
        <input v-model="username" placeholder="Informe um usuário para a GIF" />
      </sui-form-field>
      <sui-form-field>
        <label>Classificação</label>
        <sui-dropdown
          placeholder="Informe um classificação para a GIF"
          selection
          :options="ratings"
          v-model="rating"
        />
      </sui-form-field>
    </sui-form>
    <sui-button
      :loading="loading"
      style="margin-top: 15px"
      color="green"
      @click="validateForm"
    >
      Salvar
    </sui-button>
    <Alert :message="message" @close-alert="message.show = $event" />
  </div>
</template>

<script>
// vuex
import { mapActions } from "vuex";
// utils
import { ratingList } from "../../utils";
// components
import Alert from "../Alert";
export default {
  name: "EditSavedGif",
  props: { gif: Object },
  components: { Alert },
  data: () => ({
    loading: false,
    rating: "",
    username: "",
    title: "",
    error: {
      exist: false,
      username: false,
      title: false,
    },
    message: {
      // warning, error, success message
      text: "",
      title: "",
      color: "",
      show: false,
    },
  }),
  created() {
    this.rating = this.gif.rating;
    this.username =
      this.gif.username == "" ? "Usuário Desconhecido" : this.gif.username;
    this.title = this.gif.title == "" ? "Título desconhecido" : this.gif.title;
  },
  methods: {
    ...mapActions("savedGifs", ["editSavedGifs"]),
    async validateForm() {
      this.loading = true;
      this.error = {
        username: false,
        title: false,
      };
      if (this.title.trim() == "" || this.username.trim() == "") {
        this.error.username = this.username.trim() == "" ? true : false;
        this.error.title = this.title.trim() == "" ? true : false;
        return (this.message = {
          text: "Você precisa informar os campo(s) destacado(s)!",
          title: "ATENÇÃO!",
          color: "red",
          show: true,
        });
      }
      this.editSavedGifs({
        ...this.gif,
        username: this.username,
        title: this.title
      });
      this.loading = false;
      return (this.message = {
        text: "Você alterou os dados da GIF!",
        title: "SUCESSO!",
        color: "green",
        show: true,
      });
    },
  },
  computed: {
    ratings() {
      return ratingList;
    },
  },
};
</script>

<style></style>
