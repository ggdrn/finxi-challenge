<template>
  <transition name="fade">
    <CrawText @skip-intro="goToDashboard()" />
  </transition>
</template>

<script>
import CrawText from "../components/gifs/Craw-Text";
export default {
  components: { CrawText },
  name: "Intro",
  methods: {
    goToDashboard() {
      this.$router.push({ name: "Login" });
    },
  },
};
</script>

<style></style>
