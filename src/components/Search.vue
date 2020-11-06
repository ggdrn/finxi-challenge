<template>
  <div>
    <sui-grid centered>
      <sui-grid-row :columns="2">
        <sui-grid-column>
          <sui-input
            fluid
            v-model="search"
            @keyup.enter="searchGifs()"
            placeholder="buscar"
            :disabled="loading"
          />
        </sui-grid-column>
        <sui-button
          icon="search"
          color="yellow"
          :loading="loading"
          @click="searchGifs()"
        ></sui-button>
      </sui-grid-row>
    </sui-grid>
    <!-- Alert Component  -->
    <Alert :message="message" @close-alert="message.show = $event" />
  </div>
</template>

<script>
import Alert from "./Alert";
export default {
  name: "Search",
  props: { loading: Boolean },
  components: { Alert },
  data: () => ({
    search: "", // input value
    message: {
      // warning, error, success message
      text: "",
      title: "",
      color: "",
      show: false,
    },
  }),
  methods: {
    searchGifs() {
      if (this.search.trim() == "")
        this.message = {
          title: "OPA! Você precisa digitar alguma coisa",
          text:
            "Para derrotar o Lord Sith de rir, é nescessário buscar uma gif muito engraçada",
          color: "warning",
          show: true,
        };
      else {
        this.message.show = false;
        this.$emit("search-gifs", this.search);
      }
    },
  },
};
</script>

<style></style>
