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
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active em versões anteriores a 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>
