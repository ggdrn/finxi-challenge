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
          />
        </sui-grid-column>
        <sui-button
          icon="search"
          color="yellow"
          @click="searchGifs()"
        ></sui-button>
      </sui-grid-row>
    </sui-grid>
  </div>
</template>

<script>
export default {
  name: "Search",
  data: () => ({
    search: "",
  }),
  methods: {
    searchGifs() {
      this.$emit("search-gifs", this.search);
    },
  },
};
</script>

<style></style>
