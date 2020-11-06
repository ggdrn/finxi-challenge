<template lang="html">
  <div>
    <sui-container fluid>
      <router-view></router-view>
    </sui-container>
  </div>
</template>
<script>
export default {
  name: "Default",
};
</script>
<style>
body {
  background: #000 url(//cssanimation.rocks/demo/starwars/images/bg.jpg);
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #ffffff;
}
</style>
