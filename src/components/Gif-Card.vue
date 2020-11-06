<template>
  <div class="gif-card">
    <sui-card>
      <sui-image :src="item.url" />
      <sui-card-content>
        <sui-card-header>{{item.title}}</sui-card-header>
        <sui-card-meta>{{item.username}}</sui-card-meta>
        <sui-card-description
          >Kristy is an art director living in New York.</sui-card-description
        >
      </sui-card-content>
      <sui-card-content extra>
        <sui-icon name="user" />
        22 Friends
      </sui-card-content>
    </sui-card>
  </div>
</template>

<script>
export default {
  name: "GifCard",
  props: {
    item: Object,
  },
};
</script>

<style>
.gif-card{
	margin: 15px;
}
</style>
