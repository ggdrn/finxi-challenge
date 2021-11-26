<template>
  <div>
    <sui-segment vertical aligned="center">
      <sui-segment vertical aligned="center">
        <div class="ui text container">
          <h1>Login</h1>
          <h2>Informe os dados nescessários</h2>
          <sui-grid centered>
            <sui-grid-row :columns="2">
              <sui-grid-column>
                <sui-input
                  fluid
                  v-model="email"
                  placeholder="E-mail"
                  :disabled="loading"
                  type="text"
                />
              </sui-grid-column>
            </sui-grid-row>
            <sui-grid-row :columns="2">
              <sui-grid-column>
                <sui-input
                  fluid
                  v-model="password"
                  placeholder="Senha"
                  type="password"
                  :disabled="loading"
                />
              </sui-grid-column>
            </sui-grid-row>
            <sui-segment vertical aligned="center">
              <sui-button color="yellow" :loading="loading" @click="loginUser()">
                Entrar
              </sui-button>
            </sui-segment>
          </sui-grid>
          <Alert :message="message" @close-alert="message.show = $event" />
        </div>
      </sui-segment>
    </sui-segment>
  </div>
</template>

<script>
// Vuex imports
import { mapActions } from "vuex";
import Alert from "@/components/Alert";
export default {
  name: "Register",
  components: { Alert },
  data: () => ({
    email: "",
    password: "",
    loading: false,
    message: {
      // warning, error, success message
      text: "",
      title: "",
      color: "",
      show: false,
    },
  }),
  methods: {
    ...mapActions("user", ["getUser"]),
    async loginUser() {
      this.loading = !this.loading;
      try {
        const { success, error } = await this.getUser({
          email: this.email,
          password: this.password,
        });
        if (success) {
          this.message = {
            // warning, error, success message
            text: "Cadastrado com sucesso!",
            title: "Sucesso!",
            color: "success",
            show: true,
          };
          this.$router.push({ name: "Dashboard" });
        } else {
          this.message = {
            // warning, error, success message
            text: error,
            title: "Um erro aconteceu",
            color: "error",
            show: true,
          };
        }
      } catch (e) {
        this.message = {
          // warning, error, success message
          text: e.message,
          title: "Um erro aconteceu",
          color: "error",
          show: true,
        };
      } finally {
        this.loading = !this.loading;
      }
    },
  },
};
</script>

<style>
h1 {
  color: #ffe81f;
  font-size: 40px;
}
</style>
