<template>
  <div>
    <sui-container>
      <sui-grid :columns="12">
        <router-view></router-view>
      </sui-grid>
    </sui-container>
  </div>
</template>
<script>
export default {};
</script>
<style>
body {
  background: #000 url(//cssanimation.rocks/demo/starwars/images/bg.jpg);
}
</style>
