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
  </div>
</template>

<script>
export default {
  name: "Search",
  props: { loading: Boolean },
  data: () => ({
    search: "", // input value
  }),
  methods: {
    searchGifs() {
      if (this.search.trim() == "")
        this.$emit("alert-message", {
          title: "OPA! Você precisa digitar alguma coisa",
          text:
            "Para derrotar o Lord Sith de rir, é nescessário buscar uma gif muito engraçada",
          color: "error",
          show: true,
        });
      else {
        this.$emit("search-gifs", this.search);
      }
    },
  },
};
</script>

<style></style>
